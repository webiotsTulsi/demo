import { createBrowserRouter, Link } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Skeletonn from "./components/Skeletonn";
import Cards from "./components/Cards";
import NavigationMenu from "./components/NavigationMenu";
import Carouselll from "./components/Carouselll";

function App() {
  const appRouter = createBrowserRouter ([
    {
      path: '/',
      element: <Skeletonn/>
    },
    {
      path: '/cards',
      element: <Cards/>
    },
    {
      path: '/navigate',
      element: <NavigationMenu/>
    },
    {
      path: '/carouselll',
      element: <Carouselll/>
    }
  ])

  return (     
    <RouterProvider router={appRouter}></RouterProvider>
  )
}

export default App
