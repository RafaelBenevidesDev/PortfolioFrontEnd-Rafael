/* =========================
   UTILITÁRIOS
========================= */

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =========================
   CURSOR PERSONALIZADO
========================= */

const cursor = document.querySelector(".cursor");
const hoverTargets = document.querySelectorAll("button, .links a, .card");

if (cursor && !prefersReducedMotion) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    hoverTargets.forEach((target) => {
        target.addEventListener("mouseenter", () => cursor.classList.add("is-active"));
        target.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
    });
}

/* =========================
   CÍRCULOS SEGUINDO O MOUSE
========================= */

const circles = document.querySelectorAll(".circle");

if (!prefersReducedMotion) {
    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        circles.forEach((circle) => {
            const speed = Number(circle.getAttribute("data-speed")) || 1;
            const moveX = (window.innerWidth / 2 - x) / speed;
            const moveY = (window.innerHeight / 2 - y) / speed;

            circle.style.transform =
                `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
        });
    });
}

/* =========================
   EFEITO PARALLAX SUAVE
========================= */

const hero = document.querySelector("#hero");
const aboutImage = document.querySelector(".about-container img");

if (!prefersReducedMotion) {
    document.addEventListener("mousemove", (e) => {
        const { innerWidth, innerHeight } = window;
        const moveX = (e.clientX - innerWidth / 2) / innerWidth;
        const moveY = (e.clientY - innerHeight / 2) / innerHeight;

        if (hero) {
            hero.style.setProperty("--parallax-x", `${moveX * 12}px`);
            hero.style.setProperty("--parallax-y", `${moveY * 12}px`);
        }

        if (aboutImage) {
            aboutImage.style.transform =
                `translate(${moveX * -10}px, ${moveY * -10}px) rotate(${moveX * 2}deg) scale(1.02)`;
        }
    });
}

/* =========================
   PARTÍCULAS DO FUNDO
========================= */

if (window.tsParticles) {
    tsParticles.load("particles", {
        fullScreen: {
            enable: false
        },
        detectRetina: true,
        particles: {
            number: {
                value: 72,
                density: {
                    enable: true,
                    area: 900
                }
            },
            color: {
                value: ["#ff4d3d", "#ffb347", "#7c5cff"]
            },
            opacity: {
                value: 0.72,
                random: {
                    enable: true,
                    minimumValue: 0.18
                }
            },
            size: {
                value: { min: 1, max: 3.2 }
            },
            links: {
                enable: true,
                distance: 135,
                color: "#ff4d3d",
                opacity: 0.22,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.1,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "out"
                }
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                repulse: {
                    distance: 120,
                    duration: 0.4
                },
                push: {
                    quantity: 3
                }
            }
        }
    });
}

/* =========================
   ANIMAÇÕES AO ROLAR
========================= */

if (window.ScrollReveal) {
    const sr = ScrollReveal({
        distance: "70px",
        duration: 1200,
        easing: "cubic-bezier(0.2, 0.7, 0.2, 1)",
        reset: false
    });

    sr.reveal(".subtitle", { origin: "top", delay: 120 });
    sr.reveal(".hero-text h1", { origin: "left", delay: 180 });
    sr.reveal(".hero-text button", { origin: "bottom", delay: 260 });
    sr.reveal(".circles", { origin: "right", delay: 180 });
    sr.reveal("#sobre h2", { origin: "top" });
    sr.reveal(".about-container", { origin: "bottom", delay: 100 });
    sr.reveal("#projetos h2", { origin: "top" });
    sr.reveal(".card", { interval: 140, origin: "bottom" });
    sr.reveal("#contato h2", { origin: "top" });
    sr.reveal(".links", { origin: "bottom" });
}

/* =========================
   MICROINTERAÇÕES NOS CARDS
========================= */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty("--mouse-x", `${x}%`);
        card.style.setProperty("--mouse-y", `${y}%`);
        card.style.background = `
            radial-gradient(circle at ${x}% ${y}%, rgba(255, 179, 71, 0.18), transparent 30%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "";
    });
});
