import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ArticleCard } from "@/components/ArticleCard";

//articles index
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
    title: "Tech-teas : tech bullets",
    excerpt: "This article consists of random tech bullets/ideas/fullforms facts you didn't know you needed, or maybe would be fun to know.",
    date: "Periodically Updated",
    readTime: "fun read",
    category: "Technology",
    link: "/articles/Tech-teas"
  },
  {
    title: "Quotes I like",
    excerpt: "A catalogue of quotes, thoughts or lines from books which I stumbled upon and added value to my brain at that point of time.",
    date: "Periodically Updated",
    readTime: "Good read",
    category: "Variable",
    link: "/articles/QuotesIlike"
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

        {/* About Section */}
        <section id="about" className="py-16 md:py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-6">
                About Tanmay
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Tech & Academics */}
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="font-semibold text-xl text-text-primary mb-4 flex items-center">
                  <span className="text-2xl mr-3">💻</span>
                  Tech & Development
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  A final year student of B.Tech EEE. Combined with his Electrical and Electronics course work and hardware skills, he decided to work more in the software side of tech. He has been learning about various aspects of development, system design and has been learning DSA and solving problems on platforms like leetcode for an year.
                </p>
                <a 
                  href="https://tanmay-tripathi.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-accent hover:text-text-primary transition-colors text-sm font-medium"
                >
                  View Portfolio →
                </a>
              </div>

              {/* Music & Arts */}
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="font-semibold text-xl text-text-primary mb-4 flex items-center">
                  <span className="text-2xl mr-3">🎵</span>
                  Music & Arts
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Other than academics and career inclination, he is a self learned artist/musician who writes, composes and sings. He also leads a band called Jhankar who dropped 2 songs which he composed and sang, more songs in the pipeline as life permits.
                </p>
                <a 
                  href="https://linktr.ee/jhankarr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-accent hover:text-text-primary transition-colors text-sm font-medium"
                >
                  Listen to Jhankar →
                </a>
              </div>

              {/* Fitness & Health */}
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="font-semibold text-xl text-text-primary mb-4 flex items-center">
                  <span className="text-2xl mr-3">💪</span>
                  Fitness & Wellness
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  He is also a self learned fitness and gym enthusiast, lifting for 2.5+ years, and likes both the combination of old school heavy lifting and science based lifting. He occasionally does deep dive on various supplements, gym routines, diet, calisthenics and overall health and fitness, and thus has better view of everyday life decisions.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-subtle p-8 rounded-xl border border-border">
                <p className="text-lg text-text-secondary leading-relaxed">
                  Through these <strong className="text-text-primary">musings</strong>, I share insights from my diverse journey—bridging engineering rigor with creative expression, technical problem-solving with artistic exploration, and academic learning with real-world application. 
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mt-4">
                  Whether it's breaking down complex tech concepts, exploring health optimization, or reflecting on the intersection of art and science, these articles aim to make the complex accessible and the mundane meaningful.
                </p>
              </div>
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