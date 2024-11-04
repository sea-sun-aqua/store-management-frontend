interface ProductListProps {
    products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
    return (
      <div className="text-center mx-auto p-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="text-2xl py-2 px-4 border-b">Product ID</th>
              <th className="text-2xl py-2 px-4 border-b">Product Name</th>
              <th className="text-2xl py-2 px-4 border-b">Price</th>
              <th className="text-2xl py-2 px-4 border-b">In Stock</th>
              <th className="text-2xl py-2 px-4 border-b">Safety Stock</th>
            </tr>
          </thead>
          <tbody>
            {products != null ? products.map((product: Product) => (
              <tr key={product.product_id}>
                <td className="py-2 px-4 border-b">{product.product_id}</td>
                <td className="py-2 px-4 border-b">{product.product_name}</td>
                <td className="py-2 px-4 border-b">${product.product_price.toFixed(2)}</td>
                <td className="py-2 px-4 border-b">{product.product_amount}</td>
                <td className="py-2 px-4 border-b">{product.safety_stock_amount}</td>
              </tr>
            )) : null}
          </tbody>
        </table>
      </div>
    );
  };

export default ProductList;