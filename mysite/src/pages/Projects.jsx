

import { useState, useEffect } from "react";
import { db } from "../firebase"; // Importa il database Firestore
import { collection, getDocs } from "firebase/firestore";
import './Projects.css';


function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("📡 Tentativo di recupero dati da Firestore...");
        const querySnapshot = await getDocs(collection(db, "projects"));

        console.log("📋 Dati ricevuti da Firestore:", querySnapshot.docs);

        if (querySnapshot.empty) {
          console.log("❌ Nessun progetto trovato.");
        } else {
          console.log(`✅ Trovati ${querySnapshot.size} progetti.`);
        }

        const projectsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProjects(projectsArray);
      } catch (error) {
        console.error("🔥 Errore nel recupero dei progetti:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Lista Progetti</h1>
      {loading ? (
        <p>Caricamento...</p>
      ) : projects.length === 0 ? (
        <p>Nessun progetto disponibile.</p>
      ) : (
        projects.map(project => (
          <div key={project.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} style={{ width: "150px", height: "150px" }} />
            <p>{project.description}</p>
          </div>
        ))
      )}
    </div>
  );
}



export default Projects;




