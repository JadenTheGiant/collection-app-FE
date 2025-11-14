import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { collectionRoutes, otherRoutes } from "./Route/route";
import InitialRender from "./Collection/InitialRender";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<InitialRender />}>
          {otherRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {/* Default route: redirect / to /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Route>
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<InitialRender />}>
            {collectionRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
