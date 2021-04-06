const a = '```'
const menupremium = (prefix, pushname2, groupName, user, name, premium, premi) => {
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
┣⊱  ${a}USUÁRIO PREMIUM:${a} *${premi}*
┣⊱  ${a}USUÁRIO REGISTRADO:${a} *${user.length} Do utilizador*
┬
╰────────────────────────

╭───────≽「 *SOMENTE PREMIUM* 」
┴
┠≽ *${prefix}playmp3 menepi*
┠≽ *${prefix}fb link video*
┠≽ *${prefix}snack link snack video*
┠≽ *${prefix}ytmp3 link yt*
┠≽ *${prefix}ytmp4 link yt*
┠≽ *${prefix}tiktok link video tiktok*
┠≽ *${prefix}joox Monolog Pamungkas*
┠≽ *${prefix}smule Link Video Smule*
┬
╰────────────────────────
`
}
exports.menupremium = menupremium