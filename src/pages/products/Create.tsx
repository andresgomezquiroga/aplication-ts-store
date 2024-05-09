import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useProductActions } from '../../store/products/useProductsActions';
import { VALIDATIONS } from '../../utils/validation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



export interface IFproductForm {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CreateProps {
  productToEdit?: IFproductForm;
}

const Create: React.FC<CreateProps> = () => {
  const { CreateProduct, UpdateProduct } = useProductActions();
  const location = useLocation();
  const productToEdit: IFproductForm | undefined = location.state?.productToEdit;

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<IFproductForm>({
    resolver: yupResolver(VALIDATIONS)
  });

  useEffect(() => {
    if (productToEdit) {
      Object.entries(productToEdit).forEach(([key, value]) => {
        setValue(key as keyof IFproductForm, value);
      });
    }
  }, [productToEdit, setValue]);

  const submit = (data: IFproductForm) => {
    if (productToEdit) {
      UpdateProduct(productToEdit.id, data); // Pasar el id del producto que se está editando
    } else {
      CreateProduct(data);
    }
  };
  return (
    <div className='text-white flex justify-center items-center h-3 mt-[320px] ml-[300px] flex-col'>
      <h1 className='text-black text-3xl mb-11'>{productToEdit ? 'Editar Producto' : 'Crear Producto'}</h1>
      <form className="max-w-md bg-black p-[30px] rounded text-white grid grid-cols-2 gap-5" onSubmit={handleSubmit(submit)}>
        <div className="relative z-0 w-full mb-5 group">
          <input type="number"
            {...register('id', { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
           dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 
           peer" placeholder=" " />
          <p className='text-red-600'>{errors.title?.message}</p>
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
          top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 
          peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
           peer-focus:-translate-y-6">ID</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text"
            {...register('title', { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
           dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 
           peer" placeholder=" " />
          <p className='text-red-600'>{errors.title?.message}</p>
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
          top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 
          peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75
           peer-focus:-translate-y-6">Titulo</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            {...register('description', { required: true })}
            className="block py-2.5 px-0 w-full 
          text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600
           dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <p className='text-red-600'>{errors.description?.message}</p>
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
          top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descripcion</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="number"
            {...register('price', { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
          dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " />
          <p className='text-red-600'>{errors.price?.message}</p>
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
          top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Precio</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text"
            {...register('image', { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
          dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " />
          <p className='text-red-600'>{errors.image?.message}</p>
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
          top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text"
            {...register('category', { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
          dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" " />
          <p className='text-red-600'>{errors.category?.message}</p>
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 
          top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
        </div>
        <button type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
        text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
      <ToastContainer theme='dark'/>
    </div>
  )
}

export default Create
