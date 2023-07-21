import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Headere from "./Component/Headere";
import Dashboard from "./Pages/Dashboard";
import Dashboarde from "./Pages/Dashboarde";
import Login from "./Pages/Login";
import Logine from "./Pages/Logine";
import Table from "./Pages/Table";
import Table1 from "./Pages/Table1";
import Tablee from "./Pages/Tablee";
import Form from "./Pages/Form";
import Forme from "./Pages/Forme";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path="/" index element={<><Login/></>}/>
 <Route path="/logine" element={<><Logine/></>}/>
  <Route path="/dashboard" element={<><Header/><Dashboard/><Footer/></>}/>
  <Route path="/dashboarde" element={<><Headere/><Dashboarde/><Footer/></>}/>
  <Route path="/form" element={<><Form/></>}/>
  <Route path="/forme" element={<><Forme/></>}/>
  <Route path="/table" element={<><Header/><Table/></>}/>
  <Route path="/tablee" element={<><Headere/><Tablee/></>}/> 
  <Route path="/table1" element={<><Headere/><Table1/></>}/>
 </Routes>
 </BrowserRouter>


   );
}

export default App;
