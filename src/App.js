import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import BasicExample from './components/Navbar';
import MySidebar from './components/sidebaru';
import Footer from './components/footer';


function App() {
  return (
    <>
    

    <div className="App">
        <header className="App-header">


          <BasicExample />
       < MySidebar/>

        </header>
      
        
        
        <Footer />
      </div>
      </>

  );
}

export default App;
