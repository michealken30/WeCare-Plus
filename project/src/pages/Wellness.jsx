import React, { useState } from 'react';
import { Activity, Brain, Heart } from 'lucide-react';

function Wellness() {
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const getAIAdvice = async () => {
    setLoading(true);
    // Simulate AI response - In production, this would call OpenAI API
    setTimeout(() => {
      setAiResponse("Based on your profile, I recommend: 1) Include 30 minutes of moderate exercise daily 2) Practice mindful eating 3) Ensure 7-8 hours of sleep 4) Stay hydrated with 8 glasses of water");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Your Personal Wellness Journey
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get personalized AI-powered wellness recommendations and track your progress
          towards a healthier lifestyle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">AI Wellness Advisor</h2>
          
          <div className="space-y-6">
            <button
              onClick={getAIAdvice}
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:bg-purple-300"
            >
              {loading ? 'Generating Advice...' : 'Get Weekly Recommendations'}
            </button>

            {aiResponse && (
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-700 whitespace-pre-line">{aiResponse}</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <Activity className="h-8 w-8 text-purple-600" />
              <h3 className="text-xl font-semibold">Physical Activity</h3>
            </div>
            <p className="text-gray-600">Track your daily exercise and movement goals.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <Brain className="h-8 w-8 text-purple-600" />
              <h3 className="text-xl font-semibold">Mental Wellness</h3>
            </div>
            <p className="text-gray-600">Monitor stress levels and practice mindfulness.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <Heart className="h-8 w-8 text-purple-600" />
              <h3 className="text-xl font-semibold">Health Metrics</h3>
            </div>
            <p className="text-gray-600">Keep track of vital signs and health indicators.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wellness;