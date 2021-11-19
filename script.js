var ref = new Firebase("https://data-comments-e63ec-default-rtdb.firebaseio.com");
  
function timeStamp() {
  var now = new Date();
  var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
  var time = [now.getHours(), now.getMinutes()];
  var suffix = (time[0] < 12) ? "AM" : "PM";
  time[0] = (time[0] < 12) ? time[0] : time[0] - 12;

  for (var i = 1; i < 3; i++) {
    if (time[i] < 10) {
      time[i] = "0" + time[i];
    }
  }

  return date.join("/") + ", " + time.join(":") + " " + suffix;
}

function postComment() {
  var name = document.getElementById("name").value,
      comment = document.getElementById("comment").value,
      email = document.getElementById("email").value,
      time = timeStamp();

  if (name && comment) {
    ref.push({
      name: name,
      comment: comment,
      time: time,
      email: email
    });
  }

  document.getElementById("name").value = '';
  document.getElementById("comment").value = '';
  document.getElementById("email").value = '';
}

ref.on("child_added", function(snapshot) {
  var comment = snapshot.val();
  addComment(comment.name, comment.email, comment.comment, comment.time);
});

function addComment(name, email, comment, timeStamp) {
  var comments = document.getElementById("comments");
  comments.innerHTML = "<hr><h4>" + name + " says<span>" + timeStamp + "</span></h4><p>" + comment + "</p>" + comments.innerHTML;
}






