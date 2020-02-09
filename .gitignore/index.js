const discord = require("discord.js")

var tokens = [
    process.env.TOKEN1
]

tokens.forEach(token => {
    var client = new discord.Client()

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

client.login(token)
})
