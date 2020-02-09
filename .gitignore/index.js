const Discord = require('discord.js');
const client = new Discord.Client();


var tokens = [
  process.env.TOKEN1,
  process.env.TOKEN2
]

tokens.forEach(token => {
  var client = new discord.Client()

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

client.login(token);
})
