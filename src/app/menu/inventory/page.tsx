import "@/globals.css"
import InventoryCard from '@/components/InventoryCard';
import InventoryList from "@/components/InventoryList";

export default function InventoryPage() {
    return (
        <>
            <div className="flex justify-center pt-10">
                <div className="max-w-sm w-full shadow-lg bg-white p-8 rounded-xl opacity-90 font-black text-black">
                    Hello
                </div>
            </div>

            <div className="grid grid-flow-rol grid-cols-3">
                <InventoryCard title="Block 1" description="Testing block 1" source="https://avatars.githubusercontent.com/u/123363418?v=4"/>
                <InventoryCard title="Block 2" description="Testing block 2" source="https://avatars.githubusercontent.com/u/123363418?v=4"/>
                <InventoryCard title="Block 3" description="Testing block 3" source="https://avatars.githubusercontent.com/u/123363418?v=4"/>
                <InventoryCard title="Block 4" description="Testing block 4" source="https://avatars.githubusercontent.com/u/123363418?v=4"/>
            </div>

            <div className="grid grid-flow-rol grid-col-1">
                <div className="ml-5 mr-5 mt-5 p-1 bg-white">
                    <InventoryList product_id="Product ID" name="Name" price="Price" stock="In Stock"/>
                    <InventoryList product_id="PD-001" name="first" price="100" stock="100"/>
                    <InventoryList product_id="PD-002" name="second" price="200" stock="200"/>
                    <InventoryList product_id="PD-003" name="third" price="300" stock="300"/>
                    <InventoryList product_id="PD-004" name="forth" price="400" stock="400"/>
                </div>

            </div>

            
            <div className="flex justify-center pt-10 ">
                <button className="p-4 bg-sky-500 hover:bg-sky-700 rounded-xl ">
                    Save changes 
                </button>   
            </div>



            <div className="pt-20"></div>
        </>
    )
}