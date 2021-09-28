import './App.css';
// import Footer from './views/footer/footer';//尾部
import Footer from './components/footer';
import { EnumBody } from '@babel/types';
import Header from './components/header';

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
