
import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";





const OrganizationIdPage =async () => {

  const boards = await  db.board.findMany();


  return (
    <div className="flex flex-col space-y-4">

      <form action={create}>

        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
        <Button type="submit">Submit</Button>
      </form>

      <div className="flex flex-col space-y-4">
        {boards.map((board)=>(
          <div key={board.id} className="border border-black p-4">
            <h2>{board.title}</h2>
            <p>{board.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
