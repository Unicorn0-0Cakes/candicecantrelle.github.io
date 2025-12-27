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
            
        <!-- CONTACT -->
    <section id="contact">
        <div class="container">
            <h2>Contact & Private Consultation</h2>
            <p>Discretion and excellence are at the heart of every partnership. Schedule a private conversation to explore how signature visual artistry can elevate your brand.</p>
            <p class="consultation-details">For inquiries or to book a confidential consult, use the form below or email hello@candicecantrelle.com</p>
            
            <a href="https://candice-cantrelle.breely.com/form/10405" class="cta-btn">Request Consultation</a>
            
            <p class="social-links">Connect: <a href="https://linkedin.com/in/candicecantrelle">LinkedIn</a> | <a href="https://github.com/Unicorn0-0Cakes">GitHub</a></p>
        </div>
    </section>


        </footer>
        `;
            

         // Insert header at the top of the body
         document.body.insertAdjacentHTML("afterbegin", headerHTML);

         // Insert footer at the end of the body
         document.body.insertAdjacentHTML("beforeend", footerHTML);
    });
