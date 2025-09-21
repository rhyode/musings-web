import { Header } from "@/components/Header";

const Techteas = () => {
  // Easy to update: Just add new items to this array
  const techFacts = [
    {
      question: "When you want to run a project, you type 'npm run dev', what is npm?",
      answer: "NPM primarily refers to Node Package Manager, the default package manager for the JavaScript Node.js."
    },
    {
      question: "What does 'npm install' actually do?",
      answer: "So to be specific npm install - tells your assistant: \"Go get me the tools I need!\" to build a castle. The tools are stored as a shopping list (a file called package.json) that tells exactly which special LEGO pieces (code packages) your castle needs."
    },
    {
      question: "What's the STAR method?",
      answer: "STAR (Situation, Task, Action, Result) Method is the most viable way to answer any type of behavioural questions at any stage in your career."
    },
    {
      question: "Why can some search bars(engines/websites) can't find things I search for?",
      answer: "Well, chances are they are using lexical search, that is word by word searching, and even a spelling mistake could make it go wrong, forget about synonyms of the words and all. The good ones might be using semantic search."
    },
    {
      question: "What's Semantic Search?",
      answer: (
        <>
          It's more of understanding the meaning behind the words and searching for it, rather than just lexical search. Can read about it in detail&nbsp;
          <a
            href="https://cohere.com/llmu/what-is-semantic-search"
            target="_blank"
            rel="noopener noreferrer"
            className=" underline"
          >
            here
          </a>. </>
      )
    },
    {
      question: "Do search engines crawl even the private account webpages? #seo",
      answer: "robots.txt is a file which contains pages you don't want SERP to crawl and index, for example due to obvious privacy reasons in case of someone's account on an education website. "
    }

  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-subtle">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4">
            Tech-teas : tech bullets
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Random tech bullets/ideas/fullforms facts you didn't know you needed, or maybe would be fun to know.
          </p>
        </div>
      </section>

      {/* Tech Facts Section */}
      <article className="py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {techFacts.map((fact, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-elevated transition-shadow">
                <h3 className="text-xl font-medium text-text-primary mb-4">
                  {fact.question}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {fact.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Techteas;