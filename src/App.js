import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import UnlimitedClasses from './UnlimitedClasses';
import LivestreamGroup from './LivestreamGroup';
import LivestreamPersonal from './LivestreamPersonal';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  // ROUTES ================================== //
  const routes = [
    {
      path: "/classes",
      component: UnlimitedClasses,
      key: "classes",
    },
    {
      path: "/livestream-group",
      component: LivestreamGroup,
      key: "group"
    },
    {
      path: "/livestream-personal",
      component: LivestreamPersonal,
      key: "personal"
    },
    {
      path: "/dashboard",
      component: Dashboard,
      key: "dashboard"
    },
    {
      path: "/login",
      component: Login,
      key: "login"
    }
  ];

  return (
    <BrowserRouter>
      {routes.map((route) => {
        return (
          <Route
            component={route.component}
            path={route.path}
            key={route.key}
            exact={route.exact}
          />
        );
      })}
    </BrowserRouter>
  );
}

export default App;
