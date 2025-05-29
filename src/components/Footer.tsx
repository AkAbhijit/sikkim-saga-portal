
import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Mountain className="w-8 h-8 text-emerald-400" />
              <div>
                <div className="text-2xl font-bold">Sikkim Culture Portal</div>
                <div className="text-emerald-400 text-sm">Discover the Land of Mystical Beauty</div>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Explore the rich cultural heritage, breathtaking landscapes, and vibrant traditions of Sikkim. 
              Your gateway to understanding the authentic spirit of the Himalayan kingdom.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/culture" className="text-slate-300 hover:text-white transition-colors">Culture & Traditions</Link></li>
              <li><Link to="/history" className="text-slate-300 hover:text-white transition-colors">History</Link></li>
              <li><Link to="/nature" className="text-slate-300 hover:text-white transition-colors">Nature & Wildlife</Link></li>
              <li><Link to="/people" className="text-slate-300 hover:text-white transition-colors">People & Livelihoods</Link></li>
              <li><Link to="/experiences" className="text-slate-300 hover:text-white transition-colors">Experiences</Link></li>
              <li><Link to="/transport" className="text-slate-300 hover:text-white transition-colors">Getting Around</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5" />
                <div>
                  <div className="text-slate-300">Department of Tourism</div>
                  <div className="text-slate-400 text-sm">Government of Sikkim</div>
                  <div className="text-slate-400 text-sm">Gangtok, Sikkim 737101</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">+91-3592-202367</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">info@sikkimtourism.gov.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-2 md:mb-0">
              © 2024 Sikkim Culture Portal. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
