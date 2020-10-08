module.exports = {
  name: "ping",
  async execute(message) {
    message.channel.send("Pong.");
  },
};
