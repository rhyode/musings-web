import { Header } from "@/components/Header";

const QuotesIlike = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Quotes I Like Article */}
      <article className="py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-serif font-bold text-text-primary mb-6">
            Quotes I Like
          </h1>
          <div className="space-y-6">
            <ul className="list-disc list-inside space-y-4 text-text-secondary leading-relaxed">
              <li>As long as you're living your life in alignment with your values, you're exactly where you need to be.</li>
              <li>Janam kab lena hai aur marna kahan par hain ham decide nahi kar sakte, par kaise jeena hai ham decide kar sakte hain. – Dil Bechara (SSR)</li>
              <li>You need to grow to know you are bad. - Tanmay Tripathi</li>
              <li>The tragedy of life is that it gives us wisdom only when it has stolen youth. Si jeunesse savait, et vieillesse pouvait!—“If youth knew how, and old age could! - Will Durant</li>
              <li>Let ask the gods not for possessions, but for things to do; happiness is in making things rather than in consuming them - Will Durant</li>
              {/* Add more quotes below as <li> items */}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};

export default QuotesIlike;
