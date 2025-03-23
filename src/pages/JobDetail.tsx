
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getJobById } from '@/lib/mockData';
import { Job } from '@/lib/types';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  MapPin, 
  Clock, 
  CalendarDays, 
  DollarSign, 
  CheckCircle2, 
  ListChecks, 
  Heart, 
  Share2, 
  ArrowLeft 
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      if (id) {
        const foundJob = getJobById(id);
        setJob(foundJob || null);
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
  
  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Link to="/">
            <Button>Back to Jobs</Button>
          </Link>
        </main>
      </div>
    );
  }
  
  // Calculate days ago
  const postedDate = new Date(job.postedAt);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - postedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Jobs
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <div className="bg-card rounded-lg border p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-md overflow-hidden">
                    <img 
                      src={job.company?.logo || 'https://via.placeholder.com/64'} 
                      alt={job.company?.name || 'Company'} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold">{job.title}</h1>
                    <Link to={`/companies/${job.companyId}`} className="text-primary hover:underline">
                      {job.company?.name}
                    </Link>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.locationType}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {diffDays} {diffDays === 1 ? 'day' : 'days'} ago
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Job Description */}
            <div className="bg-card rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <p className="text-muted-foreground whitespace-pre-line mb-6">{job.description}</p>
              
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-primary" />
                Responsibilities
              </h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Requirements
              </h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {job.requirements.map((item, index) => (
                  <li key={index} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Benefits
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {job.benefits.map((item, index) => (
                  <li key={index} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="bg-card rounded-lg border p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Salary</h3>
                    <p className="text-muted-foreground">{job.salary}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">{job.location}</p>
                    <p className="text-sm text-muted-foreground">{job.locationType}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Job Type</h3>
                    <p className="text-muted-foreground">{job.type}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CalendarDays className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Posted</h3>
                    <p className="text-muted-foreground">{diffDays} days ago</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-3">
                <Button className="w-full">Apply Now</Button>
                <Button variant="outline" className="w-full">Save Job</Button>
              </div>
            </div>
            
            {/* Company Card */}
            {job.company && (
              <div className="bg-card rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">About the Company</h2>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-md overflow-hidden">
                    <img 
                      src={job.company.logo} 
                      alt={job.company.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{job.company.name}</h3>
                    <p className="text-sm text-muted-foreground">{job.company.industry}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {job.company.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>Founded {job.company.founded}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{job.company.location}</span>
                  </div>
                </div>
                
                <Link to={`/companies/${job.companyId}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    View Company Profile
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
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

export default JobDetail;
