// Inject Header & Footer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Header HTML
    const headerHTML = `
        <header>
            <div class="container">
                <h1><a href="/" class="static-link">>_ Candice Cantrelle</a></h1>
                <p>Game Developer | AI Researcher | Neural Networks & Procedural Generation</p>
            </div>
        </header>
    `;

    // Footer HTML
    const footerHTML = `
        <footer>
            <section id="contact">
                <div class="container">
                    <h2>~ Contact Me</h2>
                    <p>Let's connect! Reach out to discuss potential collaborations or just to chat about AI and game development.</p>
                    <p>Email: <a href="mailto:dev@candicecantrelle.com">dev@candicecantrelle.com</a></p>
                    <p>GitHub: <a href="https://github.com/Unicorn0-0Cakes" target="_blank">@Unicorn0-0Cakes</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/candice-cantrelle-6b032435" target="_blank">@Candice Cantrelle</a></p>
                </div>
            </section>
            <div class="container">
                <p>&copy; 2025 Candice Cantrelle. All Rights Reserved.</p>
            </div>
        </footer>
    `;

    // Insert header at the top of the body
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // Insert footer at the end of the body
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
