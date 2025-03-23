
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { JobLocation, JobType } from '@/lib/types';
import { Search, MapPin, Briefcase, X } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (filters: {
    query: string;
    location: string;
    locationType: JobLocation | '';
    jobType: JobType | '';
  }) => void;
}

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [locationType, setLocationType] = useState<JobLocation | ''>('');
  const [jobType, setJobType] = useState<JobType | ''>('');

  const handleSearch = () => {
    onSearch({
      query,
      location,
      locationType,
      jobType,
    });
  };

  const handleReset = () => {
    setQuery('');
    setLocation('');
    setLocationType('');
    setJobType('');
    onSearch({
      query: '',
      location: '',
      locationType: '',
      jobType: '',
    });
  };

  return (
    <div className="w-full bg-card rounded-lg border p-4 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Job title or keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Select value={locationType} onValueChange={(value) => setLocationType(value as JobLocation)}>
          <SelectTrigger>
            <SelectValue placeholder="Location Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any Location Type</SelectItem>
            <SelectItem value="Remote">Remote</SelectItem>
            <SelectItem value="Hybrid">Hybrid</SelectItem>
            <SelectItem value="On-site">On-site</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={jobType} onValueChange={(value) => setJobType(value as JobType)}>
          <SelectTrigger>
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Any Job Type</SelectItem>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
            <SelectItem value="Freelance">Freelance</SelectItem>
            <SelectItem value="Internship">Internship</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="outline" onClick={handleReset} className="flex items-center gap-1">
          <X className="h-4 w-4" />
          Reset
        </Button>
        <Button onClick={handleSearch} className="flex items-center gap-1">
          <Search className="h-4 w-4" />
          Search Jobs
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
