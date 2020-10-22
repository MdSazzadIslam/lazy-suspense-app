import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//route-based code-splitting

const Home = lazy(() => import("./Home"));
const Dashboard = lazy(() => import("./Dashboard"));
const Product = lazy(() => import("./Product"));

const loading = () => <p>Loading...</p>;

export default function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/"
              name="Home Component"
              render={(props) => <Home {...props} />}
            />
            <Route
              exact
              path="/Dashboard"
              name="Dashboard Component"
              render={(props) => <Dashboard {...props} />}
            />

            <Route
              exact
              path="/Product"
              name="Product Component"
              render={(props) => <Product {...props} />}
            />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}
