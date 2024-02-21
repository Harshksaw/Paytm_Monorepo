"use server";
import { z } from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

const CreateBoard = z.object({
  title: z.string().min(3),
});

export async function create(formData: FormData) {
  const { title } = CreateBoard.parse({
    title: formData.get("title"),
  });




  await db.board.create({
    data: {
      title,
    },
  })
  // todo
  revalidatePath("/organization/[organizationId]/page");
  
}

