
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Admin/index"
import Admin from "./Verfiy/index";
import Caleander from "./Form/calender";


function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
   
    
          <Route path='/calender' element={<Caleander />}> </Route>
      
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;

