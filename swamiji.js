
const thoughts = [
    "Arise, awake, and stop not until the goal is reached.",
    "You cannot believe in God until you believe in yourself.",
    "The greatest sin is to think yourself weak.",
    "The greatest religion is to be true to your own nature.",
    "All differences in this world are of degree, and not of kind, because oneness is the secret of everything.",
    "All power is within you; you can do anything and everything.",
    "Take up one idea. Make that one idea your life – think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success."
];

function displayThoughts() {
    const thoughtsList = document.getElementById('thoughts-list');
    thoughts.forEach(thought => {
        const li = document.createElement('li');
        li.textContent = thought;
        thoughtsList.appendChild(li);
    });
}

window.onload = displayThoughts;
