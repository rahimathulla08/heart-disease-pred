import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  AlertTriangle, 
  CheckCircle, 
  Download, 
  Calendar,
  ArrowRight,
  Shield,
  TrendingUp,
  Activity,
  Users
} from 'lucide-react';

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { assessmentData, riskScore } = location.state || { riskScore: 0 };

  const getRiskLevel = (score: number) => {
    if (score <= 20) return { level: 'Low', color: 'green', description: 'Your heart disease risk is low' };
    if (score <= 40) return { level: 'Moderate', color: 'yellow', description: 'Your heart disease risk is moderate' };
    if (score <= 60) return { level: 'High', color: 'orange', description: 'Your heart disease risk is elevated' };
    return { level: 'Very High', color: 'red', description: 'Your heart disease risk is very high' };
  };

  const risk = getRiskLevel(riskScore);

  const getRecommendations = (score: number) => {
    if (score <= 20) {
      return [
        'Continue your healthy lifestyle habits',
        'Regular exercise (150 minutes per week)',
        'Maintain a balanced diet',
        'Annual health checkups',
        'Monitor blood pressure regularly'
      ];
    }
    if (score <= 40) {
      return [
        'Increase physical activity to 30 minutes daily',
        'Adopt a heart-healthy diet (Mediterranean style)',
        'Monitor blood pressure and cholesterol',
        'Consider stress management techniques',
        'Schedule bi-annual health checkups'
      ];
    }
    if (score <= 60) {
      return [
        'Consult with a cardiologist within 30 days',
        'Start a supervised exercise program',
        'Work with a nutritionist for diet planning',
        'Monitor vital signs weekly',
        'Consider medication consultation'
      ];
    }
    return [
      'Schedule immediate consultation with a cardiologist',
      'Begin comprehensive lifestyle modification program',
      'Daily monitoring of blood pressure',
      'Medication evaluation and management',
      'Consider cardiac stress testing'
    ];
  };

  const recommendations = getRecommendations(riskScore);

  const bookConsultation = () => {
    navigate('/consultation');
  };

  const downloadReport = () => {
    // In a real app, this would generate and download a PDF report
    alert('Report download feature would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-red-500 mr-2" />
              <span className="text-2xl font-bold text-blue-900">HeartSafe™</span>
            </div>
            <div className="flex items-center text-blue-700">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm">Your Results</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Results Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Your Heart Health Assessment Results
            </h1>
            <p className="text-xl text-blue-700">
              Based on your responses, here's your personalized heart health profile
            </p>
          </div>

          {/* Risk Score Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center">
              <div className={`w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center ${
                risk.color === 'green' ? 'bg-green-100' :
                risk.color === 'yellow' ? 'bg-yellow-100' :
                risk.color === 'orange' ? 'bg-orange-100' : 'bg-red-100'
              }`}>
                <div className="text-center">
                  <div className={`text-4xl font-bold ${
                    risk.color === 'green' ? 'text-green-700' :
                    risk.color === 'yellow' ? 'text-yellow-700' :
                    risk.color === 'orange' ? 'text-orange-700' : 'text-red-700'
                  }`}>
                    {riskScore}
                  </div>
                  <div className="text-sm text-gray-600">Risk Score</div>
                </div>
              </div>
              
              <h2 className={`text-2xl font-bold mb-2 ${
                risk.color === 'green' ? 'text-green-700' :
                risk.color === 'yellow' ? 'text-yellow-700' :
                risk.color === 'orange' ? 'text-orange-700' : 'text-red-700'
              }`}>
                {risk.level} Risk
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                {risk.description}
              </p>

              {/* Risk Level Indicator */}
              <div className="flex items-center justify-center mb-6">
                {risk.color === 'green' ? (
                  <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-orange-500 mr-2" />
                )}
                <span className="text-gray-700">
                  {risk.color === 'green' 
                    ? 'Keep up the great work with your heart-healthy lifestyle!'
                    : 'Taking action now can significantly improve your heart health.'
                  }
                </span>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2" />
              Personalized Recommendations
            </h3>
            
            <div className="space-y-4">
              {recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-sm font-bold text-blue-700">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{recommendation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="text-center">
                <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-blue-900 mb-2">Download Your Report</h4>
                <p className="text-gray-600 mb-4">
                  Get a detailed PDF report with your results and recommendations
                </p>
                <button
                  onClick={downloadReport}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors"
                >
                  Download Report
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="text-center">
                <Calendar className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-blue-900 mb-2">Book Consultation</h4>
                <p className="text-gray-600 mb-4">
                  Speak with a certified cardiologist about your results
                </p>
                <button
                  onClick={bookConsultation}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-bold hover:from-emerald-600 hover:to-teal-700 transition-all"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-2" />
              Understanding Your Results
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-blue-800 mb-3">Risk Factors Considered</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Age and gender</li>
                  <li>• Blood pressure levels</li>
                  <li>• Cholesterol status</li>
                  <li>• Smoking history</li>
                  <li>• Diabetes status</li>
                  <li>• Family history</li>
                  <li>• Exercise habits</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-blue-800 mb-3">Next Steps</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Share results with your doctor</li>
                  <li>• Follow personalized recommendations</li>
                  <li>• Schedule regular health checkups</li>
                  <li>• Monitor your progress</li>
                  <li>• Retake assessment in 6 months</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-800 to-teal-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Take Control of Your Heart Health Today</h3>
              <p className="text-blue-100 mb-6">
                Your heart health is in your hands. Start implementing these recommendations and consider professional guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={bookConsultation}
                  className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Expert Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-800 transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultsPage;