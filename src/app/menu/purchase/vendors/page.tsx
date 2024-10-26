import NavLink from "@/components/NavLink"
import PurchaseList from "@/components/PurchaseList"
import PurchaseListHeader from "@/components/PurchaseListHeader"

export default function PurchasePage() {
    const navLinks = [
        {
            title: "Back",
            path: "..."
        },
        {
            title: "New",
            path: "..."
        },
    ]
    
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="text-center p-10 text-black text-3xl font-black0">
                    Vendor
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

                <div className="grid grid-flow-row grid-col-1 mx-32 my-4">
                    <div className="ml-5 mr-5 mt-5 p-5 bg-white rounded-xl">
                        <PurchaseListHeader col_1="Order ID" col_2="Date" col_3="Vendor" col_4="Sales Person" col_5="Status"/>
                        <PurchaseList col_1="PD-001" col_2="SX-01" col_3="1" col_4="10" col_5="Completed"/>
                        <PurchaseList col_1="PD-002" col_2="TX-002" col_3="20" col_4="20" col_5="Transfering"/>
                        <PurchaseList col_1="PD-003" col_2="OT-3" col_3="3" col_4="3" col_5="Completed"/>
                        <PurchaseList col_1="PD-004" col_2="MRX-04" col_3="40" col_4="400" col_5="Transfering"/>
                        <PurchaseList col_1="PD-005" col_2="FIV-5" col_3="5" col_4="5" col_5="Transfering"/>
                    </div>
                </div>
            </div>
        </>
    )
}