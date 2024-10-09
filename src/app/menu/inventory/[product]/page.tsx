import InventoryButton from "@/components/InventoryButton";
import InventoryInput from "@/components/InventoryInput";

export default function ProductInInventoryPage() {
    return (
        <>
            <div className="bg-gray-300 min-h-screen">
\               <div className="px-20 pt-10">
                    <InventoryButton title="Back" path="/menu/inventory"/>
                </div>

                <div className="pt-10 pl-20 pb-7 text-black text-3xl font-black ">
                    New Product
                </div>


                <div className="mx-32 p-32 bg-white font-extrabold text-black">
                    <div className="grid grid-cols-2">
                        <div>
                            <InventoryInput title="Product" input="name"/>
                            <InventoryInput title="Price" input="x,xxx.xx"/>
                            <InventoryInput title="Quantity" input="x,xxx"/>
                        </div>

                        <div className="bg-sky-100 mx-10 mb-10 text-center content-center text-3xl">
                            +
                        </div>
                    </div>

                    <div className="pt-5 flex justify-center ">
                        <button className="p-4 bg-sky-400 hover:bg-sky-700 rounded-xl ">
                            Add product
                        </button>   
                    </div>
                </div>
                
            </div>
        </>
    )
}