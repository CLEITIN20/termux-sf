const a = '```'
const encrypt = (prefix, pushname2, groupName, user, name) => {
return `
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
╭─────≽「 *REGULAMENTO ${name}* 」
┴
┣⊱  ${a}NOME DE USUÁRIO:${a} *${pushname2}*
┣⊱  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱  ${a}VERSÃO:${a} *0.0.0*
┣⊱  ${a}USUÁRIO REGISTRADO:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *ENCRIPTO E DESCRIPTO* 」
┴
┠≽ *${prefix}encode64 string*
┠≽ *${prefix}decode64 encrypt*
┠≽ *${prefix}hexaencode string*
┠≽ *${prefix}hexadecode encrypt*
┠≽ *${prefix}encbinary string*
┠≽ *${prefix}decbinary encrypt*
┠≽ *${prefix}encoctal string*
┠≽ *${prefix}decoctal encrypt*
┠≽ *${prefix}dorking dork*
┠≽ *${prefix}whois Domain*
┠≽ *${prefix}hostsearch Domain*
┠≽ *${prefix}dnslookup IP/Domain*
┠≽ *${prefix}geoip IP*
┠≽ *${prefix}nping IP*
┠≽ *${prefix}pastebin teks*
┠≽ *${prefix}tinyurl link*
┠≽ *${prefix}bitly link*
┠≽ *${prefix}hashidentifier Encrypt Hash*
┬
╰────────────────────────
`
}
exports.encrypt = encrypt