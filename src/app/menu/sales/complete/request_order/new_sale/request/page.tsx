import Button from "@/components/Button"
import NavLink from "@/components/NavLink"
import RequestOrderList from "@/components/RequestOrderList"
import RequestOrderListHeader from "@/components/RequestOrderListHeader"

export default function RequestOrderPage() {
    const navLinks = [
        {
            title: "Back",
            path: "/menu/sales/complete/request_order/new_sale"
        },
        {
            title: "Complete (Temp)",
            path: "/menu/sales/complete/request_order/new_sale/request/process/complete"
        },
    ]
    
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="text-center p-10 text-black text-3xl font-black0">
                    SO-0001
                </div>

                <div className="flex justify-end pr-40 pb-5">
                    <Button title="Print Receipt"/>
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

                    {/* <div className="bg-sky-500 rounded-xl text-white">
                        <div className="grid grid-cols-7 p-3">
                            <div className="flex justify-center pl-5 text-black">
                                Transferring
                            </div>

                            <div className="flex justify-center">
                                |
                            </div>

                            <div className="flex justify-center pl-5">
                                Pack
                            </div>

                            <div className="flex justify-center">
                                |
                            </div>
                            <div className="flex justify-center pl-5">
                                Delivery
                            </div>

                            <div className="flex justify-center">
                                |
                            </div>

                            <div className="flex justify-center pr-5">
                                Completed
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className="grid grid-flow-row grid-col-1 mx-32 my-4">
                    <div className="ml-5 mr-5 mt-5 p-5 bg-white rounded-xl">
                        <div className="grid grid-cols-3">
                            <div className="grid grid-cols-4 col-span-2 grid-rows-4 p-5">
                                <div>
                                    Vendor :
                                </div>
                                <div>
                                    Athirat
                                </div>
                                <div>
                                    Order date :
                                </div>
                                <div>
                                    10/27/2024
                                </div>


                                <div>
                                    Phone number :
                                </div>
                                <div>
                                    091-234-5678
                                </div>
                                <div>
                                    Sales person :
                                </div>
                                <div>
                                    Aquarat
                                </div>


                                <div>
                                    Email :
                                </div>
                                <div>
                                    Athirat@gmail.com
                                </div>
                                <div>
                                    Method :
                                </div>
                                <div>
                                    Cash
                                </div>


                                <div>
                                    Address :
                                </div>
                                <div>
                                    Bangkok,Thailand
                                </div>
                            </div>
                        </div>
                        
                        <RequestOrderListHeader col_1="Product ID" col_2="Name" col_3="Price" col_4="Amount"/>
                        <RequestOrderList col_1="PD-002" col_2="ปั๊มน้ำ" col_3="400" col_4="5"/>
                    </div>
                </div>
            </div>
        </>
    )
}