import { CreateProductService, DeleteProductService, GetProductsService, UpdateProductService } from '../../service/productsService';
import { ProductFormData } from '../../type/ProductFormData';
import { useProductMutations } from './useProductsMutations';
import { toast } from 'react-toastify';
// import Swal from "sweetalert2";
// import {ProductFormData} from '../../types/ProductFormData'

export const useProductActions = () => {
    const { setProducts } = useProductMutations();

    const fetchProducts = async () => {
        try {
            const data = await GetProductsService()
            // console.log('useProductActions')
            setProducts(data);
            console.log(data);

        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const CreateProduct = async (product: ProductFormData) => {
        try {
            const data = await CreateProductService(product)
            console.log(data)
            toast.success('Producto creado correctamente')
        } catch (error) {
            toast.error('error al crear el producto')
        }
    };

    const UpdateProduct = async (productId: number, product: ProductFormData) => {
        try {
            const data = await UpdateProductService(productId, product)
            console.log(data)
            toast.success('Producto actualizado')
        } catch (error) {
            toast.error('Ha ocuurido un error al actualizar el producto')
        }
    };

    const DeleteProduct = async (productId: number) => {
        try {
          const data = await DeleteProductService(productId)
          console.log(data)
          toast.success('Producto eliminado correctamente')
        } catch (error) {
          toast.error('Error al eliminar el producto')
        }
      };


    return { fetchProducts, CreateProduct, UpdateProduct, DeleteProduct }
};
