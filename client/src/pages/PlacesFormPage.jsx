import axios from "axios";
import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import PhotosUploader from "../photosUploader";
import Perks from '../Perks'
import { Navigate, useParams } from "react-router-dom";
export default function PlacesFormPage() {
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const {id} = useParams(); 
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState("");
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [maxGuests, setMaxGuests] = useState(1);
    const [redirect , setRedirect] = useState(false);
    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get('/places'+ id).then(
            response =>{
                const {data}= response;
                setTitle(data.title)
                setAddress(data.address);
                setAddedPhotos(data.photos);
                setDescription(data.description);
                setPerks(data.perks)
                setExtraInfo(data.extraInfo);
                setCheckIn(data.checkIn);
                setCheckOut(data.checkOut);
                setMaxGuests(data.maxGuests);
            }
        )
    }, [id]);

    function inputHeader(text) {
        return <h2 className="text-2xl mt-4">{text}</h2>;
    }

    function inputDescription(text) {
        return <p className="test-gray-500 text-sm"> {text} </p>;
    }
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        );
    }
    async function savePlace(ev) {
        ev.preventDefault();
        const placeData = {
            title,
            address,
            addedPhotos,
            description,
            perks,
            extraInfo,
            checkIn,
            checkOut,
            maxGuests
        }

        if(id){
            //update
            await axios.put('/places',{
                id, ...placeData
            })
            setRedirect(true);
        }
        else{
            //newplace
            await axios.post('/places',placeData)
            setRedirect(true)
        }
    }
    if(redirect){
        return <Navigate to ={'/account/places'}/>

    }
        return (
            <>
                <div>
                    <AccountNav/>
                    <form onSubmit={savePlace}>
                        {preInput(
                            "Title",
                            "Title for your place , should be short and catchy"
                        )}

                        <input type="text" placeholder="title , example my apartment" />

                        {preInput("Address", "Address to this place")}

                        <input type="text" placeholder="address" />
                        {preInput("Photos", "MOre = Better")}

                        <PhotosUploader addedPhotos = {addedPhotos} onChange = {setAddedPhotos} />

                        {preInput("Description", "Description of the Place")}

                        <textarea
                            value={description}
                            onChange={(ev) => setDescription(ev.target.value)}
                        />
                        {preInput("Perks", "Select all the perk of place")}

                        <div className="grid grid-cols-2 mt-2 md:grid-cols-4 lg:grid">
                            <Perks selected = {perks} OnChange={setPerks} />
                        </div>
                        {preInput("Extra Info", "House Rules , etc")}
                        <textarea
                            value={extraInfo}
                            onChange={(ev) => setExtraInfo(ev.target.value)}
                        />

                        {preInput(
                            "Check in&Out times",
                            "add check in and check out time and some time windows for cleaning room"
                        )}
                        <div className="grid sm:grid-cols-3 gap-2">
                            <div>
                                <h3 className="mt-2 -mb-1 ">check In Time</h3>
                                <input
                                    type="text"
                                    value={checkIn}
                                    onChange={(ev) => setCheckIn(ev.target.value)}
                                    placeholder="14"
                                />
                            </div>

                            <div className="mt-2 -mb-1">
                                <h3>Check out time</h3>
                                <input
                                    type="text"
                                    placeholder="11"
                                    value={checkOut}
                                    onChange={(ev) => setCheckOut(ev.target.value)}
                                />
                            </div>
                            <div>
                                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                                <input
                                    type="number"
                                    value={maxGuests}
                                    onChange={(ev) => setMaxGuests(ev.target.value)}
                                />
                            </div>
                        </div>
                        <button className="primary my-4">Save</button>
                    </form>
                </div>
            </>
        )
    }
