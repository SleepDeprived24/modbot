module.exports = (Discord, client, message) =>{
    const prefix = '-';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    const botversion = ('2.1.3');

    if(command)command.execute(client, message, args, Discord, botversion);
}