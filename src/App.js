import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./components/Menu/Menu";

function App() {
  return (
      <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
      >
          <Menu/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
          </Routes>
      </ThemeProvider>
  );
}

export default App;
