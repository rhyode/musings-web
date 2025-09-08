import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-serif text-xl font-medium text-text-primary hover:text-text-accent transition-colors duration-200">
            Musings by Tanmay Tripathi
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className="text-text-secondary hover:text-text-accent transition-colors duration-200 text-sm font-medium"
            >
              Articles
            </Link>
            <a href="#" className="text-text-secondary hover:text-text-accent transition-colors duration-200 text-sm font-medium">
              About
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};