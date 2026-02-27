import {navegacion} from './hooks/navbar.jsx'
import './App.css'
import Image from './assets/ian_cat.jpeg'
import IPN from './assets/ipn.jpg'
import UAM from './assets/uam.jpg'
export default function App() {
  return (
    <>
    <title></title>
      <header className='header_nav'>
        <h1>Ian Ricardo Rios Velazquez</h1>
        {navegacion()}
      </header>
      <main>
          <section className="sobremi">
              <h2>Acerca de mi</h2>
              <div className='container_about_me'>
                <div className='image_container'>
                  <img src={Image} alt="ian" />
                </div>
                <div className='text_about'>
                  <p>
                    Analista de Datos y Desarrollador de ETL y Fullstack con comprensión de SCRUM. <br /> Mi enfoque es estratégico, orientado a la automatización de procesos, la seguridad y calidad de los datos, y el impulso de la inteligencia de negocio. <br />
                    He desarrollado soluciones robustas en Python para el análisis avanzado de datos, integrando interface graficas interactivas para el usuario, conexión a bases de datos, optimización de algoritmos con el objetivo de transformar datos brutos en decisiones de alto valor</p>
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
              <p>Español (Nativo)</p>
              <p>Inglés (Intermedio)</p>
              <p>Portugues (Intermedio)</p>
              <p>Frances (Básico)</p>
          </section>
        </div>

        <section className="expe">
              <h2>Experiencia Profesional</h2>
          </section>
        
        <section className='certif'>
          <h2>Certificaciones</h2>
        </section>
        <section className="proyectos">
              <h2>Proyectos -- Freelance</h2> 
          </section>
      </main>

      <footer>
        <div className='footer_div'>
          <div>
              <p> Te invito a revisar mis redes sociales y proyectos</p>
              <p>Copyright © 2024 Ian Ricardo Rios Velazquez. All rights reserved.</p>
          </div>
          {navegacion()}
        </div>
      </footer>
    </>
  )
}

