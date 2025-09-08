import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";

const CreatineGuide = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dose, setDose] = useState(5);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const loadChart = async () => {
      const Chart = (await import('chart.js/auto')).default;
      
      if (canvasRef.current && !chartRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Benefit', 'Risk'],
              datasets: [{
                label: 'Score',
                data: [calculateBenefitScore(dose), calculateRiskScore(dose)],
                backgroundColor: [
                  'hsl(var(--primary) / 0.6)',
                  'hsl(var(--destructive) / 0.6)'
                ],
                borderColor: [
                  'hsl(var(--primary))',
                  'hsl(var(--destructive))'
                ],
                borderWidth: 1,
                borderRadius: 5,
              }]
            },
            options: {
              indexAxis: 'y',
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  beginAtZero: true,
                  max: 100,
                  title: {
                    display: true,
                    text: 'Relative Score'
                  }
                },
                y: {
                  grid: {
                    display: false
                  }
                }
              },
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  enabled: false
                }
              }
            }
          });
        }
      }
    };

    loadChart();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data.datasets[0].data = [
        calculateBenefitScore(dose),
        calculateRiskScore(dose)
      ];
      chartRef.current.update();
    }
  }, [dose]);

  const calculateBenefitScore = (dose: number) => {
    if (dose > 0) {
      return Math.min(100, (Math.log10(dose + 1) / Math.log10(6)) * 100);
    }
    return 0;
  };

  const calculateRiskScore = (dose: number) => {
    if (dose > 10) {
      return Math.min(100, (dose - 10) * 6);
    }
    return 0;
  };

  const getDoseAnalysis = () => {
    if (dose == 0) {
      return {
        title: "Dosage Analysis",
        content: "No supplementation. You are relying on dietary intake and natural production.",
        className: ""
      };
    } else if (dose >= 1 && dose <= 2) {
      return {
        title: "Dosage Analysis",
        content: "A very low dose. May not be enough to fully saturate muscle stores for most people.",
        className: ""
      };
    } else if (dose >= 3 && dose <= 5) {
      return {
        title: "Dosage Analysis",
        content: "This is the clinically effective maintenance dose. Ideal for long-term use to keep muscle stores saturated.",
        className: "text-green-600 dark:text-green-400"
      };
    } else if (dose > 5 && dose <= 10) {
      return {
        title: "Dosage Analysis",
        content: "Higher than the standard maintenance dose. Generally not necessary for most people, as 5g is sufficient for saturation.",
        className: ""
      };
    } else if (dose > 10 && dose <= 19) {
      return {
        title: "Dosage Analysis",
        content: "An excessive dose for maintenance. Not recommended for long-term use.",
        className: "text-amber-600"
      };
    } else {
      return {
        title: "Dosage Analysis",
        content: "This is a loading dose, only intended for the first 5-7 days of supplementation, not for continuous use.",
        className: "text-destructive"
      };
    }
  };

  const getExpectedBenefits = () => {
    if (dose == 0) {
      return "No supplementation benefits. Baseline physical and cognitive function.";
    } else if (dose >= 1 && dose <= 2) {
      return "Minimal benefits expected. Might provide a slight cognitive boost, especially for those with low dietary intake.";
    } else if (dose >= 3 && dose <= 5) {
      return "Full range of benefits: increased strength, improved high-intensity performance, cognitive support, and faster muscle recovery.";
    } else if (dose > 5 && dose <= 10) {
      return "No significant additional benefits over a 3-5g dose for most individuals. The body will likely excrete the excess.";
    } else if (dose > 10 && dose <= 19) {
      return "No additional benefits. Your muscles are already saturated, and the excess is converted to creatinine and flushed out by the kidneys.";
    } else {
      return "Rapidly saturates muscles if used for a loading phase. No benefit over 3-5g if used continuously long-term.";
    }
  };

  const getPotentialRisks = () => {
    if (dose == 0) {
      return "No risks from supplementation.";
    } else if (dose >= 1 && dose <= 2) {
      return "Virtually no risk at this dosage.";
    } else if (dose >= 3 && dose <= 5) {
      return "Extremely low risk for healthy individuals. Some may experience minor stomach discomfort initially.";
    } else if (dose > 5 && dose <= 10) {
      return "Risk is still low, but the chance of gastrointestinal issues (bloating, stomach ache) increases.";
    } else if (dose > 10 && dose <= 19) {
      return "Increased risk of digestive issues and unnecessary load on the kidneys to filter out the excess. A waste of money.";
    } else {
      return "High risk of stomach cramps, bloating, and diarrhea. Puts significant, unnecessary stress on your kidneys if used long-term.";
    }
  };

  const getCyclingInfo = () => {
    if (dose == 0) {
      return "Not applicable.";
    } else if (dose >= 1 && dose <= 5) {
      return "No, this dose is safe for continuous use.";
    } else if (dose > 5 && dose <= 10) {
      return "Not strictly necessary, but there is no proven benefit to consistently taking this much.";
    } else if (dose > 10 && dose <= 19) {
      return "It would be wise to reduce to a standard 3-5g maintenance dose.";
    } else {
      return "YES. This dose should only be used for one week, then dropped to 3-5g.";
    }
  };

  const analysis = getDoseAnalysis();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-subtle">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4">
            Your Interactive Guide to Creatine
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Creatine is one of the most researched supplements in the world. This guide helps you understand how to use it effectively and safely. Use the interactive tools below to find the right dosage for you.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 md:py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-2">How Much Should I Take?</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Adjust the slider to see how different daily dosages affect your potential benefits and risks. The optimal range for most people is highlighted.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-card p-8 rounded-xl shadow-elevated border border-border">
            <div className="mb-8">
              <label htmlFor="creatine-dose" className="block text-center text-lg font-medium text-text-primary mb-4">
                Daily Creatine Intake: <span className="font-bold text-2xl text-text-accent">{dose}</span>g
              </label>
              <input
                id="creatine-dose"
                type="range"
                min="0"
                max="25"
                value={dose}
                step="1"
                onChange={(e) => setDose(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className={`font-bold mb-2 ${analysis.className}`}>{analysis.title}</h3>
                <p className={analysis.className}>{analysis.content}</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Expected Benefits</h3>
                <p>{getExpectedBenefits()}</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Potential Risks</h3>
                <p>{getPotentialRisks()}</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Cycling Needed?</h3>
                <p>{getCyclingInfo()}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="relative w-full max-w-2xl mx-auto h-80">
              <canvas ref={canvasRef}></canvas>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section */}
      <section className="py-16 md:py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-2">Understanding Dosing Strategies</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              There are two common ways to start taking creatine. A loading phase saturates your muscles faster, but a consistent maintenance dose works just as well over a longer period.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-xl mb-4 text-text-accent">Strategy 1: Loading Phase</h3>
              <p className="text-text-secondary mb-6">
                Take a high dose for a short period to quickly maximize muscle stores, then drop to a lower dose to maintain those levels.
              </p>
              <div className="relative">
                <div className="absolute left-2 h-full border-l-2 border-border"></div>
                <div className="mb-4 pl-8 relative">
                  <div className="absolute left-[-6px] top-1 w-4 h-4 bg-primary rounded-full"></div>
                  <p className="font-semibold text-text-primary">Days 1-7: Loading</p>
                  <p className="text-text-secondary text-sm">20-25 grams per day (split into 4-5 doses)</p>
                </div>
                <div className="pl-8 relative">
                  <div className="absolute left-[-6px] top-1 w-4 h-4 bg-primary/60 rounded-full"></div>
                  <p className="font-semibold text-text-primary">Week 2 Onwards: Maintenance</p>
                  <p className="text-text-secondary text-sm">3-5 grams per day</p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-bold text-xl mb-4 text-text-accent">Strategy 2: Maintenance Dose</h3>
              <p className="text-text-secondary mb-6">
                Skip the loading phase and just take a smaller, daily dose from the start. Muscle saturation takes longer (about 3-4 weeks).
              </p>
              <div className="relative">
                <div className="absolute left-2 h-full border-l-2 border-border"></div>
                <div className="mb-4 pl-8 relative">
                  <div className="absolute left-[-6px] top-1 w-4 h-4 bg-primary/60 rounded-full"></div>
                  <p className="font-semibold text-text-primary">Day 1 Onwards: Maintenance</p>
                  <p className="text-text-secondary text-sm">3-5 grams per day, every day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-2">The Spectrum of Benefits</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Creatine's benefits extend beyond the gym, supporting various aspects of physical and cognitive performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-elevated transition-shadow">
              <span className="text-4xl">🏋️</span>
              <h3 className="font-bold text-xl my-2 text-text-primary">Increased Muscle Mass & Strength</h3>
              <p className="text-text-secondary">
                Helps muscle cells produce more energy (ATP), leading to improved performance in short, high-intensity exercises and signaling pathways for muscle growth.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-elevated transition-shadow">
              <span className="text-4xl">🧠</span>
              <h3 className="font-bold text-xl my-2 text-text-primary">Enhanced Brain Function</h3>
              <p className="text-text-secondary">
                Your brain also uses ATP. Supplementation can improve short-term memory, reasoning, and processing speed, especially in vegetarians or older adults.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-elevated transition-shadow">
              <span className="text-4xl">⚡️</span>
              <h3 className="font-bold text-xl my-2 text-text-primary">Improved High-Intensity Performance</h3>
              <p className="text-text-secondary">
                Boosts performance in activities like sprinting, weightlifting, and sports that require repeated bursts of effort by increasing phosphocreatine stores.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-elevated transition-shadow">
              <span className="text-4xl">🏃‍♀️</span>
              <h3 className="font-bold text-xl my-2 text-text-primary">Reduced Fatigue</h3>
              <p className="text-text-secondary">
                By providing extra energy, creatine can reduce feelings of tiredness and fatigue during intense exercise and may help with mental fatigue from demanding tasks.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-elevated transition-shadow">
              <span className="text-4xl">🩸</span>
              <h3 className="font-bold text-xl my-2 text-text-primary">May Help Blood Sugar Control</h3>
              <p className="text-text-secondary">
                Some research suggests creatine may lower blood sugar levels by increasing the function of GLUT4, a transporter molecule that brings glucose into muscles.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-elevated transition-shadow">
              <span className="text-4xl">🛡️</span>
              <h3 className="font-bold text-xl my-2 text-text-primary">Supports Healthy Aging</h3>
              <p className="text-text-secondary">
                In older adults, creatine combined with resistance training can help maintain muscle mass, strength, and bone health, contributing to better overall function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 md:py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-2">Safety & Common Questions</h2>
            <p className="text-lg text-text-secondary">Creatine is very safe for most people, but it's important to be informed.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-semibold text-lg text-text-primary">Is it bad for your kidneys?</h3>
              <p className="text-text-secondary mt-2">
                For individuals with healthy kidneys, long-term studies have shown that recommended doses of creatine do not cause kidney damage. People with pre-existing kidney disease should consult a doctor before use.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-semibold text-lg text-text-primary">Does it cause dehydration or cramping?</h3>
              <p className="text-text-secondary mt-2">
                This is a myth. Creatine actually increases total body water, drawing water into muscle cells. Studies have not found a link to cramping or dehydration; in fact, it may help protect against them. It's still important to drink plenty of water.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h3 className="font-semibold text-lg text-text-primary">What about hair loss?</h3>
              <p className="text-text-secondary mt-2">
                A single 2009 study linked creatine to an increase in DHT, a hormone associated with male pattern baldness. However, this study did not measure hair loss itself, and further research has not replicated this finding. There is currently no strong evidence that creatine directly causes hair loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-10 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="font-bold text-xl mb-4 text-text-primary">Important Disclaimer</h3>
          <p className="text-text-secondary">
            The information on this page is for educational purposes only and is not a substitute for professional medical advice. Always consult with a qualified healthcare professional before beginning any new supplement regimen or making changes to your health routine. Individual results may vary.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CreatineGuide;