const axios = require('axios');
                         const {cmd , commands} = require('../command');

                         cmd({
                             pattern: "define",
                             desc: "📚 Get the definition of a word",
                             react: "🔍",
                             category: "Auther",
                             filename: __filename
                         },
                         async (conn, mek, m, { from, q, reply }) => {
                             try {
                                 if (!q) return reply("❗ Please provide a word to define. Try: .define <word>");

                                 const word = q;
                                 const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

                                 const response = await axios.get(url);
                                 const definitionData = response.data[0];

                                 const definition = definitionData.meanings[0].definitions[0].definition;
                                 const example = definitionData.meanings[0].definitions[0].example || 'No example available';
                                 const synonyms = definitionData.meanings[0].definitions[0].synonyms.join(', ') || 'No synonyms available';

const wordInfo = `
*𝗪𝗼𝗿𝗱*: ${definitionData.word}
*𝗗𝗲𝗳𝗶𝗻𝗶𝘁𝗶𝗼𝗻*: ${definition}
*𝗘𝘅𝗮𝗺𝗽𝗹𝗲*: ${example}
*𝗦𝘆𝗻𝗼𝗻𝘆𝗺𝘀*: ${synonyms}

> *☩ 𝐁𝐥𝐮𝐝𝐌𝐝*`;

                                 return reply(wordInfo);
                             } catch (e) {
                                 console.log(e);
                                 if (e.response && e.response.status === 404) {
                                     return reply("Word not found. Please check the spelling and try again.");
                                 }
                                 return reply("An error occurred while fetching the definition. Please try again later.");
                             }
                         });
