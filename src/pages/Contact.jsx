import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Send, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  Building,
  User,
  MessageCircle,
  Calendar,
  MapPin
} from 'lucide-react';

const programs = [
  '',
  'CPR Certification',
  'Cervical Health & Posture',
  'HIIT for Teams',
  'Stress Management',
  'Nutrition Planning',
  'Monthly Fitness Challenges',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', program: '' });
  const [submitted, setSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for dynamic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // Validate required fields
    if (!form.name || !form.email || !form.company || !form.program || !form.message) {
      console.log('❌ Form validation failed - missing required fields');
      alert('Please fill in all required fields');
      return;
    }
    
    // Log form data to console with better formatting
    console.log('🚀 === CONTACT FORM SUBMISSION ===');
    console.log('📝 Form Data:', {
      name: form.name,
      email: form.email,
      company: form.company,
      program: form.program,
      message: form.message,
      submittedAt: new Date().toISOString(),
      timestamp: Date.now()
    });
    console.log('👤 Name:', form.name);
    console.log('📧 Email:', form.email);
    console.log('🏢 Company:', form.company);
    console.log('📋 Program:', form.program);
    console.log('💬 Message:', form.message);
    console.log('⏰ Submitted at:', new Date().toLocaleString());
    console.log('✅ Form submission successful!');
    console.log('=====================================');
    
    // Show success state
    setSubmitted(true);
    
    // Reset form after 3 seconds and hide success message
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', message: '', program: '' });
      console.log('🔄 Form has been reset');
    }, 3000);
  }

  // Check if form is valid for submit button state
  const isFormValid = form.name && form.email && form.company && form.program && form.message;

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

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center py-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-purple-300 rounded-full text-sm font-semibold border border-purple-700">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Let's Transform Your Workplace
          </span>
        </motion.div>

        <motion.section
          className="relative bg-gradient-to-br from-slate-800 via-gray-700 to-slate-800 max-w-4xl w-full mx-auto p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-600/30 overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative">
            <motion.h1 
              className="text-3xl md:text-5xl font-black mb-6 text-center leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <span className="text-white mb-2 block">Book a Corporate</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Wellness Program
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Ready to energize your team? Fill out the form below and we'll create a customized wellness solution for your organization.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Form Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="space-y-8">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400 transition-colors group-focus-within:text-pink-400" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="peer w-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-2 border-gray-600/30 text-white py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-purple-500/70 transition-all placeholder-gray-400 hover:border-purple-500/50"
                      placeholder="Your Name *"
                    />
                  </div>

                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400 transition-colors group-focus-within:text-pink-400" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="peer w-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-2 border-gray-600/30 text-white py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-purple-500/70 transition-all placeholder-gray-400 hover:border-purple-500/50"
                      placeholder="Email Address *"
                    />
                  </div>

                  <div className="relative group">
                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400 transition-colors group-focus-within:text-pink-400" />
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      className="peer w-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-2 border-gray-600/30 text-white py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-purple-500/70 transition-all placeholder-gray-400 hover:border-purple-500/50"
                      placeholder="Company Name *"
                    />
                  </div>

                  <div className="relative group">
                    <Calendar className="absolute left-4 top-6 w-5 h-5 text-purple-400 transition-colors group-focus-within:text-pink-400" />
                    <select
                      name="program"
                      value={form.program}
                      onChange={handleChange}
                      className="peer w-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-2 border-gray-600/30 text-white py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-purple-500/70 transition-all hover:border-purple-500/50 appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled className="bg-gray-800 text-gray-400">Select Program Interested In *</option>
                      {programs.slice(1).map((p) => (
                        <option key={p} value={p} className="bg-gray-800 text-white">{p}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative group">
                    <MessageCircle className="absolute left-4 top-6 w-5 h-5 text-purple-400 transition-colors group-focus-within:text-pink-400" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="peer w-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-2 border-gray-600/30 text-white py-4 pl-12 pr-4 rounded-2xl focus:outline-none focus:border-purple-500/70 transition-all placeholder-gray-400 resize-none hover:border-purple-500/50"
                      placeholder="Tell us about your team size, goals, and any specific requirements... *"
                    />
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    className={`w-full font-bold py-5 rounded-2xl shadow-2xl transition-all text-lg relative overflow-hidden group ${
                      isFormValid && !submitted
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-purple-500/25 cursor-pointer'
                        : 'bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 cursor-not-allowed'
                    }`}
                    whileTap={isFormValid && !submitted ? { scale: 0.97 } : {}}
                    whileHover={isFormValid && !submitted ? { 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                    } : {}}
                    disabled={!isFormValid || submitted}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {submitted ? (
                        <>
                          <CheckCircle className="w-6 h-6 mr-3" />
                          Submitted Successfully!
                        </>
                      ) : (
                        <>
                          {isFormValid ? 'Send Inquiry' : 'Please Fill All Fields'}
                          <motion.div
                            className="ml-3"
                            whileHover={isFormValid ? { x: 5 } : {}}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Send className="w-5 h-5" />
                          </motion.div>
                        </>
                      )}
                    </span>
                    {isFormValid && !submitted && (
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    )}
                  </motion.button>
                </div>
              </motion.div>

              {/* Contact Info Section */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Sparkles className="w-6 h-6 mr-3 text-purple-400" />
                    Get In Touch
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Ready to revolutionize your workplace wellness? Our team of certified professionals is here to create a customized program that fits your company's unique needs and culture.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/30 hover:border-purple-500/50 transition-all group"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-semibold">info@leofit360.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/30 hover:border-purple-500/50 transition-all group"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white font-semibold">+1 234 567 890</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/30 hover:border-purple-500/50 transition-all group cursor-pointer"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">LinkedIn</p>
                      <p className="text-white font-semibold hover:text-purple-300 transition-colors">Connect with us</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/30 hover:border-purple-500/50 transition-all group"
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-semibold">Serving companies nationwide</p>
                    </div>
                  </motion.div>
                </div>

                {/* Quick Response Promise */}
                <motion.div 
                  className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-2xl border border-purple-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-white font-semibold">Quick Response Guaranteed</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    We typically respond to inquiries within 24 hours. Our team will work with you to schedule a consultation that fits your timeline.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}