interface InputProps {
    input: string;
}

const Input: React.FC<InputProps> = ({ input}) => {
    return (
        <label className="block">
            <input className="mt-1 px-3 py-2 w-96 h-14 bg-white border shadow-sm border-slate-300 
                            placeholder-slate-400 focus:outline-none focus:border-sky-500 
                            focus:ring-sky-500 block w-fill rounded-md sm:text-sm focus:ring-1" 
                placeholder={input} />
        </label>
    );
};  

export type { InputProps } ;
export default Input;