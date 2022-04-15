import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  //for creating fake data to be loaded we have to use images. We can download ,resize images from online sites like freepik , unsplash. For resizing we can use Photopea.For optimizing we use sites like tinypng. For online hosting of images ,we can upload our images to imgbb.com website , in order to use the images as url links
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
