interface NewPurchaseInputProps {
    input: string;
}

const NewPurchaseInput: React.FC<NewPurchaseInputProps> = ({ input }) => {
    return (
        <div className="block p-2">
            <input className="text-center w-full bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none focus:border-sky-500 
                            focus:ring-sky-500 flex rounded-md sm:text-sm focus:ring-1" 
                placeholder={input} />
        </div>
    );
};  

export type { NewPurchaseInputProps } ;
export default NewPurchaseInput;