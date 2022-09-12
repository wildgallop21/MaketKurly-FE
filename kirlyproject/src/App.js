
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import MainPage from './pages/MainPage';
function App() {
  return (
    <div>
      <Header />
      {/* <Cart/> */}
      <MainPage/>
      <Footer />
      {/* <Detail/> */}

    </div>
  );
}

export default App;
