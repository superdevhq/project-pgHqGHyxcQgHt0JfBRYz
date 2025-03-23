
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Company } from '@/lib/types';
import { Building, MapPin, Users } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
  jobCount?: number;
}

const CompanyCard = ({ company, jobCount }: CompanyCardProps) => {
  return (
    <Link to={`/companies/${company.id}`}>
      <Card className="hover-scale h-full">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-md overflow-hidden">
              <img 
                src={company.logo || 'https://via.placeholder.com/64'} 
                alt={company.name} 
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{company.name}</h3>
              <p className="text-muted-foreground">{company.industry}</p>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{company.location}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{company.size}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building className="h-4 w-4" />
              <span>Founded {company.founded}</span>
            </div>
          </div>
          
          {jobCount !== undefined && (
            <div className="mt-4">
              <Badge variant="secondary">
                {jobCount} {jobCount === 1 ? 'job' : 'jobs'} available
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompanyCard;
