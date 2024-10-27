import Input from "@/components/Input";
import NavLink from "@/components/NavLink";
import SalesOrderRFQList from "@/components/SalesOrderRFQList";
import SalesOrderRFQListHeader from "@/components/SalesOrderRFQListHeader";

export default function RequestOrderPage() {
    const navLinks = [
        {
            title: "Back",
            path: "/menu"
        },
        {
            title: "All",
            path: "/menu/sales"
        },
        {
            title: "Complete",
            path: "/menu/sales/complete"
        },
        {
            title: "Request Order",
            path: "/menu/sales/complete/request_order"
        },
        {
            title: "New",
            path: "/menu/sales/complete/request_order/new_sale"
        }
    ]
    
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="text-center text-black p-10 text-3xl font-black0">
                    Sale Order
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
                        <SalesOrderRFQListHeader col_1="Order ID" col_2="Date" col_3="Customer" col_4="Sales Person" col_5="Total" col_6="Status"/>
                        <SalesOrderRFQList col_1="SO-001" col_2="03/02/67" col_3="Aquarat" col_4="Athitrat" col_5="2,000" col_6="Transferring"/>
                        <SalesOrderRFQList col_1="SO-002" col_2="15/02/67" col_3="Athirat" col_4="Aquarat" col_5="8,000" col_6="Packing"/>
                        <SalesOrderRFQList col_1="SO-003" col_2="20/02/67" col_3="Aquarat" col_4="Aquarat" col_5="5,000" col_6="Delivery"/>
                        <SalesOrderRFQList col_1="SO-004" col_2="21/02/67" col_3="Patdarin" col_4="Athirat" col_5="1,474" col_6="Delivery"/>
                    </div>
                </div>



                
            </div>
        </>
    )
    
}