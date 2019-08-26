const Discord = require("discord.js")

exports.run = (client, message, args) => {
    const embedStats = new Discord.RichEmbed()
      .setTitle("**Help** | Click to see website")
      .setFooter("Created by MrScary using discord.js")
      .setURL("http://xpshop.tk/")
      .setColor("RANDOM")
      .setDescription('**\n\n  |!fortnite|!mbytes|!minecraft|!minecraft|!origin|!spotify|!nordvpn\n\n**     !account | !ban | !botinfo |!clear | !invite |!kick |!report |!serverinfo');
    message.channel.send(embedStats);
};