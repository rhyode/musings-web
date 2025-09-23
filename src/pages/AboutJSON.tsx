import { Header } from "@/components/Header";

const AboutJSON = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-subtle">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4">
            JSON - JavaScript Object Notation
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            The most recent discussions on JSON have been around giving prompts to AI in JSON format. While I'm not gonna teach that, but let's understand what JSON is!
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-text-secondary leading-relaxed mb-8">
              It is a lightweight, self-describing (easy to read and write), language-independent, data representation format which is used for exchanging data between client/server APIs and configs.
            </p>
            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">JSON Types</h2>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-8">
              <li><strong>Strings</strong> - "Hello World"</li>
              <li><strong>Numbers</strong> - 2, 3.5, 12e10, -4</li>
              <li><strong>Booleans</strong> - true, false</li>
              <li><strong>Null</strong> - null</li>
              <li><strong>Arrays</strong> - [1,2,3] ["hello","world"]</li>
              <li><strong>Objects</strong> - {"{"}"key":"value"{"}"} {"{"}"age":30{"}"}</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">filename.json</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Mostly you'll have an array or an object at the top level and inside we have all other types
            </p>

            <div className="bg-card p-6 rounded-lg border border-border mb-8">
              <pre className="text-sm text-text-primary overflow-x-auto">
                <code>{`{
  "key": "value",
  "key": "value"
}`}</code>
              </pre>
            </div>

            <p className="text-text-secondary leading-relaxed mb-6">
              Above is most simple kinda syntax, we can get crazy with the nesting, and that's the beauty of JSON
            </p>

            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Example</h2>
            <div className="bg-card p-6 rounded-lg border border-border mb-6">
              <pre className="text-sm text-text-primary overflow-x-auto">
                <code>{`[
  {
    "name": "Big Corporation",
    "numberOfEmployees": 10000,
    "ceo": "Mary",
    "rating": 3.6
  },
  {
    "name": "Small Startup",
    "numberOfEmployees": 3,
    "ceo": null,
    "rating": 4.3
  }
]`}</code>
              </pre>
            </div>

            <p className="text-text-secondary leading-relaxed">
              We'll put those in single tick using inside javascript, that's a string, which we give to JavaScript, now when we want to use it we will use the parse to parse into js object - <code className="bg-muted px-2 py-1 rounded text-sm">JSON.parse(companies)</code>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutJSON;