

import { Header } from "@/components/Header";

const UPIworks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 px-6 bg-gradient-subtle">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4">
            How does UPI work?
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            We don't carry cash anymore, we don't do hours-long NEFT payments anymore. Even for a mini chocolate for a kid, we pay with UPI. It's worth understanding how our long hours of NEFT payments and ATM lines are reduced to seconds by UPI.
          </p>
        </div>
      </section>

      {/* Main Article Content */}
      <article className="py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              This article is a quick read of how our payments happen in the modern digital age, transforming the way we handle money transactions.
            </p>
          </div>

          {/* Traditional Banking Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-6">The Foundation: Traditional Banking</h2>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border mb-6">
              <p className="text-text-secondary mb-4">
                All banks in India are regulated by the <strong className="text-text-primary">Reserve Bank of India (RBI)</strong>, which ensures standardized protocols and security measures across the banking ecosystem.
              </p>
            </div>
            
            <h3 className="text-xl font-medium text-text-primary mb-4">Traditional Transfer Requirements</h3>
            <p className="text-text-secondary mb-4">
              For traditional transfer systems, we need several pieces of information:
            </p>
            <ul className="list-disc pl-6 text-text-secondary space-y-2 mb-6">
              <li>Account number</li>
              <li>Bank name</li>
              <li>Branch code</li>
              <li>IFSC (Indian Financial System Code)</li>
            </ul>

            <h3 className="text-xl font-medium text-text-primary mb-4">Traditional Payment Protocols</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">IMPS</h4>
                <p className="text-sm text-text-secondary">Immediate Payment Service - for small amounts, instant transfers</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">NEFT</h4>
                <p className="text-sm text-text-secondary">National Electronic Funds Transfer - not immediate, takes hours</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">RTGS</h4>
                <p className="text-sm text-text-secondary">Real Time Gross Settlement - for high-value transactions</p>
              </div>
            </div>
          </section>

          {/* UPI Revolution Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-6">The UPI Revolution</h2>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border mb-8">
              <h3 className="text-xl font-medium text-text-primary mb-4">What is UPI?</h3>
              <p className="text-text-secondary mb-4">
                <strong className="text-text-primary">UPI (Unified Payment Interface)</strong> works on a central system - an infrastructure managed by <strong className="text-text-primary">NPCI (National Payments Corporation of India)</strong>.
              </p>
              <p className="text-text-secondary">
                NPCI's APIs are not publicly available and only communicate with <strong className="text-text-primary">PSPs (Payment Service Providers)</strong>, except BHIM UPI which is a <strong className="text-text-primary">TPAP (Third Party Application Provider)</strong>. Other TPAPs include GPay, PhonePe, and Paytm.
              </p>
            </div>

            {/* UPI Diagram */}
            <div className="text-center my-12">
              <img 
                src="/UPI_diagram.png" 
                alt="UPI Architecture Diagram showing the flow between users, TPAPs, PSPs, and NPCI"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-elevated border border-border"
              />
              <p className="text-sm text-text-secondary mt-4 italic">
                UPI ecosystem architecture showing the interaction between different components
              </p>
            </div>

            <h3 className="text-xl font-medium text-text-primary mb-4">The Simplification</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-3">Traditional Method</h4>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Account number</li>
                  <li>• Bank name</li>
                  <li>• Branch code</li>
                  <li>• IFSC code</li>
                </ul>
              </div>
              <div className="bg-accent/20 p-6 rounded-lg border border-accent/30">
                <h4 className="font-semibold text-text-accent mb-3">UPI Method</h4>
                <p className="text-sm text-text-secondary">
                  Just one <strong className="text-text-primary">VPA (Virtual Payment Address)</strong>
                  <br />
                  Format: <code className="bg-muted px-2 py-1 rounded text-text-primary">username@upi_handle</code>
                </p>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-6">Behind the Scenes: How It Works</h2>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border mb-8">
              <h3 className="text-xl font-medium text-text-primary mb-4">The Process Flow</h3>
              <p className="text-text-secondary mb-4">
                The TPAPs (like GPay, PhonePe) have partner PSPs who can interact with NPCI. Communications happen between them according to available balance, and the process of debiting and crediting to accounts takes place seamlessly.
              </p>
            </div>

            <div className="bg-gradient-subtle p-8 rounded-xl border border-border">
              <h3 className="text-xl font-medium text-text-primary mb-6 text-center">Transaction Flow: Step by Step</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">1</div>
                  <div>
                    <h4 className="font-medium text-text-primary">User Initiates Payment</h4>
                    <p className="text-sm text-text-secondary">User has their own 'from' VPA and scans a 'to' VPA, creating a payment intent/request</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">2</div>
                  <div>
                    <h4 className="font-medium text-text-primary">TPAP to PSP Communication</h4>
                    <p className="text-sm text-text-secondary">GPay sends request to their partner bank (PSP)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">3</div>
                  <div>
                    <h4 className="font-medium text-text-primary">PSP to NPCI</h4>
                    <p className="text-sm text-text-secondary">Partner bank communicates with NPCI for transaction processing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">4</div>
                  <div>
                    <h4 className="font-medium text-text-primary">Amount Debited</h4>
                    <p className="text-sm text-text-secondary">NPCI debits amount from sender's account</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">5</div>
                  <div>
                    <h4 className="font-medium text-text-primary">Target Bank Interaction</h4>
                    <p className="text-sm text-text-secondary">NPCI interacts with the target bank for credit processing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">6</div>
                  <div>
                    <h4 className="font-medium text-text-primary">Amount Credited & Confirmation</h4>
                    <p className="text-sm text-text-secondary">Target bank credits amount and sends confirmation to recipient's TPAP</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TLDR Section */}
          <section className="mb-12">
            <div className="bg-accent/10 border border-accent/30 p-8 rounded-xl">
              <h2 className="text-2xl font-serif font-bold text-text-accent mb-4">TL;DR</h2>
              <p className="text-text-secondary leading-relaxed">
                A user has their own 'from' VPA and scans a 'to' VPA, creating a transaction intent. GPay sends a request to their partner bank, which communicates with NPCI. The amount gets debited from the sender's account, NPCI then interacts with the target bank, credits the amount, and the target bank notifies the recipient's app with a confirmation message.
              </p>
            </div>
          </section>

        </div>
      </article>
    </div>
  );
};

export default UPIworks;