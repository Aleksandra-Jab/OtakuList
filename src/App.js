import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import App from "components/App";

function App() {
  return (
      <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
      >
          <Routes>
              <Route path="/" element={<App />} />
          </Routes>
      </ThemeProvider>
  );
}

export default App;
