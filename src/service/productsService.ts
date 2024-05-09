
import { ENDPOINT } from '../app.Config';
import { MICROSERVICES } from '../app.tickers';
import { ProductFormData } from '../type/ProductFormData';
import { deleted, get, post, put } from '../utils/rest.utils';

///servicio que lista los productos
export const GetProductsService = ()
    : Promise<[]> =>
    get<[]>({
        endpoint: ENDPOINT,
        url: MICROSERVICES.product.products,
    }).then(resp => (resp));


export const CreateProductService = (product: ProductFormData)
    : Promise<[]> =>
    post<[]>({
        endpoint: ENDPOINT,
        url: MICROSERVICES.product.products,
        payload: product
    }).then(resp => (resp));


export const UpdateProductService = (productId: number, product: ProductFormData)
    : Promise<[]> =>
    put<[]>({
        endpoint: ENDPOINT,
        url: MICROSERVICES.product.products + "/" + productId,
        payload: product
    }).then(resp => (resp));

export const DeleteProductService = (productId: number)
    : Promise<[]> =>
    deleted<[]>({
        endpoint: ENDPOINT,
        url: MICROSERVICES.product.products + "/" + productId,
    }).then(resp => (resp));