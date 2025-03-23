
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCompanyWithJobs } from '@/lib/mockData';
import { Company, Job } from '@/lib/types';
import Navbar from '@/components/Navbar';
import JobCard from '@/components/JobCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building, 
  MapPin, 
  Users, 
  Globe, 
  Calendar, 
  Briefcase, 
  ArrowLeft 
} from 'lucide-react';

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      if (id) {
        const foundCompany = getCompanyWithJobs(id);
        setCompany(foundCompany || null);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-64 bg-muted rounded"></div>
            <div className="h-4 w-32 bg-muted rounded"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </main>
      </div>
    );
  }
  
  if (!company) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
          <p className="text-muted-foreground mb-6">The company you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        {/* Company Header */}
        <div className="bg-card rounded-lg border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="h-24 w-24 rounded-lg overflow-hidden">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{company.name}</h1>
              <p className="text-muted-foreground mb-4">{company.industry}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{company.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{company.size}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Founded {company.founded}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-primary" />
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company Content */}
        <Tabs defaultValue="about" className="mb-8">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="jobs">
              Jobs ({company.jobs?.length || 0})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-6">
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {company.description}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="jobs" className="mt-6">
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Open Positions at {company.name}
              </h2>
              
              {company.jobs && company.jobs.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {company.jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No open positions at the moment.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-muted py-8 mt-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-xl font-bold text-primary mb-4 md:mb-0">
              <Briefcase className="h-6 w-6" />
              <span>JobBoard</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} JobBoard. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyProfile;
