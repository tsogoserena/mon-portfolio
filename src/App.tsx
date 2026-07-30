import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Home";

const App = () => {
  return (
    //  <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate replace={true} to="/home" />} /> */}
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
