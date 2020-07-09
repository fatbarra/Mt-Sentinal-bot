const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const jsonfile = require("jsonfile");
const axios = require("axios");



var prefix = "?";

client.once('ready', () => {
    console.log('Ready!');
    
});

var stats = {};

if (fs.existsSync("stats.json")){
    stats = jsonfile.readFileSync("stats.json");
}



client.on("guildMemberAdd", function(member){
    //message.channel.send("Welcome " + member.username + "\n Are player count is now:" + message.guild.memberCount);
    //member.send("Hello Welcome To Mount Sentinal.")

    const embed = new Discord.MessageEmbed();

    embed.setColor('#b81fa1')
    embed.setTitle("Welcome to Mount Centinal")
    embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
    embed.setDescription("Hello Thanks for joining!\n Make sure to read #rules\n also to use me do ?help\nAre player count is now: " + member.guild.memberCount);
    embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

    

    member.send({embed}).catch(console.error);

    let role = "714149303433822250";
    //let member1 = (client.user.id); 
    member.roles.add(role).catch(console.error);



});




client.on("message", message =>{
    console.log(message.author.username + ": "+ message.content);
});


client.on("message", message =>{

    if (message.author === client.user) {
        return;
    }

    if (message.guild.id in stats === false) {
        stats[message.guild.id] = {};
    }

    const guildStats = stats[message.guild.id];

    if (message.author.id in guildStats === false) {
        guildStats[message.author.id] = {
            xp: 0,
            level: 0,
            last_msg: 0,
            bal: 0
        };
    }


    const user_stats = guildStats[message.author.id];

    if (Date.now() - user_stats.last_msg > 60000){

        user_stats.xp += Math.floor(Math.random() * 15) + 5;

        user_stats.last_msg = Date.now();

        const NextLevel = 5 * Math.pow(user_stats.level, 2) + 50 * user_stats.level + 100;

        if (user_stats.xp >= NextLevel){
            user_stats.level++;
            user_stats.xp = user_stats.xp - NextLevel;
            user_stats.bal += Math.floor(Math.random() * 5) + 1;
            jsonfile.writeFileSync("stats.json", stats);
            message.channel.send(message.author.username + " Has Reached level " + user_stats.level + " Welldone!")
        }

        jsonfile.writeFileSync("stats.json", stats);


    }

    if (message.content ==="Hi Bot") {
        //message.channel.send("Hello " + message.author.username);
        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("Hello " + message.author.username)
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
        

        message.channel.send({embed});
    }

    if (message.content === "F") {
        //message.channel.send("F");

        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("F")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
        

        message.channel.send({embed});
    }

    if (message.content === "OwO") {
        //message.channel.send("OwO");
        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("OwO")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
        

        message.channel.send({embed});
    }

    if (message.content === "send base cords") {
        //message.channel.send("NO POO FACE");
        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("NOO POO FACE")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
        

        message.channel.send({embed});
    }

    if (message.content === "send ip") {
        message.channel.send("196.");
        setTimeout(wait, 2000)
        function wait(){
            message.channel.send("...");
            setTimeout(wait2, 2000)
            function wait2(){
                message.channel.send("NO");
            }
        }

    }
    if (message.content === "?debug"){
        console.log (message.guild.roles);
    }


    if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { //if it contains an invite link
        message.delete() //delete the message
        //message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**')
        const embed = new Discord.MessageEmbed();

        embed.setColor('#bf241f')
        embed.setTitle("Link Deleted:\n**Invite links are not permitted on this server**")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
        

        message.channel.send({embed});
    }

    if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { //if it contains an invite link
        message.delete() //delete the message
        //message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**')
        const embed = new Discord.MessageEmbed();

        embed.setColor('#bf241f')
        embed.setTitle("Link Deleted:\n**Invite links are not permitted on this server**")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
        

        message.channel.send({embed});
    }
    
    if (message.content.includes('www.youtube.com/channel/')) { //if it contains an invite link
        if (message.author.id === "428232628152303637"){
            return;
        }
        else{
            message.delete() //delete the message
            //message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**')
            const embed = new Discord.MessageEmbed();

            embed.setColor('#bf241f')
            embed.setTitle("Link Deleted:\n**Youtube Channel links are not permitted on this server**")
            embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
            //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
            

            message.channel.send({embed});
        }
    }

    if (message.content.includes('www.twitch.tv/')) { //if it contains an invite link
        if (message.author.id === "428232628152303637"){
            return;
        }
        else{
            message.delete() //delete the message
            //message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**')
            const embed = new Discord.MessageEmbed();

            embed.setColor('#bf241f')
            embed.setTitle("Link Deleted:\n**Twitch links are not permitted on this server**")
            embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
            //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
            

            message.channel.send({embed});
        }
    }

    if (message.content.includes('www.youtube.com/channel/')) { //if it contains an invite link
        if (message.author.id === "707287691783569518"){
            message.delete() //delete the message
            //message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**')
            const embed = new Discord.MessageEmbed();

            embed.setColor('#bf241f')
            embed.setTitle("Link Deleted:\n**Youtube links are not permitted on this server**")
            embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
            //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
            

            message.channel.send({embed});
        }
        else{
            return;
        }
    }


});





