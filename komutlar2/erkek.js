const Discord = require('discord.js');//x_REDDAWN_x

exports.run = async (client, message, args) => {//x_REDDAWN_x
//x_REDDAWN_x
let kayityetkili = '' // KAYIT YETKİLİSİ İD //
let ver = '' // VERİLECEK ROL ID 1 //
let al = '' // ALINACAK ROL ID//
let tag = '' //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN

  if(!message.member.roles.has(kayityetkili)) //x_REDDAWN_x
  if(!message.member.hasPermission("ADMINISTRATOR"))//x_REDDAWN_x
  return message.channel.send(`Bu Komutu Sadece Ayarlanmış Yetkililer Kullanabilir. :x:`);//x_REDDAWN_x
  let member = message.mentions.members.first()//x_REDDAWN_x
  let isim = args.slice(1).join(" | ")//x_REDDAWN_x
  if (!member) return message.channel.send('**Bir Üye Etiketlemelisin :x:**')//x_REDDAWN_x
  if (!isim) return message.channel.send('**Bir İsim Yazmalısın :x:**')//x_REDDAWN_x
  
  setTimeout(function(){//x_REDDAWN_x//x_REDDAWN_x//x_REDDAWN_x
  member.setNickname(`${tag}${isim}`)///x_REDDAWN_x//x_REDDAWN_x//x_REDDAWN_x
  },500)//x_REDDAWN_x//x_REDDAWN_x//x_REDDAWN_x
  setTimeout(function(){//x_REDDAWN_x//x_REDDAWN_x//x_REDDAWN_x
  member.addRole(ver)//x_REDDAWN_x//x_REDDAWN_x//x_REDDAWN_x
  },500)//x_REDDAWN_x//x_REDDAWN_x//x_REDDAWN_x
  setTimeout(function(){//x_REDDAWN_x//x_REDDAWN_x//x_REDDAWN_x
  member.removeRole(al)//x_REDDAWN_x//x_REDDAWN_x//x_REDDAWN_x
  },500)//x_REDDAWN_x//x_REDDAWN_x//x_REDDAWN_x
 //x_REDDAWN_x//x_REDDAWN_x//x_REDDAWN_x
  const emoji = client.emojis.find(emoji => emoji.name === "");//x_REDDAWN_x
 let embed = new Discord.RichEmbed()//x_REDDAWN_x
 //x_REDDAWN_x

}; 

exports.conf = { //x_REDDAWN_x
  enabled: true, //x_REDDAWN_x
  guildOnly: true, //x_REDDAWN_x
  aliases: ['erkek'], //x_REDDAWN_x
  permLevel: 0
}
exports.help = { //x_REDDAWN_x
  name: 'e',//x_REDDAWN_x
  description: "kayıt etme komutu.",//x_REDDAWN_x
  usage: 'e <yeni nick>'//x_REDDAWN_x//x_REDDAWN_x//x_REDDAWN_x
}