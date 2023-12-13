import NavbarCustom from './Navbar'
import { Routes, Route, HashRouter} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Footer from './Footer'

function App() {
  return (
    <HashRouter>
    <div className="App">
      <NavbarCustom></NavbarCustom>
      <div className="content p-3">
        <Routes>
        <Route path="*" element={<Home />}>
          </Route>
          <Route path="/portfolio" element={<Home />}>
          </Route>
          <Route path="/portfolio" element={<Home />}>
          </Route>
          <Route path="/portfolio/#/about" element={<About />}>
          </Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  </HashRouter>
  );
}

export default App;
