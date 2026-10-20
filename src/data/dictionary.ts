export type Language = "santali" | "gondi" | "bhili" | "kui"

export const languageNames: Record<Language, string> = {
  santali: "Santali (संताली)",
  gondi: "Gondi (गोंडी)",
  bhili: "Bhili (भीली)",
  kui: "Kui (कुई)",
}

export const languageRegions: Record<Language, string> = {
  santali: "Jharkhand, West Bengal, Odisha",
  gondi: "Madhya Pradesh, Chhattisgarh, Maharashtra",
  bhili: "Rajasthan, Gujarat, Madhya Pradesh",
  kui: "Odisha (Kondh regions)",
}

export const PENDING = "[Pending]"

type Entry = Record<Language, string>
const p: Entry = { santali: PENDING, gondi: PENDING, bhili: PENDING, kui: PENDING }

export const dictionary: Record<string, Entry> = {

  // ── Core vocabulary (verified demo entries) ──────────────────────────────
  "नमस्ते":              { santali: "Johar",     gondi: "Namasthe",  bhili: "Ram Ram",    kui: "Namaskara" },
  "धन्यवाद":            { santali: "Sari Sari", gondi: "Dhanwad",   bhili: "Aabhar",     kui: "Dhanyvada" },
  "पानी":               { santali: "Dak",        gondi: "Neeru",     bhili: "Paani",      kui: "Jala" },
  "घर":                 { santali: "Era",        gondi: "Ill",       bhili: "Ghar",       kui: "Ili" },
  "स्कूल":              { santali: "Iskaul",     gondi: "Iskaul",    bhili: "Iskal",      kui: "Iskularu" },
  "किताब":              { santali: "Puthi",      gondi: "Kaditam",   bhili: "Chaapdi",    kui: "Puthi" },
  "दोस्त":              { santali: "Mit",        gondi: "Mitra",     bhili: "Dost",       kui: "Mitra" },
  "शिक्षक":             { santali: "Guru",       gondi: "Guruji",    bhili: "Masterji",   kui: "Guru" },
  "बच्चा":              { santali: "Baba",       gondi: "Naana",     bhili: "Baal",       kui: "Jhuia" },
  "खाना":               { santali: "Jom",        gondi: "Tindam",    bhili: "Khaanaanu",  kui: "Bhojana" },
  "माँ":                { santali: "Ayo",        gondi: "Aayi",      bhili: "Baa",        kui: "Ama" },
  "पिता":               { santali: "Baba",       gondi: "Appa",      bhili: "Baap",       kui: "Appa" },
  "सूरज":               { santali: "Singi",      gondi: "Bel",       bhili: "Suraj",      kui: "Suruj" },
  "चाँद":               { santali: "Chand",      gondi: "Chandar",   bhili: "Chaand",     kui: "Chanda" },
  "पेड़":               { santali: "Dar",        gondi: "Maram",     bhili: "Jhad",       kui: "Mara" },
  "नदी":                { santali: "Dare",       gondi: "Vagu",      bhili: "Nadi",       kui: "Noi" },
  "आकाश":               { santali: "Serma",      gondi: "Akash",     bhili: "Aakaash",    kui: "Akasha" },
  "अच्छा":              { santali: "Sagun",      gondi: "Bhalo",     bhili: "Saaro",      kui: "Bhala" },
  "बुरा":               { santali: "Haraam",     gondi: "Khota",     bhili: "Kharaab",    kui: "Manda" },
  "हाँ":                { santali: "Ho",         gondi: "Aa",        bhili: "Haa",        kui: "Ha" },
  "नहीं":               { santali: "Bae",        gondi: "Nai",       bhili: "Nai",        kui: "Na" },
  "प्यार":              { santali: "Bhalo paoa", gondi: "Prema",     bhili: "Prem",       kui: "Prema" },

  "पानी कहाँ है?":       { santali: "Dak nonde aaka?",      gondi: "Neeru akata undi?",  bhili: "Paani kyaay che?",        kui: "Jala kete achi?" },
  "आपका नाम क्या है?":  { santali: "Nim nam onte ko?",     gondi: "Nim pattam ente?",   bhili: "Thaaro naam shu che?",    kui: "Nuanka namu kemba?" },
  "मैं ठीक हूँ":        { santali: "Ing bhalo achhi",      gondi: "Nan bhalo nan",      bhili: "Hoon thik chu",           kui: "Mote bhala achhi" },
  "मुझे मदद चाहिए":     { santali: "Ing ato jogar kana",   gondi: "Naku sahayam kavali", bhili: "Maaro maddad joye",      kui: "Mora sahayya darkar" },
  "स्कूल कहाँ है?":     { santali: "Iskaul nonde?",        gondi: "Iskaul akata?",      bhili: "Iskal kyaay che?",        kui: "Iskularu kete?" },
  "यह क्या है?":        { santali: "Uni onte?",            gondi: "Idi ente?",          bhili: "Aa shu che?",             kui: "Ita kemba?" },
  "मैं कहाँ हूँ?":      { santali: "Ing nonde achhi?",     gondi: "Nanu akata?",        bhili: "Hoon kyaay chu?",         kui: "Mote kete?" },

  // ── Extended vocabulary (illustrative demo data) ──────────────────────────

  // Numbers
  "एक":     { santali: "Mit",     gondi: "Undi",       bhili: "Ek",      kui: "Eka" },
  "दो":     { santali: "Bar",     gondi: "Rendi",      bhili: "Be",      kui: "Dui" },
  "तीन":    { santali: "Pe",      gondi: "Muudi",      bhili: "Tran",    kui: "Tini" },
  "चार":    { santali: "Pon",     gondi: "Naalu",      bhili: "Char",    kui: "Chari" },
  "पाँच":   { santali: "Mone",    gondi: "Aaidu",      bhili: "Panch",   kui: "Pancha" },
  "छह":     { santali: "Turui",   gondi: "Aaru",       bhili: "Chha",    kui: "Chha" },
  "सात":    { santali: "Eae",     gondi: "Yelu",       bhili: "Sat",     kui: "Sata" },
  "आठ":     { santali: "Irael",   gondi: "Enimidi",    bhili: "Aath",    kui: "Ata" },
  "नौ":     { santali: "Are",     gondi: "Tommidi",    bhili: "Nav",     kui: "Nava" },
  "दस":     { santali: "Gel",     gondi: "Padi",       bhili: "Das",     kui: "Dasa" },
  "बीस":    { santali: "Bar gel", gondi: "Rendi padi", bhili: "Vis",     kui: "Visha" },
  "सौ":     { santali: "Sae",     gondi: "Vaanda",     bhili: "Sau",     kui: "Sata" },

  // Colors
  "लाल":    { santali: "Arang",    gondi: "Sigidi",   bhili: "Laal",    kui: "Rakta" },
  "नीला":   { santali: "Neel",     gondi: "Neeli",    bhili: "Nilo",    kui: "Nila" },
  "हरा":    { santali: "Hariya",   gondi: "Pachi",    bhili: "Lilo",    kui: "Harida" },
  "सफ़ेद":  { santali: "Bonga",    gondi: "Tella",    bhili: "Dholo",   kui: "Sweta" },
  "काला":   { santali: "Kala",     gondi: "Nalla",    bhili: "Kalo",    kui: "Kala" },
  "पीला":   { santali: "Pila",     gondi: "Pacha",    bhili: "Pilo",    kui: "Pita" },
  "नारंगी": { santali: "Naarangi", gondi: "Narangi",  bhili: "Narangi", kui: "Narangi" },
  "गुलाबी": { santali: "Gulaabi",  gondi: "Gulaabi",  bhili: "Gulaabi", kui: "Gulaabi" },

  // Body Parts
  "सिर":    { santali: "Bohok",  gondi: "Tala",   bhili: "Math",  kui: "Matha" },
  "हाथ":    { santali: "Hat",    gondi: "Chey",   bhili: "Haath", kui: "Hata" },
  "आँख":    { santali: "Met",    gondi: "Kannu",  bhili: "Ankh",  kui: "Akhi" },
  "कान":    { santali: "Lota",   gondi: "Chevi",  bhili: "Kan",   kui: "Kana" },
  "नाक":    { santali: "Nasi",   gondi: "Mooku",  bhili: "Naak",  kui: "Nasa" },
  "पैर":    { santali: "Pae",    gondi: "Kaal",   bhili: "Paav",  kui: "Pada" },
  "मुँह":   { santali: "Muh",    gondi: "Noru",   bhili: "Mukh",  kui: "Mukha" },
  "दाँत":   { santali: "Dat",    gondi: "Pallu",  bhili: "Daant", kui: "Danta" },
  "बाल":    { santali: "Chul",   gondi: "Juttu",  bhili: "Vaal",  kui: "Chula" },
  "पेट":    { santali: "Ikir",   gondi: "Kuda",   bhili: "Pet",   kui: "Udara" },

  // Animals
  "गाय":    { santali: "Gai",     gondi: "Aawa",   bhili: "Gai",    kui: "Gai" },
  "कुत्ता": { santali: "Seta",    gondi: "Naya",   bhili: "Kuto",   kui: "Kukura" },
  "बिल्ली": { santali: "Mushki",  gondi: "Pilli",  bhili: "Biladi", kui: "Billi" },
  "पक्षी":  { santali: "Chiriya", gondi: "Pitta",  bhili: "Pakshi", kui: "Pankhi" },
  "मछली":   { santali: "Hako",    gondi: "Chhepa", bhili: "Machhi", kui: "Macha" },
  "बाघ":    { santali: "Kul",     gondi: "Puli",   bhili: "Vagad",  kui: "Bagh" },
  "हाथी":   { santali: "Hathi",   gondi: "Ennay",  bhili: "Hathi",  kui: "Hati" },
  "साँप":   { santali: "Bui",     gondi: "Paamu",  bhili: "Saanp",  kui: "Saapa" },
  "बकरी":   { santali: "Mesa",    gondi: "Meka",   bhili: "Bakri",  kui: "Chheli" },
  "घोड़ा":  { santali: "Ghora",   gondi: "Godumu", bhili: "Ghodo",  kui: "Ghoda" },

  // Classroom
  "पेन्सिल":   { santali: "Pencil",      gondi: "Pencil",       bhili: "Pencil",    kui: "Pencila" },
  "कलम":        { santali: "Kalam",       gondi: "Kalam",        bhili: "Kalam",     kui: "Kalama" },
  "प्रश्न":     { santali: "Prashn",      gondi: "Prashnam",     bhili: "Sawal",     kui: "Prashna" },
  "उत्तर":      { santali: "Uttar",       gondi: "Jawab",        bhili: "Jawab",     kui: "Uttara" },
  "गृहकार्य":   { santali: "Griha kaaj", gondi: "Intipani",     bhili: "Grihkaaj",  kui: "Grihakarya" },
  "श्यामपट":    { santali: "Shyam pat",  gondi: "Nalla palaka", bhili: "Shyam pat", kui: "Shyama phata" },
  "चॉक":        { santali: "Chalk",       gondi: "Sunnampindi",  bhili: "Khadi",     kui: "Chalk" },
  "कक्षा":      { santali: "Kaksha",      gondi: "Taragati",     bhili: "Varg",      kui: "Shreni" },
  "परीक्षा":    { santali: "Pariksha",    gondi: "Pariksha",     bhili: "Kasoti",    kui: "Pariksha" },
  "अंक":        { santali: "Mark",        gondi: "Ankaalu",      bhili: "Ank",       kui: "Anka" },

  // Verbs / Actions
  "आना":    { santali: "Aiyo",   gondi: "Ravo",     bhili: "Aavo",   kui: "Aa" },
  "जाना":   { santali: "Layao",  gondi: "Poda",     bhili: "Jao",    kui: "Ja" },
  "खाना (क्रिया)": { santali: "Jom", gondi: "Tindo", bhili: "Kha",  kui: "Khaa" },
  "पीना":   { santali: "Dako",   gondi: "Tago",     bhili: "Pi",     kui: "Pi" },
  "सोना":   { santali: "Onge",   gondi: "Ungu",     bhili: "Sau",    kui: "Sua" },
  "खेलना":  { santali: "Raske",  gondi: "Aato",     bhili: "Akhel",  kui: "Khela" },
  "दौड़ना": { santali: "Daur",   gondi: "Paduguda", bhili: "Daudo",  kui: "Dauda" },
  "बैठना":  { santali: "Bethao", gondi: "Dubbao",   bhili: "Beso",   kui: "Batha" },
  "बोलना":  { santali: "Bolo",   gondi: "Bolo",     bhili: "Bolo",   kui: "Kaha" },
  "सुनना":  { santali: "Sunao",  gondi: "Vino",     bhili: "Suno",   kui: "Suna" },
  "देखना":  { santali: "Joao",   gondi: "Chuso",    bhili: "Juo",    kui: "Dakhaa" },
  "देना":   { santali: "Pio",    gondi: "Ivo",      bhili: "Do",     kui: "Daa" },
  "लेना":   { santali: "La",     gondi: "Tio",      bhili: "Le",     kui: "La" },
  "पढ़ना":  { santali: "Padao",  gondi: "Chado",    bhili: "Vaancho",kui: "Padha" },
  "लिखना":  { santali: "Lekhao", gondi: "Raso",     bhili: "Likho",  kui: "Likhaa" },
  "हँसना":  { santali: "Haski",  gondi: "Navvao",   bhili: "Hasvo",  kui: "Hasa" },
  "रोना":   { santali: "Roa",    gondi: "Endo",     bhili: "Rova",   kui: "Anda" },
  "सीखना":  { santali: "Sikhao", gondi: "Nerchao",  bhili: "Shikho", kui: "Shikhaa" },

  // Adjectives
  "बड़ा":   { santali: "Dare",    gondi: "Pedda",      bhili: "Moto",   kui: "Bada" },
  "छोटा":   { santali: "Noa",     gondi: "Chinna",     bhili: "Nano",   kui: "Sana" },
  "गर्म":   { santali: "Hatiar",  gondi: "Ushnam",     bhili: "Garam",  kui: "Garam" },
  "ठंडा":   { santali: "Sirisir", gondi: "Chali",      bhili: "Thandu", kui: "Thanda" },
  "तेज़":   { santali: "Joron",   gondi: "Vegam",      bhili: "Jaldi",  kui: "Sighna" },
  "धीरे":   { santali: "Ajom",    gondi: "Mellaga",    bhili: "Dhime",  kui: "Dhire" },
  "सुंदर":  { santali: "Sundor",  gondi: "Andanga",    bhili: "Sundar", kui: "Sundara" },
  "नया":    { santali: "Notun",   gondi: "Kotta",      bhili: "Navo",   kui: "Nava" },
  "पुराना": { santali: "Purono",  gondi: "Pata",       bhili: "Juna",   kui: "Prana" },
  "खुश":    { santali: "Khushi",  gondi: "Santhosham", bhili: "Khush",  kui: "Khushi" },
  "दुखी":   { santali: "Dukhi",   gondi: "Dukham",     bhili: "Dukhi",  kui: "Dukhi" },
  "थका":    { santali: "Atal",    gondi: "Agam",       bhili: "Thakyo", kui: "Shrama" },

  // Food & Drink
  "चावल":   { santali: "Chaole", gondi: "Biyyam",  bhili: "Chokha", kui: "Chaula" },
  "रोटी":   { santali: "Roti",   gondi: "Roti",    bhili: "Rotlo",  kui: "Roti" },
  "नमक":    { santali: "Noon",   gondi: "Uppu",    bhili: "Mith",   kui: "Luna" },
  "चीनी":   { santali: "Chini",  gondi: "Bellam",  bhili: "Sakar",  kui: "Chini" },
  "दूध":    { santali: "Doodh",  gondi: "Palu",    bhili: "Dudh",   kui: "Dudha" },
  "सब्ज़ी": { santali: "Saag",   gondi: "Koora",   bhili: "Shaak",  kui: "Shaaka" },
  "आम":     { santali: "Am",     gondi: "Mamidi",  bhili: "Keri",   kui: "Amba" },
  "दाल":    { santali: "Dal",    gondi: "Pappu",   bhili: "Dal",    kui: "Dali" },
  "तेल":    { santali: "Tel",    gondi: "Nune",    bhili: "Tel",    kui: "Tela" },
  "चाय":    { santali: "Cha",    gondi: "Tea",     bhili: "Chai",   kui: "Chai" },

  // Nature & Environment
  "बारिश":  { santali: "Barsao",  gondi: "Vaan",   bhili: "Varsad",  kui: "Barsaa" },
  "हवा":    { santali: "Sete",    gondi: "Gaali",  bhili: "Pavan",   kui: "Bata" },
  "आग":     { santali: "Sengel",  gondi: "Jora",   bhili: "Aag",     kui: "Agi" },
  "मिट्टी": { santali: "Dharti",  gondi: "Nela",   bhili: "Maati",   kui: "Dharti" },
  "पत्थर":  { santali: "Pathrao", gondi: "Raal",   bhili: "Pathrad", kui: "Pattara" },
  "फूल":    { santali: "Phul",    gondi: "Puvvu",  bhili: "Phul",    kui: "Phula" },
  "फल":     { santali: "Phal",    gondi: "Pandum", bhili: "Phal",    kui: "Phala" },
  "पत्ता":  { santali: "Sakam",   gondi: "Aaku",   bhili: "Pan",     kui: "Patra" },
  "जंगल":   { santali: "Bir",     gondi: "Kaadu",  bhili: "Jangal",  kui: "Jangala" },
  "पहाड़":  { santali: "Buru",    gondi: "Konda",  bhili: "Dongar",  kui: "Parbata" },
  "खेत":    { santali: "Mal",     gondi: "Pola",   bhili: "Khet",    kui: "Kheta" },
  "गाँव":   { santali: "Ato",     gondi: "Seeme",  bhili: "Gaon",    kui: "Grama" },

  // Time
  "आज":          { santali: "Nit",     gondi: "Indu",   bhili: "Aaj",     kui: "Aaji" },
  "कल":          { santali: "Kali",    gondi: "Raati",  bhili: "Kal",     kui: "Kali" },
  "कल (बीता)":   { santali: "Nikali",  gondi: "Ninna",  bhili: "Gai kal", kui: "Aganta" },
  "सुबह":        { santali: "Sondra",  gondi: "Inta",   bhili: "Sakare",  kui: "Sahana" },
  "शाम":         { santali: "Sanje",   gondi: "Sanje",  bhili: "Saanje",  kui: "Sanje" },
  "रात":         { santali: "Raat",    gondi: "Raat",   bhili: "Raat",    kui: "Raati" },
  "घंटा":        { santali: "Ghanta",  gondi: "Ghanta", bhili: "Ghanto",  kui: "Ghanta" },
  "मिनट":        { santali: "Minute",  gondi: "Minute", bhili: "Minute",  kui: "Minita" },

  // Directions & Position
  "ऊपर":    { santali: "Upre",      gondi: "Paina",   bhili: "Uppar",  kui: "Upara" },
  "नीचे":   { santali: "Tare",      gondi: "Keinda",  bhili: "Niche",  kui: "Tala" },
  "बाएँ":   { santali: "Bae haat",  gondi: "Edamati", bhili: "Daabi",  kui: "Bama" },
  "दाएँ":   { santali: "Jai haat",  gondi: "Kudi",    bhili: "Jami",   kui: "Dakhina" },
  "आगे":    { santali: "Age",       gondi: "Mundu",   bhili: "Aage",   kui: "Agaru" },
  "पीछे":   { santali: "Pache",     gondi: "Venak",   bhili: "Pache",  kui: "Pachha" },
  "अंदर":   { santali: "Ander",     gondi: "Lopal",   bhili: "Andar",  kui: "Bhitare" },
  "बाहर":   { santali: "Bahar",     gondi: "Bayata",  bhili: "Bahar",  kui: "Bahara" },

  // Pronouns & People
  "मैं":      { santali: "Ing",    gondi: "Nan",     bhili: "Hoon",   kui: "Mote" },
  "तुम":      { santali: "Am",     gondi: "Nim",     bhili: "Tame",   kui: "To" },
  "वह":       { santali: "Uni",    gondi: "Adi",     bhili: "Teno",   kui: "Se" },
  "हम":       { santali: "Abo",    gondi: "Mannu",   bhili: "Ame",    kui: "Ame" },
  "वे":       { santali: "Honko",  gondi: "Vatu",    bhili: "Teo",    kui: "Tame" },
  "लड़का":   { santali: "Kora",   gondi: "Koda",    bhili: "Chokro", kui: "Pua" },
  "लड़की":   { santali: "Kuri",   gondi: "Kodi",    bhili: "Chokri", kui: "Jhia" },
  "आदमी":    { santali: "Horo",   gondi: "Manishi", bhili: "Manav",  kui: "Manisha" },
  "औरत":     { santali: "Hor",    gondi: "Aadha",   bhili: "Stree",  kui: "Stri" },
  "बुज़ुर्ग": { santali: "Budha",  gondi: "Pedda",   bhili: "Ghardo", kui: "Budha" },

  // Common Phrases
  "अच्छा लगा":          { santali: "Sagun lage",    gondi: "Bhalo undi",       bhili: "Saaru lagyu",    kui: "Bhala lagila" },
  "मैं आ रहा हूँ":     { santali: "Ing aiyo kana", gondi: "Nan ravdam",        bhili: "Hoon aavu chu",  kui: "Mote aasuchi" },
  "मुझे समझ नहीं आया": { santali: "Ing bujhao bae",gondi: "Nanu artham kadu",  bhili: "Mane samajyu nai",kui: "Mote bujhijibani" },
  "खाना खाओ":           { santali: "Jom koro",      gondi: "Tindam tao",        bhili: "Khana khao",     kui: "Bhojana kha" },
  "पानी पियो":          { santali: "Dak dako",      gondi: "Neeru tago",        bhili: "Paani pi",       kui: "Jala pi" },
  "ठीक है":             { santali: "Sagun achhi",   gondi: "Bhalo undi",        bhili: "Saaru che",      kui: "Theeka achi" },
  "धन्यवाद जी":         { santali: "Sari Sari ji",  gondi: "Dhanwad ji",        bhili: "Aabhar ji",      kui: "Dhanyvada ji" },
  "जल्दी आओ":          { santali: "Joron aiyo",     gondi: "Vegam ra",          bhili: "Jaldi aavo",     kui: "Sighna aa" },
  "चुप रहो":            { santali: "Chup thaak",    gondi: "Oomm aa",           bhili: "Chup raho",      kui: "Chup thaa" },
  "ध्यान दो":          { santali: "Dhyan dao",      gondi: "Dhyan kuro",        bhili: "Dhyan rakho",    kui: "Dhyana daa" },
  "शाबाश":              { santali: "Bhalo korcha",  gondi: "Bhalo chesav",      bhili: "Shabash",        kui: "Shabasha" },
  "फिर मिलेंगे":        { santali: "Phir dekhabo",  gondi: "Merupu chusuko",    bhili: "Phir malisu",    kui: "Pheri dakhiba" },
  "घर जाओ":            { santali: "Era layao",      gondi: "Ill poda",          bhili: "Ghar jao",       kui: "Ili ja" },
  "स्कूल जाओ":         { santali: "Iskaul layao",   gondi: "Iskaul poda",       bhili: "Iskal jao",      kui: "Iskularu ja" },

  // ── Name & Identity (pending review) ────────────────────────────────────
  "आपका क्या नाम है?":                  { ...p },
  "तुम्हारा नाम क्या है?":              { ...p },
  "तुम्हारा क्या नाम है?":              { ...p },
  "तेरा नाम क्या है?":                  { ...p },
  "आपका पूरा नाम क्या है?":             { ...p },
  "आपके पिताजी का नाम क्या है?":        { ...p },
  "आपकी माँ का नाम क्या है?":           { ...p },
  "क्या मैं आपका नाम जान सकता हूँ?":   { ...p },
  "नाम बताओ अपना":                      { ...p },
  "अपना नाम बताइए":                     { ...p },
  "मेरा नाम राहुल है":                  { ...p },
  "इनका नाम क्या है?":                  { ...p },
  "उसका नाम क्या है?":                  { ...p },
  "उनका नाम क्या है?":                  { ...p },
  "यह कौन है?":                         { ...p },
  "वह कौन है?":                         { ...p },
  "आप कौन हैं?":                        { ...p },
  "तुम कौन हो?":                        { ...p },
  "आप खुद को क्या कहते हैं?":           { ...p },

  // ── Age (pending review) ─────────────────────────────────────────────────
  "आपकी उम्र क्या है?":                 { ...p },
  "आपकी उम्र कितनी है?":               { ...p },
  "तुम्हारी उम्र कितनी है?":            { ...p },
  "आप कितने साल के हैं?":              { ...p },
  "तुम कितने साल के हो?":              { ...p },
  "आपका जन्म कब हुआ था?":             { ...p },
  "आपकी जन्म तिथि क्या है?":           { ...p },
  "क्या आप 18 साल से बड़े हैं?":       { ...p },
  "बच्चा कितने साल का है?":            { ...p },

  // ── Greetings & Politeness (pending review) ──────────────────────────────
  "नमस्कार":                            { ...p },
  "आप कैसे हैं?":                       { ...p },
  "तुम कैसे हो?":                       { ...p },
  "आप कैसी हैं?":                       { ...p },
  "सब ठीक है?":                         { ...p },
  "सब कुशल मंगल?":                      { ...p },
  "क्या हाल है?":                       { ...p },
  "क्या चल रहा है?":                    { ...p },
  "आपसे मिलकर खुशी हुई":               { ...p },
  "आपसे मिलकर अच्छा लगा":             { ...p },
  "शुभ प्रभात":                         { ...p },
  "शुभ रात्रि":                         { ...p },
  "अलविदा":                             { ...p },
  "बहुत बहुत धन्यवाद":                  { ...p },
  "शुक्रिया":                           { ...p },
  "कोई बात नहीं":                       { ...p },
  "माफ़ कीजिए":                         { ...p },
  "माफ़ कीजिएगा":                       { ...p },
  "कृपया":                              { ...p },
  "कृपया बैठिए":                        { ...p },
  "आइए अंदर आइए":                       { ...p },
  "आराम से बैठिए":                      { ...p },

  // ── Location & Address (pending review) ──────────────────────────────────
  "आप कहाँ रहते हैं?":                  { ...p },
  "तुम कहाँ रहते हो?":                  { ...p },
  "आप कहाँ से हैं?":                    { ...p },
  "आपका घर कहाँ है?":                   { ...p },
  "आपका पता क्या है?":                  { ...p },
  "यह जगह कहाँ है?":                    { ...p },
  "स्टेशन कहाँ है?":                    { ...p },
  "सबसे नज़दीकी अस्पताल कहाँ है?":     { ...p },
  "यहाँ से बाज़ार कितनी दूर है?":       { ...p },
  "हम कहाँ जा रहे हैं?":               { ...p },
  "आप किस शहर में रहते हैं?":          { ...p },
  "आप किस देश से हैं?":                { ...p },
  "आपका गाँव कौनसा है?":               { ...p },

  // ── Family (pending review) ───────────────────────────────────────────────
  "आपके परिवार में कितने लोग हैं?":    { ...p },
  "आपके कितने भाई बहन हैं?":           { ...p },
  "आपकी शादी हो गई है?":               { ...p },
  "आप शादी-शुदा हैं?":                  { ...p },
  "आपके बच्चे कितने हैं?":             { ...p },
  "आपके पिता जी क्या करते हैं?":       { ...p },
  "आपकी माँ जी का क्या हाल है?":      { ...p },
  "आपका कोई भाई है?":                  { ...p },
  "आपकी कोई बहन है?":                  { ...p },
  "आप सबसे बड़े हैं या सबसे छोटे?":   { ...p },

  // ── Time & Date (pending review) ─────────────────────────────────────────
  "अभी कितने बजे हैं?":                { ...p },
  "टाइम क्या हुआ है?":                 { ...p },
  "आज कौनसा दिन है?":                  { ...p },
  "आज की तारीख क्या है?":              { ...p },
  "कल क्या वार है?":                   { ...p },
  "ट्रेन कब आएगी?":                    { ...p },
  "बस कब तक आएगी?":                    { ...p },
  "आप कब तक पहुँचोगे?":               { ...p },
  "कल मिलते हैं":                      { ...p },
  "परसों बात करते हैं":                { ...p },
  "अभी कितना टाइम बचा है?":            { ...p },
  "मीटिंग किस वक़्त है?":              { ...p },

  // ── Weather (pending review) ──────────────────────────────────────────────
  "आज मौसम कैसा है?":                  { ...p },
  "कल बारिश होगी क्या?":               { ...p },
  "बाहर कितनी गर्मी है?":              { ...p },
  "सर्दी कब शुरू होगी?":               { ...p },
  "आज धूप निकली है क्या?":             { ...p },
  "मौसम खराब है क्या?":                { ...p },
  "तूफ़ान आने वाला है":                 { ...p },
  "आसमान साफ़ है":                      { ...p },

  // ── Food & Preferences (pending review) ──────────────────────────────────
  "आपको क्या खाना पसंद है?":           { ...p },
  "आप क्या खाना चाहेंगे?":             { ...p },
  "क्या आप शाकाहारी हैं?":             { ...p },
  "क्या आप मांसाहारी हैं?":            { ...p },
  "मुझे भूख लगी है":                   { ...p },
  "मुझे प्यास लगी है":                  { ...p },
  "खाना कैसा लगा?":                    { ...p },
  "यह कितना मीठा है":                  { ...p },
  "यह बहुत तीखा है":                   { ...p },
  "पानी चाहिए":                        { ...p },
  "चाय पिएँगे या कॉफ़ी?":              { ...p },
  "आपको कौनसी सब्ज़ी पसंद है?":        { ...p },
  "खाना तैयार है क्या?":               { ...p },
  "बिल कितना हुआ?":                    { ...p },

  // ── Shopping & Money (pending review) ────────────────────────────────────
  "यह कितने का है?":                    { ...p },
  "इसकी कीमत क्या है?":                { ...p },
  "क्या इसमें डिस्काउंट मिलेगा?":      { ...p },
  "क्या आप कार्ड लेते हैं?":           { ...p },
  "चेंज नहीं है क्या?":                { ...p },
  "यह सामान कहाँ मिलेगा?":             { ...p },
  "दुकान कब खुलती है?":                { ...p },
  "दुकान कब बंद होती है?":             { ...p },
  "मुझे यह नहीं चाहिए":               { ...p },
  "मुझे यह पसंद आया":                  { ...p },

  // ── Directions & Travel (pending review) ─────────────────────────────────
  "यहाँ से सीधा जाइए":                 { ...p },
  "राइट टर्न लीजिए":                   { ...p },
  "लेफ्ट मुड़िए":                       { ...p },
  "कितनी दूर है यहाँ से?":             { ...p },
  "कौनसा रास्ता सही है?":              { ...p },
  "मैं रास्ता भूल गया हूँ":            { ...p },
  "मैप दिखाइए":                        { ...p },
  "टैक्सी कैसे मिलेगी?":               { ...p },
  "एयरपोर्ट जाने का रास्ता क्या है?":  { ...p },
  "यह बस कहाँ जाती है?":               { ...p },
  "अगला स्टेशन कौनसा है?":             { ...p },
  "टिकट कहाँ मिलेगी?":                 { ...p },

  // ── Health (pending review) ───────────────────────────────────────────────
  "आपको क्या हो गया?":                 { ...p },
  "आपको कैसा लग रहा है?":              { ...p },
  "क्या आप ठीक हैं?":                  { ...p },
  "सर दर्द हो रहा है":                 { ...p },
  "बुखार आ रहा है":                    { ...p },
  "डॉक्टर को दिखाना पड़ेगा":           { ...p },
  "दवाई कब लेनी है?":                  { ...p },
  "आपको एलर्जी तो नहीं?":             { ...p },
  "आपका ब्लड प्रेशर क्या है?":         { ...p },
  "ज़ख्म कैसे हुआ?":                   { ...p },

  // ── Work & Profession (pending review) ───────────────────────────────────
  "आप क्या काम करते हैं?":             { ...p },
  "आपका काम क्या है?":                  { ...p },
  "आप कहाँ काम करते हैं?":             { ...p },
  "आप किस कंपनी में काम करते हैं?":    { ...p },
  "आपकी नौकरी कैसी चल रही है?":       { ...p },
  "आप पढ़ाई कर रहे हैं या नौकरी?":    { ...p },
  "आप छुट्टी पर कब जा रहे हैं?":      { ...p },
  "ऑफिस कितने बजे जाना है?":          { ...p },
  "सैलरी कब मिलती है?":               { ...p },

  // ── Emotions & Feelings (pending review) ─────────────────────────────────
  "आप खुश हैं?":                        { ...p },
  "आप उदास क्यों हैं?":                { ...p },
  "आपको गुस्सा क्यों आया?":            { ...p },
  "डर लग रहा है क्या?":                { ...p },
  "चिंता मत कीजिए":                    { ...p },
  "सब ठीक हो जाएगा":                   { ...p },
  "मुझे अच्छा लग रहा है":              { ...p },
  "मुझे बुरा लग रहा है":               { ...p },
  "मैं थक गया हूँ":                    { ...p },
  "मुझे नींद आ रही है":                { ...p },

  // ── Question-word variants (pending review) ───────────────────────────────
  "वह क्या है?":                        { ...p },
  "क्या बात है?":                       { ...p },
  "आप क्या कर रहे हैं?":               { ...p },
  "तुम क्या कर रहे हो?":               { ...p },
  "कौन आया है?":                        { ...p },
  "कौन बोल रहा है?":                    { ...p },
  "कौन जाएगा?":                        { ...p },
  "यह कब होगा?":                       { ...p },
  "आप कब आएँगे?":                      { ...p },
  "यह कहाँ रखा है?":                   { ...p },
  "आप ऐसे क्यों कर रहे हैं?":          { ...p },
  "यह कैसे हुआ?":                      { ...p },
  "आप यह कैसे करते हैं?":              { ...p },
  "इसमें कितना समय लगेगा?":            { ...p },
  "कितने लोग आएँगे?":                  { ...p },
  "कितना सामान चाहिए?":                { ...p },

  // ── Requests & Commands (pending review) ─────────────────────────────────
  "ज़रा इधर आइए":                       { ...p },
  "ज़रा सुनिए":                         { ...p },
  "प्लीज़ मेरी मदद कीजिए":             { ...p },
  "ध्यान से सुनिए":                     { ...p },
  "जल्दी कीजिए":                       { ...p },
  "थोड़ा रुक जाइए":                     { ...p },
  "दोबारा बोलिए":                       { ...p },
  "ज़ोर से बोलिए":                      { ...p },
  "धीरे बोलिए":                        { ...p },
  "यह लिख दीजिए":                      { ...p },
  "दरवाज़ा बंद कर दीजिए":              { ...p },
  "खिड़की खोल दीजिए":                  { ...p },
  "लाइट बंद कर दीजिए":                 { ...p },
  "पंखा चला दीजिए":                    { ...p },

  // ── Numbers & Quantity (pending review) ──────────────────────────────────
  "एक किलो आलू देना":                   { ...p },
  "दो गिलास पानी लाना":                 { ...p },
  "तीन टिकट चाहिए":                    { ...p },
  "पाँच मिनट रुक जाइए":                { ...p },
  "सौ रुपये का पेट्रोल डाल दो":        { ...p },
  "आधा किलो चाहिए":                    { ...p },
  "पूरा गिलास भर दो":                  { ...p },
  "थोड़ा कम कर दो":                    { ...p },
  "थोड़ा ज़्यादा दे दो":               { ...p },

  // ── Formal / Interview (pending review) ──────────────────────────────────
  "आप अपने बारे में बताइए":             { ...p },
  "आपकी क्वालिफिकेशन क्या है?":        { ...p },
  "आप यह नौकरी क्यों करना चाहते हैं?": { ...p },
  "आपकी स्ट्रेंथ्स क्या हैं?":         { ...p },
  "आपकी कमज़ोरियाँ क्या हैं?":         { ...p },
  "आप पाँच साल बाद खुद को कहाँ देखते हैं?": { ...p },
  "आपको इस फील्ड का अनुभव है?":        { ...p },
  "आप कब जॉइन कर सकते हैं?":          { ...p },

  // ── Casual / Colloquial (pending review) ─────────────────────────────────
  "क्या सीन है?":                       { ...p },
  "सब बढ़िया?":                         { ...p },
  "कुछ नया?":                          { ...p },
  "क्या चल रहा है आजकल?":              { ...p },
  "तू कैसा है भाई?":                   { ...p },
  "किधर हो यार?":                      { ...p },
  "क्या कर रहा है?":                   { ...p },
  "सुन रहा है क्या?":                  { ...p },
  "मज़ा आया?":                         { ...p },
  "बोर हो रहे हो क्या?":               { ...p },

  // ── Word-order variants (pending review) ─────────────────────────────────
  "क्या है आपका नाम?":                  { ...p },
  "नाम क्या है आपका?":                  { ...p },
  "कहाँ रहते हैं आप?":                  { ...p },
  "आप रहते कहाँ हैं?":                  { ...p },
  "क्या है आपकी उम्र?":                 { ...p },
  "उम्र आपकी कितनी है?":               { ...p },
  "यह चीज़ कितने की है?":               { ...p },
  "कितने की है यह चीज़?":               { ...p },

  // ── Complex sentences (pending review) ───────────────────────────────────
  "अगर कल बारिश नहीं हुई तो हम पिकनिक पर जाएँगे":       { ...p },
  "मुझे नहीं पता था कि आप यहाँ आ रहे हैं":               { ...p },
  "जब मैं छोटा था, तब हम इस शहर में रहते थे":            { ...p },
  "क्या आप मुझे बताएँगे कि यह काम कैसे होता है?":         { ...p },
  "मुझे लगता है कि हमें अभी निकल जाना चाहिए":            { ...p },
  "अगर आपको कोई दिक्कत हो तो मुझे ज़रूर बताइएगा":        { ...p },
  "मैं चाहता हूँ कि आप इस प्रोजेक्ट में मेरी मदद करें":  { ...p },
  "उसने कहा कि वह कल तक वापस आ जाएगा":                   { ...p },
  "हमने सुना है कि नया स्टोर अगले हफ़्ते खुलेगा":         { ...p },
  "क्या आपको याद है कि हमारी पहली मुलाक़ात कहाँ हुई थी?": { ...p },

  // ── Numbers as digits vs words (pending review) ───────────────────────────
  "मेरा फ़ोन नंबर 9876543210 है":                                         { ...p },
  "मेरा फ़ोन नंबर नौ आठ सात छह पाँच चार तीन दो एक ज़ीरो है":             { ...p },
  "मीटिंग 3 बजे है":                                                       { ...p },
  "मीटिंग तीन बजे है":                                                     { ...p },
  "25 लोग आएँगे":                                                          { ...p },
  "पच्चीस लोग आएँगे":                                                      { ...p },

  // ── Mixed Hindi-English (pending review) ─────────────────────────────────
  "आप फ्री हो क्या ईवनिंग में?":       { ...p },
  "मैं ऑफिस से लेट निकलूँगा":          { ...p },
  "प्लीज़ यह फाइल मुझे ईमेल कर देना": { ...p },
  "मीटिंग रीशेड्यूल हो सकती है क्या?": { ...p },
  "मुझे एक क्विक फेवर चाहिए":          { ...p },
  "वीकेंड पे प्लान क्या है?":          { ...p },
}