var swear_words_arr=new Array(
  "****",
"amputa",
"animal ka",
"bilat",
"binibrocha",
"bobo",
"bogo",
"boto",
"brocha",
"burat",
"bwesit",
"bwisit",
"demonyo ka",
"engot",
"etits",
"gaga",
"gagi",
"gago",
"habal",
"hayop ka",
"hayup",
"hinampak",
"hinayupak",
"hindot",
"hindutan",
"hudas",
"iniyot",
"inutel",
"inutil",
"iyot",
"kagaguhan",
"kagang",
"kantot",
"kantotan",
"kantut",
"kantutan",
"kaululan",
"kayat",
"kiki",
"kikinginamo",
"kingina",
"kupal",
"leche",
"leching",
"lechugas",
"lintik",
"nakakaburat",
"nimal",
"ogag",
"olok",
"pakingshet",
"pakshet",
"pakyu",
"pesteng yawa",
"poke",
"poki",
"pokpok",
"poyet",
"pu'keng",
"pucha",
"puchanggala",
"puchangina",
"puke",
"puki",
"pukinangina",
"puking",
"punyeta",
"puta",
"putang",
"putang ina",
"putangina",
"putanginamo",
"putaragis",
"putragis",
"puyet",
"ratbu",
"shunga",
"sira ulo",
"siraulo",
"suso",
"susu",
"tae",
"taena",
"tamod",
"tanga",
"tangina",
"taragis",
"tarantado",
"tete",
"teti",
"timang",
"tinil",
"tite",
"titi",
"tungaw",
"ulol",
"ulul",
"ungas",
  
  "2g1c",
  "2 girls 1 cup",
  "acrotomophilia",
  "ahole",
  "anal",
  "anilingus",
  "anus",
  "arsehole",
  "ash0le",
  "ash0les",
  "asholes",
  "ass",
  "Ass Monkey",
  "Assface",
  "asshole",
  "assmunch",
  "auto erotic",
  "autoerotic",
  "assh0le",
  "assh0lez",
  "asshole",
  "assholes",
  "assholz",
  "asswipe",
  "azzhole",
  "babeland",
  "baby batter",
  "ball gag",
  "ball gravy",
  "ball kicking",
  "ball licking",
  "ball sack",
  "ball sucking",
  "bangbros",
  "bareback",
  "barely legal",
  "barenaked",
  "bastardo",
  "bastinado",
  "bbw",
  "bdsm",
  "beaver cleaver",
  "beaver lips",
  "bestiality",
  "bi curious",
  "big black",
  "big breasts",
  "big knockers",
  "big tits",
  "bimbos",
  "birdlock",
  "bitch",
  "black cock",
  "blonde action",
  "blonde on blonde action",
  "blow j",
  "blow your l",
  "blue waffle",
  "blumpkin",
  "bollocks",
  "bondage",
  "boner",
  "boob",
  "boobs",
  "booty call",
  "brown showers",
  "brunette action",
  "bukkake",
  "bulldyke",
  "bullet vibe",
  "bung hole",
  "bunghole",
  "busty",
  "butt",
  "buttcheeks",
  "butthole",
  "bassterds",
  "bastard",
  "bastards",
  "bastardz",
  "basterds",
  "basterdz",
  "Biatch",
  "bitches",
  "Blow Job",
  "boffing",
  "butthole",
  "buttwipe",
  "camel toe",
  "camgirl",
  "camslut",
  "camwhore",
  "carpet muncher",
  "carpetmuncher",
  "chocolate rosebuds",
  "circlejerk",
  "cleveland steamer",
  "clit",
  "clitoris",
  "clover clamps",
  "clusterfuck",
  "cock",
  "cocks",
  "coprolagnia",
  "coprophilia",
  "cornhole",
  "cum",
  "cumming",
  "cunnilingus",
  "cunt",
  "c0ck",
  "c0cks",
  "c0k",
  "cawk",
  "cawks",
  "Clit",
  "cnts",
  "cntz",
  "cockhead",
  "cock-head",
  "CockSucker",
  "cock-sucker",
  "crap",
  "cunts",
  "cuntz",
  "darkie",
  "date rape",
  "daterape",
  "deep throat",
  "deepthroat",
  "dick",
  "dildo",
  "dirty pillows",
  "dirty sanchez",
  "dog style",
  "doggie style",
  "doggiestyle",
  "doggy style",
  "doggystyle",
  "dolcett",
  "domination",
  "dominatrix",
  "dommes",
  "donkey punch",
  "double dong",
  "double penetration",
  "dp action",
  "dild0",
  "dild0s",
  "dildos",
  "dilld0",
  "dilld0s",
  "dominatricks",
  "dominatrics",
  "dyke",
  "eat my ass",
  "ecchi",
  "ejaculation",
  "erotic",
  "erotism",
  "escort",
  "ethical slut",
  "eunuch",
  "enema",
  "faggot",
  "fecal",
  "felch",
  "fellatio",
  "feltch",
  "female squirting",
  "femdom",
  "figging",
  "fingering",
  "fisting",
  "foot fetish",
  "footjob",
  "frotting",
  "fuck",
  "fuck buttons",
  "fudge packer",
  "fudgepacker",
  "futanari",
  "f u c k",
  "f u c k e r",
  "fag",
  "fag1t",
  "faget",
  "fagg1t",
  "faggit",
  "fagit",
  "fags",
  "fagz",
  "faig",
  "faigs",
  "fart",
  "flipping the bird",
  "fucker",
  "fuckin",
  "fucking",
  "fucks",
  "fuk",
  "Fukah",
  "Fuken",
  "fuker",
  "Fukin",
  "Fukk",
  "Fukkah",
  "Fukken",
  "Fukker",
  "Fukkin",
  "g-spot",
  "gang bang",
  "gay sex",
  "genitals",
  "giant cock",
  "girl on",
  "girl on top",
  "girls gone wild",
  "goatcx",
  "goatse",
  "gokkun",
  "golden shower",
  "goo girl",
  "goodpoop",
  "goregasm",
  "grope",
  "group sex",
  "guro",
  "g00k",
  "gay",
  "gayboy",
  "gaygirl",
  "gays",
  "gayz",
  "God-damned",
  "hand job",
  "handjob",
  "hard core",
  "hardcore",
  "hentai",
  "hoe",
  "homoerotic",
  "honkey",
  "hooker",
  "hot chick",
  "how to kill",
  "how to murder",
  "huge fat",
  "humping",
  "h00r",
  "h0ar",
  "h0re",
  "hoar",
  "hoor",
  "hoore",
  "incest",
  "intercourse",
  "jack off",
  "jail bait",
  "jailbait",
  "jerk off",
  "jigaboo",
  "jiggaboo",
  "jiggerboo",
  "jizz",
  "juggs",
  "jackoff",
  "jap",
  "japs",
  "jerk-off",
  "jisim",
  "jiss",
  "jizm",
  "kike",
  "kinbaku",
  "kinkster",
  "kinky",
  "knobbing",
  "knob",
  "knobs",
  "knobz",
  "kunt",
  "kunts",
  "kuntz",
  "leather restraint",
  "leather straight jacket",
  "lemon party",
  "lolita",
  "lovemaking",
  "Lesbian",
  "Lezzian",
  "Lipshits",
  "Lipshitz",
  "make me come",
  "male squirting",
  "masturbate",
  "menage a trois",
  "milf",
  "missionary position",
  "motherfucker",
  "mound of venus",
  "mr hands",
  "muff diver",
  "muffdiving",
  "masochist",
  "masokist",
  "massterbait",
  "masstrbait",
  "masstrbate",
  "masterbaiter",
  "masterbate",
  "masterbates",
  "Motha Fucker",
  "Motha Fuker",
  "Motha Fukkah",
  "Motha Fukker",
  "Mother Fucker",
  "Mother Fukah",
  "Mother Fuker",
  "Mother Fukkah",
  "Mother Fukker",
  "mother-fucker",
  "Mutha Fucker",
  "Mutha Fukah",
  "Mutha Fuker",
  "Mutha Fukkah",
  "Mutha Fukker",
  "nambla",
  "nawashi",
  "negro",
  "neonazi",
  "nig nog",
  "nigga",
  "nigger",
  "nimphomania",
  "nipple",
  "nipples",
  "nsfw images",
  "nude",
  "nudity",
  "nympho",
  "nymphomania",
  "n1gr",
  "nastt",
  "nigger;",
  "nigur;",
  "niiger;",
  "niigr;",
  "octopussy",
  "omorashi",
  "one cup two girls",
  "one guy one jar",
  "orgasm",
  "orgy",
  "orafis",
  "orgasim;",
  "orgasm",
  "orgasum",
  "oriface",
  "orifice",
  "orifiss",
  "paedophile",
  "panties",
  "panty",
  "pedobear",
  "pedophile",
  "pegging",
  "penis",
  "phone sex",
  "piece of shit",
  "piss pig",
  "pissing",
  "pisspig",
  "playboy",
  "pleasure chest",
  "pole smoker",
  "ponyplay",
  "poof",
  "poop chute",
  "poopchute",
  "porn",
  "porno",
  "pornography",
  "prince albert piercing",
  "pthc",
  "pubes",
  "pussy",
  "packi",
  "packie",
  "packy",
  "paki",
  "pakie",
  "paky",
  "pecker",
  "peeenus",
  "peeenusss",
  "peenus",
  "peinus",
  "pen1s",
  "penas",
  "penis-breath",
  "penus",
  "penuus",
  "Phuc",
  "Phuck",
  "Phuk",
  "Phuker",
  "Phukker",
  "polac",
  "polack",
  "polak",
  "Poonani",
  "pr1c",
  "pr1ck",
  "pr1k",
  "pusse",
  "pussee",
  "puuke",
  "puuker",
  "queef",
  "queer",
  "queers",
  "queerz",
  "qweers",
  "qweerz",
  "qweir",
  "raghead",
  "raging boner",
  "rape",
  "raping",
  "rapist",
  "rectum",
  "reverse cowgirl",
  "rimjob",
  "rimming",
  "rosy palm",
  "rosy palm and her 5 sisters",
  "rusty trombone",
  "recktum",
  "retard",
  "s&m",
  "sadism",
  "scat",
  "schlong",
  "scissoring",
  "semen",
  "sex",
  "sexo",
  "sexy",
  "shaved beaver",
  "shaved pussy",
  "shemale",
  "shibari",
  "shit",
  "shota",
  "shrimping",
  "slanteye",
  "slut",
  "smut",
  "snatch",
  "snowballing",
  "sodomize",
  "sodomy",
  "spic",
  "spooge",
  "spread legs",
  "strap on",
  "strapon",
  "strappado",
  "strip club",
  "style doggy",
  "suck",
  "sucks",
  "suicide girls",
  "sultry women",
  "swastika",
  "swinger",
  "sadist",
  "scank",
  "schlong",
  "screwing",
  "semen",
  "sh1t",
  "sh1ter",
  "sh1ts",
  "sh1tter",
  "sh1tz",
  "shits",
  "shitter",
  "Shitty",
  "Shity",
  "shitz",
  "Shyt",
  "Shyte",
  "Shytty",
  "Shyty",
  "skanck",
  "skank",
  "skankee",
  "skankey",
  "skanks",
  "Skanky",
  "sluts",
  "Slutty",
  "slutz",
  "son-of-a-bitch",
  "tainted love",
  "taste my",
  "tea bagging",
  "threesome",
  "throating",
  "tied up",
  "tight white",
  "tit",
  "tits",
  "titties",
  "titty",
  "tongue in a",
  "topless",
  "tosser",
  "towelhead",
  "tranny",
  "tribadism",
  "tub girl",
  "tubgirl",
  "tushy",
  "twat",
  "twink",
  "twinkie",
  "two girls one cup",
  "turd",
  "undressing",
  "upskirt",
  "urethra play",
  "urophilia",
  "vagina",
  "venus mound",
  "vibrator",
  "violet wand",
  "vorarephilia",
  "voyeur",
  "vulva",
  "va1jina",
  "vag1na",
  "vagiina",
  "vaj1na",
  "vajina",
  "vullva",
  "wank",
  "wet dream",
  "wetback",
  "white power",
  "women rapping",
  "wrapping men",
  "wrinkled starfish",
  "w0p",
  "wh00r",
  "wh0re",
  "whore",
  "xrated",
  "xx",
  "xxx",
  "yaoi",
  "yellow showers",
  "yiffy",
  "zoophilia",
  "arschloch",
  "b17ch",
  "b1tch",
  "bi+ch",
  "boiolas",
  "buceta",
  "chink",
  "cipa",
  "clits",
  "dirsa",
  "ejakulate",
  "fatass",
  "fcuk",
  "fuk",
  "fux0r",
  "hoer",
  "hore",
  "jism",
  "kawk",
  "l3itch",
  "masterbat3",
  "motherfucker",
  "s.o.b.",
  "mofo",
  "nazi",
  "nutsack",
  "phuck",
  "pimpis",
  "scrotum",
  "shemale",
  "teets",
  "tits",
  "boobs",
  "b00bs",
  "teez",
  "testical",
  "testicle",
  "titt",
  "w00se",
  "whoar",
  "amcik",
  "andskota",
  "assrammer",
  "ayir",
  "bi7ch",
  "breasts",
  "butt-pirate",
  "cabron",
  "cazzo",
  "chraa",
  "chuj",
  "damn",
  "d4mn",
  "daygo",
  "dego",
  "dupa",
  "dziwka",
  "ejackulate",
  "Ekto",
  "enculer",
  "faen",
  "fanculo",
  "fanny",
  "feces",
  "feg",
  "Felcher",
  "ficken",
  "Flikker",
  "foreskin",
  "Fotze",
  "futkretzn",
  "gook",
  "guiena",
  "h0r",
  "h4x0r",
  "helvete",
  "honkey",
  "Huevon",
  "hui",
  "injun",
  "kike",
  "klootzak",
  "kraut",
  "knulle",
  "kuk",
  "kuksuger",
  "Kurac",
  "kurwa",
  "lesbo",
  "mamhoon",
  "mibun",
  "monkleigh",
  "mouliewop",
  "muie",
  "mulkku",
  "muschi",
  "nazis",
  "nepesaurio",
  "orospu",
  "perse",
  "picka",
  "pimmel",
  "pizda",
  "poontsee",
  "poop",
  "porn",
  "p0rn",
  "pr0n",
  "preteen",
  "pula",
  "pule",
  "puta",
  "puto",
  "qahbeh",
  "rautenberg",
  "schaffer",
  "schlampe",
  "schmuck",
  "screw",
  "sharmuta",
  "sharmute",
  "shipal",
  "shiz",
  "skribz",
  "skurwysyn",
  "sphencter",
  "spic",
  "spierdalaj",
  "splooge",
  "suka",
  "vittu",
  "wichser",
  "yed",
  "zabourah",
  "bloody","war","terror","fuck","shit","suck","bitch","sucks","damn","BLOODY","WAR","TERROR","FUCK","SHIT","SUCK","BITCH","SUCKS","DAMN","fucks","FUCKS","christ");

