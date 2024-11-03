import NewPurchaseButton from "./NewPurchaseButton";
import NewPurchaseInput from "./NewPurchaseInput";
 
interface AddStockListProps {
    product_id: string;
    product_name: string;
    product_price: number;
    safety_stock_amount: number;
    product_amount: string;
}

const AddStockList: React.FC<AddStockListProps> = ({ product_id, product_name, product_price, safety_stock_amount, product_amount}) => {
    return (
        <div className="p-1">
            <div className="grid grid-cols-5 border-solid border-2 border-sky-600">
                <div className="p-2 bg-black text-white">
                    <p className="flex justify-center">
                        {product_id}
                    </p>
                </div>
                
                <div className="p-2 text-black">
                    <p className="flex justify-center">
                        {product_name}
                    </p>
                </div>
                
                <div className="p-2 bg-black text-white">
                    <p className="flex justify-center">
                        {product_price}
                    </p>
                </div>

                <div className="p-2 text-black">
                    <p className="flex justify-center">
                        {safety_stock_amount}
                    </p>
                </div>

                {/* <div className="grid grid-cols-3">
                    <div className="flex justify-end items-center">
                        <NewPurchaseButton title="-"/>
                    </div> */}

                    <div className="flex justify-center items-center bg-black">
                        <NewPurchaseInput input={product_amount}/>
                    </div>
                    
                    {/* <div className="flex justify-start items-center">
                        <NewPurchaseButton title="+"/>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export type { AddStockListProps } ;
export default AddStockList;