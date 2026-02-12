// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to make YES btn to grow

let yesScale = 1;

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 3;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else{
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// YES is clicked

// yesBtn.addEventListener("click", () => {

//     catImg.src = "cat_kiss.gif";

//     document.querySelector(".letter-window").classList.add("final");

//     buttons.style.display = "none";

//     finalText.style.display = "block";
// });



// YES button click – full-screen surprise
yesBtn.addEventListener("click", () => {
    // Hide the letter card
    document.querySelector(".letter-window").style.display = "none";

    // Create a new full-screen cat kiss GIF
    const fullCat = document.createElement("img");
    fullCat.src = "cat_kiss.gif";
    fullCat.style.position = "fixed";
    fullCat.style.top = "50%";
    fullCat.style.left = "50%";
    fullCat.style.transform = "translate(-50%, -50%)";
    fullCat.style.width = "100vw";
    fullCat.style.height = "100vh";
    fullCat.style.objectFit = "cover";
    fullCat.style.zIndex = "100";

    // Add the new full-screen cat GIF to the page
    document.body.appendChild(fullCat);

    // // Fireworks
    // for (let i = 0; i < 5; i++) {
    //     setTimeout(() => confetti({
    //         particleCount: 150,
    //         spread: 70,
    //         origin: { y: 0.6 }
    //     }), i * 500);
    // }

        // Redirect after 4 seconds (adjust to GIF length)
setTimeout(() => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "love.html";
    }, 600); // matches CSS duration
}, 2880); // your kiss gif timing
});

letterBtn.addEventListener("click", () => {
    message.style.display = "none";
    letterBtn.style.display = "none";

    letterImage.classList.add("show");
});

