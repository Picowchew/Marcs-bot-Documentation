import React from "react";
import "../App.css";
import Header from "./header";

function Setup() {
  return (
    <div>
      <Header />
      <br />
      <div className="margin">
        <div>
          Clone&nbsp;
          <a
            href="https://github.com/Picowchew/Marcs-bot"
            target="_blank"
            rel="noreferrer"
          >
            this
          </a>
          &nbsp;repository. Create a new Discord bot user&nbsp;
          <a
            href="https://discord.com/developers/applications"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          &nbsp;and then invite the bot to your Discord server.
        </div>
        <p>
          Add each of the emojis in the <code>emojis</code> folder to the
          server. Alternatively, you may add the emojis to another Discord
          server, but be sure to invite the bot to that server as well.
        </p>
        <p>
          Edit each of the values in <code>config.json</code>, perhaps with the
          exception of <code>PREFIX</code> if you would like to use the default
          prefix of <code>]</code>. Enable "Developer Mode" on Discord for ease
          in obtaining the IDs.
        </p>
        <p>
          Install Node.js. You may install Node.js&nbsp;
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            here
          </a>
          . In a terminal, change directory to the local git repository and
          type&nbsp;
          <code>npm i</code> to install the dependencies. To run the bot, in the
          same directory, type <code>node .</code> or <code>node index.js</code>
          &nbsp;in the terminal.
        </p>
      </div>
    </div>
  );
}

export default Setup;
