import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ArticleCard } from "@/components/ArticleCard";

// Sample articles data
const articles = [
  {
    title: "How does UPI work?",
    excerpt: "It's worth a thought how our long hours of NEFT payments and ATM lines are reduced to seconds by UPI. This article is a quick read of how our payments happen",
    date: "September 8, 2025",
    readTime: "4 min read",
    category: "Technology",
    link: "/articles/UPIworks"
  },
  {
    title: "Creatine : physical and cognitive elixir",
    excerpt: "Creatine is one of the most researched supplements in the world. This guide helps you understand how to use it effectively and safely. Use the interactive tools below to find the right dosage for you.",
    date: "August 18, 2025",
    readTime: "5 min read",
    category: "Health & Fitness",
    link: "/articles/Creatine-Guide"
  }
  
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-serif text-3xl font-medium text-text-primary">
                Recent Articles
              </h2>
              <a 
                href="#" 
                className="text-text-accent hover:text-text-primary transition-colors duration-200 text-sm font-medium"
              >
                View all →
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  excerpt={article.excerpt}
                  date={article.date}
                  readTime={article.readTime}
                  category={article.category}
                  link={article.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl font-medium text-text-primary mb-4">
              Stay Connected
            </h2>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              Get notified when new articles are published. No spam, just thoughtful content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Feature coming soon"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-text-secondary text-sm">
                © 2024 Tanmay Tripathi. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://x.com/maypiy5" target="_blank" rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-accent transition-colors duration-200 text-sm"
              >
                Twitter
              </a>
              <a 
                href="https://www.linkedin.com/in/tripathi-tanmay61/" target="_blank" rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-accent transition-colors duration-200 text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;