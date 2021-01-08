import React from "react";
import "../App.css";
import Header from "./header";

function Commands() {
  return (
    <div>
      <Header />
      <div className="margin">
        <div>
          The default prefix is <code>]</code>.
        </div>
        <p>
          The moderators of the Discord server, as configured through the bot,
          have access to the commands listed under "Moderators" and "Everyone".
          Likewise, the administrators, as per the bot configuration, have
          access to the commands listed under "Administrators," "Moderators,"
          and "Everyone."
        </p>
        <table>
          <caption>Everyone</caption>
          <tr>
            <th scope="col">Command</th>
            <th scope="col">Description</th>
          </tr>
          <tr>
            <th scope="row">github (alias: git)</th>
            <td>Displays the bot's GitHub repository URL</td>
          </tr>
          <tr>
            <th scope="row">list</th>
            <td>Displays a list of all available commands</td>
          </tr>
          <tr>
            <th scope="row">uptime</th>
            <td>Displays the bot's uptime</td>
          </tr>
        </table>
        <br />
        <table>
          <caption>Moderators</caption>
          <tr>
            <th scope="col">Command</th>
            <th scope="col">Description</th>
          </tr>
          <tr>
            <th scope="row">confirm &lt;embed_msg_id&gt; &lt;deleter_id&gt;</th>
            <td>
              This converts the log embed from having a title of "Message
              Deleted (Action Required)" and a field of "Possible Deleters" to
              "Message Deleted By Other User" and "Deleter," respectively. The
              parts of the embed containing the user whose message was deleted,
              as well as the channel, content, and message ID of the deleted
              message, remain the same. Enable "Developer Mode" on Discord to be
              able to obtain the message ID of the embed and the ID of the
              deleter.
            </td>
          </tr>
        </table>
        <br />
        <table>
          <caption>Administrators</caption>
          <tr>
            <th scope="col">Command</th>
            <th scope="col">Description</th>
          </tr>
          <tr>
            <th scope="row">deop</th>
            <td>
              Removes the administrator role, as configured in the bot, from the
              command invoker
            </td>
          </tr>
          <tr>
            <th scope="row">op</th>
            <td>
              Adds the administrator role, as configured in the bot, to the
              command invoker ("op" stands for "operator")
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Commands;
