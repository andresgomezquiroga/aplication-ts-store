import React from "react";

export const Layout = React.lazy(() => import('../layout/MasterPage'));
export const Create_products = React.lazy(() => import('../pages/products/Create'));
export const Board_products = React.lazy(() => import('../pages/products/ProductsList'));

export const routerElement = [
    {
        path: "/",
        element: Layout,
        children: [
            {
                path: 'Crear_products', // Cambiado de 'Creaste_products' a 'Crear_products'
                element: Create_products
            },
            {
                path: 'board_products',
                element: Board_products
            }
        ]
    }
];
