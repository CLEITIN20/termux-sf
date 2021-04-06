const a = '```'
const groupp = (prefix, pushname2, groupName, user, name, uptime, jam, tanggal, premi, Simihh, Welcomee, ModeAnime, Nsfww, BadWordd, AntiLinkk, AntiVirtexx) => {
return `

╭─────≽「 *REGULAMENTO ${name}* 」
┴
┣⊱>  ${a}NOME DE USUÁRIO:${a} *${pushname2}*
┣⊱>  ${a}CHEQUE PREMIUM:${a} ${premi}
┣⊱>  ${a}LIMITE:${a} *${limitt} perhari*
│
┣⊱>  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱>  ${a}MODO DE BEM-VINDO:${a} *${Welcomee}*
┣⊱>  ${a}MODO SIMI:${a} *${Simihh}*
┣⊱>  ${a}MODO ANIME:${a} *${ModeAnime}*
┣⊱>  ${a}MODO NSFW:${a} *${Nsfww}*
┣⊱>  ${a}MODO DE PALAVRA ANTI RUIM:${a} *${BadWordd}*
┣⊱>  ${a}MODO ANTI LINK:${a} *${AntiLinkk}*
┣⊱>  ${a}MODO ANTI VIRTEX:${a} *${AntiVirtexx}*
│
┣⊱>  ${a}HORA:${a} *${jam} WIB*
┣⊱>  ${a}DATA:${a} *${tanggal}*
┣⊱>  ${a}ATIVO:${a} ${kyun(uptime)}
┣⊱>  ${a}VERSÃO:${a} *0.0.0*
┣⊱>  ${a}USUÁRIO REGISTRADO:${a} *${user.length} User*
┬
╰────────────────────────
╭─────────────
│DONO DO BOT
│
│𝐇𝐄𝐍𝐑𝐈𝐐𝐔𝐄 𝐁𝐎𝐓𝐒
│
│CONTATO DO DONO
│
│https://wa.me/+5527998401752
│
│GRUPO DO DONO DO BOT
│
│ https://chat.whatsapp.com/D6pzWbHSxnPFImv410f2p3
│
│ADICIONA O BOT EM GRUPOS
╰─────────────

╭──≽「 *ATIVAR SE NECESSÁRIO* 」
┴
┠≽ *${prefix}antilink On/Off*
┠≽ *${prefix}welcome On/Off*
┠≽ *${prefix}grup buka/tutup*
┠≽ *${prefix}modeanime On/Off*
┠≽ *${prefix}nsfw On/Off*
┠≽ *${prefix}simih On/Off*
┠≽ *${prefix}antivirtex on/off*
┠≽ *${prefix}badword on/off*
┬
╰────────────────────────
│
╭──────≽「 *ANIME* 」
┴
┠≽ *${prefix}neonime naruto*
┠≽ *${prefix}naruto*
┠≽ *${prefix}minato*
┠≽ *${prefix}boruto*
┠≽ *${prefix}hinata*
┠≽ *${prefix}sakura*
┠≽ *${prefix}sasuke*
┠≽ *${prefix}toukachan*
┠≽ *${prefix}megumin*
┠≽ *${prefix}rize*
┠≽ *${prefix}akira*
┠≽ *${prefix}itori*
┠≽ *${prefix}kurumi*
┠≽ *${prefix}miku*
┠≽ *${prefix}anime*
┠≽ *${prefix}animecry*
┠≽ *${prefix}animekiss*
┬
╰───────────────────────
│
╭──────≽「 *SOMENTE ADMINISTRADOR DE GRUPO* 」
┴
┠≽ *${prefix}fitnah @mentioned/isi/balasan*
┠≽ *${prefix}ownergrup*
┠≽ *${prefix}listonline*
┠≽ *${prefix}setpp*
┠≽ *${prefix}infogrup*
┠≽ *${prefix}add 55(ddd)numero*
┠≽ *${prefix}kick @marcar*
┠≽ *${prefix}kicktime @marcar*
┠≽ *${prefix}promote @marcar*
┠≽ *${prefix}demote @marcar*
┠≽ *${prefix}setname*
┠≽ *${prefix}setdesc*
┠≽ *${prefix}linkgrup*
┠≽ *${prefix}tagme*
┠≽ *${prefix}wame*
┠≽ *${prefix}nyimak*
┠≽ *${prefix}hidetag*
┠≽ *${prefix}tagall*
┠≽ *${prefix}mentionall*
┠≽ *${prefix}adminlist*
┬
╰────────────────────────
│
╭──────≽「 *ANIME HOT* 」
┴
┠≽ *${prefix}nsfwloli*
┠≽ *${prefix}nsfwpussy*
┠≽ *${prefix}nsfwclasic*
┠≽ *${prefix}nsfwyuri*
┠≽ *${prefix}nsfwlewd*
┠≽ *${prefix}nsfwsolo*
┠≽ *${prefix}nsfweron*
┠≽ *${prefix}nsfwparadise*
┠≽ *${prefix}nsfwbigtt*
┠≽ *${prefix}nsfwecchi*
┠≽ *${prefix}nsfwcum*
┠≽ *${prefix}nsfwblowjob*
┠≽ *${prefix}nsfwneko*
┠≽ *${prefix}nsfwtrap*
┠≽ *${prefix}hentai*
┬
╰────────────────────────
`
}
exports.groupp = groupp

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}