interface InventoryButtonProps {
    title: string;
}

const InventoryButton: React.FC<InventoryButtonProps> = ({ title }) => {
    return (
        <div className="bg-black flex justify-self-center">
            <div className="flex justify-center p-4 rounded-xl 
                            opacity-90 font-black text-black bg-sky-300 hover:bg-sky-500">
                {title}
            </div>
        </div>
    );
};

export type { InventoryButtonProps } ;
export default InventoryButton;