
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Job } from '@/lib/types';
import { CalendarDays, MapPin, Clock } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  // Calculate days ago
  const postedDate = new Date(job.postedAt);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - postedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return (
    <Link to={`/jobs/${job.id}`}>
      <Card className={`hover-scale ${job.featured ? 'border-primary/50 shadow-md' : ''}`}>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-md overflow-hidden">
                <img 
                  src={job.company?.logo || 'https://via.placeholder.com/48'} 
                  alt={job.company?.name || 'Company'} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-muted-foreground">{job.company?.name}</p>
              </div>
            </div>
            
            {job.featured && (
              <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary/30">
                Featured
              </Badge>
            )}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
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
          
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">{job.location}</div>
            <div className="font-medium text-sm">{job.salary}</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default JobCard;
