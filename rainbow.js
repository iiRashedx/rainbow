    
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`cj team`);
});

client.on("ready", () => {
  function lol() {
    client.guilds.get('233524255353077760').roles.find("name","Rainbow").setColor("RANDOM");
  }
  setInterval(lol, 3000);
})



client.login(process.env.BOT_TOKEN);
