import {Navegacion} from './hooks/navbar.jsx'
import './App.css'
import Image from './assets/ian_cat.jpeg'
import IPN from './assets/ipn.jpg'
import UAM from './assets/uam.jpg'
import { Habilidades } from './hooks/habilidades.jsx'
import { Experiencia } from './hooks/experiencia.jsx'
import { Idiomas } from './hooks/idiomas.jsx'
import { Certificaciones } from './hooks/certificaciones.jsx'
export default function App() {
  return (
    <>
    <title></title>
      <header className='header_nav'>
        <h1>Ian Ricardo Rios Velazquez</h1>
        <Navegacion />
      </header>
      <main>
          <section className="sobremi">
            <h2>Acerca de mí</h2>
            <div className='container_about_me'>
              <div className='image_container'>
                <img src={Image} alt="Ian Ricardo Rios Velazquez" />
              </div>
              <div className='text_about'>
                <p className="description">
                  Analista de Datos y Desarrollador de ETL y Fullstack con comprensión de SCRUM. <br /> 
                  Mi enfoque es estratégico, orientado a la automatización de procesos, la seguridad y calidad de los datos, y el impulso de la inteligencia de negocio. <br />
                  He desarrollado soluciones robustas en Python para el análisis avanzado de datos, integrando interfaces gráficas interactivas, optimización de algoritmos y transformación de datos brutos en decisiones de alto valor.
                </p>

                <div className="contact_box">
                  <h3>Contacto</h3>
                  <div className="contact_links">
                    <a href="mailto:riosianric@gmail.com" className="contact_item">📧 riosianric@gmail.com</a>
                    <a href="tel:+525610371845" className="contact_item">📞 +52 5610371845</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <div className='container_div'>
        
          <section className="educacion">
              <h2>Educación</h2>

              <div className='education_container'>
                  <section className='ipn'>
                    <div>
                    <img src={IPN} alt="Escuela Superior de Física y Matemáticas" />
                    </div>
                    <div>
                    <h2>Instituto Politecnico Nacional</h2>
                    <h3>Ingeniería Matemática -- Especialidad en Finanzas</h3>
                    <p>Agosto 2019 - Agosto 2023</p>
                    <p> Titulado</p>
                    </div>
                  </section>
                  
                  <section className='uam'>
                    <div>
                    <img src={UAM} alt="Universidad Autónoma Metropolitana" />
                    </div>
                    <div>
                    <h2>Universidad Autónoma Metropolitana</h2>
                    <h3>Ingeniería Física -- Especialidad en Energias</h3>
                    <p>Octubre 2018 - Febrero 2024</p>
                    <p> Titulado </p>
                    </div>
                  </section>
              </div>
          </section>

          <section className="idiomas">
              <h2>Idiomas</h2>
              <Idiomas />
          </section>
        </div>

        <section className="expe">
              <h2>Experiencia Profesional</h2>
              <Experiencia />
          </section>
        
        <section className='habilidades'>
          <h2>Habilidades Tecnicas</h2>
          <Habilidades />
        </section>
        
        <section className='certif'>
          <h2>Certificaciones</h2>
          <Certificaciones />
        </section>
      </main>

      <footer>
        <div className='footer_div'>
          <div>
              <p> Te invito a revisar mis redes sociales y proyectos</p>
              <p>Copyright © 2024 Ian Ricardo Rios Velazquez. All rights reserved.</p>
          </div>
          <Navegacion />
        </div>
      </footer>
    </>
  )
}

