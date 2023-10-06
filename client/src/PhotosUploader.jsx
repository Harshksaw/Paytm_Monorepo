import axios from "axios";
import { useState } from "react";

export default function PhotosUploader({addedPhotos , onChange}) {

const [photoLink, setPhotoLink] = useState('');

async function addPhotoByLink(ev) {
    ev.preventDefault();

    const { data: filename } = await axios.post("/upload-by-link", {
        link: photoLink,
    });
    onChange((prev) => {
        return [...prev, filename];
    });
    setPhotoLink("");
}
function uploadPhotos(ev) {
    const files = ev.target.files;

    //uploading file to server
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
        data.append("photos", files[i]);
    }

    axios.post("/upload", data, {
            headers: { "Content-type": "multipart/form-data" },
        })
        .then((response) => {
            const { data: filenames } = response;
            onChange((prev) => {
                return [...prev, ...filenames];
            });
        });
}

    return (
        <>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={photoLink}
                    onChange={(ev) => setPhotoLink(ev.target.value)}
                // onBlur={(ev) => setPhotoLink(ev.target.value)} // Add onBlur event handler
                />

                <button className="bg-gray-200 px-4" onClick={addPhotoByLink}>
                    Add&nbsp; Photo
                </button>
            </div>

            <div className=" grid gird-cols-3 mt-2 gap-2 lg:grid:cols-6 md:grid-cols-4">
                {addedPhotos.length > 0 &&
                    addedPhotos.map((link) => (
                        <div key={link} className="h-32 flex ">
                            <img
                                className="rounded-2xl w-full object-cover position-center"
                                src={"http://localhost:4000/uploads/" + link}
                                alt=""
                            ></img>
                        </div>
                    ))}

                <label className="h-32 flex justify-center gap-1 border bg-transparent items-center rounded-2xl p-8 text-gray-600 ">
                    <input
                        type="file"
                        multiple
                        className="hidden"
                        onChange={uploadPhotos}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                    </svg>
                    Upload
                </label>
            </div>
        </>
    );
}
