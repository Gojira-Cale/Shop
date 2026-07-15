var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
btn.onclick = function() {
  
  modal.style.display = "block";
  // Main Site
  var WelcomeGiftDiv = document.getElementById("WelcomeGift")
  var DressMeUpDiv = document.getElementById("DressMeUp")
  var StuckHereDiv = document.getElementById("StuckHere")
  var LostDiv = document.getElementById("Lost")
  var BackdoorDiv = document.getElementById("Backdoor")
  var SpicyDiv = document.getElementById("Spicy")

  // Special Dates
  var BirthjayDiv = document.getElementById("Birthjay")
  var HalloweenDiv = document.getElementById("Spooky")
  var ChristmasDiv = document.getElementById("Kringle")

  // Deltacable
  var PipisRoomDiv = document.getElementById("PipisRoom")
  //var PipisFanDiv = document.getElementById("PipisFan")
  //var PlushieFanDiv = document.getElementById("PlushieFan")
  //var PlushiceptionDiv = document.getElementById("Plushiception")

  var MikePlushDiv = document.getElementById("MikePlush")
  var HostPlushDiv = document.getElementById("HostPlush")
  var SpamtonPlushDiv = document.getElementById("SpamtonPlush")
  var SwatchPlushDiv = document.getElementById("SwatchPlush")
  var MittensPlushDiv = document.getElementById("MittensPlush")
  var RaynePlushDiv = document.getElementById("RaynePlush")
  var LavaPlushDiv = document.getElementById("LavaPlush")
  
  //var CaughtDiv = document.getElementById("Caught")
  var OldManYapsDiv = document.getElementById("GlassesStory")

  //Main Site
  if (window.localStorage.getItem("achievement.welcome") === ("true"))   { WelcomeGiftDiv.classList.remove("Missing") }
  if (window.localStorage.getItem("achievement.dressmeup") === ("true")) { DressMeUpDiv.classList.remove("Missing") }
  if (window.localStorage.getItem("achievement.stuckhere") === ("true")) { StuckHereDiv.classList.remove("Missing") }
  if (window.localStorage.getItem("achievement.lost") === ("true"))      { LostDiv.classList.remove("Missing") }
  if (window.localStorage.getItem("achievement.backdoor") === ("true"))  { BackdoorDiv.classList.remove("Hidden") }
  if (window.localStorage.getItem("achievement.spicy") === ("true"))     { SpicyDiv.classList.remove("Hidden") }

  // Special Dates
  if (window.localStorage.getItem("achievement.bday") === ("true"))  { BirthjayDiv.classList.remove("Missing") }
  if (window.localStorage.getItem("achievement.spooky") === ("true"))    { HalloweenDiv.classList.remove("Missing") }
  if (window.localStorage.getItem("achievement.christmas") === ("true")) { ChristmasDiv.classList.remove("Missing") }

  // Deltacable
  if (window.localStorage.getItem("achievement.pipisroom") === ("true"))     { PipisRoomDiv.classList.remove("Missing") }
  if (window.localStorage.getItem("achievement.pipisfan") === ("true"))      { PipisFanDiv.classList.remove("Hidden") }
  if (window.localStorage.getItem("achievement.plushiefan") === ("true"))    { PlushieFanDiv.classList.remove("Hidden") }
  if (window.localStorage.getItem("achievement.plushiception") === ("true")) { PlushiceptionDiv.classList.remove("Hidden") }

  if (window.localStorage.getItem("achievement.plush_mike") === ("true"))    { MikePlushDiv.classList.remove("Hidden") }  
  if (window.localStorage.getItem("achievement.plush_host") === ("true"))    { HostPlushDiv.classList.remove("Hidden") }  
  if (window.localStorage.getItem("achievement.plush_mittens") === ("true")) { MittensPlushDiv.classList.remove("Hidden") }  
  if (window.localStorage.getItem("achievement.plush_rayne") === ("true"))   { RaynePlushDiv.classList.remove("Hidden") }    
  if (window.localStorage.getItem("achievement.plush_spamton") === ("true")) { SpamtonPlushDiv.classList.remove("Hidden") }  
  if (window.localStorage.getItem("achievement.plush_swatch") === ("true"))  { SwatchPlushDiv.classList.remove("Hidden") }   
  if (window.localStorage.getItem("achievement.plush_lava") === ("true"))    { LavaPlushDiv.classList.remove("Hidden") }

  if (window.localStorage.getItem("achievement.caught") === ("true"))     { CaughtDiv.classList.remove("Hidden") }
  if (window.localStorage.getItem("achievement.oldmanyaps") === ("true")) { OldManYapsDiv.classList.remove("Missing") }

  return;
  }  

  async function achievementCheck() {
  var WelcomeGiftDiv = document.getElementById("WelcomeGift")
  var DressMeUpDiv = document.getElementById("DressMeUp")
  var StuckHereDiv = document.getElementById("StuckHere")
  var LostDiv = document.getElementById("Lost")
  var BackdoorDiv = document.getElementById("Backdoor")
  var SpicyDiv = document.getElementById("Spicy")

  // Special Dates
  var BirthjayDiv = document.getElementById("birthjay")
  var HalloweenDiv = document.getElementById("Spooky")
  var ChristmasDiv = document.getElementById("Kringle")

  // Deltacable
  var PipisRoomDiv = document.getElementById("PipisRoom")
  var PipisFanDiv = document.getElementById("PipisFan")
  var PlushieFanDiv = document.getElementById("PlushieFan")
  var PlushiceptionDiv = document.getElementById("Plushiception")

  var MikePlushDiv = document.getElementById("MikePlush")
  var HostPlushDiv = document.getElementById("HostPlush")
  var MittensPlushDiv = document.getElementById("MittensPlush")
  var RaynePlushDiv = document.getElementById("MittensPlush")    
  var SpamtonPlushDiv = document.getElementById("SpamtonPlush")
  var SwatchPlushDiv = document.getElementById("SwatchPlush")
  var LavaPlushDiv = document.getElementById("LavaPlush")

  var CaughtDiv = document.getElementById("Caught")
  var OldManYapsDiv = document.getElementById("GlassesStory")

 
