import './App.css';
import React, { useState } from 'react';
import foto from './assets/profile.jpeg';
import { FaReact, FaNodeJs, FaLaravel, FaPython } from 'react-icons/fa';
import { SiPostgresql, SiMongodb } from 'react-icons/si';

const proyectos = [
  {
    titulo: "Marine Products Sales & Management System",
    descripcion: "Management system for sales and marine product combos.",
    link: "https://github.com/yourusername/project1",
  },
  {
    titulo: "Cleaning Products Inventory Management",
    descripcion: "Inventory and sales management system for cleaning products.",
    link: "https://washinton.store/",
    credentials: { email: "emailcorp1@corp.com", password: "com123" },
  },
  // {
  //   titulo: "Comparador de Laboratorios",
  //   descripcion: "Compara capacidades técnicas desde PDFs.",
  //   link: "https://github.com/tuusuario/proyecto3",
  // },
];

const tecnologias = [
  { nombre: "React", icono: <FaReact color="#61DBFB" size="3rem" /> },
  { nombre: "Node", icono: <FaNodeJs color="#68A063" size="3rem" /> },
  { nombre: "Laravel", icono: <FaLaravel color="#FF2D20" size="3rem" /> },
  { nombre: "Django", icono: <FaPython color="#3776AB" size="3rem" /> },
  { nombre: "PostgreSQL", icono: <SiPostgresql color="#336791" size="3rem" /> },
  { nombre: "MongoDB", icono: <SiMongodb color="#47A248" size="3rem" /> },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [credentials, setCredentials] = useState(null);

  const handleViewCredentials = (credentials) => {
    setCredentials(credentials);
    setShowModal(true);
  };

  return (
    <div className="container">
      <header className="header">
        <img src={foto} alt="Mi foto" className="perfil-foto" />
        <h1 className="nombre">Hector Zamorano</h1>
        <p className="description">
          22-year-old student in the 10th cuatrimestre of Software Development and Management Engineering 
          at the Universidad Tecnológica de Tijuana, with 3 years of experience specializing in 
          modern web and mobile application development technologies. 
          Graduated with a <strong>TSU in Information Technologies, Software Development Area</strong> (2021 - 2023).
        </p>
      </header>

      <section className="proyectos">
        <h2 className="seccion-titulo">Featured Projects</h2>
        <div className="proyectos-grid">
          {proyectos.map((proyecto, index) => (
            <div className="card" key={index}>
              <h3 className="card-titulo">{proyecto.titulo}</h3>
              <p className="card-descripcion">{proyecto.descripcion}</p>
              <div className="card-botones">
                <button
                  className="view-project-button"
                  onClick={() => window.open(proyecto.link, "_blank")}
                >
                  View Project
                </button>
                {proyecto.credentials && (
                  <button
                    className="view-credentials-button"
                    onClick={() => handleViewCredentials(proyecto.credentials)}
                  >
                    Credentials
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Credentials</h3>
            <p><strong>Email:</strong> {credentials.email}</p>
            <p className='passw'><strong>Password:</strong> {credentials.password}</p>
            <button className="close-modal-button" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <section className="tecnologias">
        <h2 className="seccion-titulo">Technologies Stack</h2>
        <div className="tecnologias-grid">
          {tecnologias.map((tecnologia, index) => (
            <div className="tecnologia-card" key={index}>
              {tecnologia.icono}
              <p className="tecnologia-nombre">{tecnologia.nombre}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Hector Zamorano's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;