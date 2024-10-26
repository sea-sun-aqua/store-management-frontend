import InventoryButton from "@/components/InventoryButton";
import InventoryInput from "@/components/InventoryInput";

export default function ProductInInventoryPage() {
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
                <div className="px-32 pt-10">
                    <InventoryButton title="Back" path="/menu/inventory"/>
                </div>

                <div className="mx-32 my-16 p-20 pt-10 pb-20 bg-white text-black">
                    <div className="text-center p-10 text-black text-3xl font-black0">
                        New Product
                    </div>

                    <div className="grid grid-cols-2">
                        <div>
                            <InventoryInput title="Product" input="name"/>
                            <InventoryInput title="Price" input="x,xxx.xx"/>
                            <InventoryInput title="Quantity" input="x,xxx"/>
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
                        <button className="p-4 bg-sky-400 hover:bg-sky-700 rounded-xl text-white">
                            Add product
                        </button>   
                    </div>
                </div>
                
            </div>
        </>
    )
}