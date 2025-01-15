const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video2

cmd({
    pattern: "song3",
    alias: ["video3", "ytvideo", "ytdl"],
    react: "🎥",
    desc: "Download YouTube video with selectable quality",
    category: "main",
    use: '.play4 <Yt url or Name>',
    filename: __filename
},
async (conn, mek, m, { from, prefix, quoted, q, reply, waitForReply }) => {
    try {
        if (!q) return await reply("𝚃𝚛𝚢 𝚊𝚐𝚊𝚒𝚗 𝚠𝚒𝚝𝚑 𝚢𝚘𝚞𝚝𝚞𝚋𝚎 𝚟𝚒𝚍𝚎𝚘 𝚕𝚒𝚗𝚔 𝚘𝚛 𝚝𝚒𝚝𝚕𝚎");

        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");

        let yts = yt.results[0];

        let ytmsg = `╭━━━〔 *☩ 𝐁𝐥𝐮𝐝𝐌𝐝 ☩* 〕━━━┈⊷
┃▸╭───────────
┃▸┃๏ *𝐕𝐢𝐝𝐞𝐨 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫*
┃▸└───────────···๏
╰────────────────┈⊷
╭━━❐━⪼
┇๏ *𝗧𝗶𝘁𝗹𝗲* -  ${yts.title}
┇๏ *𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻* - ${yts.timestamp}
┇๏ *𝗩𝗶𝗲𝘄𝘀* -  ${yts.views}
┇๏ *𝗖𝗿𝗲𝗮𝘁𝗼𝗿* -  ${yts.author.name}
┇๏ *𝗟𝗶𝗻𝗸* -  ${yts.url}
╰━━❑━⪼`;

        // Send video details
        await conn.sendMessage(from, { image: { url: yts.thumbnail || yts.image || '' }, caption: `${ytmsg}` }, { quoted: mek });

        let quality = "720p"; // Directly set quality to 360p
        const ytdl = await ytmp4(yts.url, quality);
        if (!ytdl.download.url) return reply("𝙵𝚊𝚒𝚕𝚎𝚍 𝚝𝚘 𝚏𝚎𝚝𝚌𝚑 𝚝𝚑𝚎 𝚕𝚒𝚗𝚔.");

        // Send video file
        await conn.sendMessage(from, {
            video: { url: ytdl.download.url },
            mimetype: "video/mp4",
            caption: `> *${yts.title}*\n> *Quality: ${quality}*\n> *☩ 𝐁𝐥𝐮𝐝𝐌𝐝 ☩*`
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(e.message || "𝙴𝚛𝚛𝚘𝚛 𝙾𝚌𝚌𝚞𝚛𝚛𝚎𝚍 𝚃𝚛𝚢 𝙰𝚐𝚊𝚒𝚗 𝙻𝚊𝚝𝚎𝚛.");
    }
});

// play2

cmd({
    pattern: "play3",
    alias: ["audio3","ytdl2","ytsong2"],
    react: "🎶",
    desc: "Download Youtube song",
    category: "main",
    use: '.song < Yt url or Name >',
    filename: __filename
},
async(conn, mek, m,{ from, prefix, quoted, q, reply }) => {
try{

if(!q) return await reply("𝚃𝚛𝚢 𝚊𝚐𝚊𝚒𝚗 𝚠𝚒𝚝𝚑 𝚊𝚗 𝚢𝚝 𝚕𝚒𝚗𝚔.")
	
const yt = await ytsearch(q);
if(yt.results.length < 1) return reply("𝙽𝚘 𝚛𝚎𝚜𝚞𝚕𝚝𝚜 𝚏𝚘𝚞𝚗𝚍!")

let yts = yt.results[0]  
const ytdl = await ytmp3(yts.url)
		
let ytmsg = `╭━━━〔 *☩ 𝐁𝐥𝐮𝐝𝐌𝐝 ☩* 〕━━━┈⊷
┃▸╭───────────
┃▸┃๏ *𝐌𝐮𝐬𝐢𝐜 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫*
┃▸└───────────···๏
╰────────────────┈⊷
╭━━❐━⪼
┇๏ *𝗧𝗶𝘁𝗹𝗲* -  ${yts.title}
┇๏ *𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻* - ${yts.timestamp}
┇๏ *𝗩𝗶𝗲𝘄𝘀* -  ${yts.views}
┇๏ *𝗖𝗿𝗲𝗮𝘁𝗼𝗿* -  ${yts.author.name} 
┇๏ *𝗟𝗶𝗻𝗸* -  ${yts.url}
╰━━❑━⪼
> *☩ 𝐁𝐥𝐮𝐝𝐌𝐝*`
// SEND DETAILS
await conn.sendMessage(from, { image: { url: yts.thumbnail || yts.image || '' }, caption: `${ytmsg}`}, { quoted: mek });

// SEND AUDIO TYPE
await conn.sendMessage(from, { audio: { url: ytdl.download.url }, mimetype: "audio/mpeg" }, { quoted: mek })

// SEND DOC TYPE
await conn.sendMessage(from, { document: { url: ytdl.download.url }, mimetype: "audio/mpeg", fileName: ytdl.result.title + '.mp3', caption: `> *☩ 𝐁𝐥𝐮𝐝𝐌𝐝*` }, { quoted: mek })


} catch (e) {
console.log(e)
reply(e)
}}
)
