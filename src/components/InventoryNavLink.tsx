import Link from "next/link"

interface InventoryNavLinkProps {
    href: string;
    title: string;
}

const InventoryNavLink: React.FC<InventoryNavLinkProps> = ({ href, title }) => {
    return (
        <Link href={href} className="bg-slate-700 md:p-3 w-fill block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-white">
            {title}
        </Link>
    );
};

export type { InventoryNavLinkProps } ;
export default InventoryNavLink;