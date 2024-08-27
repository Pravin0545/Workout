import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "../Components/Home";
// import  from "./NoMatch";

const Home = React.lazy(() => import("../Components/Home"));
const NoMatch = React.lazy(() => import("./NoMatch"));
const SignIn = React.lazy(() => import("../Components/Login/SignIn"));
const LogIn = React.lazy(() => import("../Components/Login/LogIn"));
// const Home = React.lazy(() => import("../Components/Home"));

const RoutesLayout: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default RoutesLayout;
