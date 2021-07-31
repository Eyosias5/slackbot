const { App } = require("@slack/bolt");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Initializes wit token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Listens to incoming messages that contain "hello"
app.message("hello", async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
});
// The echo command simply echoes on command
app.command("/echo", async ({ command, ack, say }) => {
  // Acknowledge command request
  await ack();

  await say(`${command.text}`);
});
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
  // The echo command simply echoes on command
})();
// The echo command simply echoes on command
// Listens to incoming messages that contain "hello"
console.log("YOoo");
