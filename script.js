const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Inertia");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said, please try again";

    if(message.includes('hey') || message.includes('hello')|| message.includes('hi jarvis')) {
        const finalText = "Hello Boss.";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss. Tell me how can I help you?";
        speech.text = finalText;
    }
	 else if(message.includes('good morning jarvis')) {
        const finalText = "very good Morning boss. Tell me how can I help you?";
        speech.text = finalText;
    }
	 else if(message.includes('good night jarvis')) {
        const finalText = "wisg you very good night boss.";
        speech.text = finalText;
    }
	else if(message.includes('good afternoon jarvis')) {
        const finalText = "good afternoon boss.";
        speech.text = finalText;
    }
	

    else if(message.includes('name')|| message.includes('what is your name')) {
        const finalText = "My name is jarvis";
        speech.text = finalText;
    }
	
	 else if(message.includes('what are you doing')) {
        const finalText = "i just improve my self";
        speech.text = finalText;
    }
	  else if(message.includes('play arijit singh song')) {
        window.open("https://youtu.be/y51ei6b7Flc?si=WsVUD1JBW_fZp4cO");
        const finalText = "playing ari-it singh song";
        speech.text = finalText;
    }
	
	

    else if(message.includes('open google')) {
        window.open("https://google.com",);
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com",);
        const finalText = "Opening Instagram";
        speech.text = finalText;
    }
	  else if(message.includes('open youtube')) {
        window.open("https://www.youtube.com/",);
        const finalText = "Opening youtube";
        speech.text = finalText;
    }
	  else if(message.includes('open facebook')) {
        window.open("https://www.facebook.com/");
        const finalText = "Opening facebook";
        speech.text = finalText;
    }
	
	  else if(message.includes('open roshan instagram profile')|| message.includes('open roshan instagram id')) {
        window.open("https://www.instagram.com/gold_grace_roshan?igsh=MTBtZHNrZDR4dDA3aw==",);
        const finalText = "Opening roshan Instagram profile";
        speech.text = finalText;
    }
	
	
	
	
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
