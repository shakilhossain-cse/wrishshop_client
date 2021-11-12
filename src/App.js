import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Pharches from "./pages/Pharches/Pharches";
import Register from "./pages/Register/Register";
import Footer from "./pages/shared/Footer/Footer";
import Header from "./pages/shared/Header/Header";
import Watches from "./pages/Watches/Watches";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/watches" component={Watches} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/pharches" component={Pharches} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
