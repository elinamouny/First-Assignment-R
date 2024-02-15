import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import LayOut from "./Components/LayOut/LayOut";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";



function App() {
  let routes = createBrowserRouter([
    {path:"/project", element: <LayOut/>, children: [
      {index:true, element: <Home/>},
      {path: "about", element: <About/>},
      {path: "portfolio", element: <Portfolio/>},
      {path: "contact", element: <Contact/>}
    ]}
  ])
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
