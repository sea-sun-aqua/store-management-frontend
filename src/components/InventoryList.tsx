import Link from "next/link";

interface InventoryListProps {
    col_1: string;
    col_2: string;
    col_3: string;
    col_4: string;
}

const InventoryList: React.FC<InventoryListProps> = ({ col_1, col_2, col_3, col_4 }) => {
    return (
        <Link href={"/menu/inventory/" + col_2 + "/" + col_3 + "/" + col_4}>
            <div className="p-1">
                <div className="grid grid-cols-4 border-solid border-2 border-sky-600">
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
                </div>
            </div>
        </Link>
    );
};

export type { InventoryListProps } ;
export default InventoryList;