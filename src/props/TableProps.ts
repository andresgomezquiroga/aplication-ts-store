import { IFProduct } from "../interface/IFProducts";
import { IFTableColumn } from "../interface/IFTableColumn";


export interface TableProps {
    data: IFProduct[];
    allColumns: IFTableColumn[];
    selectedColumns: string[];
}