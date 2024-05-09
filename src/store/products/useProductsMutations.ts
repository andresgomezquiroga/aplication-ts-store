import create from "zustand"; /// investigar que es
import { IFProduct } from "../../interface/IFProducts";
import { useProductState } from "./useProductsState";

export const useProductMutations = create(() => ({

    setProducts: (products: IFProduct[]) => {
        useProductState.setState({
            products: products,
        });
    },

    setCurrentPage: (pageNumber: number) => {
        useProductState.setState({
            currentPage: pageNumber,
        });
    },
}));