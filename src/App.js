import './App.css';
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"

function App() {
  return (
    <>
       <Navbar title="TEXT" />
       <div className="container">
          <Textform  heading="Enter the text below"/>
         </div>
    </>  
  );
}

export default App;