var swear_alert_arr=new Array;
var swear_alert_count=0;
function reset_alert_count()
{
 swear_alert_count=0;
}
function validate_text()
{
 reset_alert_count();
 var compare_text=document.form1.text.value;
 for(var i=0; i<swear_words_arr.length; i++)
 {
  for(var j=0; j<(compare_text.length); j++)
  {
   if(swear_words_arr[i]==compare_text.substring(j,(j+swear_words_arr[i].length)).toLowerCase())
   {
    swear_alert_arr[swear_alert_count]=compare_text.substring(j,(j+swear_words_arr[i].length));
    swear_alert_count++;
   }
  }
 }
 var alert_text="";
 for(var k=1; k<=swear_alert_count; k++)
 {
  alert_text+="\n" + "(" + k + ")  " + swear_alert_arr[k-1];
 }
 if(swear_alert_count>2)
 {
  alert("The message will not be posted.\n\nReason: Too many illegal words. \n\nPlease be respectful and enter a valid message.");
  document.form1.text.select();
  event.preventDefault();
  returnToPreviousPage();
  window.history.back();
 }
 else
 {
  document.form1.submit();
 }

 var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  var name = document.getElementById('name').value;
  if(!regName.test(name)){
      alert('Please enter your full name (First & Last name).');
      document.getElementById('name').focus();
      event.preventDefault();
  }else{
     
  }

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email = document.getElementById('email').value;
if(!mailformat.test(email)){
  alert('Please enter your valid email address.');
  document.getElementById('email').focus();
  event.preventDefault();
}else{
 
}

  
}


