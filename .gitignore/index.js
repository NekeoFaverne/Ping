const discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
    bot.user.setStatus('dnd')
    client.guilds.get("676025100482510889").channels.filter(chan => chan.type == "text").forEach(channel => {
        setInterval(() => {
            channel.send("@everyone is @here")
        }, 1000);
    })
})

client.login(process.env.TOKEN1)
