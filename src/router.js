// importing router related components
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// importing components
import { App } from "./App.jsx";
import { Home } from "./Screens/Home/Home.jsx"
import { Product } from "./Screens/Product/Product.jsx"




export const router = createBrowserRouter(
  createRoutesFromElements(
    <>


      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
      </Route>

      {/* 404 page */}
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </>
  )
);