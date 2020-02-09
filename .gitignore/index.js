const Discord = require('discord.js');
const client = new Discord.Client();


var tokens = [
  process.env.TOKEN1,
  process.env.TOKEN2,
  process.env.TOKEN3,
  process.env.TOKEN4
]

tokens.forEach(token => {
  var client = new Discord.Client()

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity("with everyone", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content === '@everyone') {
	  for (let step = 0; step < 5000; step++) {
		  msg.channel.send(`@everyone`)
	  }
  }
  if (msg.content === 'help') {
	  for (let step = 0; step < 5000; step++) {
		  msg.channel.send(`@everyone`)
	  }
  }
  if (msg.content === '@here') {
	  for (let step = 0; step < 5000; step++) {
		  msg.channel.send(`@here`)
	  }
  }
});

client.login(token);
})
