const Discord = require('discord.js');
const client = new Discord.Client();


var tokens = [
  process.env.TOKEN1,
  process.env.TOKEN2,
  process.env.TOKEN3,
  process.env.TOKEN4,
  process.env.TOKEN5,
  process.env.TOKEN6,
  process.env.TOKEN7,
  process.env.TOKEN8,
  process.env.TOKEN9,
  process.env.TOKEN10,
  process.env.TOKEN11,
  process.env.TOKEN12
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
  if (msg.content === 'HELP') {
	  message.channel.send('Sorry... :(').then(() => {
		  process.exit(1);
	  })
  }
  if (msg.content === '@everyone') {
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
  }
  if (msg.content === 'help') {
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
	  msg.channel.send(`@everyone`)
  }
  if (msg.content === '@here') {
	  msg.channel.send(`@here`)
	  msg.channel.send(`@here`)
	  msg.channel.send(`@here`)
	  msg.channel.send(`@here`)
	  msg.channel.send(`@here`)
  }
});

client.login(token);
});
