
import { useState, useEffect } from 'react';
import { jobs, companies } from '@/lib/mockData';
import { Job, JobLocation, JobType } from '@/lib/types';
import Navbar from '@/components/Navbar';
import JobCard from '@/components/JobCard';
import SearchFilters from '@/components/SearchFilters';
import { Button } from '@/components/ui/button';
import { Briefcase, Building } from 'lucide-react';

const Index = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (filters: {
    query: string;
    location: string;
    locationType: JobLocation | '';
    jobType: JobType | '';
  }) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const filtered = jobs.filter(job => {
        // Filter by search query
        if (filters.query && !job.title.toLowerCase().includes(filters.query.toLowerCase()) && 
            !job.description.toLowerCase().includes(filters.query.toLowerCase())) {
          return false;
        }
        
        // Filter by location
        if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
          return false;
        }
        
        // Filter by location type
        if (filters.locationType && job.locationType !== filters.locationType) {
          return false;
        }
        
        // Filter by job type
        if (filters.jobType && job.type !== filters.jobType) {
          return false;
        }
        
        return true;
      });
      
      setFilteredJobs(filtered);
      setIsLoading(false);
    }, 500);
  };

  // Get featured jobs
  const featuredJobs = jobs.filter(job => job.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover thousands of job opportunities with all the information you need.
          </p>
          
          <SearchFilters onSearch={handleSearch} />
        </section>
        
        {/* Featured Jobs Section */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Featured Jobs
            </h2>
            <Button variant="link">View All Jobs</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredJobs.slice(0, 4).map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
        
        {/* Featured Companies Section */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              Featured Companies
            </h2>
            <Button variant="link">View All Companies</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {companies.slice(0, 3).map(company => (
              <div key={company.id} className="bg-card rounded-lg border p-6 hover-scale">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-md overflow-hidden">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.industry}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {company.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">View Profile</Button>
              </div>
            ))}
          </div>
        </section>
        
        {/* All Jobs Section */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6">All Jobs</h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-card rounded-lg border p-6 animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-md bg-muted"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-32 bg-muted rounded"></div>
                      <div className="h-3 w-24 bg-muted rounded"></div>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <div className="h-6 w-16 bg-muted rounded-full"></div>
                    <div className="h-6 w-16 bg-muted rounded-full"></div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="h-3 w-24 bg-muted rounded"></div>
                    <div className="h-3 w-16 bg-muted rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No jobs found</h3>
              <p className="text-muted-foreground">Try adjusting your search filters</p>
            </div>
          )}
        </section>
      </main>
      
      <footer className="bg-muted py-8">
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

export default Index;
