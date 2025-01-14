const { cmd } = require('../command');

cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' message for fun.",
    category: "fun",
    react: "💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const steps = [
            '*Starting...*',
            '',
            '*Initializing aeot...*',
            '*Grabbing ips...*',
            '',
            '```[██████████] 10%```'                                            ,
            '```[███████████████████] 20%```'                                   ,
            '```[███████████████████████] 30%```'                               ,
            '```[██████████████████████████] 40%```'                            ,
            '```[███████████████████████████████] 50%```'                       ,
            '```[█████████████████████████████████████] 60%```'                 ,
            '```[██████████████████████████████████████████] 70%```'            ,
            '```[██████████████████████████████████████████████] 80%```'        ,
            '```[██████████████████████████████████████████████████] 90%```'    ,
            '```[████████████████████████████████████████████████████] 100%``` ✅',
            '',
            '*System Breach: Successful!*',
            '*Command Execution: Complete!*',
            '',
            '*Sending data in dms...*',
            '_Sended Collected Data_',
            '*Stopping Services...*',
            '',
            '⚠️ *Note:* All actions are for demonstration purposes only.',
            '⚠️ *Reminder:* Ethical hacking is the only way to ensure security.',
            '',
            '> *Staling done*'
        ];

        for (const line of steps) {
            await conn.sendMessage(from, { text: line }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error:* ${e.message}`);
    }
});
