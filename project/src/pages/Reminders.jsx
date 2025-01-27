import React, { useState } from 'react';
import { Bell, Plus, Trash2 } from 'lucide-react';

function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [medication, setMedication] = useState('');
  const [time, setTime] = useState('');
  const [frequency, setFrequency] = useState('daily');

  const addReminder = () => {
    if (medication && time) {
      setReminders([
        ...reminders,
        {
          id: Date.now(),
          medication,
          time,
          frequency
        }
      ]);
      setMedication('');
      setTime('');
    }
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Medication Reminders
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Never miss a dose with our smart reminder system. Set up your medication
          schedule and receive timely notifications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Add New Reminder</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Medication Name</label>
              <input
                type="text"
                value={medication}
                onChange={(e) => setMedication(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Enter medication name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Frequency</label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <button
              onClick={addReminder}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add Reminder</span>
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Your Reminders</h2>
          
          {reminders.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <Bell className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p>No reminders set yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reminders.map(reminder => (
                <div key={reminder.id} className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">{reminder.medication}</h3>
                    <p className="text-sm text-gray-600">
                      {reminder.time} - {reminder.frequency}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteReminder(reminder.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reminders;