// ── English → Tribal (verified demo entries) ─────────────────────────────────
export const englishDictionary: Record<string, Entry> = {
  "hello":               { santali: "Johar",        gondi: "Namasthe",   bhili: "Ram Ram",     kui: "Namaskara" },
  "hi":                  { santali: "Johar",        gondi: "Namasthe",   bhili: "Ram Ram",     kui: "Namaskara" },
  "goodbye":             { santali: "Jom jom",      gondi: "Poda poda",  bhili: "Ram Ram",     kui: "Bidaya" },
  "bye":                 { santali: "Jom jom",      gondi: "Poda poda",  bhili: "Ram Ram",     kui: "Bidaya" },
  "thank you":           { santali: "Sari Sari",    gondi: "Dhanwad",    bhili: "Aabhar",      kui: "Dhanyvada" },
  "thanks":              { santali: "Sari Sari",    gondi: "Dhanwad",    bhili: "Aabhar",      kui: "Dhanyvada" },
  "please":              { santali: "Bilok",        gondi: "Dayatho",    bhili: "Meherbani se", kui: "Krupa kari" },
  "sorry":               { santali: "Maf koro",     gondi: "Kshamimpandi", bhili: "Maaf karo", kui: "Kshama kara" },
  "yes":                 { santali: "Ho",           gondi: "Aa",         bhili: "Haa",         kui: "Ha" },
  "no":                  { santali: "Bae",          gondi: "Nai",        bhili: "Nai",         kui: "Na" },
  "good":                { santali: "Sagun",        gondi: "Bhalo",      bhili: "Saaro",       kui: "Bhala" },
  "bad":                 { santali: "Haraam",       gondi: "Khota",      bhili: "Kharaab",     kui: "Manda" },
  "water":               { santali: "Dak",          gondi: "Neeru",      bhili: "Paani",       kui: "Jala" },
  "food":                { santali: "Jom",          gondi: "Tindam",     bhili: "Khaanaanu",   kui: "Bhojana" },
  "eat":                 { santali: "Jom",          gondi: "Tindam",     bhili: "Khaanaanu",   kui: "Bhojana" },
  "home":                { santali: "Era",          gondi: "Ill",        bhili: "Ghar",        kui: "Ili" },
  "house":               { santali: "Era",          gondi: "Ill",        bhili: "Ghar",        kui: "Ili" },
  "school":              { santali: "Iskaul",       gondi: "Iskaul",     bhili: "Iskal",       kui: "Iskularu" },
  "book":                { santali: "Puthi",        gondi: "Kaditam",    bhili: "Chaapdi",     kui: "Puthi" },
  "friend":              { santali: "Mit",          gondi: "Mitra",      bhili: "Dost",        kui: "Mitra" },
  "teacher":             { santali: "Guru",         gondi: "Guruji",     bhili: "Masterji",    kui: "Guru" },
  "child":               { santali: "Baba",         gondi: "Naana",      bhili: "Baal",        kui: "Jhuia" },
  "children":            { santali: "Baba",         gondi: "Naana",      bhili: "Baal",        kui: "Jhuia" },
  "mother":              { santali: "Ayo",          gondi: "Aayi",       bhili: "Baa",         kui: "Ama" },
  "mom":                 { santali: "Ayo",          gondi: "Aayi",       bhili: "Baa",         kui: "Ama" },
  "father":              { santali: "Baba",         gondi: "Appa",       bhili: "Baap",        kui: "Appa" },
  "dad":                 { santali: "Baba",         gondi: "Appa",       bhili: "Baap",        kui: "Appa" },
  "sun":                 { santali: "Singi",        gondi: "Bel",        bhili: "Suraj",       kui: "Suruj" },
  "moon":                { santali: "Chand",        gondi: "Chandar",    bhili: "Chaand",      kui: "Chanda" },
  "tree":                { santali: "Dar",          gondi: "Maram",      bhili: "Jhad",        kui: "Mara" },
  "river":               { santali: "Dare",         gondi: "Vagu",       bhili: "Nadi",        kui: "Noi" },
  "sky":                 { santali: "Serma",        gondi: "Akash",      bhili: "Aakaash",     kui: "Akasha" },
  "love":                { santali: "Bhalo paoa",   gondi: "Prema",      bhili: "Prem",        kui: "Prema" },
  "good morning":        { santali: "Johar",        gondi: "Mata mangalam", bhili: "Suprabhat", kui: "Subha prabata" },
  "good night":          { santali: "Johar raat",   gondi: "Shubha ratri", bhili: "Shubh ratri", kui: "Subha rati" },
  "how are you":         { santali: "Nim chelka se?", gondi: "Nim ela unnaru?", bhili: "Kem cho?", kui: "Kemiti achha?" },
  "i am fine":           { santali: "Ing bhalo achhi", gondi: "Nan bhalo nan", bhili: "Hoon thik chu", kui: "Mote bhala achhi" },
  "i am okay":           { santali: "Ing bhalo achhi", gondi: "Nan bhalo nan", bhili: "Hoon thik chu", kui: "Mote bhala achhi" },
  "i need help":         { santali: "Ing ato jogar kana", gondi: "Naku sahayam kavali", bhili: "Maaro maddad joye", kui: "Mora sahayya darkar" },
  "help me":             { santali: "Ing ato jogar kana", gondi: "Naku sahayam kavali", bhili: "Maaro maddad joye", kui: "Mora sahayya darkar" },
  "i am hungry":         { santali: "Ing lutur kana", gondi: "Naku akali kali", bhili: "Mane bhukh lagi che", kui: "Mora khuda lagichi" },
  "i am thirsty":        { santali: "Ing pia kana", gondi: "Naku dappu kali", bhili: "Mane taras lagi che", kui: "Mora pani darkar" },
  "i am tired":          { santali: "Ing atal kana", gondi: "Nanu agam nan", bhili: "Hoon thakyo chu", kui: "Mote srama lagichi" },
  "what is your name":   { santali: "Nim nam onte ko?", gondi: "Nim pattam ente?", bhili: "Thaaro naam shu che?", kui: "Nuanka namu kemba?" },
  "my name is":          { santali: "Ing nam…", gondi: "Nanu pattam…", bhili: "Maaro naam…", kui: "Mora namu…" },
  "where is water":      { santali: "Dak nonde aaka?", gondi: "Neeru akata undi?", bhili: "Paani kyaay che?", kui: "Jala kete achi?" },
  "where is the water":  { santali: "Dak nonde aaka?", gondi: "Neeru akata undi?", bhili: "Paani kyaay che?", kui: "Jala kete achi?" },
  "where is the school": { santali: "Iskaul nonde?", gondi: "Iskaul akata?", bhili: "Iskal kyaay che?", kui: "Iskularu kete?" },
  "what is this":        { santali: "Uni onte?", gondi: "Idi ente?", bhili: "Aa shu che?", kui: "Ita kemba?" },
  "where am i":          { santali: "Ing nonde achhi?", gondi: "Nanu akata?", bhili: "Hoon kyaay chu?", kui: "Mote kete?" },
  "come here":           { santali: "Idita",        gondi: "Ee patta ra", bhili: "Idhar aao",   kui: "Ita aa" },
  "sit down":            { santali: "Ato bethao",   gondi: "Dubbao",     bhili: "Beso",        kui: "Batha" },
  "stand up":            { santali: "Utrao",        gondi: "Elekkao",    bhili: "Ubhao",       kui: "Uthaa" },
  "speak slowly":        { santali: "Ajom ajom bolo", gondi: "Melle melle bolo", bhili: "Dhime dhime bolo", kui: "Dhire dhire kahaa" },
  "repeat":              { santali: "Phirse bolo",  gondi: "Merupu bolo", bhili: "Phirthi bolo", kui: "Pheri kahaa" },
  "i don't understand":  { santali: "Ing bujhao bae", gondi: "Nanu artham kadu", bhili: "Mane samajyu nai", kui: "Mote bujhijibani" },
  "i do not understand": { santali: "Ing bujhao bae", gondi: "Nanu artham kadu", bhili: "Mane samajyu nai", kui: "Mote bujhijibani" },
  "open the door":       { santali: "Darha jagaoko", gondi: "Vaasal terchao", bhili: "Darwazo ughaado", kui: "Dwara khola" },
  "close the door":      { santali: "Darha banda koro", gondi: "Vaasal band koro", bhili: "Darwazo band karo", kui: "Dwara bandha kara" },
  "well done":           { santali: "Bhalo korcha", gondi: "Bhalo chesav", bhili: "Saaro karyo", kui: "Bhala kari" },
  "be quiet":            { santali: "Chup thaak",   gondi: "Oomm aa",    bhili: "Chup raho",   kui: "Chup thaa" },
  "listen":              { santali: "Sunao",        gondi: "Vino",       bhili: "Suno",        kui: "Suna" },
  "look":                { santali: "Joao",         gondi: "Chuso",      bhili: "Juo",         kui: "Dakhaa" },
  "write":               { santali: "Lekhao",       gondi: "Raso",       bhili: "Likho",       kui: "Likhaa" },
  "read":                { santali: "Padao",        gondi: "Chado",      bhili: "Vaancho",     kui: "Padha" },
  "go":                  { santali: "Layao",        gondi: "Poda",       bhili: "Jaao",        kui: "Jaa" },
  "stop":                { santali: "Ato thaak",    gondi: "Ato",        bhili: "Ruko",        kui: "Rokaa" },
}

