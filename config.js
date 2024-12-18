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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_45_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICAyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICA3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODksXG4gICAgICAgIDc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDczLFxuICAgICAgICA0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTExLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICA2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhY1Y0VHRndjI5TC9YNFZLb2RybUlGSXB6eC91UE1IZGFpM2dkQjJzR0drPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTaDFxQU5vOVJlcVFfTzBmejhPb2FBXCIsXG4gIFwicGhvbmVJZFwiOiBcImFkMGRjYWI3LWYyMjUtNGRmYy04NDY5LTE4YjlmZmE1ZDRmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDEzLFxuICAgICAgMjQ5LFxuICAgICAgMjM3LFxuICAgICAgMzQsXG4gICAgICAxNTUsXG4gICAgICA2MCxcbiAgICAgIDE4MSxcbiAgICAgIDk3LFxuICAgICAgMTc2LFxuICAgICAgMjE4LFxuICAgICAgMSxcbiAgICAgIDIyMixcbiAgICAgIDI0MCxcbiAgICAgIDU0LFxuICAgICAgMTU2LFxuICAgICAgMjI3LFxuICAgICAgNDIsXG4gICAgICAxMzcsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDIxLFxuICAgICAgMTQ0LFxuICAgICAgNTcsXG4gICAgICAxNTksXG4gICAgICA1LFxuICAgICAgMTIxLFxuICAgICAgODQsXG4gICAgICAxMCxcbiAgICAgIDc4LFxuICAgICAgNjUsXG4gICAgICAyNixcbiAgICAgIDE1NixcbiAgICAgIDc3LFxuICAgICAgMjIwLFxuICAgICAgODAsXG4gICAgICAxOTEsXG4gICAgICAxNzksXG4gICAgICAyMTgsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKN0w4ZmNCRUxTVWpMc0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImxQSExveWhET05PWmtKNXpYTWVmWmszbTJVM2lMYzc2cnNKYWFTVVA3V0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTTh4cm1IbE50QUIyMk9LT1BVUXlmNnB2dnZjaGtNR3dZQkVsaS9ZQ1YvWE8wWmI3K1J2S1dHeUJESlJmbWZUMDlRV2Z0TU53RnhROEE1UE90YWRSRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia2tuL1ZJUWNkcmtJRlpEa1hzQTdJUEpnWFRFOElpcXRuY3QwUVVXeThRaGpzakpHTzh4Vk5udTlEM1RFMysrRWlUZjRSRkFJbTY3d1UwRlhGajc0QWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTc4NzQ1NzQ6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MzMwODc2NjYzMTc6NzFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTc4NzQ1NzQ6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NTQzOTI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1c5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDVysuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpdHY2TUQxN1htaDhpbmhXelpIVk1Lb0RRM21nVUNSRnNIZzRJYks4VzZZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUxOTg1NzU2NSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1c4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGRLRnFEZGZFczRuUmtVLzJDZU1IcHd4clR2Mm1nd00zRUtKOGVQYjJEbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTk4NTc1NjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzk4NzU0MzY1OVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNXOS5qc29uIjogIntcImtleURhdGFcIjpcIkxsWmMvdmtsTGhubFBBWFJkVEhMZFdwWml6d0k0RU56Q3d2RldRU2tvbEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTE5ODU3NTY1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczNDM3NzY5Mzk0MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNXX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJONDJjbjFrK2ZoUE94bStyeEhHWFpvOXhHQkJaWUlmNlV1QVFEdXdhb21vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUxOTg1NzU2NSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDM3NzkyNDg2N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNYQS5qc29uIjogIntcImtleURhdGFcIjpcIlY1R1U4UFZCMm9rL1llc001bCtpSHM4eGVPQStpelEyL2NrT21tUFB5Q3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTE5ODU3NTY2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDWEIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6UUlwUnRFcXZSWGt2M0RZN3MrU3JPbWN3R1puNUtZVGY1VW5mSVRQSnk4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUxOTg1NzU2NixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1hDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZldRb2kxcCtvczdaTUMrR3dKeFpTaWFMWGhNWXZ4WjRVMkx6MDRYcXRyST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MTk4NTc1NjYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDU0MzkwOTM3NVwifSIKfQ==" // PUT your SESSION_ID 


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
