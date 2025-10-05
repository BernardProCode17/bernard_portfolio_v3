// This is a server component for data fetching
import React from 'react';
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import {ProjectCardProps} from "@/types/projectsTypes";
import {fetchFunction, fetchProjectQuery} from "@/functions/fetchFunctions";

// Export a function to fetch the data
export async function getProjectsData() {
    return await fetchFunction(fetchProjectQuery);
}

// Server component to display projects
export default async function ServerHomeProjectsDisplay() {
  // Fetch projects data
  const projectsData = await getProjectsData();

  // Only display the first 3 projects
  const displayedProjects = projectsData.slice(0, 3);

  return (
    <div className="home_projects-display">
      {displayedProjects.map((project: ProjectCardProps, index: number) => {
        const imageUrl = urlFor(project.project_image).width(800).url();
        
        return (
          <Link href={`/projects/${project.slug}`} key={index} className="home_project-card">
            <div className="home_project-image">
              <Image
                src={imageUrl}
                alt={project.project_image_alt || project.title}
                width={500}
                height={350}
                quality={85}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="home_project-card_description">
              <h3>{project.title}</h3>
              <p>{project.short_description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}