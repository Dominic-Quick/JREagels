import Header from "./comps/Header";
import Camp from "./pages/Camp";
import Feed from "./pages/Home";
import Schedule from "./pages/Schedule";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="mainCon">
        <Header 
          item1={'SIGN UP'}
          item2 = {'SCHEDULE'}
          item3 = {'TRAINING CAMP'}
      />
        <Routes>
          <Route path="/Home" element={<Feed/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Schedule" element={<Schedule/>}/>
          <Route path="/Camp" element={<Camp/>}/>
        </Routes>

    </div>
   
  );
}

export default App;
