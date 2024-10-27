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
                        Product detail
                    </div>

                    <div className="grid grid-cols-2">
                        {/* <label className="block pb-5">
                            <input className="mt-1 px-3 py-2 w-3/5 bg-white border shadow-sm border-slate-300 
                                            placeholder-slate-400 focus:outline-none focus:border-sky-500 
                                            focus:ring-sky-500 block w-fill rounded-md sm:text-sm focus:ring-1" 
                                placeholder={input} />
                        </label> */}

                        <div className="grid grid-cols-2 pb-5 mt-1 px-3 py-2 w-3/5 bg-white rounded-xl
                                        text-2xl font-medium text-slate-700">
                            <div>
                                Product :
                            </div>
                            
                            <div>
                                ปั๊มน้ำ
                            </div>

                            <div>
                                Price :
                            </div>

                            <div>
                                400
                            </div>

                            <div>
                                Quantity : 
                            </div>

                            <div>
                                150
                            </div>
                            
                        </div>

                        <div className="grid grid-rows-1">
                            <div className="bg-sky-100 w-1/3 mx-10 mb-5 text-center content-center text-xl">
                                Picture
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