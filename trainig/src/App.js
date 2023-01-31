import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Counter from './list/Counter';

function App() {
  return (
    <div className="APP">
    <Router>
   <Routes>
    <Route path="/" element={<Counter/>}></Route>
   </Routes> 
   </Router>
    </div>
  );
}

export default App;
