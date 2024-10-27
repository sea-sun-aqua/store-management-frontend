import NavLink from "@/components/NavLink"
import AddStockListHeader from "@/components/AddStockListHeader"
import AddStockList from "@/components/AddStockList"
import Input from "@/components/Input"

export default function AddStockPage() {
    const navLinks = [
        {
            title: "Back",
            path: "/menu/purchase"
        },
        {
            title: "<",
            path: "/menu/purchase"
        },
        {
            title: "1",
            path: "/menu/purchase"
        },
        {
            title: "...",
            path: "/menu/purchase"
        },
        {
            title: "5",
            path: "/menu/purchase"
        },
        {
            title: ">",
            path: "/menu/purchase"
        },
    ]
    
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="text-center p-10 text-black text-3xl font-black0">
                    Add Stock
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

                <div className="grid grid-flow-row grid-col-1 mx-32">
                    <div className="ml-5 mr-5 mt-5 p-5 bg-white rounded-xl">
                        <AddStockListHeader col_1="Product ID" col_2="Name" col_3="Price" col_4="In Stock" col_5="Add Stock"/>
                        <AddStockList col_1="PD-001" col_2="ตู้ปลาแก้ว" col_3="2500" col_4="10" col_5="0"/>
                        <AddStockList col_1="PD-002" col_2="ปั๊มน้ำ" col_3="400" col_4="4" col_5="2"/>
                        <AddStockList col_1="PD-003" col_2="สายยางใส" col_3="200" col_4="12" col_5="4"/>
                        <AddStockList col_1="PD-004" col_2="ฟองน้ำ" col_3="85" col_4="11" col_5="0"/>
                        <AddStockList col_1="PD-005" col_2="น้ำยาบำรุงน้ำ" col_3="112" col_4="3" col_5="1"/>
                        <AddStockList col_1="PD-006" col_2="อาหารปลา" col_3="250" col_4="3" col_5="1"/>
                    </div>
                </div>

                <div className="flex justify-center p-10"> 
                    <NavLink title="Save" href="..."/>  
                </div>
            </div>
        </>
    )
}