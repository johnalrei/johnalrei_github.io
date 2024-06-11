function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += "responsive" ;
    } else {
        menuBth.className = "nav menu"
    }
}


/*------Dark mode----*/

const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
   body.classList.toggle("dark");
   

})

/*----Typing Effect----*/

var typingEffect = new Typed(".typedText", {
    strings: ["Store", "Thrift", "City" ],
    loop: true,
    typeSpeed: 100, // Corrected from typedSpeed to typeSpeed
    backSpeed: 80,
    backDelay: 2000,
});

/*------Scroll animation-----*/

// Corrected ScrollReveal Configuration
const srLeft = ScrollReveal({
    origin: "left", // Corrected from origin "left" to origin: "left"
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 }); // Added dot for class selector

const srRight = ScrollReveal({
    origin: "right", // Corrected from origin: "left" to origin: "right" for variety
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

/*-------active link----*/

const sections = document.querySelectorAll(".sector[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { // Corrected sectionHeaight to sectionHeight
            document
                .querySelector(".nav_menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav_menu a[href*=" + sectionId + "]")
                .classList.remove("active-link"); // Corrected from add to remove
        }
    });
}

window.addEventListener("scroll", scrollActive);
