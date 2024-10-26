interface PurchaseListHeaderProps {
    col_1: string;
    col_2: string;
    col_3: string;
}

const PurchaseListHeader: React.FC<PurchaseListHeaderProps> = ({ col_1, col_2, col_3 }) => {
    return (
        <div className="p-1">
            <div className="grid grid-cols-3 border-solid border-2 border-sky-500 text-white">
                <div className="p-2 bg-sky-500">
                    <p className="flex justify-center">
                        {col_1}
                    </p>
                </div>
                   
                <div className="p-2 bg-sky-600">
                    <p className="flex justify-center">
                        {col_2}
                    </p>
                </div>
                 
                 <div className="p-2 bg-sky-500">
                    <p className="flex justify-center">
                        {col_3}
                    </p>
                </div>
            </div>
        </div>
    );
};

export type { PurchaseListHeaderProps } ;
export default PurchaseListHeader;