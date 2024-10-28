import MenuCard from '@/components/MenuCard';

const MenuPage: React.FC = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-black text-center mb-8">Menu</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center">
            <MenuCard title="Sales Order" link="/menu/sales" />
            <MenuCard title="Inventory" link="/menu/inventory" />
            <MenuCard title="Purchases" link="/menu/purchase" />
          </div>
        </div>
      </div>
    );
  };

export default MenuPage;