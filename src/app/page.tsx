'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DrinkDriveLogo from './logo.svg';

// Simple SVG Icons
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ShieldIcon = () => ( 
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> 
  </svg> 
);
const ShieldIconf = () => (
  <div className="flex flex-col items-center space-y-2">
    {/* Logo from public folder */}
    <img
      src="/logo3.svg"
      alt="Drink & Drive Logo"
      className="w-10 h-auto"
    />
  </div>
);

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const AwardIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const StarIcon = ({ filled = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 
      1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 
      4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 
      00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 
      1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 
      1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const AlertCircleIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function DrinkDriveWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [bookingStep, setBookingStep] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counters, setCounters] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0,
    stat4: 0
  });
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    vehicleType: '',
    specialRequests: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Trigger animation when stats section is visible
      if (currentPage === 'home') {
        const statsSection = document.getElementById('stats-section');
        if (statsSection && !hasAnimated) {
          const rect = statsSection.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          
          if (isVisible) {
            setHasAnimated(true);
            animateCounters();
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated, currentPage]);
  
  // Reset animation when returning to home page
  useEffect(() => {
    if (currentPage === 'home' && hasAnimated) {
      setHasAnimated(false);
      setCounters({
        stat1: 0,
        stat2: 0,
        stat3: 0,
        stat4: 0
      });
    }
  }, [currentPage]);

  const animateCounters = () => {
    const targets = {
      stat1: 8747,
      stat2: 251,
      stat3: 22967,
      stat4: 2243
    };
    
    const duration = 5000; // 5 seconds
    const steps = 100;
    const interval = duration / steps;
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Easing function for smooth animation (ease-out-cubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setCounters({
        stat1: Math.floor(targets.stat1 * easeOutCubic),
        stat2: Math.floor(targets.stat2 * easeOutCubic),
        stat3: Math.floor(targets.stat3 * easeOutCubic),
        stat4: Math.floor(targets.stat4 * easeOutCubic)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const stats = [
    { key: 'stat1', value: counters.stat1, label: 'Legal Actions (Single Day)', sublabel: 'Dec 2024 Operation', suffix: '' },
    { key: 'stat2', value: counters.stat2, label: 'DUI Arrests', sublabel: 'In 24 Hours', suffix: '' },
    { key: 'stat3', value: counters.stat3, label: 'Road Accidents', sublabel: 'YTD 2024', suffix: '' },
    { key: 'stat4', value: counters.stat4, label: 'Fatalities', sublabel: 'YTD 2024', suffix: '' }
  ];

  const services = [
    {
      icon: ShieldIcon,
      title: 'Professional Chauffeurs',
      description: 'Licensed, experienced drivers ensuring your safety'
    },
    {
      icon: ClockIcon,
      title: '24/7 Availability',
      description: 'Book anytime, day or night, for your convenience'
    },
    {
      icon: UsersIcon,
      title: 'Luxury Fleet',
      description: 'Travel in comfort with our premium vehicles'
    },
    {
      icon: AwardIcon,
      title: 'Trusted Service',
      description: 'Over 25,000+ satisfied customers across Sri Lanka'
    }
  ];

    const testimonials = [
    {
      name: 'Lahiru Daulagala',
      location: 'Colombo',
      rating: 5,
      text: 'I recently used Drink and Drive , and I was thoroughly impressed with their professionalism and efficiency. The driver arrived promptly, was courteous, and ensured a smooth and safe ride home. Their service is a lifesaver for anyone who wants to enjoy a night out without worrying about driving under the influence.'
    },
    {
      name: 'Manu Vishwa',
      location: 'Colombo',
      rating: 5,
      text: 'I had an outstanding experience with Drink and Drive today when I needed a driver the most. Their prompt response, professionalism, and dedication to safety were truly impressive. The driver was courteous, well-trained, and ensured I reached my destination smoothly and securely.'
    },
    {
      name: 'Sesath De Costa',
      location: 'Colombo',
      rating: 5,
      text: 'This is a great service for anyone who wants to enjoy a night out without worrying about getting home safely. Highly recommend for responsible and stress-free travel after a party or event! The driver was professional, punctual, and ensured a smooth and safe ride home. Would definitely use it again. Safe, reliable, and worth it!'
    }
  ]

  const handleBookingChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleBookingSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (bookingStep < 3) {
      setBookingStep(bookingStep + 1);
    } else {
      // Format the booking details for WhatsApp
      const message = `🚗 *New Booking Request*\n\n` +
        `📋 *Personal Information:*\n` +
        `Name: ${bookingData.name}\n` +
        `Phone: ${bookingData.phone}\n` +
        `Email: ${bookingData.email || 'Not provided'}\n\n` +
        `📍 *Trip Details:*\n` +
        `Pickup: ${bookingData.pickupLocation}\n` +
        `Destination: ${bookingData.destination}\n` +
        `Date: ${bookingData.date}\n` +
        `Time: ${bookingData.time}\n` +
        `Passengers: ${bookingData.passengers}\n\n` +
        `🚙 *Vehicle Type:* ${bookingData.vehicleType}\n\n` +
        `${bookingData.specialRequests ? `📝 *Special Requests:*\n${bookingData.specialRequests}\n\n` : ''}` +
        `Thank you for choosing Drink and Drive! 🙏`;
      
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Replace with your actual WhatsApp number (without + or spaces)
      const whatsappNumber = '94777890983'; // Update this with your number
      
      // Open WhatsApp with the message
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
      
      // Reset form and return to home
      setTimeout(() => {
        setCurrentPage('home');
        setBookingStep(1);
        setBookingData({
          name: '',
          phone: '',
          email: '',
          pickupLocation: '',
          destination: '',
          date: '',
          time: '',
          passengers: '1',
          vehicleType: '',
          specialRequests: ''
        });
      }, 500);
    }
  };

  const renderBookingPage = () => (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Book Your Safe Ride
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
            Complete the form below and we'll confirm your booking shortly
          </p>

          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex-1 flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  bookingStep >= step 
                    ? 'bg-orange-400 text-white' 
                    : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    bookingStep > step ? 'bg-orange-400' : 'bg-gray-300 dark:bg-gray-700'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="p-8">
              <form onSubmit={handleBookingSubmit}>
                {bookingStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 dark:text-white">Personal Information</h2>
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-gray-200">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={bookingData.name}
                        onChange={(e) => handleBookingChange('name', e.target.value)}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-gray-200">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={bookingData.phone}
                        onChange={(e) => handleBookingChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-gray-200">Email Address</label>
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => handleBookingChange('email', e.target.value)}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 dark:text-white">Trip Details</h2>
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-gray-200">Pickup Location *</label>
                      <input
                        type="text"
                        required
                        value={bookingData.pickupLocation}
                        onChange={(e) => handleBookingChange('pickupLocation', e.target.value)}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Enter pickup address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-gray-200">Destination *</label>
                      <input
                        type="text"
                        required
                        value={bookingData.destination}
                        onChange={(e) => handleBookingChange('destination', e.target.value)}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Enter destination address"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 dark:text-gray-200">Date *</label>
                        <input
                          type="date"
                          required
                          value={bookingData.date}
                          onChange={(e) => handleBookingChange('date', e.target.value)}
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 dark:text-gray-200">Time *</label>
                        <input
                          type="time"
                          required
                          value={bookingData.time}
                          onChange={(e) => handleBookingChange('time', e.target.value)}
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-gray-200">Number of Drivers *</label>
                      <select
                        required
                        value={bookingData.passengers}
                        onChange={(e) => handleBookingChange('passengers', e.target.value)}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      >
                        <option value="1">1 Driver</option>
                        <option value="2">2 Drivers</option>
                        <option value="3">3 Drivers</option>
                        <option value="4">4 Drivers</option>
                        <option value="5+">5+ Drivers</option>
                      </select>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 dark:text-white">Vehicle Preferences</h2>
                    <div>
                      <label className="block text-sm font-medium mb-4 dark:text-gray-200">Select Vehicle Type *</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {['Sedan', 'SUV', 'Luxury', 'Van'].map((type) => (
                          <div
                            key={type}
                            onClick={() => handleBookingChange('vehicleType', type)}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              bookingData.vehicleType === type
                                ? 'border-orange-400 bg-red-50 dark:bg-red-900/20'
                                : 'border-gray-300 dark:border-gray-600 hover:border-orange-200'
                            }`}
                          >
                            <div className="font-semibold dark:text-white">{type}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {type === 'Sedan' && 'Up to 4 passengers'}
                              {type === 'SUV' && 'Up to 6 passengers'}
                              {type === 'Luxury' && 'Premium experience'}
                              {type === 'Van' && 'Up to 8 passengers'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-gray-200">Special Requests</label>
                      <textarea
                        value={bookingData.specialRequests}
                        onChange={(e) => handleBookingChange('specialRequests', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Any special requirements or notes..."
                      />
                    </div>
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  {bookingStep > 1 && (
                    <Button
                      type="button"
                      onClick={() => setBookingStep(bookingStep - 1)}
                      variant="outline"
                      className="flex-1"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className="flex-1 bg-orange-400 hover:bg-orange-500"
                  >
                    {bookingStep === 3 ? 'Confirm Booking' : 'Continue'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-orange-400 hover:text-red-700 font-medium"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (currentPage === 'booking') {
    return renderBookingPage();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="text-orange-400">
                <ShieldIconf />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Drink and Drive</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-orange-400 dark:hover:text-red-400 transition">Home</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-orange-400 dark:hover:text-red-400 transition">About</a>
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-orange-400 dark:hover:text-red-400 transition">Services</a>
              <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-orange-400 dark:hover:text-red-400 transition">Reviews</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-400 dark:hover:text-red-400 transition">Contact</a>
              {/* <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-label="Toggle theme"
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button> */}
              <Button onClick={() => setCurrentPage('booking')} className="bg-orange-400 hover:bg-orange-500">Book Now</Button>
            </nav>

            {/* <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                aria-label="Toggle theme"
              >
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div> */}
          </div>

          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t dark:border-gray-700">
              <a href="#home" className="block py-2 text-gray-700 dark:text-gray-300">Home</a>
              <a href="#about" className="block py-2 text-gray-700 dark:text-gray-300">About</a>
              <a href="#services" className="block py-2 text-gray-700 dark:text-gray-300">Services</a>
              <a href="#testimonials" className="block py-2 text-gray-700 dark:text-gray-300">Reviews</a>
              <a href="#contact" className="block py-2 text-gray-700 dark:text-gray-300">Contact</a>
              <Button onClick={() => setCurrentPage('booking')} className="w-full mt-4 bg-orange-400 hover:bg-orange-500">Book Now</Button>
            </nav>
          )}
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 text-orange-400 dark:text-orange-200 rounded-full text-sm font-semibold mb-6">
              9+ Years Experience • 25,000+ Satisfied Clients
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Sri Lanka's Most Trusted <span className="text-orange-500">Driver Service</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Your safety is our priority. We drive YOU and YOUR vehicle home safely. No strangers, no risks — just reliable, discreet, and secure service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setCurrentPage('booking')} size="lg" className="bg-orange-400 hover:bg-orange-500 text-lg px-8 py-6">
                <PhoneIcon />
                <span className="ml-2">Book a Ride Now</span>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 dark:border-gray-600 dark:text-gray-200">
                WhatsApp Us
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="stats-section" className="py-16 bg-orange-400 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4 animate-pulse">
              <AlertCircleIcon />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Reality of Drunk Driving in Sri Lanka</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Official police data reveals the urgent need for responsible transportation choices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.key} 
                className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                style={{
                  animation: hasAnimated ? `slideUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold mb-2 bg-gradient-to-br from-white to-red-100 bg-clip-text text-transparent">
                    {formatNumber(stat.value)}{stat.suffix}
                  </div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-red-100">{stat.sublabel}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">Five-Year Overview (2020-2024)</h3>
            <p className="text-lg mb-4">
              Over the past five years, Sri Lanka has witnessed <strong className="text-3xl">12,140</strong> lives lost in traffic accidents—averaging <strong className="text-2xl">2,300 fatalities per year</strong>.
            </p>
            <p className="text-red-100">
              In just one day during December 2024, nationwide police operations resulted in <strong className="text-white">8,747</strong> legal actions, including <strong className="text-white">251 arrests</strong> specifically for drunk driving.
            </p>
          </div>
        </div>
        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide more than just a ride—we deliver peace of mind and professional service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-orange-400 transition-all hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-400">
                      <Icon />
                    </div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Real experiences from real people</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow dark:bg-gray-900 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex mb-4 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} filled={true} />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">About Drink and Drive</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
              <p>
                Founded with a mission to reduce drunk-driving incidents in Sri Lanka, Drink and Drive provides professional chauffeur services across the island. Unlike ordinary taxi services or ride-sharing options, we offer a private, professional chauffeur to drive you and your own vehicle safely home.
              </p>
              <p>
                With over 9 years of experience and 25,000+ satisfied elite clients, our team of licensed, experienced drivers is available 24/7 to ensure you reach your destination safely. Whether you're attending a wedding, corporate event, or simply enjoying an evening out, we're here to provide reliable, discreet, and secure transportation.
              </p>
              <p className="font-semibold text-orange-400">
                Don't become a statistic. Choose Drink and Drive and make the responsible choice tonight.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-orange-400 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Book Your Safe Ride?</h2>
            <p className="text-xl mb-12">Available 24/7 across Sri Lanka</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="w-12 h-12 mx-auto mb-4">
                  <PhoneIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p>+94 77 789 0983</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-4">
                  <MapPinIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p>58/4 16th Lane Ananda Balika Mawatha, Sri Jayawardenepura Kotte.</p>
              </div>
              <div>
                <div className="w-12 h-12 mx-auto mb-4">
                  <ClockIcon />
                </div>
                <h3 className="text-xl font-bold mb-2">Hours</h3>
                <p>24/7 Service</p>
              </div>
            </div>
            <Button onClick={() => setCurrentPage('booking')} size="lg" className="bg-white text-orange-400 hover:bg-gray-100 text-lg px-12 py-6">
              Book Your Ride Now
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-orange-400">
                  <ShieldIconf />
                </div>
                <span className="text-xl font-bold">Drink and Drive</span>
              </div>
              <p className="text-gray-400">Your trusted chauffeur service in Sri Lanka</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white transition">Home</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition">About</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition">Services</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition">Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Drink and Drive. All rights reserved. | Making Sri Lankan roads safer, one ride at a time.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/94777890983"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-orange-800 hover:bg-orange-900 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 z-50 animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}