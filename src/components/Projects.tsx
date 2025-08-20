import { content } from '@/lib/content';
import { ExternalLink, Github, TrendingUp, Zap, Target, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';

const projectIcons = [TrendingUp, Zap, Target, BarChart3];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-business-primary to-dev-accent mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Real solutions that bridge business strategy and technical execution, delivering measurable results.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {content.projects.map((project, index) => {
              const IconComponent = projectIcons[index % projectIcons.length];
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Info */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        index % 2 === 0 ? 'bg-gradient-business' : 'bg-gradient-dev'
                      }`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">What it does:</h4>
                        <p className="text-gray-700">{project.what}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">How it works:</h4>
                        <p className="text-gray-700">{project.how}</p>
                      </div>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-800 mb-1">Impact:</h4>
                        <p className="text-green-700">{project.impact}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {project.links.demo && (
                        <Button 
                          variant="outline" 
                          className={index % 2 === 0 ? 'btn-outline-business' : 'btn-outline-dev'}
                          asChild
                        >
                          <a href={project.links.demo} className="flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.links.repo && (
                        <Button 
                          variant="outline" 
                          className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          asChild
                        >
                          <a href={project.links.repo} className="flex items-center">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Project Visual */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className={`card-elegant p-8 text-center ${
                      index % 2 === 0 ? 'hover-glow-business' : 'hover-glow-dev'
                    }`}>
                      <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 ${
                        index % 2 === 0 ? 'bg-gradient-business' : 'bg-gradient-dev'
                      }`}>
                        <IconComponent className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Project #{index + 1}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {index % 2 === 0 ? 'Business Process Optimization' : 'Technical Implementation'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}