import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="font-serif text-xl font-medium text-text-primary">
              Musings by Tanmay Tripathi
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a 
                href="/" 
                className="text-text-secondary hover:text-text-accent transition-colors duration-200 text-sm font-medium"
              >
                Articles
              </a>
              <a 
                href="#" 
                className="text-text-secondary hover:text-text-accent transition-colors duration-200 text-sm font-medium"
              >
                About
              </a>
              
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};