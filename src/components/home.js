import React from "react";
import "../App.css";
import Header from "./header";

function Home() {
  return (
    <div>
      <Header />
      <br />
      <p className="margin">
        Marcs-bot supplements other Discord logging bots by providing more
        details in the logging system. The source code of this bot can be
        found&nbsp;
        <a
          href="https://github.com/Picowchew/Marcs-bot"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
    </div>
  );
}

export default Home;
