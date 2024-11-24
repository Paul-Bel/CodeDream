import styles from './App.module.css';

import { CharactersHOC } from './pages/charactersPage/CharactersHOC.jsx';
import { ComicsHOC } from './pages/comicsPage/ComicsHOC.jsx'
import { Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const charactersLink = "/"
  const comicsLink = "/comics"
  const disabledStyle = { pointerEvents: "none", backgroundColor: '#eee', color: '#4444', }

  const [activePage, setActivePage] = useState(charactersLink)

  const disabledLink = (link) => {
    setActivePage(activePage)
    link === charactersLink ? setActivePage(charactersLink) : setActivePage(comicsLink)
  }
  useEffect(() => {
    window.location.href.includes('comics') && setActivePage(comicsLink)
  },[])

  return (
    <div className={styles.App}>
      <h1>Marvel: Characters and comics</h1>
      <nav className={styles.navBar}>
        <Link
          onClick={() => disabledLink(charactersLink)}
          style={charactersLink === activePage ? disabledStyle : {}}
          className={styles.link} to={charactersLink}> Characters Page</Link>
        <Link
          onClick={() => disabledLink(comicsLink)}
          style={comicsLink === activePage ? disabledStyle : {}}
          className={styles.link} to={comicsLink}>Comics Page </Link>
      </nav>

      <Routes >
        <Route path={charactersLink} element={<CharactersHOC />} />
        <Route path={comicsLink} element={<ComicsHOC />} />
      </Routes>
    </div>
  );
}

export default App;