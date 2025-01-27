import React from "react";
import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">WeCare Plus</span>
            </div>
            <p className="text-gray-400">
              Making healthcare accessible and affordable for everyone.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/loans" className="hover:text-purple-400">
                  Health Loans
                </a>
              </li>
              h
              <li>
                <a href="/wellness" className="hover:text-purple-400">
                  Wellness Program
                </a>
              </li>
              <li>
                <a href="/reminders" className="hover:text-purple-400">
                  Medication Reminders
                </a>
              </li>
              <li>
                <a href="/immunization" className="hover:text-purple-400">
                  Free Immunization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>1-800-HEALTH</li>
              <li>support@Wecareplus.com</li>
              <li>123 Healthcare Ave</li>
              <li>Medical Center, MC 12345</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 9 AM - 5 PM</li>
              <li>Saturday: 10 AM - 2 PM</li>
              <li>Sunday: Closed</li>
              <li>Emergency: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} WeCare Plus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
