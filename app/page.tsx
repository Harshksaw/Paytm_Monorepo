import Image from 'next/image'
import {UserButton} from "@clear/nextjs"

export default function Home() {
  return(
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
