function opentab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function imgtab(imgtabName) {
  var ialt;
  var xalt = document.getElementsByClassName("tabimg");
  for (ialt = 0; ialt < xalt.length; ialt++) {
    xalt[ialt].style.display = "none";
  }
  document.getElementById(imgtabName).style.display = "block";
}

function menutab(menutabName) {
  var imenu;
  var xmenu = document.getElementsByClassName("tabmenu");
  for (imenu = 0; imenu < xmenu.length; imenu++) {
    xmenu[imenu].style.display = "none";
  }
  document.getElementById(menutabName).style.display = "block";
}