// ── Hinglish / Roman-script aliases → Hindi dictionary key ────────────────────
export const hinglishAliases: Record<string, string> = {
  "namaste":               "नमस्ते",
  "namaskar":              "नमस्कार",
  "namasthe":              "नमस्ते",
  "dhanyavad":             "धन्यवाद",
  "dhanyavaad":            "धन्यवाद",
  "shukriya":              "शुक्रिया",
  "shukriyaa":             "शुक्रिया",
  "pani":                  "पानी",
  "paani":                 "पानी",
  "ghar":                  "घर",
  "kitab":                 "किताब",
  "kitaab":                "किताब",
  "dost":                  "दोस्त",
  "shikshak":              "शिक्षक",
  "baccha":                "बच्चा",
  "bacha":                 "बच्चा",
  "khana":                 "खाना",
  "khaana":                "खाना",
  "maa":                   "माँ",
  "maa ji":                "माँ",
  "pita":                  "पिता",
  "pita ji":               "पिता",
  "suraj":                 "सूरज",
  "sooraj":                "सूरज",
  "chand":                 "चाँद",
  "chaand":                "चाँद",
  "ped":                   "पेड़",
  "nadi":                  "नदी",
  "aakaash":               "आकाश",
  "aakash":                "आकाश",
  "achha":                 "अच्छा",
  "accha":                 "अच्छा",
  "bura":                  "बुरा",
  "haan":                  "हाँ",
  "ha":                    "हाँ",
  "nahi":                  "नहीं",
  "nahin":                 "नहीं",
  "pyar":                  "प्यार",
  "alvida":                "अलविदा",
  "phir milenge":          "फिर मिलेंगे",
  "subh prabhat":          "शुभ प्रभात",
  "subha prabhat":         "शुभ प्रभात",
  "shubh ratri":           "शुभ रात्रि",
  "shubha ratri":          "शुभ रात्रि",
  "kripya":                "कृपया",
  "kripaya":               "कृपया",
  "maaf kijiye":           "माफ़ कीजिए",
  "maafi":                 "माफ़ कीजिए",
  "theek hai":             "सब ठीक है?",
  "theek hain":            "सब ठीक है?",
  "koi baat nahi":         "कोई बात नहीं",
  "bahut dhanyavad":       "बहुत बहुत धन्यवाद",
  "bahut dhanyavaad":      "बहुत बहुत धन्यवाद",
  "main theek hoon":       "मैं ठीक हूँ",
  "main theek hun":        "मैं ठीक हूँ",
  "mujhe madad chahiye":   "मुझे मदद चाहिए",
  "paani kahan hai":       "पानी कहाँ है?",
  "pani kahan hai":        "पानी कहाँ है?",
  "aapka naam kya hai":    "आपका नाम क्या है?",
  "apka naam kya hai":     "आपका नाम क्या है?",
  "school kahan hai":      "स्कूल कहाँ है?",
  "yeh kya hai":           "यह क्या है?",
  "ye kya hai":            "यह क्या है?",
  "main kahan hoon":       "मैं कहाँ हूँ?",
  "mein kahan hoon":       "मैं कहाँ हूँ?",
  "aap kaise hain":        "आप कैसे हैं?",
  "aap kaisi hain":        "आप कैसी हैं?",
  "main thak gaya":        "मैं थक गया हूँ",
  "mujhe neend aa rahi":   "मुझे नींद आ रही है",
  "mujhe bhookh lagi":     "मुझे भूख लगी है",
  "mujhe pyaas lagi":      "मुझे प्यास लगी है",
  "kal milte hain":        "कल मिलते हैं",
  "dar lag raha hai":      "डर लग रहा है क्या?",
  "chinta mat karo":       "चिंता मत कीजिए",
  "sab theek hoga":        "सब ठीक हो जाएगा",
  "jaldi karo":            "जल्दी कीजिए",
  "ruko":                  "थोड़ा रुक जाइए",
  "dobara bolo":           "दोबारा बोलिए",
  "dhire bolo":            "धीरे बोलिए",
  "zor se bolo":           "ज़ोर से बोलिए",
  "door band karo":        "दरवाज़ा बंद कर दीजिए",
  "khidki kholo":          "खिड़की खोल दीजिए",
  "light band karo":       "लाइट बंद कर दीजिए",
  "pankha chalao":         "पंखा चला दीजिए",
}

