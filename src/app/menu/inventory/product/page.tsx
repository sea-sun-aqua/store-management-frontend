import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Input from "@/components/IndeedInput";

export default function InventoryProductPage() {
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="px-32 pt-10">
                    <BackButton title="Back" path="/menu/inventory"/>
                </div>

                <div className="mx-32 my-16 p-20 pt-10 pb-20 bg-white text-black">
                    <div className="text-center p-10 text-black text-3xl font-black0">
                        New Product
                    </div>

                    <div className="grid grid-cols-2">
                        <div>
                            <Input title="Product" input="name"/>
                            <Input title="Price" input="x,xxx.xx"/>
                            <Input title="Quantity" input="x,xxx"/>
                        </div>

                        <div className="grid grid-rows-1">
                            <div className="bg-sky-100 mx-10 mb-5 text-center content-center text-3xl">
                                +
                            </div>

                            <div className="text-center">
                                Add photo
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 flex justify-center ">
                        <Button title="Add product"/>
                    </div>
                </div>
                
            </div>
        </>
    )
}