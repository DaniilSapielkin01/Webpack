import * as $ from "jquery";
import Post from "@models/Post";
import json from "./assets/json";
import xml from "./assets/data.xml";
import csv from "./assets/data.csv";

import WebpackLogo from "@/assets/logo.png";
import "./babel";
import React from "react";
import { render } from "react-dom";

import "./styles/styles.css";
import "./styles/less.less";
import "./styles/scss.scss";
import "./styles/sass.sass";

const post = new Post("Webpack post title...", WebpackLogo);

$("pre").html(post.toString());

const App = () => (
  <div class="container">
    <h1>WebPack Course</h1>
    <hr />
    <div class="logo"></div>
    <hr />
    <pre class="code"></pre>
    <div class="box">
      <h4>LESS</h4>
    </div>
    <div class="card">
      <h4>SCSS</h4>
    </div>
    <div class="card2">
      <h4>SASS</h4>
    </div>
  </div>
);
render(<App />, document.getElementById("app"));

// console.log("Post to string", post.toString());
// console.log("JSON", json);
// console.log("xml", xml);
// console.log("csv", csv);
