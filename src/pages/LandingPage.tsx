import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Star, 
  ArrowRight, 
  ChevronDown,
  Lock,
  Award,
  Stethoscope,
  Calendar
} from 'lucide-react';

function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const startAssessment = () => {
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-red-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Heart className="w-4 h-4 mr-2 text-red-300" />
              <span className="text-sm font-medium text-red-100">Free Heart Health Assessment</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Worried About Your 
              <span className="text-red-300 block">Heart Health?</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-light mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get Your Personalized Risk Score in Under 2 Minutes—100% Free, Totally Secure.
            </h2>
            
            <p className="text-lg mb-10 text-blue-200 max-w-2xl mx-auto">
              No labs. No waiting rooms. Just a fast, doctor‑approved assessment that empowers you to take control.
            </p>
            
            <button 
              onClick={startAssessment}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-2xl inline-flex items-center group border-2 border-emerald-400/30"
            >
              <Heart className="w-5 h-5 mr-2 text-emerald-100" />
              Check My Heart Risk Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="mt-8 flex items-center justify-center text-blue-200 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              No signup required • HIPAA compliant • 100% secure
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="relative">
          <svg className="w-full h-12 fill-current text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-blue-50 border-b">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-blue-800 mb-4 font-medium">Trusted by over 2,400+ patients nationwide</p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-blue-900 font-semibold">Rated by real users</span>
            </div>
            <div className="flex items-center justify-center space-x-8 text-blue-700">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm">Doctor Approved</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm">2,400+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              What You Get
            </h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Comprehensive heart health insights designed to keep you informed and protected
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Clock className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Instant, Data‑Backed Results</h3>
              <p className="text-blue-700">Understand your heart‑attack risk with medical‑grade precision.</p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                <Stethoscope className="w-8 h-8 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Expert Guidance</h3>
              <p className="text-blue-700">Written recommendations from certified cardiologists.</p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Lock className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Secure & Private</h3>
              <p className="text-blue-700">HIPAA‑aligned data protection—your info never leaves our servers.</p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Calendar className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Easy Follow‑Up</h3>
              <p className="text-blue-700">Book a consultation directly if your score is high.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-blue-700">3 Simple Steps to Know Your Heart Risk</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Answer 8 Quick Questions</h3>
                <p className="text-blue-700">Age, lifestyle, blood pressure, cholesterol—takes less than 2 minutes.</p>
                
                {/* Arrow */}
                <div className="hidden md:block absolute top-6 -right-4 text-blue-400">
                  <ArrowRight className="w-8 h-8" />
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="text-center relative">
                <div className="bg-teal-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Get Your Heart‑Risk Score</h3>
                <p className="text-blue-700">See your personal risk percentile instantly on screen.</p>
                
                {/* Arrow */}
                <div className="hidden md:block absolute top-6 -right-4 text-blue-400">
                  <ArrowRight className="w-8 h-8" />
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="text-center">
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Take Action</h3>
                <p className="text-blue-700">Download your free report or schedule a follow‑up with top doctors in your area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-blue-700">Real stories from people who took control of their heart health</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-blue-800 mb-6 text-lg leading-relaxed italic">
                "I was nervous about my family history of heart disease—this tool gave me peace of mind and caught issues early."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Asha R.</p>
                  <p className="text-blue-600">Mumbai</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-blue-800 mb-6 text-lg leading-relaxed italic">
                "Fast, clear, and surprisingly accurate. The follow‑up consultation helped me lower my risk by 20%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-teal-700 font-bold">R</span>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Rahul K.</p>
                  <p className="text-blue-600">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-teal-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Know Your Risk?
          </h2>
          <p className="text-xl text-blue-100 mb-8">No signup required. Start in seconds.</p>
          <button 
            onClick={startAssessment}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-2xl inline-flex items-center group border-2 border-emerald-400/30"
          >
            <Heart className="w-5 h-5 mr-2 text-emerald-100" />
            Check My Heart Risk Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-blue-700">Get answers to common concerns</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Is this tool really accurate?",
                answer: "It's built on peer‑reviewed algorithms used by leading hospitals."
              },
              {
                question: "My data is sensitive—how secure is it?",
                answer: "We use end‑to‑end encryption and never share your info without permission."
              },
              {
                question: "What if my score is high?",
                answer: "You'll see next‑step guidance and can book a video consultation instantly."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-blue-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-blue-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-blue-800">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-red-400 mr-2" />
              <span className="text-2xl font-bold">HeartSafe™</span>
            </div>
            
            <div className="flex items-center justify-center space-x-6 mb-6 text-blue-300">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
            
            <p className="text-blue-300 text-sm">
              © 2025 HeartSafe™. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;