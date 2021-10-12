import 'styles/_colors.scss'; // assuming a styles directory under src/


// import Footer from './views/footer/footer';//尾部
import Footer from './components/footer';
import Body from './components/body';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
