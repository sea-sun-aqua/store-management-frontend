interface ButtonProps {
    title: string;
}

const Button: React.FC<ButtonProps> = ({ title}) => {
    return (
        <button className="p-4 bg-sky-400 hover:bg-sky-700 rounded-xl text-white">
            {title}
        </button> 
    );
};

export type { ButtonProps } ;
export default Button;