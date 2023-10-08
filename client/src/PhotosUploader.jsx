import axios from "axios";
import { useState } from "react";

export default function PhotosUploader({ addedPhotos, onChange }) {
    const [photoLink, setPhotoLink] = useState("");

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

        axios
            .post("/upload", data, {
                headers: { "Content-type": "multipart/form-data" },
            })
            .then((response) => {
                const { data: filenames } = response;
                onChange((prev) => {
                    return [...prev, ...filenames];
                });
            });
    }

    function removePhoto(ev , filename ){ 
        ev.preventDefault();
        onChange([...addedPhotos.filter((photo) => photo !== filename)]);
    }
    function selectAsMainPhoto(ev, filename){
        ev.preventDefault();

        onChange([filename, ...addedPhotos
            .filter(photo => photo !== filename)])


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
                        <div key={link} className="h-32 flex  relative">
                            <img
                                className="rounded-2xl w-full object-cover position-center"
                                src={"http://localhost:4000/uploads/" + link}
                                alt=""
                            ></img>
                            <button
                                onClick={ev => removePhoto(ev , link )}
                                className="absolute  cursor-pointer bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl p-1 py-2 px-3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <button
                                onClick={ev => selectAsMainPhoto(ev, link)}
                                className="absolute  cursor-pointer bottom-1 -1 text-white bg-black bg-opacity-50 rounded-2xl p-1 py-2 px-3"
                            >
                                {link === addedPhotos[0] && (

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}


                                {link !== addedPhotos[0] && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                    
                                )}
                            </button>
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
