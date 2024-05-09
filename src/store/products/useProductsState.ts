import create from "zustand";
import { IFProductState } from "../../interface/IFProductState";
// Types imports


export const useProductState = create<IFProductState>(() => ({
    products: [],
    currentPage: 1,
    productsPerPage: 5,
    productData:  {
      id: 0,
      title: "",
      price: 0,
      description: "",
      image: "",
      category: "",
      }
  }));
  