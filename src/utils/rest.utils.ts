import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { ENDPOINT } from '../app.Config';


/** Instancia de Axios para realizar peticiones HTTP. */
///const http = axios.create();

// Desestructuración
const { CancelToken } = axios;
const { source } = CancelToken;

const http: AxiosInstance = axios.create({
    baseURL: ENDPOINT,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json'
    },
    cancelToken: source().token
});

// // Configuración global de Axios
// http.defaults.baseURL = 'https://api.example.com';
// http.defaults.timeout = 10000; // 10 segundos

// Interceptor para manejar las respuestas exitosas
http.interceptors.response.use(
    (response: AxiosResponse) => {
        // Puedes realizar acciones adicionales con la respuesta exitosa aquí
        // console.log('Respuesta exitosa:', response);
        return response.data;
    },
    (error: AxiosError) => {
        // Puedes personalizar el manejo de errores aquí
        // console.error('Error en la respuesta:', error);
        return Promise.reject(error);
    }
);

/**
 * Método de Http para postear información.
 * @param params Configuración del servicio.
 * @returns Promesa con la respuesta del servicio.
 */
const post = async <T>({
    endpoint,
    url,
    payload,
    options,
}: ISettingsService): Promise<T> => {
    return await http.post(endpoint + url, payload, options);
};

/**
 * Método de Http para realizar peticiones PUT.
 * @param params Configuración del servicio.
 * @returns Promesa con la respuesta del servicio.
 */
const put = async <T>({
    endpoint,
    url,
    payload,
    options,
}: ISettingsService): Promise<T> => {
    return await http.put(endpoint + url, payload, options);
};

/**
 * Método de Http para realizar peticiones GET.
 * @param params Configuración del servicio.
 * @returns Promesa con la respuesta del servicio.
 */
const get = async <T>({
    endpoint,
    url,
    options,
}: ISettingsService): Promise<T> => {
    return await http.get(endpoint + url, options);
};

/**
 * Método de Http para realizar peticiones DELETE.
 * @param params Configuración del servicio.
 * @returns Promesa con la respuesta del servicio.
 */
const deleted = async <T>({
    endpoint,
    url,
    options,
}: ISettingsService): Promise<T> => {
    return await http.delete(endpoint + url, options);
};

/**
 * Método de Http para realizar peticiones PATCH.
 * @param params Configuración del servicio.
 * @returns Promesa con la respuesta del servicio.
 */
const patch = async <T>({
    endpoint,
    url,
    payload,
    options,
}: ISettingsService): Promise<T> => {
    return await http.patch(endpoint + url, payload, options);
};

/** Interface para la configuración de los métodos axios. */
interface ISettingsService {
    /** Endpoint principal del servicio. */
    endpoint: string;
    /** Ruta del Endpoint. */
    url: string;
    /** Mostrar el loading, por defecto es true. */
    loading?: boolean;
    /** Cuerpo del servicio. */
    payload?: any;
    /** Configuraciones del mensaje */
    configMessage?: string;
    /** Configuraciones generales del axios. */
    /* FIXME: JLPS [2022-04-06] Agregar configuración personalizada
      de params y headers. */
    options?: AxiosRequestConfig;
    /** Cancelar la petición anterior. */
    cancel?: boolean;
    /** Abrir el modal de confirmación */
    modalOpen?: boolean;
}

export { http, post, put, get, deleted, patch };