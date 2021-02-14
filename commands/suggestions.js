module.exports = {
    name: 'suggestions',
    permissions: [],
    aliases: ['suggest', 'suggestion'],
    description: "Allows to make a suggestion and have it posted in a channel where people can vote on it.",
    execute(client, message, cmd, args, Discord, botversion){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.reply('suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs)
        .setFooter('Version: ' + botversion)
        .setTimestamp();

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}