import React, { useState, useEffect } from 'react';

// Mock icons
const Heart = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Shield = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Zap = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Users = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const Calendar = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Award = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const ArrowUp = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
  </svg>
);

const Sparkles = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const CheckCircle = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Clock = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Mock framer-motion components
const motion = {
  section: ({ children, className, ...props }) => (
    <section className={`${className} animate-fade-in`} {...props}>
      {children}
    </section>
  ),
  div: ({ children, className, whileHover, initial, animate, exit, transition, style, onClick, ...props }) => (
    <div 
      className={`${className} ${whileHover ? 'hover:animate-gentle-bounce transform transition-all duration-300' : ''}`}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  ),
  button: ({ children, className, onClick, ...props }) => (
    <button 
      className={`${className} hover:scale-105 active:scale-95 transition-all duration-300`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
};

const programs = [
  {
    id: 1,
    title: 'CPR Certification',
    icon: Heart,
    description: 'Professional CPR training for teams. Boost safety and confidence at your workplace.',
    longDescription: 'Our CPR Certification program is led by certified instructors and tailored for corporate teams. Includes hands-on practice, certification, and emergency response training.',
    features: ['Certified trainers', 'Hands-on practice', 'Official certification', 'Emergency response tips'],
    price: '₹15,000/session',
    duration: '2 hours',
    capacity: 'Up to 30 participants',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Cervical Health & Posture',
    icon: Shield,
    description: 'Combat tech neck and improve posture with expert-led cervical health sessions.',
    longDescription: 'Interactive workshops to improve posture, reduce neck pain, and prevent workplace injuries. Includes ergonomic tips and guided exercises.',
    features: ['Posture assessment', 'Ergonomic guidance', 'Stretching routines'],
    price: '₹10,000/session',
    duration: '1 hour',
    capacity: 'Up to 50 participants',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'HIIT for Teams',
    icon: Zap,
    description: 'High-energy, team-based HIIT workouts to energize and unite your staff.',
    longDescription: 'Fun, high-intensity interval training sessions designed for all fitness levels. Great for team-building and boosting energy.',
    features: ['All levels welcome', 'Team-building focus', 'Certified coaches'],
    price: '₹8,000/session',
    duration: '45 minutes',
    capacity: 'Up to 40 participants',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 4,
    title: 'Stress Management',
    icon: Users,
    description: 'Science-backed stress reduction workshops for a happier, more resilient team.',
    longDescription: 'Learn practical stress management techniques, mindfulness, and relaxation exercises. Improve mental wellbeing and productivity.',
    features: ['Mindfulness training', 'Breathing exercises', 'Mental health tips'],
    price: '₹12,000/session',
    duration: '1.5 hours',
    capacity: 'Up to 50 participants',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'Nutrition Planning',
    icon: Calendar,
    description: 'Personalized nutrition seminars and meal planning for busy professionals.',
    longDescription: 'Expert-led seminars on healthy eating, meal prep, and nutrition for busy workdays. Includes Q&A and resources.',
    features: ['Dietician-led', 'Meal prep tips', 'Interactive Q&A'],
    price: '₹10,000/session',
    duration: '1 hour',
    capacity: 'Up to 50 participants',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 6,
    title: 'Monthly Fitness Challenges',
    icon: Award,
    description: 'Fun, competitive fitness challenges to keep your team moving and motivated.',
    longDescription: 'Monthly challenges with leaderboards, prizes, and team spirit. Customizable for your company.',
    features: ['Leaderboard', 'Prizes', 'Customizable'],
    price: '₹5,000/month',
    duration: 'Ongoing',
    capacity: 'Unlimited',
    color: 'from-indigo-500 to-purple-500'
  },
];

const benefits = [
  {
    icon: CheckCircle,
    title: 'Certified Experts',
    description: 'All programs led by certified trainers and medical professionals.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Sparkles,
    title: 'Customizable & Flexible',
    description: 'On-site or virtual, tailored to your company\'s needs and schedule.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'Measurable Results',
    description: 'Track engagement, participation, and wellness outcomes.',
    color: 'from-blue-500 to-cyan-500'
  }
];

const SmallTrainerPopup = ({ onClose, onBookProgram }) => {
  const handleBrowse = () => {
    onClose();
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 pointer-events-none"
      onClick={handleClickOutside}
    >
      <motion.div 
        className="fixed bottom-6 right-6 pointer-events-auto"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ 
          type: 'spring', 
          damping: 25, 
          stiffness: 300,
          duration: 0.6 
        }}
      >
        <div className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 rounded-2xl p-5 shadow-2xl border border-purple-500/40 max-w-sm relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-orange-500/10 rounded-2xl animate-pulse"></div>
          
          <div className="relative">
            <div className="flex items-start mb-4">
              <div className="relative mr-4 flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
                  R
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-white mb-1">Hi there! 👋</h3>
                <p className="text-xs text-purple-300 font-medium">I'm Rahul, your wellness trainer</p>
              </div>
              <button
                onClick={onClose}
                className="ml-2 p-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-all duration-300"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Welcome to LeoFit360! Ready to transform your team's wellness journey? Let me help you find the perfect program.
            </p>
            
            <div className="flex gap-2">
              <button
                onClick={() => {
                  onClose();
                  onBookProgram();
                }}
                className="flex-1 py-3 px-4 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Book a Program</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={handleBrowse}
                className="px-4 py-3 text-sm border-2 border-purple-600/50 text-purple-300 font-medium rounded-xl hover:bg-purple-600/20 hover:border-purple-500 transition-all duration-300 hover:scale-105"
              >
                Browse
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showScroll, setShowScroll] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTrainerPopup, setShowTrainerPopup] = useState(false);

  // Navigation function to contact page
  const handleBookProgram = (program = null) => {
    // Simulate navigation
    alert('Navigating to booking page...');
    
    if (program) {
      console.log('Selected program:', program);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenTrainerPopup');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowTrainerPopup(true);
        sessionStorage.setItem('hasSeenTrainerPopup', 'true');
      }, 2000); // Show after 2 seconds for better user experience
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float" />
        <motion.div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float-delayed" />
        <motion.div className="absolute top-1/2 left-1/3 w-60 h-60 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Dynamic Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference opacity-50"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'all 0.1s ease-out'
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section className="relative flex flex-col items-center justify-center text-center py-32 px-4 min-h-screen">
          {/* Floating Elements */}
          <motion.div className="absolute left-10 top-20 opacity-40 animate-float">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
          </motion.div>
          
          <motion.div className="absolute right-10 bottom-20 opacity-30 animate-float-delayed">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl"></div>
          </motion.div>

          <motion.div className="mb-8 animate-fade-in">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-300 rounded-full text-sm font-semibold border border-purple-700">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Corporate Wellness Redefined
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-slide-up">
            <span className="block text-white mb-4">Corporate Wellness,</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Empower your team with professional wellness programs: CPR, posture, HIIT, stress management, nutrition, and more.
            <span className="block mt-2 text-lg text-gray-400">
              Transform your workplace culture with expert-led wellness solutions.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up">
            <motion.button
              onClick={() => handleBookProgram()}
              className="px-12 py-5 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                Book a Program
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>

            <button className="px-12 py-5 text-lg font-bold border-2 border-purple-600 text-purple-400 rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-500 hover:scale-105">
              Learn More
            </button>
          </div>
        </motion.section>

        {/* Programs Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                Our{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Wellness Programs
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your workplace with our comprehensive wellness solutions designed for modern teams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  className="group relative hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative h-full bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 rounded-3xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 overflow-hidden border border-gray-600/30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-600/50 transition-all duration-500" />
                    
                    <div className="relative p-8 h-full flex flex-col">
                      <div className={`relative flex items-center justify-center w-20 h-20 bg-gradient-to-br ${program.color} rounded-2xl mb-8 group-hover:shadow-lg transition-all duration-500 group-hover:rotate-12`}>
                        <program.icon className="w-10 h-10 text-white" />
                        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-purple-300 transition-colors duration-500">
                        {program.title}
                      </h3>
                      
                      <p className="text-gray-200 mb-6 flex-grow leading-relaxed group-hover:text-gray-100 transition-colors duration-500">
                        {program.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-300">
                          <Clock className="w-4 h-4 mr-3 text-purple-400" />
                          <span className="text-sm font-medium">{program.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Users className="w-4 h-4 mr-3 text-purple-400" />
                          <span className="text-sm font-medium">{program.capacity}</span>
                        </div>
                        <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                          {program.price}
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleBookProgram(program)}
                          className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center group relative overflow-hidden hover:scale-105"
                        >
                          <span className="relative z-10 flex items-center">
                            Book Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </button>
                        
                        <button
                          onClick={() => setSelectedProgram(program)}
                          className="px-4 py-4 border-2 border-purple-600 text-purple-400 rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-500 hover:scale-105"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  LeoFit360?
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 border border-gray-600/30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-600/50 transition-all duration-500" />
                    
                    <div className="relative text-center">
                      <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-all duration-500`}>
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-500">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-200 group-hover:text-gray-100 transition-colors duration-500 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Callout */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative animate-fade-in">
              <div className="relative bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 rounded-3xl p-12 shadow-2xl border border-gray-600/30 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 rounded-3xl"></div>
                
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                    About{' '}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      LeoFit360
                    </span>
                  </h2>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    We're on a mission to make workplace wellness bold, engaging, and accessible for every team. 
                    Discover our story and values.
                  </p>
                  <button
                    onClick={() => handleBookProgram()}
                    className="px-8 py-4 text-lg font-bold border-2 border-purple-600 text-purple-400 rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-500 hover:scale-105"
                  >
                    Book Program
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Banner */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative animate-fade-in">
              <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-12 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                      Ready to energize your workplace?
                    </h3>
                    <p className="text-lg text-white/90">
                      Transform your team's wellness journey today.
                    </p>
                  </div>
                  <button
                    onClick={() => handleBookProgram()}
                    className="px-8 py-4 text-lg font-bold bg-white text-purple-600 rounded-2xl hover:bg-gray-100 transition-all duration-500 flex items-center hover:scale-105"
                  >
                    Book a Program
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Small Trainer Popup */}
      {showTrainerPopup && (
        <SmallTrainerPopup 
          onClose={() => setShowTrainerPopup(false)}
          onBookProgram={() => handleBookProgram()}
        />
      )}

      {/* Program Modal */}
      {selectedProgram && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-600/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${selectedProgram.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg`}>
                    <selectedProgram.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-white mb-2">
                      {selectedProgram.title}
                    </h2>
                    <span className="px-4 py-2 bg-purple-900/50 text-purple-300 rounded-full text-sm font-semibold border border-purple-700">
                      Premium Program
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="p-3 hover:bg-gray-600 rounded-full transition-colors duration-300"
                >
                  <ArrowUp className="w-6 h-6 text-gray-300 rotate-45" />
                </button>
              </div>
              
              <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                {selectedProgram.longDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600/30">
                  <div className="flex items-center text-purple-400 mb-3">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-bold">Duration</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {selectedProgram.duration}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600/30">
                  <div className="flex items-center text-purple-400 mb-3">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="font-bold">Capacity</span>
                  </div>
                  <div className="text-xl font-bold text-white">
                    {selectedProgram.capacity}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600/30">
                  <div className="font-bold text-purple-400 mb-3">
                    Investment
                  </div>
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {selectedProgram.price}
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-purple-400" />
                  What's Included:
                </h3>
                <ul className="space-y-4">
                  {selectedProgram.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className="flex items-center text-gray-200 bg-gray-800/50 p-4 rounded-xl border border-gray-600/30"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => handleBookProgram(selectedProgram)}
                  className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group hover:scale-105"
                >
                  <span className="relative z-10">Book This Program</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-8 py-4 border-2 border-gray-600 text-gray-200 font-bold rounded-xl hover:bg-gray-700 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}