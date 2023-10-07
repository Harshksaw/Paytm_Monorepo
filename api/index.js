const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User.js");
const jwtSecret = "falsesjfdu232jeje2je2jsjjif";
require("dotenv").config();
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const path = require("path");
const fs = require('fs')
const multer = require('multer');
const Place = require('./models/Place.js')
const app = express();
const PORT = 4000;

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cookieParser());

app.use('/uploads', express.static( __dirname + "/uploads"));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);

app.get("/test", (req, res) => {
  res.json("text ok");
});
app.use("/uploads", express.static(__dirname + "/uploads"));
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

//Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    res.json("found");
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
          name: userDoc.name,
        },
        jwtSecret,
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("Pass not Ok");
    }
  } else {
    res.json("not Found");
  }
});

app.get("/profile", (req, res) => {
  mongoose.connect(process.env.MONGO_URI);
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const { name, email, _id } = await User.findById(userData.id);

      res.json({ name, email, _id });
    });
  } else {
    res.json(null);
  }
});
app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});


app.post("/upload-by-link", async (req, res) => {

    const {link} = req.body;
    console.log("Received link:", link);
    const newName = "photo" + Date.now() + ".jpg";

    await imageDownloader.image({
    url: link,
    dest: __dirname + '/uploads/'  + newName,
    });
    res.json(newName)
});

const photoMiddleware = multer({dest: 'uploads/'});

app.post('/upload', photoMiddleware.array('photos', 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
      const fileInfo = req.files[i];
    // if (fileInfo && fileInfo.path && fileInfo.originalname) {
      const { path, originalname } = fileInfo;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];

      const newPath = path + '.' + ext;
      fs.renameSync(path, newPath);
      uploadedFiles.push(newPath.replace('uploads/', ''));
    // }
  }
  res.json(uploadedFiles);
});

app.post('/places',(req, res) => {
  const { token } = req.cookies;
  const {title , address, addedPhotos, description,
  perks , extraInfo , checkIn , checkOut , maxGuests, } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;

    //retrieve the info and saving into data base
    const placedoc = await Place.create({
      owner: userData,id,
      title , address, photos : addedPhotos, description,
  perks , extraInfo , checkIn , checkOut , maxGuests, 

    }); //retrieving from from PlacesPages -> storing and database
    res.json(placedoc)
  })
})

app.get('/places' , (req , res)=>{
  const{token} = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const {id}= userData;
    res.json(await Place.find({owner: id}))

  })
})
app.get('/places/:id',async (req, res)=>{
  const {id} =req.params
  res.json(await Place.findById(id));
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
