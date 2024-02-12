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
    "THA TO EKSAFANISW TO NO",
    "ΗΕΗΕ",
    "TELOSSSSS",
];

document.getElementById('noBtn').addEventListener('click', function() {
    if (attempts < phrases.length - 1) { 
        let newQuestion = phrases[attempts];
        document.getElementById('question').textContent = newQuestion;
        let newFontSize = 16 + attempts * 2;
        document.getElementById('question').style.fontSize = newFontSize + 'px';
        attempts++;
    } else if (attempts === phrases.length - 1) {
        let newQuestion = phrases[attempts];
        document.getElementById('question').textContent = newQuestion;
        document.getElementById('noBtn').style.display = 'none';
        document.getElementById('yesBtn').style.margin = '0 auto';
        document.getElementById('yesBtn').style.display = 'block';
    }
});