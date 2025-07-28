import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  UserCheck, 
  Star, 
  Award, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  Clock,
  TrendingUp,
  Shield,
  X
} from 'lucide-react';

export default function About() {
  const [activeCard, setActiveCard] = useState(null);
  const [stats, setStats] = useState({ companies: 0, employees: 0, programs: 0, satisfaction: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // Navigation handlers
  const handleGetStarted = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };

  const handleRequestDemo = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };

  // Mouse tracking for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate counters when component becomes visible
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setStats({ companies: 500, employees: 50000, programs: 95, satisfaction: 96 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Animate numbers
  const animateValue = (start, end, duration = 2000) => {
    const [current, setCurrent] = useState(start);
    
    useEffect(() => {
      if (end === 0) return;
      let startTime = null;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCurrent(Math.floor(progress * (end - start) + start));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end]);
    
    return current;
  };

  const CompanyCounter = ({ target }) => animateValue(0, target);
  const EmployeeCounter = ({ target }) => animateValue(0, target);
  const ProgramCounter = ({ target }) => animateValue(0, target);
  const SatisfactionCounter = ({ target }) => animateValue(0, target);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-60 h-60 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Dynamic Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference opacity-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <div className="relative z-10">
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Header with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-300 rounded-full text-sm font-semibold border border-purple-700">
                <Sparkles className="w-4 h-4 inline mr-2" />
                Corporate Wellness Redefined
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <span className="block text-white mb-4">About</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent relative">
                LeoFit360
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-purple-400/60 via-pink-400/60 to-orange-400/60 blur-sm"></div>
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              LeoFit360 is a bold, modern corporate wellness brand dedicated to 
              empowering organizations and their people. We partner with companies 
              to deliver professional, science-backed wellness programs that boost 
              employee health, engagement, and productivity.
              <span className="block mt-4 text-lg text-gray-400">
                Transform your workplace culture with expert-led wellness solutions.
              </span>
            </motion.p>

            {/* Enhanced Animated Stats Section */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              <motion.div 
                variants={itemVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 border border-gray-600/30 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                  >
                    <Users className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    <CompanyCounter target={stats.companies} />+
                  </div>
                  <div className="text-gray-200 font-semibold group-hover:text-gray-100 transition-colors duration-500">
                    Companies Served
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 border border-gray-600/30 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                  >
                    <UserCheck className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    <EmployeeCounter target={stats.employees} />+
                  </div>
                  <div className="text-gray-200 font-semibold group-hover:text-gray-100 transition-colors duration-500">
                    Employees Reached
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 border border-gray-600/30 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                  >
                    <Star className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    <SatisfactionCounter target={stats.satisfaction} />%
                  </div>
                  <div className="text-gray-200 font-semibold group-hover:text-gray-100 transition-colors duration-500">
                    Satisfaction Rate
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/25 transition-all duration-700 border border-gray-600/30 text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    className="w-16 h-16 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                  >
                    <Award className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                    4.9/5
                  </div>
                  <div className="text-gray-200 font-semibold group-hover:text-gray-100 transition-colors duration-500">
                    Average Rating
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Mission Section */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 rounded-3xl p-12 shadow-2xl mb-16 border border-gray-600/30 hover:border-purple-600/50 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative">
                <motion.h2 
                  className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300"
                >
                  Our Mission
                </motion.h2>
                <p className="text-gray-100 text-xl leading-relaxed">
                  To transform workplace wellbeing by making world-class fitness, 
                  health, and safety programs accessible, engaging, and impactful 
                  for every team. We believe that healthy employees are the foundation 
                  of thriving businesses.
                </p>
              </div>
            </motion.div>
            
            {/* Enhanced Interactive Cards */}
            <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
              <motion.div 
                className={`bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 rounded-3xl p-8 shadow-2xl border border-gray-600/30 hover:shadow-purple-500/25 hover:border-purple-600/50 transition-all duration-300 cursor-pointer transform hover:scale-105 group relative overflow-hidden ${
                  activeCard === 'wellness' ? 'border-purple-600/70 scale-105' : ''
                }`}
                onClick={() => setActiveCard(activeCard === 'wellness' ? null : 'wellness')}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.4 }
                }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center group-hover:text-purple-300 transition-colors duration-500">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                      className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 animate-pulse"
                    ></motion.div>
                    Why Corporate Wellness?
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-4 group-hover:text-gray-100 transition-colors duration-500">
                    Healthy employees are the foundation of a thriving business. Our 
                    B2B programs are designed to reduce absenteeism, improve morale, 
                    and foster a culture of wellbeing in the workplace.
                  </p>
                  {activeCard === 'wellness' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 mt-6 border border-gray-600/30"
                    >
                      <h4 className="text-purple-400 font-bold mb-4 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Key Benefits:
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          32% reduction in sick days
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          28% increase in productivity
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          45% better employee retention
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                          67% improved job satisfaction
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className={`bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 rounded-3xl p-8 shadow-2xl border border-gray-600/30 hover:shadow-purple-500/25 hover:border-purple-600/50 transition-all duration-300 cursor-pointer transform hover:scale-105 group relative overflow-hidden ${
                  activeCard === 'different' ? 'border-purple-600/70 scale-105' : ''
                }`}
                onClick={() => setActiveCard(activeCard === 'different' ? null : 'different')}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.4 }
                }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center group-hover:text-purple-300 transition-colors duration-500">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                      className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 animate-pulse"
                    ></motion.div>
                    What Makes Us Different?
                  </h3>
                  <ul className="text-gray-200 space-y-4 group-hover:text-gray-100 transition-colors duration-500">
                    <li className="flex items-start hover:text-purple-300 transition-colors duration-200">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <span>Certified trainers & medical professionals</span>
                    </li>
                    <li className="flex items-start hover:text-purple-300 transition-colors duration-200">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <span>Customizable programs for every company size</span>
                    </li>
                    <li className="flex items-start hover:text-purple-300 transition-colors duration-200">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <span>Modern, engaging delivery (on-site & virtual)</span>
                    </li>
                    <li className="flex items-start hover:text-purple-300 transition-colors duration-200">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                      <span>Focus on measurable results</span>
                    </li>
                  </ul>
                  {activeCard === 'different' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-6 mt-6 border border-gray-600/30"
                    >
                      <h4 className="text-purple-400 font-bold mb-4 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Our Approach:
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        We combine cutting-edge technology with human expertise to deliver 
                        personalized wellness solutions. Our data-driven approach ensures 
                        maximum ROI and measurable health outcomes for your organization.
                        Every program is tailored to your company's unique culture and needs.
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Enhanced CTA Section */}
            <motion.div 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-12 shadow-2xl overflow-hidden relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
              <div className="relative">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Ready to Transform Your Workplace?
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Join the companies already experiencing the LeoFit360 difference. 
                  Let's build a healthier, more productive future together.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button 
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGetStarted}
                    className="px-10 py-4 text-lg font-bold bg-white text-purple-600 rounded-2xl hover:bg-gray-100 transition-all duration-500 flex items-center justify-center group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Started Today
                      <motion.div
                        className="ml-3"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRequestDemo}
                    className="px-10 py-4 text-lg font-bold border-2 border-white text-white rounded-2xl hover:bg-white hover:text-purple-600 transition-all duration-500"
                  >
                    Request Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Trainer Greeting Popup Removed */}
    </div>
  );
} 