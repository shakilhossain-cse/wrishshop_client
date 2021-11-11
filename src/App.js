import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./pages/shared/Footer/Footer";
import Header from "./pages/shared/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={ Home } exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
