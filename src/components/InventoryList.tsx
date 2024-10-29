import Link from "next/link";

interface InventoryListProps {
    product_id: string;
    product_name: string;
    product_price: number;
    product_amount: number;
}

const InventoryList: React.FC<InventoryListProps> = ({ product_id, product_name, product_price, product_amount }) => {
    return (
        <Link href={"/menu/inventory/" + product_name + "/" + product_price + "/" + product_amount}>
            <div className="p-1">
                <div className="grid grid-cols-4 border-solid border-2 border-sky-600">
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
                            {product_amount}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export type { InventoryListProps } ;
export default InventoryList;