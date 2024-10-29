interface InventoryListProps {
    col_1: string;
    col_2: string;
    col_3: string;
    col_4: string;
}

const InventoryList: React.FC<InventoryListProps> = ({ col_1, col_2, col_3, col_4 }) => {
    return (
        <div>
            <div className="grid grid-cols-4 border-solid border-2 border-sky-500 text-white h-14 text-xl font-bold  ">
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

                <div className="p-2 bg-sky-600">
                    <p className="flex justify-center">
                        {col_4}
                    </p>
                </div>
            </div>
        </div>
    );
};

export type { InventoryListProps } ;
export default InventoryList;