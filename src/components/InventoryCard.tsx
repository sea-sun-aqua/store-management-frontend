interface InventoryCardProps {
    title: string;
    description: string;
    source: string;
}

const InventoryCard: React.FC<InventoryCardProps> = ({ title, description, source}) => {
    return (
        <div className="relative m-5">
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                    <img className="size-12" src={source} alt="ChitChat Logo"/>
                </div>
                <div>
                    <div className="text-xl font-medium text-black">{title}</div>
                    <p className="text-slate-500">{description}</p>
                </div>
            </div>
        </div>
    );
};

export type { InventoryCardProps } ;
export default InventoryCard;