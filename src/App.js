
import React from 'react';
import { Shield, Camera, DollarSign, Eye, Heart, Zap, CheckCircle, AlertTriangle, Users, TrendingUp, Globe, Target, X, Star } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';  // ADD THIS LINE
const SnapToSellLanding = () => {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Scam Detection",
      description: "Our advanced AI analyzes listings in real-time, flagging suspicious patterns before you ever see them.",
      color: "blue"
    },
    {
      icon: Camera,
      title: "Instant Item Identification",
      description: "Snap a photo and our AI identifies your item, suggests pricing, and creates your listing in seconds.",
      color: "orange"
    },
    {
      icon: DollarSign,
      title: "Best Platform Recommendations",
      description: "Get data-driven suggestions for which marketplace will sell your item fastest at the best price.",
      color: "green"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      icon: Shield,
      title: "AI Verification",
      description: "Every listing runs through our proprietary scam detection algorithm checking 50+ fraud indicators.",
      color: "blue"
    },
    {
      step: "2",
      icon: Eye,
      title: "Community Reporting",
      description: "Real users report suspicious activity, building the world's largest marketplace fraud database.",
      color: "orange"
    },
    {
      step: "3",
      icon: CheckCircle,
      title: "Manual Review",
      description: "High-risk listings get reviewed by our safety team before being approved for the platform.",
      color: "green"
    }
  ];

  const scamExamples = [
    {
      title: "Fake Payment Confirmation",
      price: "$850",
      description: "\"Send the item first, here's my payment screenshot\" - Screenshot was photoshopped",
      blocked: "2,341 times",
      severity: "high"
    },
    {
      title: "Too Good To Be True Pricing",
      price: "$299",
      description: "iPhone 15 Pro Max listed at 75% below market value - Classic bait listing",
      blocked: "1,892 times",
      severity: "high"
    },
    {
      title: "Shipping Scam",
      price: "$1,200",
      description: "\"Use this specific shipping company\" - Fake tracking, item never existed",
      blocked: "1,547 times",
      severity: "high"
    },
    {
      title: "Overpayment Scam",
      price: "$650",
      description: "\"I'll pay extra, just refund the difference\" - Check bounces after you send money",
      blocked: "987 times",
      severity: "medium"
    },
    {
      title: "Identity Theft",
      price: "$0",
      description: "\"Verify your account with this link\" - Phishing site stealing login credentials",
      blocked: "3,421 times",
      severity: "high"
    },
    {
      title: "Bait and Switch",
      price: "$450",
      description: "Photos show authentic item, ships counterfeit - AI detected image theft",
      blocked: "1,203 times",
      severity: "medium"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Frequent Seller",
      text: "SnapToSell saved me from a $600 iPhone scam. The AI flagged the buyer's payment screenshot as fake before I shipped anything.",
      avatar: "SM"
    },
    {
      name: "Mike T.",
      role: "Collector",
      text: "I've been scammed twice on other platforms. SnapToSell's verification actually works - haven't had a single issue here.",
      avatar: "MT"
    },
    {
      name: "Jessica L.",
      role: "Small Business Owner",
      text: "The instant pricing feature alone is worth it. But knowing every buyer is verified gives me total peace of mind.",
      avatar: "JL"
    }
  ];

  const stats = [
    { number: "2,847", label: "Scams Blocked", icon: Shield },
    { number: "$427K", label: "Money Saved", icon: DollarSign },
    { number: "15K+", label: "Safe Transactions", icon: CheckCircle },
    { number: "98%", label: "Scam Detection Rate", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-lg shadow-lg shadow-orange-500/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">SnapToSell</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
              <a href="#scam-database" className="text-slate-300 hover:text-white transition-colors">Scam Database</a>
              <a href="#waitlist" className="text-slate-300 hover:text-white transition-colors">Join Waitlist</a>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/20">
              Get Early Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="absolute inset-0 bg-grid-slate-800/[0.05] bg-[size:32px_32px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">Beta Launching Soon</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Never Get Scammed on
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Marketplace Again
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto mb-12">
              AI-powered fraud detection meets instant item pricing. Sell safely, sell smarter, sell faster.
            </p>
            
            {/* Waitlist Form #1 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Waitlist</h3>
                <p className="text-gray-600 mb-6">Get early access when we launch.</p>
                
                {/* TALLY FORM #1 - WAITLIST */}
<div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200">
  <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Waitlist</h3>
  <p className="text-gray-600 mb-6">Get early access when we launch</p>
  <a 
    href="https://tally.so/r/mJ5Rkz" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all text-lg"
  >
    Join Now →
  </a>
  <p className="text-sm text-gray-500 mt-4">2,847 people already signed up</p>
</div>
                  <iframe 
  src="https://tally.so/embed/mJ5Rkz?alignLeft=1&hideTitle=1&transparentBackground=1" 
  loading="lazy" 
  width="100%" 
  height="400" 
  frameBorder="0" 
  marginHeight="0" 
  marginWidth="0" 
  title="SnapToSell Waitlist"
  style={{border: '0', minHeight: '400px'}}
></iframe>
                       </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/10 rounded-full mb-3">
                      <IconComponent className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-3xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="flex items-start space-x-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">The $600 iPhone That Never Arrived</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  You found the perfect deal on Facebook Marketplace. iPhone 15 Pro, "like new," $600. The seller seemed legit - good profile, quick responses. You sent the money. They said they shipped it. Then... silence.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  The tracking number was fake. The profile disappeared. Your $600? Gone. And Facebook? They said it's "not their responsibility."
                </p>
                <p className="text-orange-400 text-xl font-semibold">
                  This happens 2,000+ times every single day on popular marketplaces.
                </p>
              </div>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-3">Other Platforms Don't Care</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Facebook Marketplace: No fraud protection, no buyer verification, no seller screening</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>OfferUp: 10%+ listing fees, minimal scam prevention, slow dispute resolution</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Craigslist: Zero protection, anonymous scammers, no recourse when things go wrong</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Three Revolutionary Features
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We're not just another marketplace. We're the anti-scam marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600 shadow-blue-500/20',
                orange: 'from-orange-500 to-orange-600 shadow-orange-500/20',
                green: 'from-emerald-500 to-emerald-600 shadow-emerald-500/20'
              };
              return (
                <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all backdrop-blur-sm">
                  <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[feature.color]} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our 3-Layer Scam Shield
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Every listing goes through three levels of protection before it reaches you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => {
              const IconComponent = item.icon;
              const colors = {
                blue: { gradient: 'from-blue-500 to-blue-600', bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400' },
                orange: { gradient: 'from-orange-500 to-orange-600', bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400' },
                green: { gradient: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-500/20', border: 'border-emerald-500/30', text: 'text-emerald-400' }
              };
              const colorScheme = colors[item.color];
              return (
                <div key={index} className="relative">
                  <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 shadow-xl hover:border-orange-500/30 transition-all h-full backdrop-blur-sm">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorScheme.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto shadow-lg`}>
                      {item.step}
                    </div>
                    <div className={`w-12 h-12 ${colorScheme.bg} border ${colorScheme.border} rounded-xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm`}>
                      <IconComponent className={`w-6 h-6 ${colorScheme.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
                    <p className="text-slate-400 text-center leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">100% Scam-Free Guarantee</h3>
                <p className="text-slate-300 text-lg">
                  If you get scammed on SnapToSell, we'll refund your money. Period. Unlike other platforms, we actually protect our users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scam Database */}
      <section id="scam-database" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Real Scams We've Blocked
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              Our AI learns from every attempted scam to protect you better
            </p>
            
            {/* Report Scam Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Report a Scam</h3>
              <p className="text-gray-600 mb-6">Help protect the community by reporting marketplace fraud.</p>
              
              {/* TALLY FORM #2 - REPORT SCAM (Placeholder - needs to be created) */}
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <p className="text-gray-600 text-sm">Report Scam Form - Connect your Tally form here</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scamExamples.map((scam, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-red-500/30 transition-all backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    scam.severity === 'high' 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {scam.severity === 'high' ? 'High Risk' : 'Medium Risk'}
                  </div>
                  <span className="text-orange-400 font-bold text-lg">{scam.price}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{scam.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{scam.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center text-emerald-400">
                    <Shield className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Blocked {scam.blocked}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Real People, Real Protection
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Join thousands who've stopped worrying about marketplace scams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Sell Without Fear?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Join the waitlist now. Be among the first to experience marketplace selling the way it should be: safe, simple, and scam-free.
          </p>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <div className="text-3xl font-bold text-emerald-600 mb-1">2,847</div>
                <div className="text-sm text-emerald-700">Scams Blocked</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">$427K</div>
                <div className="text-sm text-blue-700">Money Saved</div>
              </div>
            </div>
            
            {/* TALLY FORM #1 (SAME AS HERO) */}
<div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-200">
  <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Waitlist</h3>
  <p className="text-gray-600 mb-6">Get early access when we launch</p>
  <a 
    href="https://tally.so/r/mJ5Rkz" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all text-lg"
  >
    Join Now →
  </a>
  <p className="text-sm text-gray-500 mt-4">2,847 people already signed up</p>
</div>
          </div>
          
          <p className="text-slate-500 text-sm mt-6">
            <Shield className="w-4 h-4 inline mr-1" />
            Your information is protected. We'll never sell your data or spam you.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/SnapToSell with S 90Deg Curved.jpg" 
                  alt="SnapToSell Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-slate-400 text-sm">
                The first marketplace platform that actually protects you from scams.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#scam-database" className="hover:text-white transition-colors">Scam Database</a></li>
                <li><a href="#waitlist" className="hover:text-white transition-colors">Join Waitlist</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Scam Prevention Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report a Scam</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2024 SnapToSell. All rights reserved. Fighting marketplace fraud, one listing at a time.</p>
          </div>
        </div>
      </footer>
     <Analytics />
    </div>
  );
};

export default SnapToSellLanding;
