import * as Yup from 'yup'
import { IFproductForm } from '../pages/products/Create'


const VALIDATIONS : Yup.ObjectSchema<IFproductForm> = Yup.object().shape({
    id: Yup.number().required(),
    title: Yup.string().required('El titulo es requerido'),
    description: Yup.string().max(100, 'Máximo 100 caracteres').required('La descripcion es requerida'),
    price: Yup.number().required('El precio es requerido').typeError('El precio debe ser un número').positive('El precio debe ser un número positivo'),
    image: Yup.string().required('La URL de la imagen es requerida'),
    category: Yup.string().required('La categoria es requerida'),
})

export { VALIDATIONS }