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

  }

window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } }

var CloseButton = document.getElementById("CloseBtn");
CloseButton.onclick = function() { modal.style.display = "none"; }

function plushsquish() { var audio = new Audio('https://ne0nbandit.github.io/assets/sound/Squish.mp3'); audio.play(); }
function jingleplay() { var audio = new Audio('https://ne0nbandit.github.io/assets/sound/achievement.wav'); audio.play(); }

function reset() { localStorage.clear(); }

// Plushie Achievements

function welcomeAchievement() {
  var welcomewin = document.getElementById("achievementWin");
  if ( window.localStorage.getItem("achievement.welcome") === "true") { return }
  else { welcomewin.classList.add("slide"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.welcome", "true" ) }
}

function LostAchievement() {
  var lostwin = document.getElementById("achievementWinAlt");
  if ( window.localStorage.getItem("achievement.lost") === "true") { return } 
  else { lostwin.classList.add("slidealt"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.lost", "true") }
  }

function SpookyAchievement() {
  var spookywin = document.getElementById("achievementWinAlt");
  if ( window.localStorage.getItem("achievement.spooky") === "true") { return } 
  else { spookywin.classList.add("slidealt"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.spooky", "true") }
  }

function ChristmasAchievement() {
  var xmaswin = document.getElementById("achievementWinAlt");
  if ( window.localStorage.getItem("achievement.christmas") === "true") { return } 
  else { xmaswin.classList.add("slidealt"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.christmas", "true") }
}

function DressMeUpAchievement() {
  var dressupwin = document.getElementById("achievementWinAlt");
  if ( window.localStorage.getItem("achievement.dressmeup") === "true") { return } 
  else { dressupwin.classList.add("slidealt"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.dressmeup", "true") }
}

function StuckHereAchievement() {
  var stuckherewin = document.getElementById("achievementWinAlt");
  if ( window.localStorage.getItem("achievement.stuckhere") === "true") { return } 
  else { stuckherewin.classList.add("slidealt"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.stuckhere", "true") }
  }

function BackdoorAchievement() {
  var backdoorwin = document.getElementById("achievementWinAlt");
  if ( window.localStorage.getItem("achievement.backdoor") === "true") { backdoorwin.classList.add("slidealt"); setTimeout(jingleplay, 1100); }
}

function BrokenLayout() { window.localStorage.setItem("achievement.backdoor", "true") }

function Spicy() {
  var spicywin = document.getElementById("achievementWin");
  if ( window.localStorage.getItem("achievement.spicy") === "true") { return }
  else { spicywin.classList.add("slide"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.spicy", "true" ) }
}

function bday() {
  let d = new Date();
	var bdaywin = document.getElementById("achievementWin");
  if (d.getMonth() === 4 && d.getDate() === 11 && !(window.localStorage.getItem("achievement.bday") === "true")) {
 bdaywin.classList.add("slide"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.bday", "true" )  
  }
}

function PipisRoom() { 
  var pipisroomwin = document.getElementById("achievementWinCable");
  if ( window.localStorage.getItem("achievement.pipisroom") === "true") { return }
  else { pipisroomwin.classList.add("slidecable"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.pipisroom", "true") }
}

function mikeplush() {
  var mikewin = document.getElementById("achievementWinCable");
  var audio = new Audio('https://ne0nbandit.github.io/assets/sound/Squish.mp3'); audio.play();
  if   ( window.localStorage.getItem("achievement.plush_mike") === "true") { return; }
  else { mikewin.classList.add("slidecable"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.plush_mike", "true"); }
}

function hostplush() {
  var hostwin = document.getElementById("achievementWinCable");
  var audio = new Audio('https://ne0nbandit.github.io/assets/sound/Squish.mp3'); audio.play();
  if   ( window.localStorage.getItem("achievement.plush_host") === "true") { return; }
  else { hostwin.classList.add("slidecable"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.plush_host", "true"); }
}

function tennaplush() {
  var audio = new Audio('https://ne0nbandit.github.io/assets/sound/Squish.mp3'); audio.play();
  if   ( window.localStorage.getItem("achievement.plush_tenna") === "true") { return; }
  else { window.localStorage.setItem("achievement.plush_tenna", "true"); }
}

function spamtonplush() {
  var spamtonwin = document.getElementById("achievementWinCable");
  var audio = new Audio('https://ne0nbandit.github.io/assets/sound/Squish.mp3'); audio.play();
  if   ( window.localStorage.getItem("achievement.plush_spamton") === "true") { return; }
  else { spamtonwin.classList.add("slidecable"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.plush_spamton", "true"); }
}

function swatchplush() {
  var swatchwin = document.getElementById("achievementWinCable");
  var audio = new Audio('https://ne0nbandit.github.io/assets/sound/Squish.mp3'); audio.play();
  if   ( window.localStorage.getItem("achievement.plush_swatch") === "true") { return; }
  else { swatchwin.classList.add("slidecable"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.plush_swatch", "true"); }
}

function lavaplush() {
  var lavawin = document.getElementById("achievementWinCable");
  var audio = new Audio('https://ne0nbandit.github.io/assets/sound/Squish.mp3'); audio.play();
  if   ( window.localStorage.getItem("achievement.plush_lava") === "true") { return; }
  else { lavawin.classList.add("slidecable"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.plush_lava", "true"); }
}

function kliegplush() {
  var kliegwin = document.getElementById("achievementWinCable");
  var audio = new Audio('https://ne0nbandit.github.io/assets/sound/Squish.mp3'); audio.play();
  if   ( window.localStorage.getItem("achievement.plush_klieg") === "true") { return; }
  else { kliegwin.classList.add("slidecable"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.plush_klieg", "true"); }
}

function mittensplush() {
  var mittenswin = document.getElementById("achievementWinCable");
  var audio = new Audio('https://ne0nbandit.github.io/assets/sound/Squish.mp3'); audio.play();
  if   ( window.localStorage.getItem("achievement.plush_mittens") === "true") { return; }
  else { mittenswin.classList.add("slidecable"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.plush_mittens", "true"); }
}

function rayneplush() {
  var raynewin = document.getElementById("achievementWinCable");
  var audio = new Audio('https://ne0nbandit.github.io/assets/sound/Squish.mp3'); audio.play();
  if   ( window.localStorage.getItem("achievement.plush_rayne") === "true") { return; }
  else { raynewin.classList.add("slidecable"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.plush_rayne", "true"); }
}

function oldman() {
  var oldmanwin = document.getElementById("achievementWinCable");
  if   ( window.localStorage.getItem("achievement.oldmanyaps") === "true") { return; }
  else { oldmanwin.classList.add("slidecable"); setTimeout(jingleplay, 1100); window.localStorage.setItem("achievement.oldmanyaps", "true"); }
}
