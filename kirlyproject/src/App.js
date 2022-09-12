import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <Header />
      {/* <Cart/> */}
      {/* <MainPage/> */}
      <Login/>
      <Footer />
      {/* <Detail/> */}

    </div>
  );
}

export default App;
