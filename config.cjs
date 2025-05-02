const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID |BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiOBT9L3nVGkE+RKu6alBpQERFRbC35iGQgFG+DEGEKf/7Fv0x0w+7s715Sm6Se07OPTc/QZaTElu4AZOfoKDkBhnupqwpMJiAaRVFmII+QJBBMAH5dC0jjy84HVnqOc1SS2/mM9EW3KN3yg1vJmTnQ65TopdP4NEHRRUkJPxDwvrmcot1GooWb5yNPAi5ldXAcXsN5orPzJumXFaJvlaXuvkEHl1GSCjJYq044RRTmFi42UBCv0Y/VWPecgrVJyYKrCa71uIODZSAemRXc0SkwnFUImtfJcrX6K/F5SL2sqGtxLFD6aZBw9XWOm6GfjWFp10VvNQJlK4XzQ3f6JckzjAyEc4YYc2XdbcXROpZs/X9Pi2Ve5uwW11HK4Ekx97FyxrVH4WmMQu1u2Z/jbjbytdEL16ChAoDyUxFv/STW+gErT/jVsWAv82fm3iaDDjnM/EN/fDK5f/oDs1pc6HtctGWJ3q4XEQDinSLvFa2wvMaWVHoShCdzMVX6V+NukcWsSZZ65K7pDfJH/t8ajtXabocW1O08h2PVw+OYnyiD1lF/8QSN64RVZseqrldXe3ndy3U7eyMBqfh2do/1x7k8fG82m+3RXYqsppp2qoWYB3t5tDbHtvU2RXHiF1KB7Uvyaa9B3eqOk+vL7rgxkRgwj/6gOKYlIxCRvKsiwlKH0B02+GQYvaqLpCiU+ZjZRMecuuqWyOuHQqLpSkLHjdeW0adHEM/r5BnEvsJ9EFB8xCXJUYGKVlOGxuXJYxxCSZ//eiDDN/ZW91e0fg+iAgtmZtVRZJD9FHUj00YhnmVsV2ThbNugimYcL/DmDGSxWUnY5VBGp7IDc9OkJVgEsGkxL8eiClG77Fft7tbCDNIkhJMwGydjuWrutFWWdkoqq6rYazOYhX8Rvuo2pssuYN1TqXHWXimYjWS3XqKtqtqKrhBm98uSFAWW1c7pGmdP/1DEjABgY6KlYcUhWsCezm21xvLvnOtXef52pm/XJBEnNQhU9tdYsc2lPE8RvOo0gd3eEiqQy/nnweWsqhZK4WaVzXjaHyfqU8dGsI3EuLPYPKifZbRbRuPLHUj6pZYHYyU8+CQf35xFLzS3GMctsfd3lQK7Sa50j4Z3Gy/d5fD7X7OrYO9hOZMDyQ9H1OUrM8DUZ/Wb35KX41MEJiAoSBIgjwajyVZnijfy291Vw5YFN8yzEAfJK+nBI4bS8JwKAq8PJImyvcu/NEYyfuHRF490+XtlhHBr/2dwQ7tP3HeBOhsxD36n1K8fxj/0nRTqBknplpDNTPl3rLqJbbqu/sgRryuyEvJQIOZe5g+vxSlBR6PH31QJJBFOU3BBJDilGcY9AHNq86WZhblf8CaqaY5f2/IBJZM/W31PUlxyWBagAk/EmVuJPBj/u3UhuaFActTJ8GGP54i0AdpoxbFjkH20TlA7YbWk8Djb7m2kwtUBwAA| "Demon-Slayer~WZj0KrAR",
  PREFIX: process.env.PREFIX || '.',
  //let's add menu captions by lord joel
  BOT_NAME: process.env.BOT_NAME || "Demon Slayer",
  CAPTION: process.env.CAPTION || "> *ᴍᴀᴅᴇ ʙʏ ᴄʀᴇᴡ sʟᴀʏᴇʀ*",
  // don't use my codes without a permission 🙏
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true,
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  AUTOLIKE_STATUS: process.env.AUTOLIKE_STATUS !== undefined ? process.env.AUTOLIKE_STATUS === 'true' : false,
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '🫨', // For liking status updates(stories)
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS !== undefined ? process.env.AUTO_REPLY_STATUS === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'Status viewed',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  /*joel james tech added anti delete cmd*/
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false,
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "Marisel",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "218942841878",
  SUDO_NUMBER: process.env.SUDO_NUMBER || "254740007567",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false,
};

// Debugging: Log the AUTO_BIO value to ensure it's set correctly
console.log("AUTO_BIO from .env:", process.env.AUTO_BIO);
console.log("AUTO_BIO in config:", config.AUTO_BIO);

module.exports = config;
