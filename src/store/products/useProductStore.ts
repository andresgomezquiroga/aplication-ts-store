import { useProductActions } from "./useProductsActions";
import { useProductMutations } from "./useProductsMutations";
import { useProductState } from "./useProductsState";



const useProductStore = () => {
  const state = useProductState((state) => state);
  const mutations = useProductMutations();
  const actions = useProductActions();

  return {
    ...state,
    ...mutations,
    ...actions,
  };
};

export default useProductStore;