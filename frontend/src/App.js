import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from './pages/Landing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
