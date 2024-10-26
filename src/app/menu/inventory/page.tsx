import List from "@/components/InventoryList";
import ListHeader from "@/components/InventoryListHeader";
import NavLink from "@/components/NavLink";

export default function InventoryPage() {
    const navLinks = [
        {
            title: "Back",
            path: "/"
        },
        {
            title: "NONE",
            path: "..."
        },
        {
            title: "NONE",
            path: "..."
        },
        {
            title: "Add",
            path: "inventory/product"
        }
    ]
    
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="flex flex-wrap items-center justify-between mx-auto px-40 pt-20">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8"> {/*unorder list*/}
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="bg-white w-96 text-[#ADB7BE] sm:text-xl rounded-xl md:p-4 hover:text-black">
                        Search
                    </div>

                </div>

                <div className="grid grid-flow-row grid-col-1 mx-32 my-4">
                    <div className="ml-5 mr-5 mt-5 p-5 bg-white rounded-xl">
                        <ListHeader product_id="Product ID" name="Name" price="Price" stock="In Stock"/>
                        <List product_id="PD-001" name="SX-01" price="1" stock="10"/>
                        <List product_id="PD-002" name="TX-002" price="20" stock="20"/>
                        <List product_id="PD-003" name="OT-3" price="3" stock="3"/>
                        <List product_id="PD-004" name="MRX-04" price="40" stock="400"/>
                        <List product_id="PD-005" name="FIV-5" price="5" stock="5"/>
                    </div>
                </div>



                {/* <div className="flex justify-center pt-10">
                    <div className="max-w-sm w-full shadow-lg bg-white p-8 rounded-xl opacity-90 font-black text-black">
                        Hello
                    </div>
                </div>

                <div className="grid grid-flow-rol grid-cols-3">
                    <InventoryCard title="Block 1" description="Testing block 1" source="https://avatars.githubusercontent.com/u/123363418?v=4"/>
                    <InventoryCard title="Block 2" description="Testing block 2" source="https://avatars.githubusercontent.com/u/123363418?v=4"/>
                    <InventoryCard title="Block 3" description="Testing block 3" source="https://avatars.githubusercontent.com/u/123363418?v=4"/>
                    <InventoryCard title="Block 4" description="Testing block 4" source="https://avatars.githubusercontent.com/u/123363418?v=4"/>
                </div>
                
                <div className="flex justify-center pt-10 ">
                    <button className="p-4 bg-sky-500 hover:bg-sky-700 rounded-xl ">
                        Save changes 
                    </button>   
                </div>

                <div className="pt-20"></div> */}
            </div>
        </>
    )
    
}