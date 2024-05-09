import { ProductFormData } from "../type/ProductFormData";
import { IFProduct } from "./IFProducts";


export interface IFProductState {
    products: IFProduct[];
    currentPage: number;
    productsPerPage: number;
    productData:ProductFormData;
}