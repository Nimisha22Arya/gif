
import './App.css';
import Header from './Header';
import Random from './Random';
import Tag from './Tag';
import Footer from './Footer';

function App() {
  return (
    <div className="App" >
     <Header/>
     <div className='main-div'>
      <Random/>
      <Tag/>
     </div>
     <Footer />
    </div>
  );
}

export default App;
