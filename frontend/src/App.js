import { Toaster } from "react-hot-toast";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Department from "./pages/Department";
import Login from "./pages/Login";

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute
            path="/dashboard"
            component={Dashboard}
            isLoggedIn={isLoggedIn}
          />
          <PrivateRoute
            path="/departments"
            component={Department}
            isLoggedIn={isLoggedIn}
          />
        </Switch>
      </Router>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

// Private Route component for protecting dashboard routes
const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export default App;