var filterWords = [
  "amputa",
  "animal ka",
  "bilat",
  "binibrocha",
  "bobo",
  "bogo",
  "boto",
  "brocha",
  "burat",
  "bwesit",
  "bwisit",
  "demonyo ka",
  "engot",
  "etits",
  "gaga",
  "gagi",
  "gago",
  "habal",
  "hayop ka",
  "hayup",
  "hinampak",
  "hinayupak",
  "hindot",
  "hindutan",
  "hudas",
  "iniyot",
  "inutel",
  "inutil",
  "iyot",
  "kagaguhan",
  "kagang",
  "kantot",
  "kantotan",
  "kantut",
  "kantutan",
  "kaululan",
  "kayat",
  "kiki",
  "kikinginamo",
  "kingina",
  "kupal",
  "leche",
  "leching",
  "lechugas",
  "lintik",
  "nakakaburat",
  "nimal",
  "ogag",
  "olok",
  "pakingshet",
  "pakshet",
  "pakyu",
  "pesteng yawa",
  "poke",
  "poki",
  "pokpok",
  "poyet",
  "pu'keng",
  "pucha",
  "puchanggala",
  "puchangina",
  "puke",
  "puki",
  "pukinangina",
  "puking",
  "punyeta",
  "puta",
  "putang",
  "putang ina",
  "putangina",
  "putanginamo",
  "putaragis",
  "putragis",
  "puyet",
  "ratbu",
  "shunga",
  "sira ulo",
  "siraulo",
  "suso",
  "susu",
  "tae",
  "taena",
  "tamod",
  "tanga",
  "tangina",
  "taragis",
  "tarantado",
  "tete",
  "teti",
  "timang",
  "tinil",
  "tite",
  "titi",
  "tungaw",
  "ulol",
  "ulul",
  "ungas",
    
    "2g1c",
    "2 girls 1 cup",
    "acrotomophilia",
    "ahole",
    "anal",
    "anilingus",
    "anus",
    "arsehole",
    "ash0le",
    "ash0les",
    "asholes",
    "ass",
    "Ass Monkey",
    "Assface",
    "asshole",
    "assmunch",
    "auto erotic",
    "autoerotic",
    "assh0le",
    "assh0lez",
    "asshole",
    "assholes",
    "assholz",
    "asswipe",
    "azzhole",
    "babeland",
    "baby batter",
    "ball gag",
    "ball gravy",
    "ball kicking",
    "ball licking",
    "ball sack",
    "ball sucking",
    "bangbros",
    "bareback",
    "barely legal",
    "barenaked",
    "bastardo",
    "bastinado",
    "bbw",
    "bdsm",
    "beaver cleaver",
    "beaver lips",
    "bestiality",
    "bi curious",
    "big black",
    "big breasts",
    "big knockers",
    "big tits",
    "bimbos",
    "birdlock",
    "bitch",
    "black cock",
    "blonde action",
    "blonde on blonde action",
    "blow j",
    "blow your l",
    "blue waffle",
    "blumpkin",
    "bollocks",
    "bondage",
    "boner",
    "boob",
    "boobs",
    "booty call",
    "brown showers",
    "brunette action",
    "bukkake",
    "bulldyke",
    "bullet vibe",
    "bung hole",
    "bunghole",
    "busty",
    "butt",
    "buttcheeks",
    "butthole",
    "bassterds",
    "bastard",
    "bastards",
    "bastardz",
    "basterds",
    "basterdz",
    "Biatch",
    "bitches",
    "Blow Job",
    "boffing",
    "butthole",
    "buttwipe",
    "camel toe",
    "camgirl",
    "camslut",
    "camwhore",
    "carpet muncher",
    "carpetmuncher",
    "chocolate rosebuds",
    "circlejerk",
    "cleveland steamer",
    "clit",
    "clitoris",
    "clover clamps",
    "clusterfuck",
    "cock",
    "cocks",
    "coprolagnia",
    "coprophilia",
    "cornhole",
    "cum",
    "cumming",
    "cunnilingus",
    "cunt",
    "c0ck",
    "c0cks",
    "c0k",
    "cawk",
    "cawks",
    "Clit",
    "cnts",
    "cntz",
    "cockhead",
    "cock-head",
    "CockSucker",
    "cock-sucker",
    "crap",
    "cunts",
    "cuntz",
    "darkie",
    "date rape",
    "daterape",
    "deep throat",
    "deepthroat",
    "dick",
    "dildo",
    "dirty pillows",
    "dirty sanchez",
    "dog style",
    "doggie style",
    "doggiestyle",
    "doggy style",
    "doggystyle",
    "dolcett",
    "domination",
    "dominatrix",
    "dommes",
    "donkey punch",
    "double dong",
    "double penetration",
    "dp action",
    "dild0",
    "dild0s",
    "dildos",
    "dilld0",
    "dilld0s",
    "dominatricks",
    "dominatrics",
    "dyke",
    "eat my ass",
    "ecchi",
    "ejaculation",
    "erotic",
    "erotism",
    "escort",
    "ethical slut",
    "eunuch",
    "enema",
    "faggot",
    "fecal",
    "felch",
    "fellatio",
    "feltch",
    "female squirting",
    "femdom",
    "figging",
    "fingering",
    "fisting",
    "foot fetish",
    "footjob",
    "frotting",
    "fuck",
    "fuck buttons",
    "fudge packer",
    "fudgepacker",
    "futanari",
    "f u c k",
    "f u c k e r",
    "fag",
    "fag1t",
    "faget",
    "fagg1t",
    "faggit",
    "fagit",
    "fags",
    "fagz",
    "faig",
    "faigs",
    "fart",
    "flipping the bird",
    "fucker",
    "fuckin",
    "fucking",
    "fucks",
    "fuk",
    "Fukah",
    "Fuken",
    "fuker",
    "Fukin",
    "Fukk",
    "Fukkah",
    "Fukken",
    "Fukker",
    "Fukkin",
    "g-spot",
    "gang bang",
    "gay sex",
    "genitals",
    "giant cock",
    "girl on",
    "girl on top",
    "girls gone wild",
    "goatcx",
    "goatse",
    "gokkun",
    "golden shower",
    "goo girl",
    "goodpoop",
    "goregasm",
    "grope",
    "group sex",
    "guro",
    "g00k",
    "gay",
    "gayboy",
    "gaygirl",
    "gays",
    "gayz",
    "God-damned",
    "hand job",
    "handjob",
    "hard core",
    "hardcore",
    "hentai",
    "hoe",
    "homoerotic",
    "honkey",
    "hooker",
    "hot chick",
    "how to kill",
    "how to murder",
    "huge fat",
    "humping",
    "h00r",
    "h0ar",
    "h0re",
    "hoar",
    "hoor",
    "hoore",
    "incest",
    "intercourse",
    "jack off",
    "jail bait",
    "jailbait",
    "jerk off",
    "jigaboo",
    "jiggaboo",
    "jiggerboo",
    "jizz",
    "juggs",
    "jackoff",
    "jap",
    "japs",
    "jerk-off",
    "jisim",
    "jiss",
    "jizm",
    "kike",
    "kinbaku",
    "kinkster",
    "kinky",
    "knobbing",
    "knob",
    "knobs",
    "knobz",
    "kunt",
    "kunts",
    "kuntz",
    "leather restraint",
    "leather straight jacket",
    "lemon party",
    "lolita",
    "lovemaking",
    "Lesbian",
    "Lezzian",
    "Lipshits",
    "Lipshitz",
    "make me come",
    "male squirting",
    "masturbate",
    "menage a trois",
    "milf",
    "missionary position",
    "motherfucker",
    "mound of venus",
    "mr hands",
    "muff diver",
    "muffdiving",
    "masochist",
    "masokist",
    "massterbait",
    "masstrbait",
    "masstrbate",
    "masterbaiter",
    "masterbate",
    "masterbates",
    "Motha Fucker",
    "Motha Fuker",
    "Motha Fukkah",
    "Motha Fukker",
    "Mother Fucker",
    "Mother Fukah",
    "Mother Fuker",
    "Mother Fukkah",
    "Mother Fukker",
    "mother-fucker",
    "Mutha Fucker",
    "Mutha Fukah",
    "Mutha Fuker",
    "Mutha Fukkah",
    "Mutha Fukker",
    "nambla",
    "nawashi",
    "negro",
    "neonazi",
    "nig nog",
    "nigga",
    "nigger",
    "nimphomania",
    "nipple",
    "nipples",
    "nsfw images",
    "nude",
    "nudity",
    "nympho",
    "nymphomania",
    "n1gr",
    "nastt",
    "nigger;",
    "nigur;",
    "niiger;",
    "niigr;",
    "octopussy",
    "omorashi",
    "one cup two girls",
    "one guy one jar",
    "orgasm",
    "orgy",
    "orafis",
    "orgasim;",
    "orgasm",
    "orgasum",
    "oriface",
    "orifice",
    "orifiss",
    "paedophile",
    "panties",
    "panty",
    "pedobear",
    "pedophile",
    "pegging",
    "penis",
    "phone sex",
    "piece of shit",
    "piss pig",
    "pissing",
    "pisspig",
    "playboy",
    "pleasure chest",
    "pole smoker",
    "ponyplay",
    "poof",
    "poop chute",
    "poopchute",
    "porn",
    "porno",
    "pornography",
    "prince albert piercing",
    "pthc",
    "pubes",
    "pussy",
    "packi",
    "packie",
    "packy",
    "paki",
    "pakie",
    "paky",
    "pecker",
    "peeenus",
    "peeenusss",
    "peenus",
    "peinus",
    "pen1s",
    "penas",
    "penis-breath",
    "penus",
    "penuus",
    "Phuc",
    "Phuck",
    "Phuk",
    "Phuker",
    "Phukker",
    "polac",
    "polack",
    "polak",
    "Poonani",
    "pr1c",
    "pr1ck",
    "pr1k",
    "pusse",
    "pussee",
    "puuke",
    "puuker",
    "queef",
    "queer",
    "queers",
    "queerz",
    "qweers",
    "qweerz",
    "qweir",
    "raghead",
    "raging boner",
    "rape",
    "raping",
    "rapist",
    "rectum",
    "reverse cowgirl",
    "rimjob",
    "rimming",
    "rosy palm",
    "rosy palm and her 5 sisters",
    "rusty trombone",
    "recktum",
    "retard",
    "s&m",
    "sadism",
    "scat",
    "schlong",
    "scissoring",
    "semen",
    "sex",
    "sexo",
    "sexy",
    "shaved beaver",
    "shaved pussy",
    "shemale",
    "shibari",
    "shit",
    "shota",
    "shrimping",
    "slanteye",
    "slut",
    "smut",
    "snatch",
    "snowballing",
    "sodomize",
    "sodomy",
    "spic",
    "spooge",
    "spread legs",
    "strap on",
    "strapon",
    "strappado",
    "strip club",
    "style doggy",
    "suck",
    "sucks",
    "suicide girls",
    "sultry women",
    "swastika",
    "swinger",
    "sadist",
    "scank",
    "schlong",
    "screwing",
    "semen",
    "sh1t",
    "sh1ter",
    "sh1ts",
    "sh1tter",
    "sh1tz",
    "shits",
    "shitter",
    "Shitty",
    "Shity",
    "shitz",
    "Shyt",
    "Shyte",
    "Shytty",
    "Shyty",
    "skanck",
    "skank",
    "skankee",
    "skankey",
    "skanks",
    "Skanky",
    "sluts",
    "Slutty",
    "slutz",
    "son-of-a-bitch",
    "tainted love",
    "taste my",
    "tea bagging",
    "threesome",
    "throating",
    "tied up",
    "tight white",
    "tit",
    "tits",
    "titties",
    "titty",
    "tongue in a",
    "topless",
    "tosser",
    "towelhead",
    "tranny",
    "tribadism",
    "tub girl",
    "tubgirl",
    "tushy",
    "twat",
    "twink",
    "twinkie",
    "two girls one cup",
    "turd",
    "undressing",
    "upskirt",
    "urethra play",
    "urophilia",
    "vagina",
    "venus mound",
    "vibrator",
    "violet wand",
    "vorarephilia",
    "voyeur",
    "vulva",
    "va1jina",
    "vag1na",
    "vagiina",
    "vaj1na",
    "vajina",
    "vullva",
    "wank",
    "wet dream",
    "wetback",
    "white power",
    "women rapping",
    "wrapping men",
    "wrinkled starfish",
    "w0p",
    "wh00r",
    "wh0re",
    "whore",
    "xrated",
    "xx",
    "xxx",
    "yaoi",
    "yellow showers",
    "yiffy",
    "zoophilia",
    "arschloch",
    "b17ch",
    "b1tch",
    "bi+ch",
    "boiolas",
    "buceta",
    "chink",
    "cipa",
    "clits",
    "dirsa",
    "ejakulate",
    "fatass",
    "fcuk",
    "fuk",
    "fux0r",
    "hoer",
    "hore",
    "jism",
    "kawk",
    "l3itch",
    "masterbat3",
    "motherfucker",
    "s.o.b.",
    "mofo",
    "nazi",
    "nutsack",
    "phuck",
    "pimpis",
    "scrotum",
    "shemale",
    "teets",
    "tits",
    "boobs",
    "b00bs",
    "teez",
    "testical",
    "testicle",
    "titt",
    "w00se",
    "whoar",
    "amcik",
    "andskota",
    "assrammer",
    "ayir",
    "bi7ch",
    "breasts",
    "butt-pirate",
    "cabron",
    "cazzo",
    "chraa",
    "chuj",
    "damn",
    "d4mn",
    "daygo",
    "dego",
    "dupa",
    "dziwka",
    "ejackulate",
    "Ekto",
    "enculer",
    "faen",
    "fanculo",
    "fanny",
    "feces",
    "feg",
    "Felcher",
    "ficken",
    "Flikker",
    "foreskin",
    "Fotze",
    "futkretzn",
    "gook",
    "guiena",
    "h0r",
    "h4x0r",
    "helvete",
    "honkey",
    "Huevon",
    "hui",
    "injun",
    "kike",
    "klootzak",
    "kraut",
    "knulle",
    "kuk",
    "kuksuger",
    "Kurac",
    "kurwa",
    "lesbo",
    "mamhoon",
    "mibun",
    "monkleigh",
    "mouliewop",
    "muie",
    "mulkku",
    "muschi",
    "nazis",
    "nepesaurio",
    "orospu",
    "perse",
    "picka",
    "pimmel",
    "pizda",
    "poontsee",
    "poop",
    "porn",
    "p0rn",
    "pr0n",
    "preteen",
    "pula",
    "pule",
    "puta",
    "puto",
    "qahbeh",
    "rautenberg",
    "schaffer",
    "schlampe",
    "schmuck",
    "screw",
    "sharmuta",
    "sharmute",
    "shipal",
    "shiz",
    "skribz",
    "skurwysyn",
    "sphencter",
    "spic",
    "spierdalaj",
    "splooge",
    "suka",
    "vittu",
    "wichser",
    "yed",
    "zabourah"
  ];
  // "i" is to ignore case
  var rgx = new RegExp(filterWords.join("|"), "gi");
  
  for (var i=0; i<filterWords.length; i++) {
    
  var replacement = '*'.repeat(filterWords[i].length);
       
  function wordFilter(str) {
    return str.replace(rgx, "****");
  }
  
  
  
  
  $(document).ready(function () {
    var name = $(".name");
  
    name.on("change keyup", function () {
      wordFilter(name.val());
      name.val(wordFilter(name.val()));
    });
  });

function select_area()
{
 document.form1.text.select();
}
window.onload=reset_alert_count;

}
