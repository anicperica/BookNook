import { Routes, Route } from "react-router-dom";
import DiscoverPage from "./pages/discoverPage/DiscoverPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DiscoverPage />} />
      </Routes>
    </>
  );
}

export default App;
