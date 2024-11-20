import { PageHOC } from './pages/PageHOC.jsx';
import { ComicsPage } from './pages/comicsPage/ComicsPage.jsx'
import { Route, Routes, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Marvel</h1>
      <nav className="navBar">
        <Link className="link" to="/characters">ComicsPage </Link>
        <Link className="link" to="/"> PageHOC</Link>
      </nav>

      <Routes >
        <Route path="/" element={<ComicsPage />} />
        <Route path="characters" element={<PageHOC />} />
      </Routes>
    </div>
  );
}

export default App;

// <Routes>
//   <Route path="/" element={<Home />} />
// +  <Route path="dashboard">
// +    <Route path="*" element={<Dashboard />} />
// +  </Route>
// </Routes>