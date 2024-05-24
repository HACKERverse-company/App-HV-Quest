import { BrowserRouter, Routes, Route } from "react-router-dom";
import Procyon from './Componens/Procyon/MainLayout'
import Senteon from './Componens/Senteon/MainLayout'
import Heimdall from './Componens/Heimdall/MainLayout'
import Index from "./Componens/Home/Index";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Procyon" element={<Procyon />} />
          <Route path="/Senteon" element={<Senteon />} />
          <Route path="/Heimdall" element={<Heimdall />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
