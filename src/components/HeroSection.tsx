export const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary mb-6 leading-tight">
          Thoughts, Stories, and<br />
          <span className="text-text-accent">Reflections</span>
        </h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          A collection of musings on life, technology, philosophy, and the beautiful complexity 
          of human experience.
        </p>
      </div>
    </section>
  );
};