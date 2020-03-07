const Discord = require('discord.js');
const client = new Discord.Client();

var tokens = [
  process.env.TOKEN
]

tokens.forEach(token => {
  var client = new Discord.Client()

client.on('ready', () => {
  console.log('BOT STARTED UP!');
});

client.on('ready', () => {
  client.user.setActivity("med glede!", {url: "https://www.twitch.tv"});
  console.log(`${client.user.tag} running on ${client.guilds.size} guilds with ${client.users.size} users.`);
});

client.on('message', async msg=> {
  if (msg.content == 'Bonjour') {
    msg.channel.send('Bonjour à toi !')
  }
  if (msg.content == 'Mdr') {
    message.react('😂');
  }
  if (msg.content == 'mdr') {
    message.react('😂');
  }
  if (msg.content == 'MDR') {
    message.react('😂');
  }
});
  
 

client.login(token);
});
