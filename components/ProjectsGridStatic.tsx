"use client";
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { renderIcon } from "@/lib/hybrid-icon-resolver";
import { MarkdownRenderer } from './MarkdownRenderer';
interface StaticProjectsData {
  projects: Array<{
    name: string | null
    description: string | null
    picUrl: string | null
    technologies: Array<{
      name: string
      logo: string | null
    }>
    custom_links: Array<{
      icon: string      // Library key OR custom SVG data
      title: string
      url: string
    }>
  }>
}
export default function ProjectsGridStatic({ projects }: StaticProjectsData) {
  return (
    <section className="mb-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-primary mb-5">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            return (
              <Card key={index} className="h-full overflow-hidden">
                {}
                {project.picUrl && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.picUrl}
                      alt={project.name || 'Project image'}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 4}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className='text-xl'>{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  {project.description && (
                    <div className="mb-4">
                      <MarkdownRenderer content={project.description} />
                    </div>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 5).map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center gap-1">
                          {tech.logo && (
                            <Image
                              src={tech.logo}
                              alt={tech.name}
                              width={16}
                              height={16}
                              className="object-contain"
                              unoptimized
                            />
                          )}
                          <span className="text-xs text-muted-foreground">{tech.name}</span>
                        </div>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 5} more
                        </Badge>
                      )}
                    </div>
                  )}
                  {project.custom_links && project.custom_links.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.custom_links.map((link, linkIndex) => (
                        <Button key={linkIndex} variant="outline" size="sm" asChild>
                          <a href={link.url} target="_blank" rel="noopener noreferrer" title={link.title}>
                            {renderIcon(link.icon, "mr-2")}
                            {link.title}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}