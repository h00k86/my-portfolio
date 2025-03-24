

import { useState, useEffect } from "react";
import { db } from "../firebase"; // Importa il database Firestore
import { collection, getDocs } from "firebase/firestore";
import './Projects.css';
import '../ProjectItem.css';
import ProjectItem from '../ProjectItem'

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));


        if (querySnapshot.empty) {
          console.log("Nessun progetto trovato.");
        } else {
          console.log(`Trovati ${querySnapshot.size} progetti.`);
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
    
      <div className="projects-container">
      {loading ? (
        <p>Caricamento...</p>
      ) : projects.length === 0 ? (
        <p>Nessun progetto disponibile.</p>
      ) : (
        projects.map(project => (
          <ProjectItem title={project.title} image={project.image} description={project.description} />
        ))
      )}
    </div>
  );
}



export default Projects;




