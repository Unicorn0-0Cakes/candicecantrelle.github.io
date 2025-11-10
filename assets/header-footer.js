// Inject Header & Footer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Header HTML
    const headerHTML = `
        <header>
            <div class="container">
                <h1><a href="/" class="static-link">Candice Cantrelle</a></h1>
                <p>Signature Visual Solutions for Luxury Brands</p>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/certifications/certifications.html">Credentials</a></li>                                 <li><a href="/jewelry/">Jewelry Visualization</a></li>
                        <li><a href="/#consultation">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;

    // Footer HTML
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-brand">
                    <h3>Candice Cantrelle</h3>
                    <p>Crafting elevated digital experiences for iconic brands and luxury professionals.</p>
                </div>
                
                <div class="footer-links">
                    <div class="footer-column">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/#services">Bespoke AI Visual Creation</a></li>
                            <li><a href="/#services">Luxury Virtual Staging</a></li>
                            <li><a href="/#services">Brand Identity & Strategy</a></li>
                            <li><a href="/#services">Interactive Experiences</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h4>About</h4>
                        <ul>
                            <li><a href="/#portfolio">Portfolio Highlights</a></li>
                            <li><a href="/certifications/certifications.html">Credentials</a></li>                                 <li><a href="/jewelry/">Jewelry Visualization</a></li>
                            <li><a href="/#testimonials">Client Testimonials</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-column">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="mailto:hello@candicecantrelle.com">hello@candicecantrelle.com</a></li>
                            <li><a href="https://linkedin.com/in/candice-cantrelle-6b832435" target="_blank">LinkedIn</a></li>
                            <li><a href="https://github.com/Unicorn0-0Cakes" target="_blank">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 Candice Cantrelle. All Rights Reserved.</p>
                <p class="footer-tagline">Discretion. Excellence. Artistry.</p>
            </div>
        </footer>
    `;

    // Insert header at the top of the body
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // Insert footer at the end of the body
    document.body.insertAdjacentHTML("beforeend", footerHTML);
});
