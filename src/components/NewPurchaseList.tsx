import NewPurchaseButton from "./NewPurchaseButton";
import NewPurchaseInput from "./NewPurchaseInput";

interface PurchaseListProps {
    col_1: string;
    col_2: string;
    col_3: string;
    col_4: string;
    col_5: string;
    col_6: string;
}

const PurchaseList: React.FC<PurchaseListProps> = ({ col_1, col_2, col_3, col_4, col_5, col_6}) => {
    return (
        <div className="p-1">
            <div className="grid grid-cols-6 border-solid border-2 border-sky-600">
                <div className="p-2 bg-black text-white">
                    <p className="flex justify-center">
                        {col_1}
                    </p>
                </div>
                
                <div className="p-2 text-black">
                    <p className="flex justify-center">
                        {col_2}
                    </p>
                </div>
                
                <div className="p-2 bg-black text-white">
                    <p className="flex justify-center">
                        {col_3}
                    </p>
                </div>

                <div className="p-2 text-black">
                    <p className="flex justify-center">
                        {col_4}
                    </p>
                </div>

                <div className="p-2 bg-black text-white">
                    <p className="flex justify-center">
                        {col_5}
                    </p>
                </div>

                <div className="grid grid-cols-3">
                    <div className="flex justify-end items-center">
                        <NewPurchaseButton title="-"/>
                    </div>

                    <div className="flex justify-center items-center">
                        <NewPurchaseInput input={col_6}/>
                    </div>
                    
                    <div className="flex justify-start items-center">
                        <NewPurchaseButton title="+"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export type { PurchaseListProps } ;
export default PurchaseList;