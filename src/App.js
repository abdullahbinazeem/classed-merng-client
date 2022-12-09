import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import PrivateRoute from "./util/AuthRoute";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";

import Resources from "./pages/Resources";
import ScenePage from "./pages/Acts/Act1ScenePage";

import Act1ScenePage from "./pages/Acts/Act1ScenePage";
import Act2ScenePage from "./pages/Acts/Act2ScenePage";
import Act3ScenePage from "./pages/Acts/Act3ScenePage";
import Act4ScenePage from "./pages/Acts/Act4ScenePage";
import Act5ScenePage from "./pages/Acts/Act5ScenePage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <img
            src={require("./img/bg.svg").default}
            className="watermark"
            alt=""
          />
          <Routes>
            <Route exact path="/resources" element={<Resources />} />
            <Route
              exact
              path="/scenesummaries/act1"
              element={<Act1ScenePage />}
            />
            <Route
              exact
              path="/scenesummaries/act2"
              element={<Act2ScenePage />}
            />
            <Route
              exact
              path="/scenesummaries/act3"
              element={<Act3ScenePage />}
            />
            <Route
              exact
              path="/scenesummaries/act4"
              element={<Act4ScenePage />}
            />
            <Route
              exact
              path="/scenesummaries/act5"
              element={<Act5ScenePage />}
            />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<PrivateRoute />}>
              <Route exact path="/login" element={<Login />} />
            </Route>
            <Route exact path="/register" element={<PrivateRoute />}>
              <Route exact path="/register" element={<Register />} />
            </Route>
            <Route exact path="/posts/:postId" element={<SinglePost />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
