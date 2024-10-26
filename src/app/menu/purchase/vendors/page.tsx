import NavLink from "@/components/NavLink"
import VendorList from "@/components/VendorList"
import VendorListHeader from "@/components/VendorListHeader"

export default function VendorsPage() {
    const navLinks = [
        {
            title: "Back",
            path: "/menu/purchase"
        },
        {
            title: "New",
            path: "vendors/vendor"
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
                        <VendorListHeader col_1="Vendor ID" col_2="Vendor" col_3="Sales person"/>
                        <VendorList col_1="V-001" col_2="Aqr" col_3="Ton1"/>
                        <VendorList col_1="V-002" col_2="Aqr" col_3="Ton2"/>
                        <VendorList col_1="V-003" col_2="Pdr" col_3="Ton3"/>
                        <VendorList col_1="V-004" col_2="Atr" col_3="Ton4"/>
                        <VendorList col_1="V-005" col_2="Aqr" col_3="Ton5"/>
                    </div>
                </div>
            </div>
        </>
    )
}