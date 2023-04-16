import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { appRoutes, AppRouteType } from "./route/app";
import Navbar from "./components/Navbar";

const renderRoute = (route: AppRouteType, index: number): JSX.Element => {
  return <Route key={index} path={route.to} element={<route.element />} />;
};
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {appRoutes.map((route, index) => renderRoute(route, index))}
      </Routes>
    </Router>
  );
}

export default App;
