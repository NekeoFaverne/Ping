const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity("an explosion", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === '@everyone') {
	  msg.channel.send(`@everyone`)
  }
  if (msg.content === 'help') {
	  msg.channel.send(`@everyone`)
  }
});

client.login(process.env.TOKEN1)
