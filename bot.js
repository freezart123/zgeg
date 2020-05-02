const Discord = require('discord.js')
const client = new Discord.Client();

//var token = "Njk4MTkyOTQwNjIyOTM4MjMz.XpCQ4g.jlbmoFbAvpLZF0uxLGq3au7xHMo"
var prefix = "+"
var token = "NjkzODYwMDc4MDA4MTM5ODE2.XoDN9Q.wlrQpAo3x7Ns_2pcYIHQkuK-XNU"

client.on("ready", () => {
	console.log("Ready to fuck ur mum")
	console.log(client.username)
});

client.on('message', async message => {
	// Join the same voice channel of the author of the message
	if(message.content.includes(prefix + 'join')){
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			const dispatcher = connection.play('ryuk.mp3');

dispatcher.on('start', () => {
	console.log('PNL - Ryûk is now playing!');

}); 

dispatcher.on('finish', () => { 
	console.log('PNL - Ryûk has finished playing!');

}); 

dispatcher.on('error', console.error);
	    }
    }
});


client.login(token)