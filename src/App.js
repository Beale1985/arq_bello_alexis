import "./css/styles.css";
import img1 from "./assets/img/portfolio/fullsize/1.jpg";
import img2 from "./assets/img/portfolio/fullsize/2.jpg";
import img3 from "./assets/img/portfolio/fullsize/3.jpg";
import img4 from "./assets/img/portfolio/fullsize/4.jpg";
import img5 from "./assets/img/portfolio/fullsize/5.jpg";
import img6 from "./assets/img/portfolio/fullsize/6.jpg";
import {MdDraw} from "react-icons/md";
import {FaBuffer} from "react-icons/fa";
import {GiPencilBrush, GiHammerBreak} from "react-icons/gi";

function App() {
  return (
    <div id="page-top">
      {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#page-top">Arquitecto Bello Alexis</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#about">Sobre Mí</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services">Servicios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="#footer">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Masthead */}
        <header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">“La belleza perece en la vida pero es inmortal en el arte”.</h1>
                        <h2 className="text-white font-weight-bold">Leonardo Da Vinci.</h2>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">En permanente búsqueda de soluciones simples para problemas complejos. </p>
                        <a className="btn btn-primary btn-xl" href="#about">Sobre Mí</a>
                    </div>
                </div>
            </div>
        </header>
        {/* About */}
        <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">Objetivo Profesional</h2>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">Mi nombre es Alexis Bello, Arquitecto, con más de 10 años de experiencia en el rubro.
                            Mi visión de la arquitectura está orientada a las personas que la habitan, considero que los espacios deben adaptarse a las necesidades 
                            de los usuarios, generando espacios dinámicos, flexibles y funcionales.</p>
                        <a className="btn btn-light btn-xl" href="#services">Servicios</a>
                    </div>
                </div>
            </div>
        </section>
        {/* Services */}
        <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">Servicios</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="fs-1 text-primary"><MdDraw/></i></div>
                            <h3 className="h4 mb-2">Anteproyectos</h3>
                            <p className="text-muted mb-0">Ideas representadas en imágenes 3D, esquemas y plantas funcionales.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="fs-1 text-primary"><FaBuffer /></i></div>
                            <h3 className="h4 mb-2">Proyectos</h3>
                            <p className="text-muted mb-0">Resoluciones técnicas de todos los aspectos de la obra.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="fs-1 text-primary"><GiPencilBrush /></i></div>
                            <h3 className="h4 mb-2">Renders</h3>
                            <p className="text-muted mb-0">Imágenes 3D que representan ideas.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="fs-1 text-primary"><GiHammerBreak /></i></div>
                            <h3 className="h4 mb-2">Remodelaciones</h3>
                            <p className="text-muted mb-0">Soluciones que modifican espacios.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Portfolio */}
        <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-box">
                            <img className="img-fluid" src={img1} alt="Vivienda Unifamiliar 1" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Vivienda Unifamiliar</div>
                                <div className="project-name m-1">Casa de fin de semana, con posibilidad de ampliar a una segunda planta
                                en Pilar del Este.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-box">
                            <img className="img-fluid" src={img2} alt="Vivienda Unifamiliar 2" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Vivienda Unifamiliar</div>
                                <div className="project-name p-1">Anteproyecto desarrollado en dos plantas, privilegiando las vistas al patio interno. 
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-box">
                            <img className="img-fluid" src={img3} alt="Vivienda Unifamiliar 3" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Vivienda Unifamiliar</div>
                                <div className="project-name p-1">Remodelación de vivienda unifamiliar en barrio cerrado.
                                Se modificó la fachada, se solucionaron problemas de filtraciones y se modificó la galería interna. 
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-box">
                            <img className="img-fluid" src={img4} alt="Vivienda Unifamiliar 4" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Vivienda Unifamiliar</div>
                                <div className="project-name p-1">Anteproyecto de vivienda con patio interno como protagonista. 
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-box">
                            <img className="img-fluid" src={img5} alt="Sector Parrilla" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Remodelación PH</div>
                                <div className="project-name p-1">Remodelación en PH, se realizaron trabajos de pintura, electricidad e instalaciones
                                de agua fría, caliente, desagues cloacales y pluviales.
                                 
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                    <div className="portfolio-box">
                            <img className="img-fluid" src={img6} alt="Remodelación" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Remodelación Departamento</div>
                                <div className="project-name p-1">Se integró la cocina con el estar, generando un espacio
                                más luminoso y ventilado.
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer */}
        <footer className="bg-light py-5" id="footer">
            <div className="container px-4 px-lg-5"><div className="small text-center text-muted">Arquitecto Bello Alexis - alexisbello0310@hotmail.com - 1169559766</div></div>
        </footer>
    </div>
  );
}

export default App;
