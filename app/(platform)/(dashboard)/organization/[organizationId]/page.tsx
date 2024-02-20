"use client"
import {db } from "../"
import {create} from "../actions/create-board"
const OrganizationIdPage = () => {
    console.log("OrganizationIdPage")
  


    return (
        <div>
                    <form action ={create}>

                        <input
                        id="title"
                        name="title"
                        required
                        placeholder ="Enter a board title"
                        className="border-black border p-1"
                        />
<Button type="submit">
    Submit
    </Button>


                        </form>
        </div>
    )
}

export default OrganizationIdPage;