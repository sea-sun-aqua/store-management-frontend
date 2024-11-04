import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/IndeedInput";

export default function VendorPage() {
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="px-32 pt-10">
                    <BackButton title="Back" path="/menu/purchase/vendors"/>
                </div>

                <div className="mx-32 my-16 p-20 pt-10 pb-20 bg-white text-black">
                    <div className="text-center p-10 text-black text-3xl font-black0">
                        New Vendor
                    </div>

                    <div className="grid grid-cols-2">
                        <div>
                            <Input title="Name" input="name"/>
                            <Input title="Phone number" input="0xx-xxx-xxxx"/>
                            <Input title="Email" input="email"/>
                            <Input title="Address" input="address"/>
                        </div>
                    </div>

                    <div className="pt-10 flex justify-center ">
                        <Button title="Save"/>  
                    </div>
                </div>
                
            </div>
        </>
    )
}