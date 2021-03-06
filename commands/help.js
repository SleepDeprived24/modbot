module.exports = {
    name: 'help',
    permissions: [],
    aliases: ['commands', 'cmd'],
    description: "The bot will DM you a help embed.",
    execute(client, message, cmd, args, Discord, botversion){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Moderation__')
        .setDescription('Here are the current moderation commands.')
        .addFields(
            {name: 'kick', value: "You can use this command to kick a member. \nExample: -kick @Username#1234"},
            {name: 'ban', value: "You can use this command to ban a member. \nExample: -ban @Username#1234"},
            {name: 'mute', value: "You can use this command to mute a member. You can mute them until you decide to unmute them or put them on a timer \nExample: -mute @Username#1234 or -mute @Username#1234 10s \n(s = seconds, m = minutes, d = days, y = years)"},
            {name: 'unmute', value: "You can use this command to unmute a member. \nExample: -unmute @Username#1234"},
            {name: 'clear', value: "You can use this command to clear a certain amount of messages. (including the command you sent) \nExample: -clear 10"}
        )
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        const helpEmbed2 = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Utility__')
        .setDescription("Here are the current utility commands.")
        .addFields(
            {name: 'ping', value: "Shows my current latency. \n Aliases: latency"},
            {name: 'help', value: "The command you just used to see this. \nAliases: commands, cmd"},
            {name: 'code', value: "I will give you a link to the GitHub repository so you can view the code. \nAliases: git, github, repository, github repository"},
            {name: 'suggestions', value: "Allows you to make a suggestion that I will post in a channel for people to vote on. \nAliases: suggest, suggestion"},
            {name: 'invite', value: "I'll give you an invite link so you can add me to your server. \nAliases: inv"}
        )
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        const helpEmbed3 = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Fun__')
        .setDescription("Here are the current fun commands.")
        .addFields(
            {name: '8ball', value: "Basic magic 8ball command. It has 20 repsonses: 10 positive, 5 non-committal responses, and 5 negative responses. \nExample: -8ball Will I have a good day? \nAliases: 8b"},
            {name: 'randomnumber', value: "I will respond with a random number between 1 and 100."},
            {name: 'coinflip', value: "I will flip a coin and tell you if you got heads or tails. \nAliases: flip, headstails"}
        )
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        const helpEmbed4 = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Music__')
        .setDescription("Here are the current music commands.")
        .addFields(
            {name: 'play', value: "I will play a song of your choice in the VC you are currently in. \nExample: -play despacito \nExample: -play https://www.youtube.com/watch?v=kJQP7kiw5Fk"},
            {name: 'skip', value: "I will skip the song currently playing and go to the next one in the queue."},
            {name: 'stop', value: "I will stop playing music and leave the VC."}
        )
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        const helpEmbed5 = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Other__')
        .setDescription("Here are the commands that don't really fit into a category.")
        .addFields(
            {name: 'youtube', value: "I will give you my youtube channel, if I even have one. \nAliases: yt"},
            {name: 'info', value: "I will DM an embed with a little bit of information about the bot. \nAliases: about"}
        )
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        message.author.send(helpEmbed);
        message.author.send(helpEmbed2);
        message.author.send(helpEmbed3);
        message.author.send(helpEmbed4);
        message.author.send(helpEmbed5);
        message.react('📬');
        message.channel.send("You've got mail!");
    }
}


//.addFields(
//    {name: 'help', value: 'This command DMs you the help embed that list all current commands. (the thing you are looking at right now)'},
//    {name: 'ping', value: 'The simple ping command most people use as a test command (may be removed in the future unless I actually make it send latency values)'},
//    {name: 'youtube', value: 'The bot will send you his youtube channel, if he even has one.'},
//    {name: 'permissiontest', value: 'This command has no use (to you atleast). It was made for me to test permission requirement code. (I may also remove this command later as well'}
//)

//.setImage('https://i.imgur.com/O3DHIA5.gif')
//.setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHkaDgLOYmj0KsOTvseK_pYbn4dXnvXmuph13aLzadJ0sMfYbzjkYqNThk-vkB69nGlSU_HQngg&usqp=CAc')