interface InventoryInputProps {
    title: string;
    input: string;
}

const InventoryInput: React.FC<InventoryInputProps> = ({ title, input}) => {
    return (
        <label className="block pb-5">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 
                            block text-2xl font-medium text-slate-700">
                {title}
            </span>
            <input className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none focus:border-sky-500 
                            focus:ring-sky-500 block w-fill rounded-md sm:text-sm focus:ring-1" 
                placeholder={input} />
        </label>
    );
};

export type { InventoryInputProps } ;
export default InventoryInput;