export type SourceLang = "hindi" | "hinglish" | "english"

export const sourceLangConfig: Record<SourceLang, { label: string; flag: string; recognition: string; placeholder: string; font: string }> = {
  hindi:    { label: "Hindi",    flag: "हि",  recognition: "hi-IN",  placeholder: "यहाँ हिंदी में टाइप करें...", font: "var(--font-devanagari)" },
  hinglish: { label: "Hinglish", flag: "Hi",  recognition: "hi-IN",  placeholder: "Kuch bhi type karo — Hindi ya English...", font: "var(--font-body)" },
  english:  { label: "English",  flag: "En",  recognition: "en-IN",  placeholder: "Type in English...", font: "var(--font-body)" },
}

export function lookupTranslation(raw: string, sourceLang: SourceLang, targetLang: Language): string {
  const key = raw.trim()
  const normalized = key.toLowerCase().replace(/[?।!]/g, "").trim()

  if (sourceLang === "english") {
    if (englishDictionary[normalized]) return englishDictionary[normalized][targetLang]
    const partial = Object.entries(englishDictionary).find(
      ([k]) => normalized.includes(k) || k.includes(normalized)
    )
    return partial?.[1]?.[targetLang] ?? "__NOT_FOUND__"
  }

  if (sourceLang === "hinglish") {
    // 1. Direct Hindi script key
    if (dictionary[key]) return dictionary[key][targetLang]
    // 2. Hinglish alias → Hindi key
    const hindiKey = hinglishAliases[normalized]
    if (hindiKey && dictionary[hindiKey]) return dictionary[hindiKey][targetLang]
    // 3. English dictionary fallback
    if (englishDictionary[normalized]) return englishDictionary[normalized][targetLang]
    // 4. Partial Hindi match
    const partialHindi = Object.entries(dictionary).find(
      ([k]) => k.includes(key) || key.includes(k)
    )
    if (partialHindi) return partialHindi[1][targetLang]
    // 5. Partial alias match
    const partialAlias = Object.entries(hinglishAliases).find(
      ([k]) => normalized.includes(k) || k.includes(normalized)
    )
    if (partialAlias && dictionary[partialAlias[1]]) return dictionary[partialAlias[1]][targetLang]
    return "__NOT_FOUND__"
  }

  // Hindi
  if (dictionary[key]) return dictionary[key][targetLang]
  const partial = Object.entries(dictionary).find(
    ([k]) => k.includes(key) || key.includes(k)
  )
  return partial?.[1]?.[targetLang] ?? "__NOT_FOUND__"
}

