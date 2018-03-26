import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/containers/spa-layout";

const wrapper = document.getElementById("app");
wrapper ?
  ReactDOM.render(<Layout/>,  wrapper)
:
  false;
