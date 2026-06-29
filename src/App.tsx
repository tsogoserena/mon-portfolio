
import { BrowserRouter, Routes, Route, Navigate,  } from "react-router-dom";
import Portfolio from "./pages/Home"

const App = () => {
  
  return (
  //  <AuthProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace={true} to="/home"/>}/>
        <Route path="home" element={<Portfolio />} />
    </Routes>
      
    </BrowserRouter>
  
  );
};

export default App;

