import { useRouter } from "next/router"

export default function TopNavbar(
{
        currentUser,
    }: {
        currentUser: string
    }
) {
   

    return <nav className="">
        <div className="h-16 w-full p-4 flex justify-between">
        <div className="p-1 flex justify-between w-32">
            <h1 className="">
                {currentUser}
            </h1>
        </div>
        <div className="basic-">
            
            <h1>
                Profile
            </h1>
        </div>
    </div>
    </nav>
}