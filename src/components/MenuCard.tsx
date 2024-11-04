import Link from 'next/link';

interface MenuCardProps {
    title: string;
    link: string;
  }

const MenuCard: React.FC<MenuCardProps> = ({ title, link }) => {
    return (
      <Link href={link}>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer text-center">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
      </Link>
    );
};

export type { MenuCardProps} ;
export default MenuCard;
