import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Shows from "./pages/Show";
import Movies from "./pages/Movies";

const routes = [
    {
        path:'/',
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path:'/TvShow',
        element:<Shows/>,
        errorElement: <ErrorPage/>
    },
    {
        path:'Movies',
        element:<Movies/>,
        errorElement: <ErrorPage/>
    }
]

export default routes