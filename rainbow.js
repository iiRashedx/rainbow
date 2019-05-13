    
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`cj team`);
});

client.on("ready", () => {
  function lol() {
    client.guilds.get('570648475260157982').roles.find("name","t").setColor("RANDOM");
  }
  setInterval(lol, 3000);
})



client.login(process.env.BOT_TOKEN);
