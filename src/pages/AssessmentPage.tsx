import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft, ArrowRight, Shield, CheckCircle } from 'lucide-react';

interface AssessmentData {
  age: string;
  gender: string;
  bloodPressure: string;
  cholesterol: string;
  smoking: string;
  diabetes: string;
  familyHistory: string;
  exercise: string;
}

function AssessmentPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    age: '',
    gender: '',
    bloodPressure: '',
    cholesterol: '',
    smoking: '',
    diabetes: '',
    familyHistory: '',
    exercise: ''
  });

  const totalSteps = 8;

  const questions = [
    {
      id: 'age',
      question: 'What is your age?',
      type: 'select',
      options: [
        { value: '18-29', label: '18-29 years' },
        { value: '30-39', label: '30-39 years' },
        { value: '40-49', label: '40-49 years' },
        { value: '50-59', label: '50-59 years' },
        { value: '60+', label: '60+ years' }
      ]
    },
    {
      id: 'gender',
      question: 'What is your gender?',
      type: 'select',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      id: 'bloodPressure',
      question: 'What is your blood pressure status?',
      type: 'select',
      options: [
        { value: 'normal', label: 'Normal (less than 120/80)' },
        { value: 'elevated', label: 'Elevated (120-129/less than 80)' },
        { value: 'stage1', label: 'Stage 1 High (130-139/80-89)' },
        { value: 'stage2', label: 'Stage 2 High (140/90 or higher)' },
        { value: 'unknown', label: "I don't know" }
      ]
    },
    {
      id: 'cholesterol',
      question: 'What is your cholesterol level?',
      type: 'select',
      options: [
        { value: 'normal', label: 'Normal (less than 200 mg/dL)' },
        { value: 'borderline', label: 'Borderline (200-239 mg/dL)' },
        { value: 'high', label: 'High (240 mg/dL or higher)' },
        { value: 'unknown', label: "I don't know" }
      ]
    },
    {
      id: 'smoking',
      question: 'Do you smoke or have you smoked in the past?',
      type: 'select',
      options: [
        { value: 'never', label: 'Never smoked' },
        { value: 'former', label: 'Former smoker (quit more than 1 year ago)' },
        { value: 'recent', label: 'Recent quitter (quit within 1 year)' },
        { value: 'current', label: 'Current smoker' }
      ]
    },
    {
      id: 'diabetes',
      question: 'Do you have diabetes?',
      type: 'select',
      options: [
        { value: 'no', label: 'No' },
        { value: 'prediabetes', label: 'Pre-diabetes' },
        { value: 'type1', label: 'Type 1 diabetes' },
        { value: 'type2', label: 'Type 2 diabetes' }
      ]
    },
    {
      id: 'familyHistory',
      question: 'Do you have a family history of heart disease?',
      type: 'select',
      options: [
        { value: 'no', label: 'No family history' },
        { value: 'distant', label: 'Distant relatives (grandparents, aunts, uncles)' },
        { value: 'close', label: 'Close relatives (parents, siblings)' },
        { value: 'multiple', label: 'Multiple family members affected' }
      ]
    },
    {
      id: 'exercise',
      question: 'How often do you exercise?',
      type: 'select',
      options: [
        { value: 'daily', label: 'Daily (30+ minutes)' },
        { value: 'regular', label: '3-4 times per week' },
        { value: 'occasional', label: '1-2 times per week' },
        { value: 'rarely', label: 'Rarely or never' }
      ]
    }
  ];

  const handleInputChange = (field: keyof AssessmentData, value: string) => {
    setAssessmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate results and navigate
      const riskScore = calculateRiskScore();
      navigate('/results', { state: { assessmentData, riskScore } });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateRiskScore = (): number => {
    let score = 0;
    
    // Age scoring
    const ageScores = { '18-29': 0, '30-39': 5, '40-49': 10, '50-59': 15, '60+': 20 };
    score += ageScores[assessmentData.age as keyof typeof ageScores] || 0;
    
    // Gender scoring
    if (assessmentData.gender === 'male') score += 5;
    
    // Blood pressure scoring
    const bpScores = { 'normal': 0, 'elevated': 5, 'stage1': 10, 'stage2': 15, 'unknown': 8 };
    score += bpScores[assessmentData.bloodPressure as keyof typeof bpScores] || 0;
    
    // Cholesterol scoring
    const cholScores = { 'normal': 0, 'borderline': 5, 'high': 10, 'unknown': 6 };
    score += cholScores[assessmentData.cholesterol as keyof typeof cholScores] || 0;
    
    // Smoking scoring
    const smokingScores = { 'never': 0, 'former': 3, 'recent': 8, 'current': 12 };
    score += smokingScores[assessmentData.smoking as keyof typeof smokingScores] || 0;
    
    // Diabetes scoring
    const diabetesScores = { 'no': 0, 'prediabetes': 5, 'type1': 10, 'type2': 8 };
    score += diabetesScores[assessmentData.diabetes as keyof typeof diabetesScores] || 0;
    
    // Family history scoring
    const familyScores = { 'no': 0, 'distant': 3, 'close': 8, 'multiple': 12 };
    score += familyScores[assessmentData.familyHistory as keyof typeof familyScores] || 0;
    
    // Exercise scoring (inverse - more exercise = lower score)
    const exerciseScores = { 'daily': 0, 'regular': 2, 'occasional': 5, 'rarely': 8 };
    score += exerciseScores[assessmentData.exercise as keyof typeof exerciseScores] || 0;
    
    return Math.min(score, 100); // Cap at 100
  };

  const currentQuestion = questions[currentStep - 1];
  const currentValue = assessmentData[currentQuestion.id as keyof AssessmentData];
  const isStepComplete = currentValue !== '';

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
              <span className="text-sm">Secure Assessment</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-700">
              Question {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-blue-600">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Assessment Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">{currentStep}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                {currentQuestion.question}
              </h2>
              <p className="text-blue-600">
                Select the option that best describes your situation
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleInputChange(currentQuestion.id as keyof AssessmentData, option.value)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 ${
                    currentValue === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-200 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option.label}</span>
                    {currentValue === option.value && (
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  currentStep === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-blue-700 hover:bg-blue-50'
                }`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Previous
              </button>

              <button
                onClick={nextStep}
                disabled={!isStepComplete}
                className={`flex items-center px-8 py-3 rounded-full font-bold transition-all duration-200 ${
                  isStepComplete
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 shadow-lg'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {currentStep === totalSteps ? 'Get My Results' : 'Next'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssessmentPage;