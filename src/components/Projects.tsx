import { content } from '@/lib/content';
import { ExternalLink, Github, TrendingUp, Zap, Target, BarChart3, Clock, CheckCircle, Wrench, Eye } from 'lucide-react';
import { Button } from './ui/button';

const projectIcons = [TrendingUp, Zap, Target, BarChart3];

const getStatusConfig = (status: string) => {
  switch (status) {
    case 'available':
      return { 
        icon: CheckCircle, 
        text: 'Available', 
        className: 'text-green-600 bg-green-50 border-green-200' 
      };
    case 'in-development':
      return { 
        icon: Wrench, 
        text: 'In Development', 
        className: 'text-blue-600 bg-blue-50 border-blue-200' 
      };
    case 'planning':
      return { 
        icon: Clock, 
        text: 'Planning Phase', 
        className: 'text-amber-600 bg-amber-50 border-amber-200' 
      };
    case 'coming-soon':
      return { 
        icon: Eye, 
        text: 'Coming Soon', 
        className: 'text-purple-600 bg-purple-50 border-purple-200' 
      };
    default:
      return { 
        icon: Clock, 
        text: 'Coming Soon', 
        className: 'text-gray-600 bg-gray-50 border-gray-200' 
      };
  }
};

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
              const statusConfig = getStatusConfig(project.links.status);
              const StatusIcon = statusConfig.icon;
              
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Project Info */}
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center justify-between">
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
                      <div className={`flex items-center space-x-1 px-3 py-1 rounded-full border text-sm font-medium ${statusConfig.className}`}>
                        <StatusIcon className="w-3 h-3" />
                        <span>{statusConfig.text}</span>
                      </div>
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
                          <a href={project.links.demo} className="flex items-center" target="_blank" rel="noopener noreferrer">
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
                          <a href={project.links.repo} className="flex items-center" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            {project.links.status === 'available' ? 'View Code' : 'GitHub Profile'}
                          </a>
                        </Button>
                      )}
                      {!project.links.demo && project.links.status !== 'available' && (
                        <Button 
                          variant="outline" 
                          className="border-gray-300 text-gray-500 cursor-not-allowed opacity-60"
                          disabled
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo {statusConfig.text}
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