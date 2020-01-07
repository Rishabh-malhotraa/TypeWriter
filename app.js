const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    " my name is matrix",
    "I was created by",
    "rishGod",
    "I'm a random quote generator",
    "So? Are you ready for my greatness",
    "Sure?",
    "OKAYY",
    "3...",
    "2...",
    "1...",
    "Let's GO",
    "Yesterday you said tomorrow. Just do it.",
    "Every saint has a past, and every sinner has a future.",
    "We have two lives, and the second begins when we realize we only have one.",
    "Adversity makes men, and prosperity makes monsters.",
    "A complicated thing is just a bunch of simple things put together.(This describes programming perfectly.)",
    "What labels me, negates me.",
    "The bird that envies those who swim may die having never spread its wings. ",
    "The smallest coffins are the heaviest.",
    "They tried to bury us. They didn’t know we were seeds",
    "“We choose to go to the moon and do the other things, not because they are easy, but because they are hard,",
    "Something you are reading you could be writing",
    `Ya know I hear Iran has no Walmarts
    Only Targets.`
    "If someone told me that owning a house and having a home were two different things I would have made less money and more memories.",
    "It's amazing what you can put up with, as long as you know you only have to go through it once. And really, the difficulties of this life are all like that, because our whole life, from start to finish, only happens once."
];
const typingDelay = 150;
const erasingDelay = 30;
const newTextDelay = 300; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing"); //remove blinking while adding
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});