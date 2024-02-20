"use server"
import {z} from "zod"
import {db} from "@/lib/db"


const CreateBoard = z.object({
    title:z.string();

})

async function create(formData:FormData) {

    const {title} = CreateBoard.parse({
        title: formData.get("title"),
    })


    const {title} - CreateBoard.parse({

    })

    console.log("I am server OrganizationIDpage")
    const title = formData.get("title") as string;

    await db.board.create({
        data:{
            title
        }
    })
    
}
export default create;