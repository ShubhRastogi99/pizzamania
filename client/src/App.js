import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Topbar from "./components/Topbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import NavBar from "./components/NavBar";
import Homescreen from "./screens/Homescreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Order from "./screens/Order";
import AdminScreen from "./screens/AdminScreen";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <NavBar />
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/terms" component={Terms} exact />
        <Route path="/" component={Homescreen} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/myorder" component={Order} exact />
        <Route path="/admin" component={AdminScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
