import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Counter from './list/Counter';
import Ref from "./list/ref1";
import Var from "./list/ref2";
import EffectEx from "./list/useEffect";
import EffextEx2 from "./list/useEffect2";


function App() {
  return (
    <div className="APP">

    <Router>
   <Routes>
    <Route path="/" element={<Counter/>}></Route> 
    <Route path ="/ref" element= {<Ref/>}></Route>
    <Route path ="/var" element= {<Var/>}></Route>
    <Route path ="/effectex" element= {<EffectEx/>}></Route>
    <Route path="/ex2" element= {<EffextEx2/>}></Route> 
    
   </Routes> 
   </Router>
    </div>
  );
}

export default App;
