import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Resume from './Resume/Resume'
import WorkSamples from './Work Samples/WorkSamples'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="work-samples" element={<WorkSamples />} />
          <Route path="*" element={<h2>404 - Page not found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
