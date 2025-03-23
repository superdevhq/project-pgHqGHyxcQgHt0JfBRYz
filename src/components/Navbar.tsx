
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Briefcase className="h-6 w-6" />
          <span>JobBoard</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Find Jobs
          </Link>
          <Link to="/companies" className="text-sm font-medium hover:text-primary transition-colors">
            Companies
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/post-job">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Post a Job
            </Button>
          </Link>
          <Link to="/login">
            <Button size="sm">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
