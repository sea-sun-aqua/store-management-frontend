interface InventoryListProps {
    product_id: string;
    product_name: string;
    product_price: string;
    product_amount: string;
}

const InventoryList: React.FC<InventoryListProps> = ({ product_id, product_name, product_price, product_amount }) => {
    return (
        <div>
            <div className="grid grid-cols-4 border-solid border-2 border-sky-500 text-white h-14 text-xl font-bold  ">
                <div className="p-2 bg-sky-500">
                    <p className="flex justify-center">
                        {product_id}
                    </p>
                </div>
                   
                <div className="p-2 bg-sky-600">
                    <p className="flex justify-center">
                        {product_name}
                    </p>
                </div>
                 
                 <div className="p-2 bg-sky-500">
                    <p className="flex justify-center">
                        {product_price}
                    </p>
                </div>

                <div className="p-2 bg-sky-600">
                    <p className="flex justify-center">
                        {product_amount}
                    </p>
                </div>
            </div>
        </div>
    );
};

export type { InventoryListProps } ;
export default InventoryList;