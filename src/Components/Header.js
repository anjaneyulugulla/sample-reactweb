// import React from "react";

const Header = () => {
    return(
        <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">
                <h1 class="logo me-auto">
                    <a href="/index"><span>Com</span>pany</a>
                </h1>
                <a href="/index" class="logo me-auto me-lg-0">
                    <img src="/assets/images/logo.png" alt="" class="img-fluid"/>
                </a>
                <nav id="navbar" class="navbar order-last order-lg-0">
                    <ul>
                        <li><a href="/index" class="active">Home</a></li>
                        <li class="dropdown">
                            <a href="/"><span>About</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/team">Team</a></li>
                                <li><a href="/testimonials">Testimonials</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        {/* <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="/pricing">Pricing</a>
                        </li> */}
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <div class="header-social-links d-flex">
                    <a href="/" class="twitter"><i class="bu bi-twitter"></i></a>
                    <a href="/" class="facebook"><i class="bu bi-facebook"></i></a>
                    <a href="/" class="instagram"><i class="bu bi-instagram"></i></a>
                    <a href="/" class="linkedin"><i class="bu bi-linkedin"></i></a>
                </div>
            </div>
        </header>
    )
};

export default Header;