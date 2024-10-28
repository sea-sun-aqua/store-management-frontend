import Input from "@/components/Input";
import InventoryList from "@/components/InventoryList";
import InventoryListHeader from "@/components/InventoryListHeader";
import NavLink from "@/components/NavLink";

export default function InventoryPage() {
    const navLinks = [
        {
            title: "Back",
            path: "/menu"
        },
        {
            title: "Add",
            path: "inventory/add_stock"
        },
        {
            title: "New",
            path: "inventory/product"
        }
    ]
    
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="text-center text-black p-10 text-3xl font-black0">
                    Inventory
                </div>

                <div className="flex flex-wrap items-center justify-between mx-auto px-40">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8"> {/*unorder list*/}
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>

                    <Input input="Search"/>

                </div>

                <div className="grid grid-flow-row grid-col-1 mx-32 my-4">
                    <div className="ml-5 mr-5 mt-5 p-5 bg-white rounded-xl">
                        <InventoryListHeader col_1="Product ID" col_2="Name" col_3="Price" col_4="In Stock"/>
                        <InventoryList col_1="PD-001" col_2="Glass-container" col_3="2500" col_4="10"/>
                        <InventoryList col_1="PD-002" col_2="Pump" col_3="400" col_4="4"/>
                        <InventoryList col_1="PD-003" col_2="สายยางใส" col_3="200" col_4="12"/>
                        <InventoryList col_1="PD-004" col_2="ฟองน้ำ" col_3="85" col_4="11"/>
                        <InventoryList col_1="PD-005" col_2="น้ำยาบำรุงน้ำ" col_3="112" col_4="3"/>
                        <InventoryList col_1="PD-006" col_2="อาหารปลา" col_3="250" col_4="3"/>
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