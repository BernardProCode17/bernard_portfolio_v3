'use client'

import { useEffect, useState } from 'react'
import ProjectCard from "@/components/projects_page_component/project_card";
import { ProjectCardProps } from "@/types/projectsTypes";
import { Key } from "react";

// Pre-fetch the data on the server side and pass it to the client component
export default function HomeProjectsDisplay() {
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects on the client side
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="home_project_display addDisplay">Loading projects...</div>;
  }

  return (
    <div className="home_project_display addDisplay">
      {projects.map((project: ProjectCardProps, index: Key | null | undefined) => (
        <ProjectCard key={index} project={project}/>
      ))}
    </div>
  );
}