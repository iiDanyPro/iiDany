const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("529229990911279104")
setInterval(function() {
channel.send(`iiDany iiDany iiDany iiDany iiDany`);
}, 30)
})

client.login(process.env.BOT_TOKEN);