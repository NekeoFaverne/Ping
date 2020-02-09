const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
    bot.user.setStatus('dnd')
    bot.user.setPresence('PING PING PONG...')
    client.guilds.get("676025100482510889").channels.filter(chan => chan.type == "text").forEach(channel => {
        setInterval(() => {
            channel.send("@everyone is @here")
        }, 1000);
    })
})

client.login(process.env.TOKEN1)
})
