// Inject Header & Footer when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Header HTML
    const headerHTML = `
        <header>
            <div class="container">
                            <div class="header-brand">
                <h1><a href="/" class="static-link">Candice Cantrelle</a></h1>
                <p>Signature Visual Solutions for Luxury Brands</p>
                            </div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/#services">Services</a></li>
                        <li><a href="/certifications/certifications.html">Credentials</a></li>
                                                            <li><a href="/portfolio.html">Portfolio</a></li>
                    <li><a href="/work-with-me.html">Work With Me</a></li>                    </ul>
                </nav>
            </div>
        </header>
    `;

    // Footer HTML
    const footerHTML = `
        <footer>
            
                <!-- CONTACT & PRIVATE CONSULTATION -->
                <section id="consultation" class="cta-section">
                        <h2>Contact & Private Consultation</h2>
                        <p>Discretion and excellence are at the heart of every partnership. Schedule a private conversation to explore how signature visual artistry can elevate your brand.</p>
                        <p class="consultation-details">For inquiries or to book a confidential consult, use the form below or email hello@candicecantrelle.com</p>
                        
                        <a href="https://candice-cantrelle.breely.com/form/10405" class="cta-btn-large">Request Consultation</a>
                        
                        <div class="contact-info">
                            <p>Connect: <a href="https://linkedin.com/in/candicecantrelle">LinkedIn</a> | <a href="https://github.com/Unicorn0-0Cakes">GitHub</a></p>
                        </div>
                </section>
                        <div class="container">
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
               </div>
            </div>
                    </div> <!-- footer-content -->
                        </div> <!-- container -->
        </footer>
        `;
            

         // Insert header at the top of the body
         document.body.insertAdjacentHTML("afterbegin", headerHTML);

         // Insert footer at the end of the body
         document.body.insertAdjacentHTML("beforeend", footerHTML);
    });
