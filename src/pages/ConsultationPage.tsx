import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Calendar, 
  Clock, 
  Video, 
  Phone, 
  User,
  Mail,
  MessageSquare,
  CheckCircle,
  Star,
  Shield,
  ArrowLeft
} from 'lucide-react';

interface ConsultationForm {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: string;
  message: string;
}

function ConsultationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ConsultationForm>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const doctors = [
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Interventional Cardiologist',
      experience: '15+ years',
      rating: 4.9,
      image: 'PS',
      location: 'Mumbai',
      nextAvailable: 'Today, 2:00 PM'
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Preventive Cardiology',
      experience: '12+ years',
      rating: 4.8,
      image: 'RK',
      location: 'Delhi',
      nextAvailable: 'Tomorrow, 10:00 AM'
    },
    {
      name: 'Dr. Anita Patel',
      specialty: 'Clinical Cardiologist',
      experience: '18+ years',
      rating: 4.9,
      image: 'AP',
      location: 'Bangalore',
      nextAvailable: 'Today, 4:30 PM'
    }
  ];

  const handleInputChange = (field: keyof ConsultationForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    setIsSubmitted(true);
  };

  const isFormValid = () => {
    return formData.name && formData.email && formData.phone && 
           formData.preferredDate && formData.preferredTime && formData.consultationType;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Consultation Booked!</h2>
          <p className="text-gray-700 mb-6">
            Thank you for booking your consultation. You'll receive a confirmation email shortly with all the details.
          </p>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full font-bold hover:from-emerald-600 hover:to-teal-700 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={() => navigate(-1)}
                className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-blue-700" />
              </button>
              <Heart className="w-8 h-8 text-red-500 mr-2" />
              <span className="text-2xl font-bold text-blue-900">HeartSafe™</span>
            </div>
            <div className="flex items-center text-blue-700">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm">Book Consultation</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Book Your Heart Health Consultation
            </h1>
            <p className="text-xl text-blue-700">
              Connect with certified cardiologists for personalized guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Available Doctors */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Available Cardiologists</h2>
              
              <div className="space-y-6">
                {doctors.map((doctor, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-blue-700 font-bold text-lg">{doctor.image}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-blue-900">{doctor.name}</h3>
                          <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                          <p className="text-gray-600">{doctor.experience} experience</p>
                          <p className="text-gray-600">{doctor.location}</p>
                          
                          <div className="flex items-center mt-2">
                            <div className="flex items-center mr-4">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                              <span className="ml-1 text-sm text-gray-600">{doctor.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                          Available
                        </div>
                        <p className="text-sm text-gray-600">Next: {doctor.nextAvailable}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultation Types */}
              <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Consultation Options</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border-2 border-blue-200 rounded-xl p-4 hover:border-blue-400 transition-colors">
                    <div className="flex items-center mb-2">
                      <Video className="w-6 h-6 text-blue-600 mr-2" />
                      <span className="font-bold text-blue-900">Video Call</span>
                    </div>
                    <p className="text-gray-600 text-sm">Face-to-face consultation from home</p>
                    <p className="text-blue-600 font-bold mt-2">₹1,500</p>
                  </div>
                  
                  <div className="border-2 border-blue-200 rounded-xl p-4 hover:border-blue-400 transition-colors">
                    <div className="flex items-center mb-2">
                      <Phone className="w-6 h-6 text-blue-600 mr-2" />
                      <span className="font-bold text-blue-900">Phone Call</span>
                    </div>
                    <p className="text-gray-600 text-sm">Audio consultation</p>
                    <p className="text-blue-600 font-bold mt-2">₹1,200</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Book Your Consultation</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Preferred Time *
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Consultation Type *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => handleInputChange('consultationType', 'video')}
                        className={`p-3 rounded-xl border-2 text-center transition-all ${
                          formData.consultationType === 'video'
                            ? 'border-blue-500 bg-blue-50 text-blue-900'
                            : 'border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        <Video className="w-5 h-5 mx-auto mb-1" />
                        <div className="text-sm font-medium">Video Call</div>
                        <div className="text-xs text-gray-600">₹1,500</div>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => handleInputChange('consultationType', 'phone')}
                        className={`p-3 rounded-xl border-2 text-center transition-all ${
                          formData.consultationType === 'phone'
                            ? 'border-blue-500 bg-blue-50 text-blue-900'
                            : 'border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        <Phone className="w-5 h-5 mx-auto mb-1" />
                        <div className="text-sm font-medium">Phone Call</div>
                        <div className="text-xs text-gray-600">₹1,200</div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-1" />
                      Additional Message (Optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Any specific concerns or questions you'd like to discuss..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid()}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                      isFormValid()
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 shadow-lg'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Book Consultation
                  </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                  <Shield className="w-4 h-4 inline mr-1" />
                  Your information is secure and HIPAA compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultationPage;