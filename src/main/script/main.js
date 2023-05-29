count = 0; // Hiermit wird gezählt wie oft der Menübutton gelickt wurde. 
hbc = 0; //Ist der Count für den Homebutton damit gespeichert werden kann in welchem Zustand sich der Button gerade befindet
cbc = 0; //Ist der Count für den Contactbutton damit gespeichert werden kann in welchem Zustand sich der Button gerade befindet
tbc = 0;
pbc = 0; 
probc = 0; 
whitemode = false;  
let sprache = false; 

const years = () => {
  let aktuellesDatum = new Date();

// Das Datum in gewünschtem Format formatieren
let tag = aktuellesDatum.getDate();
let monat = aktuellesDatum.getMonth() + 1;
let jahr = aktuellesDatum.getFullYear();

  if(tag = 2 && monat == 1) {
    age = jahr - 2009
    document.getElementById("years").innerHTML = alter; 
  }
}

years(); 

const typed = new Typed(".text", {
  strings: ["Discord Bot Developer", "Frontend Developer", "Mobile Developer"], 
  typeSpeed: 100, 
  backSpeed: 100, 
  backDelay: 1000, 
  loop: true
})

const changecontact = () => {
  let windowY = window.scrollY || window.pageYOffset;
}

function handleScroll() {
  let windowY = window.scrollY || window.pageYOffset;
  if(windowY < 750 && windowY > 379.79058837890625) {
    skilbar = document.getElementById("Skilbar"); 
    skilbar.style.color = "rgb(135,206,235)"; 
    Home.setAttribute("class", "Home")
    Contact.setAttribute("class", "Contact")
  }

  else if(windowY < 379.79058837890625 && windowY >= 0) {
    skilbar = document.getElementById("Skilbar"); 
    skilbar.style.color = "white"; 
    Home.setAttribute("class", "change")
    Contact.setAttribute("class", "Contact")
}

  else if(windowY ==  930) {
    skilbar = document.getElementById("Skilbar"); 
    skilbar.style.color = "white"; 
    Home.setAttribute("class", "Home")
    Contact.setAttribute("class", "change2")
  }
}

window.onscroll = handleScroll;

const changehome = () => {
  window.scrollTo(0, 0)
  home = document.getElementById("content-home"); 
  contact = document.getElementById("content-contact")
  home.setAttribute("class", "content-home")
  contact.setAttribute("class", "content-contact-invinsible") 
}

