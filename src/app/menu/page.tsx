import MenuCard from '@/components/MenuCard';

const MenuPage: React.FC = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Menu</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MenuCard title="Sales Order" link="/sales-order" />
            <MenuCard title="Inventory" link="/inventory" />
            <MenuCard title="Supplier Order" link="/supplier-order" />
            <MenuCard title="Purchases" link="/purchases" />
            <MenuCard title="Products" link="/products" />
          </div>
        </div>
      </div>
    );
  };

export default MenuPage;