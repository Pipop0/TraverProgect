document.addEventListener("DOMContentLoaded", () => {
    // Example: Add a hover animation on all section headings
    const sections = document.querySelectorAll("h2");
    sections.forEach((section) => {
        section.addEventListener("mouseover", () => {
            section.style.color = "#1e90ff";
            section.style.transition = "color 0.3s ease";
        });
        section.addEventListener("mouseout", () => {
            section.style.color = "";
        });
    });

    console.log("Website loaded successfully!");
});
