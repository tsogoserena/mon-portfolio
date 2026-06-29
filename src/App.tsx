
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Portfolio from "./pages/Home"

const App = () => {
  
  return (
  //  <AuthProvider>
       <BrowserRouter>
      <Routes>
        <Route path="home" element={<Portfolio />} />
    </Routes>
      
    </BrowserRouter>
  
  );
};

export default App;

