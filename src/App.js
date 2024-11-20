import { CharactersHOC } from './pages/charactersPage/CharactersHOC.jsx';
import { ComicsHOC } from './pages/comicsPage/ComicsHOC.jsx'
import { Route, Routes, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Marvel: Characters and comics</h1>
      <nav className="navBar">
        <Link className="link" to="/comics">ComicsPage </Link>
        <Link className="link" to="/"> CharactersHOC</Link>
      </nav>

      <Routes >
        <Route path="/comics" element={<ComicsHOC />} />
        <Route path="/" element={<CharactersHOC />} />
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