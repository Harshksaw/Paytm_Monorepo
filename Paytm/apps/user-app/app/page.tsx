


import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export default function Page(): JSX.Element {

  
  return (
    <h1 className="text-2xl font-bold text-gray-800">
      hi there
      </h1>
  );
}
