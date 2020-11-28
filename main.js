const Discord = require('discord.js');

const Keyv = require('keyv');
const keyv = new Keyv('sqlite://path/to/database.sqlite');

keyv.on('error', handleConnectionError);

const config = require('./config.json');

const client = new Discord.Client();

const prefixes = new Keyv('sqlite://path/to.sqlite');

const globalPrefix = config.prefix;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('ModBot is online!');
    client.user.setActivity('for -', {type: "WATCHING"}).catch(console.error);
});

client.on('message', message =>{
    if(!message.content.startsWith(globalPrefix) || message.author.bot) return;

    const args = message.content.slice(globalPrefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if(command === 'permissiontest'){
        client.commands.get('permissiontest').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command === 'prefix'){
        client.commands.get('prefix').execute(message, args);
    }
});

client.login(config.token);