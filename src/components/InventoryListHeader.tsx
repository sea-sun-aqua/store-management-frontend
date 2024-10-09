interface InventoryListProps {
    product_id: string;
    name: string;
    price: string;
    stock: string;
}

const InventoryList: React.FC<InventoryListProps> = ({ product_id, name, price, stock }) => {
    return (
        <div className="p-1">
            <div className="grid grid-cols-4 border-solid border-2 border-sky-500">
                <div className="p-2 bg-sky-500">
                    <p className="flex justify-center">
                        {product_id}
                    </p>
                </div>
                   
                <div className="p-2 bg-sky-600">
                    <p className="flex justify-center">
                        {name}
                    </p>
                </div>
                 
                 <div className="p-2 bg-sky-500">
                    <p className="flex justify-center">
                        {price}
                    </p>
                </div>

                <div className="p-2 bg-sky-600">
                    <p className="flex justify-center">
                        {stock}
                    </p>
                </div>
            </div>
        </div>
    );
};

export type { InventoryListProps } ;
export default InventoryList;