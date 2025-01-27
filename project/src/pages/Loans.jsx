import React, { useState } from 'react';
import { Calculator, Check } from 'lucide-react';

function Loans() {
  const [loanAmount, setLoanAmount] = useState(1000);
  const [months, setMonths] = useState(12);

  const monthlyPayment = (loanAmount / months).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Healthcare Financing Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get the medical care you need with our flexible financing options.
          Easy application, quick approval, and manageable repayment plans.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Loan Calculator</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Loan Amount ($)</label>
              <input
                type="range"
                min="500"
                max="10000"
                step="500"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-purple-600 font-semibold">${loanAmount}</span>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Repayment Period (Months)</label>
              <input
                type="range"
                min="3"
                max="24"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-purple-600 font-semibold">{months} months</span>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-gray-700">Estimated Monthly Payment:</p>
              <p className="text-3xl font-bold text-purple-600">${monthlyPayment}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Our Health Loans?</h2>
          
          <div className="space-y-4">
            {[
              'No hidden fees or charges',
              'Flexible repayment options',
              'Quick approval process',
              'Competitive interest rates',
              'No early repayment penalties',
              'Dedicated support team'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <button className="w-full mt-8 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Loans;