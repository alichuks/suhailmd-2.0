const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254757874574";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_43_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkzLFxuICAgICAgICA1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYyLFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExLFxuICAgICAgICAzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDc1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc0LFxuICAgICAgICA1MSxcbiAgICAgICAgNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICA4MixcbiAgICAgICAgMTE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1LFxuICAgICAgICAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODEsXG4gICAgICAgIDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDcwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDc4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOFdSZzV5Rm1YL2JxbVFhNnZaV1o0VkszTDdtaExsUm9jRGw0ZGx2Vm4wND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidV9QcnZ3UExUa0NvRE9KYlZjN0ZzZ1wiLFxuICBcInBob25lSWRcIjogXCJjNmFhMDM5NC1mZmI5LTQ3ZDItYjIxYy1lM2Q1YjQwZjA2MzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgODAsXG4gICAgICAyMjAsXG4gICAgICAxMSxcbiAgICAgIDEwMyxcbiAgICAgIDI0MyxcbiAgICAgIDUyLFxuICAgICAgMyxcbiAgICAgIDE4OSxcbiAgICAgIDE0MSxcbiAgICAgIDQsXG4gICAgICAxMyxcbiAgICAgIDc4LFxuICAgICAgMTY5LFxuICAgICAgMjUwLFxuICAgICAgMjMzLFxuICAgICAgMjI0LFxuICAgICAgMjE0LFxuICAgICAgMTEsXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAxMjgsXG4gICAgICA3MSxcbiAgICAgIDc5LFxuICAgICAgMTEyLFxuICAgICAgMTA5LFxuICAgICAgMTIwLFxuICAgICAgMjM5LFxuICAgICAgMTEwLFxuICAgICAgNzUsXG4gICAgICAxMDQsXG4gICAgICA3NCxcbiAgICAgIDE2OCxcbiAgICAgIDE0MixcbiAgICAgIDEwNCxcbiAgICAgIDIyMSxcbiAgICAgIDE1NyxcbiAgICAgIDU2LFxuICAgICAgMjI1LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRksyU00yVDZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1Nzg3NDU3NDo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkzMzA4NzY2NjMxNzo2OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKN0w4ZmNCRU1XRmdyc0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxQSExveWhET05PWmtKNXpYTWVmWmszbTJVM2lMYzc2cnNKYWFTVVA3V0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR1BsTUgvT0hLcC9LY0E2c2IzdFpkREdFMDQ1Vy9wWGxyUHpuUm41OHMvL3JBTFJSc1d0djZNTXFXYndVd0dsUUhIVDVKemhYVDhaUjhaK1dndzB4Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSjRsWWJaeGJHY0ZtYlY4Rm11U0ZKTFMwcjBzT1V2QzNlcTB0QVRITHorVXBHNUNpdUo1TWtHbHk0V3ZMM3RuMHgwSFN2UFB5elB3OGVubFdsQ1VZZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU3ODc0NTc0OjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDM3ODE4NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNXOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1c5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGxaYy92a2xMaG5sUEFYUmRUSExkV3BaaXp3STRFTnpDd3ZGV1FTa29sST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTk4NTc1NjUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzM0Mzc3NjkzOTQwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
