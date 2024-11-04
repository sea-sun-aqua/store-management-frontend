interface NewPurchaseButtonProps {
    title: string;
}

const NewPurchaseButton: React.FC<NewPurchaseButtonProps> = ({ title}) => {
    return (
        <button className="w-2/3 h-2/3 bg-sky-400 hover:bg-sky-700 rounded-xl text-white">
            {title}
        </button> 
    );
};

export type { NewPurchaseButtonProps } ;
export default NewPurchaseButton;