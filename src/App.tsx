import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { collectionRoutes, otherRoutes } from "./Route/route";
import InitialRender from "./Collection/InitialRender";

const App = () => {
  // Combine all route groups
  const allRoutes = [...collectionRoutes, ...otherRoutes];

  return (
    <Router>
      <Routes>
        <Route element={<InitialRender />}>
          {allRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
