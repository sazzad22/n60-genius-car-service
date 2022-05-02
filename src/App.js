import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import SignUp from "./Pages/SignUp/SignUp";
import AddService from "./Pages/AddService/AddService";
import ManageService from "./Pages/ManageService/ManageService";
import RequireAuth from "./Pages/RequreAuth/RequireAuth";
import Checkout from "./Pages/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import Orders from "./Pages/Orders/Orders";

function App() {
  //for creating fake data to be loaded we have to use images. We can download ,resize images from online sites like freepik , unsplash. For resizing we can use Photopea.For optimizing we use sites like tinypng. For online hosting of images ,we can upload our images to imgbb.com website , in order to use the images as url links

  //on 61 m ,we add more orutes and firebase auths
  // on 62 there is thirdparty authentication, reset password, email vartification, async await,
  //63 , assignment
  //63_5 , website title and favicon, using google map in react
  //66 , client server database - Crud

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* Below is a set up of nested route. the value after : can be anything. The service button will have and id and that id will be set and replace the 'serviceId'. We can also send this route information of id using a hook 'useParams' . We use this hook  where this particular route is going to.
        serviceDetails comp e useparam use korle sheta ekta obj return korbe,destructuring korte amra ei 'serviceId' use korbe. */}
        <Route
          path="/service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
        <Route path="/addservice" element={<AddService></AddService>}></Route>
        <Route
          path="/manageservice"
          element={<ManageService></ManageService>}
        ></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders></Orders>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
