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
          <!-- CONTACT FORM -->
          <section id="contact-form-section">
            <div class="container">
              <h2>// Get In Touch</h2>
              <p>Interested in collaborating or have a question? Reach out using the form below.</p>
              <form action="YOUR_FORMSPREE_ENDPOINT_HERE" method="POST"> <!-- Placeholder action -->
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn">Send Message</button>
              </form>
            </div>
          </section>
        <section id="contact">
            <div class="container">
                <h2>~ Contact Me</h2>
                <p>Let's connect! </p>
                <br>
                <p>Reach out to discuss potential collaborations</p>
                <p>or just to chat about AI and game development.</p>

                <div class="contact-links">
                    <a href="mailto:dev@candicecantrelle.com" class="contact-item">📧 dev@candicecantrelle.com</a>
                    <a href="https://github.com/Unicorn0-0Cakes" target="_blank" class="contact-item">🐙 GitHub @Unicorn0-0Cakes</a>
                    <a href="https://www.linkedin.com/in/candice-cantrelle-6b032435/" target="_blank" class="contact-item">🔗 Linkedin @Candice Cantrelle</a>
                </div>
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
