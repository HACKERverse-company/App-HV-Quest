import { BrowserRouter, Routes, Route } from "react-router-dom";
import Procyon from './Pages/Procyon/MainLayout'
import Senteon from './Pages/Senteon/MainLayout'
import Heimdall from './Pages/Heimdall/MainLayout'
import Index from "./Pages/Home/Index";
import HealthCheck from "./Health";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/health" element={<HealthCheck />} />
          <Route path="/Procyon" element={<Procyon />} />
          <Route path="/Senteon" element={<Senteon />} />
          <Route path="/Heimdall" element={<Heimdall />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
