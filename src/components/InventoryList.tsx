import Link from "next/link";

interface ProductProps {
    product: Product;
  }

const InventoryList = ({ product }: ProductProps) => {
    return (
        <Link href={"/menu/inventory/" + product.product_name + "/" + product.product_price + "/" + product.product_amount}>
            <div className="p-1 ">
                <div className="grid grid-cols-4 border-solid border-2 border-sky-600">
                    <div className="p-2 bg-black text-white">
                        <p className="flex justify-center">
                            {product.product_id}
                        </p>
                    </div>
                    
                    <div className="p-2 text-black">
                        <p className="flex justify-center">
                            {product.product_name}
                        </p>
                    </div>
                    
                    <div className="p-2 bg-black text-white">
                        <p className="flex justify-center">
                            {product.product_price}
                        </p>
                    </div>

                    <div className="p-2 text-black">
                        <p className="flex justify-center">
                            {product.product_amount}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default InventoryList;