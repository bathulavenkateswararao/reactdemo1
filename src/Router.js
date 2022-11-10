import React from "react";
import {Home} from  './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {About}   from './About';
import {Services} from './Services'
function App()
{
  return(
   <div>
    <BrowserRouter>
    <Routes> 
      <Route path='/'  element={<Home/>}/>

      <Route path='/About'  element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
    </Routes>
    </BrowserRouter>

   </div>
  )

  
}

export default App