client.on('message', async message => {

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    const guildStats = stats[message.guild.id];
    const user_stats = guildStats[message.author.id];

    if (message.author === client.user){return;}

    if (!message.content.startsWith(prefix) || message.author.bot){ 
        return;
    }

    else if (command === "help"){
        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("Help")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription("Help Commands:\nMadmegsox programed this bot just for you :)\nprefix = ?\nlevel - sends level info\nlevel-other <taggedUser> - sends back the tagged users level data\nbal - Displays Balence\nbal-other <taggedUser> - Displays balance of others\npay <taggedUser> <Amount>\ngamble <amount> - 10% chance of doubling 1% chance of tripling\nHi Bot (no prefix needed) - Sends a messege back to you\nserver-info - Displays server stats\navatar - displays a like to your avatar\nnasa - sends nasa's picture of the day\nqueue - Displays 2b2t queue length\nmeme - sends a random meme\nstats <Mc Username> - sends back 2b2t stats of the player\nseen <Mc Username> - sends back when the player was last online on 2b2t\nbible <passage> - reterns a bible passage\nThe <> is where you insert something make sure not to put them into the command\nCredit for some of the command ideas goes to Barakoli Obama")
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
        

        message.channel.send({embed});
    }

    else if (command === "level"){
        const NextLevel = 5 * Math.pow(user_stats.level, 2) + 50 * user_stats.level + 100;
        const xp_left = NextLevel - user_stats.xp

        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("Level")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription(message.author.username + " Level data:\n" +"Level: " + user_stats.level + "\nXp: " + user_stats.xp + "\nXp needed for next level: " + NextLevel + "\nXp left: " + xp_left);
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        

        message.channel.send({embed});
    }

    else if (command === "level-other"){
        const taggedUser = message.mentions.users.first();

        if(!message.mentions.users.size){
            return message.reply("You need to tag a user!")
        }

        const tagged_stats = guildStats[taggedUser.id];

        const NextLevel = 5 * Math.pow(tagged_stats.level, 2) + 50 * tagged_stats.level + 100;
        const xp_left = NextLevel - tagged_stats.xp
        ///message.channel.send(taggedUser.username + "\nLevel: " + tagged_stats.level + "\nXp: " + tagged_stats.xp + "\nXp needed for next level: " + NextLevel + "\nXp left: " + xp_left)
        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("Level-other")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription(taggedUser.username + "\nLevel: " + tagged_stats.level + "\nXp: " + tagged_stats.xp + "\nXp needed for next level: " + NextLevel + "\nXp left: " + xp_left);
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        

        message.channel.send({embed});


        
    }

    else if (command === "bal"){
        ///message.channel.send (message.author.username + ":\nBalance: £" + user_stats.bal)

        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("Your Balance")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription(message.author.username + ":\nBalance: £" + user_stats.bal);
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        message.channel.send({embed});


        
    }

    else if (command === "bal-other"){

        const taggedUser = message.mentions.users.first();

        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user!');
        }

        const tagged_stats = guildStats[taggedUser.id];

        ///message.channel.send (taggedUser.username + ":\nBalance: £" + tagged_stats.bal)

        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("Bal-Other")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription(taggedUser.username + ":\nBalance: £" + tagged_stats.bal);
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        message.channel.send({embed});

        
    }

    else if (command === "give"){
        if (message.author.id === "428232628152303637"){
            amount = args[0];
            int_amount = parseInt(amount)
            user_stats.bal += int_amount;
            message.delete();
            jsonfile.writeFileSync("stats.json", stats);

        }
        else{
            //message.reply("You Really think that would work lol!")
            embed.setColor('#b81fa1')
            embed.setTitle("You Really think that would work lol!")
            embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
            embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
            
    
            message.channel.send({embed});
        }
    
    }

    else if (command === "pay"){//payment
        const taggedUser = message.mentions.users.first();


        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user!');
        }
        console.log(guildStats[taggedUser.id])

        const tag_stats = guildStats[taggedUser.id];


        amount = args[2];

        if (amount > user_stats.bal){
            //message.reply("You dont have enough")
            const embed = new Discord.MessageEmbed();

            embed.setColor('#b81fa1')
            embed.setTitle("You dont have enough")
            embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
            //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
            
    
            message.channel.send({embed});
        }

        else if (amount == null){
            //message.reply("Try and put a space in between tag and amount, No negitive numbers as well")
            const embed = new Discord.MessageEmbed();

            embed.setColor('#b81fa1')
            embed.setTitle("Try and put a space in between tag and amount, No negitive numbers as well")
            embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
            //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
            
    
            message.channel.send({embed});
        }
        else if (amount === undefined){message.reply("Please enter an amount"); return;}

        else if (amount < 1){
            //message.reply("No Negitive numbers!")
            const embed = new Discord.MessageEmbed();

            embed.setColor('#b81fa1')
            embed.setTitle("No Negitive numbers!")
            embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
            //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
            
    
            message.channel.send({embed});
        }
        else{

        //message.channel.send(message.author.username + " Payed " + taggedUser.username + " £" + amount);
        const embed = new Discord.MessageEmbed();

        embed.setColor('#c73030')
        embed.setTitle("PAYMENT")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription(message.author.username + " Payed " + taggedUser.username + " £" + amount);
        embed.setTimestamp()
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        message.channel.send({embed});




        Int_amount = parseInt(amount)

        new_user_stats = (user_stats.bal - Int_amount);

        user_stats.bal = new_user_stats
        tag_stats.bal += Int_amount;
        console.log("done!")

        jsonfile.writeFileSync("stats.json", stats);

        }
    }

    else if (command === "gamble"){

        amount = args[0]

        if (amount > user_stats.bal){message.reply("You Dont have egnoth"); return;}

        else if (message.content == null){message.reply("please entet an amout"); return;}

        else if (amount === undefined){message.reply("please entet an amout"); return;}

        else if (amount == null){return;}


        else if (amount < 10){message.reply("Min bet is £10"); return;}



        message.channel.send(message.author.username + " gambled £" + amount)
        int_amount = parseInt(amount)
        new_user_stats = (user_stats.bal - int_amount)
        user_stats.bal = new_user_stats;
        num = Math.floor(Math.random() * 100) + 1;
        if (num > 90){
            message.reply("welldone you have quadrupled the amount you put in!")
            user_stats.bal === user_stats.bal * 4
            message.channel.send("You now have: £" + user_stats.bal);

        }
        else if (num === 50){
            message.reply("welldone you have won the jackpot!")
            user_stats.bal === user_stats.bal * 10
            message.channel.send("You now have: £" + user_stats.bal)

        }
        else{
            message.reply("You lost all the money you put in!")
        }


    }

    else if (command === "user-info-other"){

        const taggedUser = message.mentions.users.first();

        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user!');
        }

        const tagged_stats = guildStats[taggedUser.id];

        //message.channel.send("Username: " + taggedUser.username + "\nUser id: " + taggedUser.id );

        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("Username: " + taggedUser.username + "\nUser id: " + taggedUser.id);
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
        

        message.channel.send({embed});
        
    }



    else if (command === "user-info"){
        message.channel.send("Username: " + message.author.username + "\nUser id: " + message.author.id );

        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("Username: " + message.author.username + "\nUser id: " + message.author.id)
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
        

        message.channel.send({embed});
        
    }
    else if (command === "server-info") {
        message.channel.send("Server name: " + message.guild.name + "\nNumber of members: " + message.guild.memberCount);
        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("Server name: " + message.guild.name + "\nNumber of members: " + message.guild.memberCount)
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
        

        message.channel.send({embed});
    }

    else if (command === "avatar"){
        //message.reply("You Avatar is: " + message.author.displayAvatarURL({format: "png", dynamic: true}));

        const embed = new Discord.MessageEmbed();

        embed.setColor('#b81fa1')
        embed.setTitle("You Avatar is: ")
        embed.setImage(message.author.displayAvatarURL({format: "png", dynamic: true}));
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
        

        message.channel.send({embed});

    }

    else if (command === "input"){
        if (message.author.id === "428232628152303637"){
            message.delete();
            msg = message.content.slice(6);
            message.channel.send(msg);
        }
    }

    else if (command === "nasa"){
        let get_nasa = async () => {
            let respones = await axios.get("https://api.nasa.gov/planetary/apod?api_key=pQN1CzIfnFTT8pJ7SD9EigUsisFuqkuHqKRL9sbd");
            let nasa_pic = respones.data
            return nasa_pic;
        }
        let nasa_value = await get_nasa();
        ///message.reply("NASA's image of the day:\n" + nasa_value.explanation + "\n" + nasa_value.url)

        const embed = new Discord.MessageEmbed();

        embed.setColor('#32b7d1')
        embed.setTitle("Nasa's image of the day")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription("NASA's image of the day:\n" + nasa_value.explanation);
        embed.setImage(nasa_value.url)
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        message.channel.send({embed});

    }

    else if (command === "queue"){
        let get_queue = async () => {
            let respones = await axios.get("https://2b2t.io/api/queue");
            let queue_time = respones.data
            return queue_time;
        }
        let get_prioqueue = async () => {
            let respones = await axios.get("https://2b2t.io/api/prioqueue");
            let prio_queue_time = respones.data
            return prio_queue_time;
        }
        let get_online = async () => {
            let respones = await axios.get("https://2b2t.io/api/pingstats")
            let online = respones.data
            return online;
        }
        let online_value = await get_online();
        let queue_value = await get_queue();
        let prio_queue_value = await get_prioqueue();
        //message.channel.send("Normal queue length: " + queue_value[0][1] + "\nPriority queue length: " + prio_queue_value[0][1] + "\nPlayers online: " + online_value[0][1]);

        const embed = new Discord.MessageEmbed();

        embed.setColor('#6cd132')
        embed.setTitle("2b2t queue")
        embed.setURL("https://2b2t.io/")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription("Normal queue length: " + queue_value[0][1] + "\nPriority queue length: " + prio_queue_value[0][1] + "\nPlayers online: " + online_value[0][1]);
        embed.setThumbnail("https://pbs.twimg.com/profile_images/756987973145595904/plQqchnm_400x400.jpg")
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        message.channel.send({embed});



    }

    else if (command === "meme"){
        let get_meme = async () => {
            let respones = await axios.get("https://meme-api.herokuapp.com/gimme")
            let meme_time = respones.data
            return meme_time;
        }

        let meme_value = await get_meme();
        //message.channel.send("Meme\n" + meme_value.title + "\n" + meme_value.url)

        const embed = new Discord.MessageEmbed();

        embed.setColor('#d15f32')
        embed.setTitle("Random meme from r/meme")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription("Meme\n" + meme_value.title);
        embed.setImage(meme_value.url)
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        message.channel.send({embed});
    }

   


    else if (command === "seen"){

        let get_seen = async () => {
            name = args[0];
            if (name === undefined){
                //message.reply("Please enter a player name!")
                const embed = new Discord.MessageEmbed();

                embed.setColor('#b81fa1')
                embed.setTitle("Please Enter a Player name!")
                embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
                //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
                
        
                message.channel.send({embed});
            }
            else if (!args.length){
                //message.reply("Please enter a player name!")
                const embed = new Discord.MessageEmbed();

                embed.setColor('#b81fa1')
                embed.setTitle("Please Enter a Player name!")
                embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
                //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
                
        
                message.channel.send({embed});
            }
            let respones = await axios.get("https://api.2b2t.dev/seen?username=" + name);
            
            
            let seen_pic = respones.data
            return seen_pic;
        }
        let seen_value = await get_seen();

        url = "http://tools.glowingmines.eu/avatar/"+ name + "/64/helm"

        //message.reply(name + " was last online on: " + seen_value[0].seen + " EDT")

        const embed = new Discord.MessageEmbed();

        embed.setColor('#6cd132')
        embed.setTitle("2b2t Seen")
        embed.setURL("https://2b2t.io/")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription(name + " was last online on: " + seen_value[0].seen + " EDT");
        embed.setThumbnail(url)
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        message.channel.send({embed});
        
    }

    else if (command === "stats"){

        let get_stats = async () => {
            name = args[0];
            if (name === undefined){
                //message.reply("Please enter a player name!")
                const embed = new Discord.MessageEmbed();

                embed.setColor('#b81fa1')
                embed.setTitle("Please Enter a Player name!")
                embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
                //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
                
        
                message.channel.send({embed});
            }
            else if (!args.length){
                //message.reply("Please enter a player name!")
                const embed = new Discord.MessageEmbed();

                embed.setColor('#b81fa1')
                embed.setTitle("Please Enter a Player name!")
                embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
                //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
                
        
                message.channel.send({embed});
            }
            let respones = await axios.get("https://api.2b2t.dev/stats?username=" + name);
            let stats_pic = respones.data
            return stats_pic;
        }
        let seen_stats = await get_stats();
        //message.channel.send(name + ": " + "\nKills: " + seen_stats[0].kills + "\nDeaths: " + seen_stats[0].deaths + "\nJoins: " + seen_stats[0].joins + "\nKD: " + seen_stats[0].kills / seen_stats[0].deaths)

        url = "http://tools.glowingmines.eu/avatar/"+ name + "/64/helm"
        const embed = new Discord.MessageEmbed();

        embed.setColor('#6cd132')
        embed.setTitle("2b2t Player Stats")
        embed.setURL("https://2b2t.io/")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription(name + ": " + "\nKills: " + seen_stats[0].kills + "\nDeaths: " + seen_stats[0].deaths + "\nJoins: " + seen_stats[0].joins + "\nKD: " + seen_stats[0].kills / seen_stats[0].deaths);
        embed.setThumbnail("https://pbs.twimg.com/profile_images/756987973145595904/plQqchnm_400x400.jpg")
        embed.setThumbnail(url)
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        message.channel.send({embed});
    }



    else if (command === "last-death"){

        let get_death = async () => {
            name = args[0];
            if (name === undefined){
                //message.reply("Please enter a player name!")
                const embed = new Discord.MessageEmbed();

                embed.setColor('#b81fa1')
                embed.setTitle("Please Enter a Player name!")
                embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
                //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
                
        
                message.channel.send({embed});
            }
            else if (!args.length){
                //message.reply("Please enter a player name!")
                const embed = new Discord.MessageEmbed();

                embed.setColor('#b81fa1')
                embed.setTitle("Please Enter a Player name!")
                embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
                //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
                
        
                message.channel.send({embed});
            }
            let respones = await axios.get("https://api.2b2t.dev/stats?lastdeath=" + name);
            let death_pic = respones.data
            return death_pic;
        }
        let death_stats = await get_death();
        //message.channel.send(name + " Last diead: \n" + death_stats[0].date + " " + death_stats[0].time + " EDT\nDeath message: " + death_stats[0].message)

        url = "http://tools.glowingmines.eu/avatar/"+ name + "/64/helm"
        const embed = new Discord.MessageEmbed();

        embed.setColor('#6cd132')
        embed.setTitle("2b2t Last Death")
        embed.setURL("https://2b2t.io/")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription(name + " Last diead on the: \n" + death_stats[0].date + " " + death_stats[0].time + " EDT\nDeath message: " + death_stats[0].message);
        embed.setThumbnail("https://pbs.twimg.com/profile_images/756987973145595904/plQqchnm_400x400.jpg")
        embed.setThumbnail(url)
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        message.channel.send({embed});
    }

    else if (command === "last-kill"){

        let get_kill = async () => {
            name = args[0];
            if (name === undefined){
                //message.reply("Please enter a player name!")
                const embed = new Discord.MessageEmbed();

                embed.setColor('#b81fa1')
                embed.setTitle("Please Enter a Player name!")
                embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
                //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
                
        
                message.channel.send({embed});
            }
            else if (!args.length){
                //message.reply("Please enter a player name!")
                const embed = new Discord.MessageEmbed();

                embed.setColor('#b81fa1')
                embed.setTitle("Please Enter a Player name!")
                embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
                //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
                
        
                message.channel.send({embed});
            }
            let respones = await axios.get("https://api.2b2t.dev/stats?lastkill=" + name);
            let kill_pic = respones.data
            return kill_pic;
        }
        let kill_stats = await get_kill();
        //message.channel.send(name + " Last kill was: \n" + kill_stats[0].date + " " + kill_stats[0].time + " EDT\nKill message: " + kill_stats[0].message)

        url = "http://tools.glowingmines.eu/avatar/"+ name + "/64/helm"
        const embed = new Discord.MessageEmbed();

        embed.setColor('#6cd132')
        embed.setTitle("2b2t Last Kill")
        embed.setURL("https://2b2t.io/")
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription(name + " Last kill was: \n" + kill_stats[0].date + " " + kill_stats[0].time + " EDT\nKill message: " + kill_stats[0].message);
        embed.setThumbnail("https://pbs.twimg.com/profile_images/756987973145595904/plQqchnm_400x400.jpg")
        embed.setThumbnail(url)
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        message.channel.send({embed});
    }
    

    else if (command === "bible"){
        let get_bible = async () => {
            name = args[0];
            name2 = args[1];
            name3 = (name + "%20" + name2)
            if (name === undefined){
                //message.reply("Please enter a bible verse e.g. john 3:16!")
                const embed = new Discord.MessageEmbed();

                embed.setColor('#b81fa1')
                embed.setTitle("Please Enter a bible verse e.g. john 3:16!")
                embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
                //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
                
        
                message.channel.send({embed});
            }
            else if (!args.length){
                //message.reply("Please enter a bible verse!")
                const embed = new Discord.MessageEmbed();

                embed.setColor('#b81fa1')
                embed.setTitle("Please Enter a bible verse e.g. john 3:16!")
                embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
                //embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")
                
        
                message.channel.send({embed});
            }
            let respones = await axios.get("https://bible-api.com/" + name3);
            let bible_pic = respones.data
            return bible_pic;
        }
        let bible_stats = await get_bible();
        //message.channel.send(name + " " + name2 + "\n" + bible_stats.text)

        const embed = new Discord.MessageEmbed();

        embed.setColor('#096e67')
        embed.setTitle("The Holy Bible:\n" + name + " " + name2)
        embed.setAuthor(client.user.username ,client.user.displayAvatarURL({format: "png", dynamic: true}));
        embed.setDescription(bible_stats.text);
        embed.setThumbnail("https://pngimg.com/uploads/christian_cross/christian_cross_PNG14.png")
        embed.setFooter("This Bot Was Created by Madmegsox", "https://i.ya-webdesign.com/images/christian-vector-crusader-cross-17.png")

        message.channel.send({embed});


        
    }




});

client.login('NzE1MzIxMzAzNzI0NDU4MDU3.XtA8Cg.4-DJsfegzw2rYG-ywLEkt_Ivi2E');