import BackButton from "@/components/BackButton";
import Button from "@/components/Button";

export default function InventoryProductDetailPage({ params }: {
    params: {
        slug: string[]
    }
}) {
    
    if (params.slug.length === 3) {
        
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
                           <div className="grid grid-cols-2 pb-5 mt-1 px-3 py-2 w-4/5 bg-white rounded-xl
                                            text-2xl font-medium text-slate-700">
                                <div>
                                    Product :
                                </div>
                                
                                <div>
                                    { params.slug[0] }
                                </div>
    
                                <div>
                                    Price :
                                </div>
    
                                <div>
                                    { params.slug[1] }
                                </div>
    
                                <div>
                                    Quantity : 
                                </div>
    
                                <div>
                                    { params.slug[2]}
                                </div>
                                
                            </div>
    
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }
    
}