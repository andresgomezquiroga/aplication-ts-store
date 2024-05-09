import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routerElement } from "./router/router"
import { Suspense, createElement } from "react"
import { ProSidebarProvider } from "react-pro-sidebar"
import { Loader } from "./components/Loader"


function App() {

  const router = createBrowserRouter(
    routerElement.map((route) => ({
      ...route,
      element: createElement(route.element),
      children: route.children?.map((child) => ({
        ...child,
        element: createElement(child.element)
      }))
    }))
  )

  return (
    <>
      <ProSidebarProvider>
        <Suspense fallback={<Loader/>}>
          <RouterProvider router={router} />
        </Suspense>

      </ProSidebarProvider>

    </>
  )
}

export default App
