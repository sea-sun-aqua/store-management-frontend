import Link from "next/link"

interface InventoryNavLinkProps {
    href: string;
    title: string;
}

// bg-slate-700 md:p-3 w-fill block py-2 pl-3 pr-4 text-white sm:text-xl rounded hover:text-[#ADB7BE]
const InventoryNavLink: React.FC<InventoryNavLinkProps> = ({ href, title }) => {
    return (
        <Link href={href} className="p-4 bg-sky-500 hover:bg-sky-700 rounded-xl text-white">
            {title}
        </Link>
    );
};

export type { InventoryNavLinkProps } ;
export default InventoryNavLink;