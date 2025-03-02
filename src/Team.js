import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Team = () => {
    return(
        <div>
        <Header/>
        <main id="main">
            <section id="breadcrumbs" class="breadcrumbs">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Team</h2>
                        <ol>
                            <li><a href="/index">Home</a></li>
                            <li>Team</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section id="team" class="team section-bg">
                <div class="container">
                    <div class="section-title" data-aos="fade-up">
                        <h2>Our <strong>Team</strong></h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                            <div class="member" data-aos="fade-up">
                                <div class="member-img">
                                <img src="assets/images/team/team-1.jpg" class="img-fluid" alt=""/>
                                <div class="social">
                                    <a href="/"><i class="bi bi-twitter"></i></a>
                                    <a href="/"><i class="bi bi-facebook"></i></a>
                                    <a href="/"><i class="bi bi-instagram"></i></a>
                                    <a href="/"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="100">
                            <div class="member-img">
                                <img src="assets/images/team/team-2.jpg" class="img-fluid" alt=""/>
                                <div class="social">
                                    <a href="/"><i class="bi bi-twitter"></i></a>
                                    <a href="/"><i class="bi bi-facebook"></i></a>
                                    <a href="/"><i class="bi bi-instagram"></i></a>
                                    <a href="/"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="200">
                            <div class="member-img">
                                <img src="assets/images/team/team-3.jpg" class="img-fluid" alt=""/>
                                <div class="social">
                                    <a href="/"><i class="bi bi-twitter"></i></a>
                                    <a href="/"><i class="bi bi-facebook"></i></a>
                                    <a href="/"><i class="bi bi-instagram"></i></a>
                                    <a href="/"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="300">
                            <div class="member-img">
                                <img src="assets/images/team/team-4.jpg" class="img-fluid" alt=""/>
                                <div class="social">
                                    <a href="/"><i class="bi bi-twitter"></i></a>
                                    <a href="/"><i class="bi bi-facebook"></i></a>
                                    <a href="/"><i class="bi bi-instagram"></i></a>
                                    <a href="/"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </main>
        <Footer/>
        </div>
    )
};

export default Team;