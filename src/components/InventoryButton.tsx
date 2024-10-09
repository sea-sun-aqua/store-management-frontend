import Link from "next/link";

interface InventoryButtonProps {
    title: string;
    path: string;
}

const InventoryButton: React.FC<InventoryButtonProps> = ({ title, path }) => {
    return (
        <Link href={path} className="p-4 bg-sky-400 hover:bg-sky-700 rounded-xl">
            {title}
        </Link>
    );
};

export type { InventoryButtonProps } ;
export default InventoryButton;