export type VocabCard = {
  hindi: string
  transliteration: string
  meaning: string
  translations: Record<Language, string>
  category: string
}

export const vocabCards: VocabCard[] = [
  { hindi: "नमस्ते",  transliteration: "Namaste",    meaning: "Hello / Greetings", translations: { santali: "Johar",     gondi: "Namasthe",  bhili: "Ram Ram",   kui: "Namaskara" }, category: "Greetings" },
  { hindi: "धन्यवाद", transliteration: "Dhanyavaad", meaning: "Thank you",         translations: { santali: "Sari Sari", gondi: "Dhanwad",   bhili: "Aabhar",    kui: "Dhanyvada" }, category: "Greetings" },
  { hindi: "अलविदा",  transliteration: "Alvida",     meaning: "Goodbye",           translations: { santali: "Jom jom",   gondi: "Poda poda", bhili: "Ram Ram",   kui: "Bidaya"    }, category: "Greetings" },
  { hindi: "पानी",    transliteration: "Paani",       meaning: "Water",             translations: { santali: "Dak",       gondi: "Neeru",     bhili: "Paani",     kui: "Jala"      }, category: "Daily Life" },
  { hindi: "घर",      transliteration: "Ghar",        meaning: "Home / House",      translations: { santali: "Era",       gondi: "Ill",       bhili: "Ghar",      kui: "Ili"       }, category: "Daily Life" },
  { hindi: "खाना",    transliteration: "Khaana",      meaning: "Food / Meal",       translations: { santali: "Jom",       gondi: "Tindam",    bhili: "Khaanaanu", kui: "Bhojana"   }, category: "Daily Life" },
  { hindi: "स्कूल",   transliteration: "Skool",       meaning: "School",            translations: { santali: "Iskaul",    gondi: "Iskaul",    bhili: "Iskal",     kui: "Iskularu"  }, category: "Education" },
  { hindi: "किताब",   transliteration: "Kitaab",      meaning: "Book",              translations: { santali: "Puthi",     gondi: "Kaditam",   bhili: "Chaapdi",   kui: "Puthi"     }, category: "Education" },
  { hindi: "शिक्षक",  transliteration: "Shikshak",   meaning: "Teacher",           translations: { santali: "Guru",      gondi: "Guruji",    bhili: "Masterji",  kui: "Guru"      }, category: "Education" },
  { hindi: "माँ",     transliteration: "Maa",         meaning: "Mother",            translations: { santali: "Ayo",       gondi: "Aayi",      bhili: "Baa",       kui: "Ama"       }, category: "Family" },
  { hindi: "पिता",    transliteration: "Pita",        meaning: "Father",            translations: { santali: "Baba",      gondi: "Appa",      bhili: "Baap",      kui: "Appa"      }, category: "Family" },
  { hindi: "दोस्त",   transliteration: "Dost",        meaning: "Friend",            translations: { santali: "Mit",       gondi: "Mitra",     bhili: "Dost",      kui: "Mitra"     }, category: "Family" },
  { hindi: "पेड़",    transliteration: "Ped",         meaning: "Tree",              translations: { santali: "Dar",       gondi: "Maram",     bhili: "Jhad",      kui: "Mara"      }, category: "Nature" },
  { hindi: "नदी",     transliteration: "Nadi",        meaning: "River",             translations: { santali: "Dare",      gondi: "Vagu",      bhili: "Nadi",      kui: "Noi"       }, category: "Nature" },
  { hindi: "सूरज",    transliteration: "Suraj",       meaning: "Sun",               translations: { santali: "Singi",     gondi: "Bel",       bhili: "Suraj",     kui: "Suruj"     }, category: "Nature" },
  { hindi: "चाँद",    transliteration: "Chaand",      meaning: "Moon",              translations: { santali: "Chand",     gondi: "Chandar",   bhili: "Chaand",    kui: "Chanda"    }, category: "Nature" },
]

export type WorksheetEntry = {
  hindi: string
  transliteration: string
  translation: string
}

export function getWorksheetData(lang: Language, level: string, _activity: string): WorksheetEntry[] {
  const baseWords: VocabCard[] = level === "Beginner"
    ? vocabCards.filter(c => ["Greetings", "Daily Life"].includes(c.category))
    : level === "Class 6–8"
    ? vocabCards.filter(c => ["Education", "Family", "Nature"].includes(c.category))
    : vocabCards

  return baseWords.slice(0, 10).map(w => ({
    hindi: w.hindi,
    transliteration: w.transliteration,
    translation: w.translations[lang],
  }))
}
