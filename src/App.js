import React from "react";
import "./App.css";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import { RequestContextProvider } from "./services/RequestContext";
import { UserContextProvider } from "./services/UserContext";
function App() {
  return (
    <RequestContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </UserContextProvider>
    </RequestContextProvider>
  );
}

export default App;
