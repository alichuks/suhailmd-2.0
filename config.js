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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_01_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg1LFxuICAgICAgICA5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDQxLFxuICAgICAgICA0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDgsXG4gICAgICAgIDgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMixcbiAgICAgICAgMjI3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDcyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDMyLFxuICAgICAgICA3MixcbiAgICAgICAgMTMzLFxuICAgICAgICA2LFxuICAgICAgICA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUXBnVFNMUkZEaUV3bWRueUZXYnlCaXNKSnczbUdFb2pWTGtmQUZydGtURT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicmhRT01aNWVSUmF5TTN6cFdRTWZBUVwiLFxuICBcInBob25lSWRcIjogXCJmODZmMDFmNy03OGM1LTRmYTMtYjdjZS00YjI2NWYyZjA3NmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgNDIsXG4gICAgICAxMDcsXG4gICAgICAxODYsXG4gICAgICAxLFxuICAgICAgOTIsXG4gICAgICAyMDcsXG4gICAgICA4OCxcbiAgICAgIDEyNCxcbiAgICAgIDY4LFxuICAgICAgMjAyLFxuICAgICAgMjQzLFxuICAgICAgMTQxLFxuICAgICAgNTcsXG4gICAgICAzOSxcbiAgICAgIDk1LFxuICAgICAgMjUwLFxuICAgICAgNDMsXG4gICAgICAxNDAsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDIwMCxcbiAgICAgIDIzNCxcbiAgICAgIDcxLFxuICAgICAgMTc3LFxuICAgICAgMTAyLFxuICAgICAgNzMsXG4gICAgICAxMjIsXG4gICAgICAyMDAsXG4gICAgICAyMjQsXG4gICAgICAxNjQsXG4gICAgICAyNDgsXG4gICAgICAxNTQsXG4gICAgICAyMSxcbiAgICAgIDUsXG4gICAgICAxMTAsXG4gICAgICAyMTQsXG4gICAgICAxMzksXG4gICAgICAxMixcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0o3TDhmY0JFTlAvaTdzR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibFBITG95aERPTk9aa0o1elhNZWZaazNtMlUzaUxjNzZyc0phYVNVUDdXRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjR1hCbVJyU2l2bTl6UXBVNUlsRWRoMGFnMy9zT0FzcDZkM2VyMW5pSzNic3pNVnB6b2lGNTgrVFRXSmpMOEMzdmJnSjgvRlpIYndIVWExYVBqTmdDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4SHpVcnlFRVhTUWxtWmw2RkUrdFFVc0s1dWg3aGhtcEtxeE15b05nOGdOOWVMRXIvZWZOcGRkcEFZRmlRT3RraTBkSTFyRkxGUytWbExiVG41TitEQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1Nzg3NDU3NDo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTkzMzA4NzY2NjMxNzo3MEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1Nzg3NDU3NDo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ1NDEyNzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDVzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNXKy5qc29uIjogIntcImtleURhdGFcIjpcIml0djZNRDE3WG1oOGluaFd6WkhWTUtvRFEzbWdVQ1JGc0hnNEliSzhXNlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTE5ODU3NTY1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDVzguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMZEtGcURkZkVzNG5Sa1UvMkNlTUhwd3hyVHYybWd3TTNFS0o4ZVBiMkRvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUxOTg1NzU2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzOTg3NTQzNjU5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1c5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGxaYy92a2xMaG5sUEFYUmRUSExkV3BaaXp3STRFTnpDd3ZGV1FTa29sST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTk4NTc1NjUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzM0Mzc3NjkzOTQwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1dfXy5qc29uIjogIntcImtleURhdGFcIjpcIk40MmNuMWsrZmhQT3htK3J4SEdYWm85eEdCQlpZSWY2VXVBUUR1d2FvbW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTE5ODU3NTY1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0Mzc3OTI0ODY3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1hBLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVjVHVThQVkIyb2svWWVzTTVsK2lIczh4ZU9BK2l6UTIvY2tPbW1QUHlDdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTk4NTc1NjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNYQi5qc29uIjogIntcImtleURhdGFcIjpcInpRSXBSdEVxdlJYa3YzRFk3cytTck9tY3dHWm41S1lUZjVVbmZJVFBKeTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTE5ODU3NTY2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ1NDA5NjE2MDJcIn0iCn0="  // PUT your SESSION_ID 


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
