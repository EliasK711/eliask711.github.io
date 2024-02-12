let attempts = 1;

document.getElementById('yesBtn').addEventListener('click', function() {
    alert('Thank you! Happy Valentine\'s Day ❤️');
});

const phrases = [
        "Will you be my Valentine?",
        "Oh come on, be my Valentine! Pretty please?",
        "I won't give up that easy! Will you be my Valentine? Please <3",
        "I'll keep asking! Will you please be my Valentine?",
        "How about now? Will you be my Valentine? Please, please, please?",
        "I can do this all day! Be my Valentine, will you?",
        "GIATI TO PAIZEIS DYSKOLH?!???!!",
        "EGW FTAIW POY RWTHSA :((",
        "ASTEIO EEEE?????",
        "SE PARAKALW AGAPH MOUUU",
        "AN EINAI DYNAMON",
        "TA PARATAW",
        "OYTE KAN AXXAXAXAAXAX",
        "ANTEEEEEE",
        "ANTEEEEEEEEE",
        "ANTEEEEEEEEEEE",
        "ANTEEEEEEEEEEEEEEE",
        "ANTEEEEEEEEEEEEEEEEEEEEE",
        "ANTEE <3",
        "FTANEIIIIIIII",
        "STAMATAAAAAAAAA",
        "THA GAMITHEIS FILE",
        "THA TO EKSAFANISW TO NO",
        "ΗΕΗΕ",
        "TELOSSSSS"
];

let yesBtn = document.getElementById('yesBtn');
let noBtn = document.getElementById('noBtn');

document.getElementById('noBtn').addEventListener('click', function() {

    // Μετακίνηση της δήλωσης του noBtn πριν από τη χρήση της
    if (attempts === phrases.indexOf("THA GAMITHEIS FILE")) {
        // Εφαρμογή της εικόνας φόντου στο κουμπί "No"
        noBtn.style.backgroundImage = "url('https://i1.prth.gr/images/w880/files/2022-11-10/tik_tok_in__2_.jpg')";
        noBtn.style.backgroundSize = "100% 100%"; // Εξασφαλίζει ότι η εικόνα καλύπτει ολόκληρη την περιοχή του κουμπιού
        noBtn.style.color = "white"; 
    } else {
        noBtn.style.backgroundImage = "none";
        noBtn.style.color = "initial";
    }

    if (attempts < phrases.length - 1) {
        let newQuestion = phrases[attempts];
        document.getElementById('question').textContent = newQuestion;
        document.getElementById('question').style.fontSize = (16 + attempts) + 'px';
        attempts++;
    } else {
        document.getElementById('question').textContent = phrases[phrases.length - 1];
        noBtn.style.display = 'none';
        
        // Κεντράρισμα και περαιτέρω αύξηση του κουμπιού "Yes"
        yesBtn.style.position = 'absolute';
        yesBtn.style.left = '50%';
        yesBtn.style.transform = 'translateX(-50%)';
        yesBtn.style.fontSize = (16 + attempts) + 'px';
    }
});
