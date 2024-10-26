import NavLink from "@/components/NavLink"
import Input from "@/components/Input"
import Button from "@/components/Button"
import NewPurchaseList from "@/components/NewPurchaseList"
import NewPurchaseListHeader from "@/components/NewPurchaseHeader"

export default function NewPurchasePage() {
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
                    Purchase Order
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

                    <div className="bg-white w-96 text-[#ADB7BE] sm:text-xl rounded-xl md:p-4 hover:text-black">
                        Search
                    </div>
                </div>

                <div className="grid grid-cols-2 pl-40 pt-4">
                    <div className="grid grid-cols-2">
                        <div>
                            <Input title="Name" input="name"/>
                            <Input title="Phone number" input="0xx-xxx-xxxx"/>
                        </div>

                        <div>
                            <Input title="Email" input="email"/>
                            <Input title="Address" input="address"/>
                        </div>
                    </div>
                </div>

                <div className="grid grid-flow-row grid-col-1 mx-32">
                    <div className="ml-5 mr-5 mt-5 p-5 bg-white rounded-xl">
                        <NewPurchaseListHeader col_1="Product ID" col_2="Name" col_3="In Stock" col_4="Safety Stock" col_5="Request" col_6="Add Stock"/>
                        <NewPurchaseList col_1="PD-001" col_2="ตู้ปลาแก้ว" col_3="10" col_4="10" col_5="0" col_6="0"/>
                        <NewPurchaseList col_1="PD-002" col_2="ปั๊มน้ำ" col_3="20" col_4="4" col_5="2" col_6="5"/>
                        <NewPurchaseList col_1="PD-003" col_2="สายยางใส" col_3="3" col_4="12" col_5="4" col_6="4"/>
                        <NewPurchaseList col_1="PD-004" col_2="ฟองน้ำ" col_3="4" col_4="11" col_5="0" col_6="2"/>
                        <NewPurchaseList col_1="PD-005" col_2="อาหารปลา" col_3="5" col_4="3" col_5="1" col_6="1"/>
                    </div>
                </div>

                <div className="flex justify-center p-10"> 
                    <NavLink title="Save" href="new_purchase/transfer"/>  
                </div>
            </div>
        </>
    )
}