const main = () => {

   Home = document.getElementById("Home"); 
   Contact = document.getElementById("Contact"); 
   menusymb = document.getElementById("menusymb"); 
   discord = document.getElementById("discord-icon")
   white = document.getElementById("togglemod"); 
   deutsch = document.getElementById("deutsch")
   englisch = document.getElementById("englisch")

   const togglemod = () => {
    copyright = document.getElementById("copyright"); 
    taskleiste = document.getElementById("taskleiste"); 
    if(whitemode == false) {
      whitemode = true; 
      white.innerHTML = "<img class='toggleimage' src='img/white.png'>"; 
      body = document.getElementById("body"); 
      body.style.backgroundColor = "white"; 
      body.style.color = "black"; 
      copyright.style.backgroundColor = "rgb(136, 136, 136)"; 
      taskleiste.style.backgroundColor = "rgb(136, 136, 136)"; 
    }

    
    else {
      whitemode = false; 
      white.innerHTML = "<img class='toggleimage' src='img/dark.png'>"; 
      body.style.backgroundColor = "rgb(36, 36, 36)"; 
      body.style.color = "white"; 
      copyright.style.backgroundColor = " rgb(46, 46, 46)"; 
      taskleiste.style.backgroundColor = " rgb(46, 46, 46)"; 
    }
   }

   white.onclick = togglemod; 
  
  const changetogerman = () => {
    document.getElementById("learnüberschrift").innerHTML = "Das lerne ich"; 
    document.getElementById("toolüberschrift").innerHTML = "Damit arbeite ich"; 
    document.getElementById("skillüberschrift").innerHTML = "Meine Skills"; 
    document.getElementById("über_michüberschrift").innerHTML = "Über mich"; 
    document.getElementById("contactüberschrift").innerHTML = "Kontakt"; 
    document.getElementById("projectüberschrift").innerHTML = "Meine Projekte"; 
    document.getElementById("About").innerHTML = "Hallo, mein Name ist Fabius, ich bin <span id='years'>14</span> Jahre alt <br> Ich komme aus Deutschland. <br> Meine Hobbys sind Programmieren und Aikido. <br> Ich programmiere Websites und Discord Bots. <br> Ich arbeite an vielen Projekten mit Freunden. <br> Wir haben eine Wetter-Webapp erstellt."; 
    document.getElementById("hellotext").innerHTML = "Hallo 👋"; 
    document.getElementById("fabiustext").innerHTML = "Ich bin Fabius"; 
    document.getElementById("fabiustext").style.fontSize = "45px"
    document.getElementById("ichtext").innerHTML = "Ich bin"; 
    Contact.innerHTML = "Kontakt"; 
    Home.innerHTML = "Über mich"; 
    Home.style.right = "385px"; 
    document.getElementById("togglemod").style.right = "505px"; 
    Skilbar.innerHTML = "Programmierung"; 
    deutsch.style.color = "black"
    englisch.style.color = "white"
  }

  const deutschclick = () => {
    changetogerman()
  }

  const changetoenglish = () => {
    document.getElementById("learnüberschrift").innerHTML = "Learning"; 
    document.getElementById("toolüberschrift").innerHTML = "Tools i use"; 
    document.getElementById("skillüberschrift").innerHTML = "Skillset"; 
    document.getElementById("über_michüberschrift").innerHTML = "About Me"; 
    document.getElementById("contactüberschrift").innerHTML = "Contact"; 
    document.getElementById("projectüberschrift").innerHTML = "Projects"; 
    document.getElementById("About").innerHTML = "Hello my name is Fabius, I´m <span id='years'>14</span> years old. <br>I come from Germany. <br> My hobbies are programming and Aikido.<br> I'm coding Websites and Discord Bots. <br>I'm working on a many projects with friends. <br> We made a weather webapp. "; 
    document.getElementById("hellotext").innerHTML = "Hello 👋"; 
    document.getElementById("fabiustext").innerHTML = "I'm Fabius"; 
    document.getElementById("fabiustext").style.fontSize = "45px"
    document.getElementById("ichtext").innerHTML = "I'm"; 
    Contact.innerHTML = "Contact"; 
    Home.innerHTML = "About"; 
    Home.style.right = "355px"; 
    document.getElementById("togglemod").style.right = "425px"; 
    Skilbar.innerHTML = "Programming"; 
    deutsch.style.color = "white"
    englisch.style.color = "black"
  }

  const englischclick = () => {
    changetoenglish(); 
  }

   deutsch.onclick = deutschclick; 
   englisch.onclick = englischclick; 

  const menusymbclick = () => {
    count = count + 1; 

    if(count == 1) {
      setTimeout(function(){
      homebut = document.createElement("button");  
      contactbut = document.createElement("button");  
      programming = document.createElement("button");  
      togglebut = document.createElement("button");  
      languages = document.createElement("button");
      contactbut.innerHTML = Contact.innerHTML; 
      programming.innerHTML = Skilbar.innerHTML; 
      if (sprache == false) {
        languages.innerHTML = "Deutsch";
      }

      else if (sprache == true) {
        languages.innerHTML = "Englisch";
      }
      homebut.innerHTML = Home.innerHTML;    
      if(whitemode == false) {
        togglebut.innerHTML = "Whitemode"; 
      }
  
      else {
        togglebut.innerHTML = "Darkmode"; 
      }
      homebut.onclick = homebutclick; 
      contactbut.onclick = contactbutclick; 
      togglebut.onclick = togglebutclick; 
      programming.onclick = programmingclick; 
      menusymb.setAttribute("src", "img/close.png")
      togglebut.setAttribute("class", "darktoggle")
      homebut.setAttribute("class", "homebut")
      programming.setAttribute("class", "programming")
      languages.setAttribute("id", "changelanguage")
      if(hbc == 1 ) {
        homebut.style.color = "white"; 
      }
      contactbut.setAttribute("class", "contactbut")
      if(cbc == 1){
        contactbut.style.color = "white"; 
      }
      if(tbc == 1){
        togglebut.style.color = "white"; 
      }
      if(probc == 1) {
        programming.style.color = "white"; 
      }
      div = document.createElement("div");
      div.setAttribute("class", "elements") 
      div.setAttribute("id", "div"); 
      document.getElementById("body").appendChild(div); 
      document.getElementById("div").appendChild(togglebut)
      document.getElementById("div").appendChild(programming)
      document.getElementById("div").appendChild(homebut)
      document.getElementById("div").appendChild(contactbut)
      document.getElementById("div").appendChild(languages)

      changelanguage = document.getElementById("changelanguage")
  const changelanguageclick = () => {
    if(!sprache) {
      sprache = true
      changetogerman()
    }

    else {
      sprache = false 
      changetoenglish()
    }

    menusymb.setAttribute("src", "img/menu.png")
    div2 = document.getElementById("div"); 
    div2.setAttribute("class", "test")
    setTimeout(function(){
      document.getElementById("body").removeChild(div); 
      count = 0; 
    }, 690)
  }

  changelanguage.onclick = changelanguageclick; 
    }, 90)

    }
    
    else if(count == 2) {
      menusymb.setAttribute("src", "img/menu.png")
      div2 = document.getElementById("div"); 
      div2.setAttribute("class", "test")
      setTimeout(function(){
        document.getElementById("body").removeChild(div); 
        count = 0; 
      }, 690)
    }
  }

  const homebutclick = () => {
    window.scroll(0, 0)
    hbc = 1; 
    changehome(); 
    togglebut.style.color = "black";
    homebut.style.color = "white"; 
    programming.style.color ="black"; 
    contactbut.style.color = "black"; 
    cbc = 0; 
    probc = 0; 
    tbc = 0; 
    menusymb.setAttribute("src", "img/menu.png")
    div2 = document.getElementById("div"); 
    div2.setAttribute("class", "test")
    setTimeout(function(){
      document.getElementById("body").removeChild(div); 
      count = 0; 
    }, 690)

  } 

  const togglebutclick = () => {
    copyright = document.getElementById("copyright"); 
    taskleiste = document.getElementById("taskleiste"); 
    if(whitemode == false) {
      whitemode = true; 
      togglebut.innerHTML = "Darkmode"; 
      body = document.getElementById("body"); 
      body.style.backgroundColor = "white"; 
      body.style.color = "black"; 
      copyright.style.backgroundColor = "rgb(136, 136, 136)"; 
      taskleiste.style.backgroundColor = "rgb(136, 136, 136)"; 

    }

    else {
      whitemode = false; 
      togglebut.innerHTML = "Whitemode"; 
      body.style.backgroundColor = "rgb(36, 36, 36)"; 
      body.style.color = "white"; 
      copyright.style.backgroundColor = " rgb(46, 46, 46)"; 
      taskleiste.style.backgroundColor = " rgb(46, 46, 46)"; 
    }

    tbc = 1; 
    homebut.style.color = "black"; 
    contactbut.style.color = "black"; 
    togglebut.style.color = "white";
    hbc = 0; 
    cbc = 0; 
    menusymb.setAttribute("src", "img/menu.png")
    div2 = document.getElementById("div"); 
    div2.setAttribute("class", "test")
    setTimeout(function(){
      document.getElementById("body").removeChild(div); 
      count = 0; 
    }, 690)
  }

  
  const discordclick = () => {
    window.location.href = "https://discord.gg/HanXgrKr8J"; 
  }

  discord.onclick = discordclick; 

  const programmingclick = () => {
    window.scroll(0, 865.5621948242188)
    probc = 1; 
    cbc = 0; 
    programming.style.color ="white"; 
    contactbut.style.color = "black"; 
    togglebut.style.color = "black";
    homebut.style.color = "black";
    hbc = 0;
    tbc = 0;  
    menusymb.setAttribute("src", "img/menu.png")
    div2 = document.getElementById("div"); 
    div2.setAttribute("class", "test")
    setTimeout(function(){
      document.getElementById("body").removeChild(div); 
      count = 0; 
    }, 690)
  }

  const contactbutclick = () => {
    window.scroll(0, 1690)
    changecontact(); 
    cbc = 1; 
    contactbut.style.color = "white"; 
    programming.style.color ="black"; 
    togglebut.style.color = "black";
    homebut.style.color = "black";
    hbc = 0;
    probc = 0; 
    tbc = 0;  
    menusymb.setAttribute("src", "img/menu.png")
    div2 = document.getElementById("div"); 
    div2.setAttribute("class", "test")
    setTimeout(function(){
      document.getElementById("body").removeChild(div); 
      count = 0; 
    }, 690)
  }

  menusymb.onclick = menusymbclick; 

  const Homeclick = () => {
    changehome(); 
    if(Home.getAttribute("class") == "Home") {
        cbc = 0; 
        hbc = 1; 
        pbc = 0;  
        Contact.setAttribute("class", "Contact")
        Home.setAttribute("class", "change")
        skilbar.style.color = "white"; 
    }
  }

  Home.onclick = Homeclick; 

  const Skilbarclick = () => {
    window.scroll(0 , 750)
    skilbar = document.getElementById("Skilbar"); 
    cbc = 0; 
    hbc = 0;
    pbc = 1;  
    Home.setAttribute("class", "Home")
    Contact.setAttribute("class", "Contact")
    skilbar.style.color = "rgb(135,206,235)"; 

  }

  Skilbar.onclick = Skilbarclick; 

  const Contactclick = () => {
    window.scroll(0 , 1900)
    if(Contact.getAttribute("class") == "Contact") {
        changecontact(); 
        hbc = 0; 
        cbc = 1; 
        pbc = 0;  
        Home.setAttribute("class", "Home")
        Contact.setAttribute("class", "change2")
        skilbar.style.color = "white"; 
    }
  }

  Contact.onclick = Contactclick; 
}

main(); 
