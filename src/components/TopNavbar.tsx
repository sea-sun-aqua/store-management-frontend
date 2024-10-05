export default function TopNavbar(
    {
        currentPage,
    }: {
        currentPage: string
    }
) {
    return <nav className="">
        <div className="h-16 w-full p-4 flex justify-between">
        <div className="p-1 flex justify-between w-32">
            <h1 className="">
                {currentPage}
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