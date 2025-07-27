import React from 'react';

// Mock icons since we don't have react-icons available
const FaLinkedin = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FaEnvelope = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73l-6.545 4.027-6.545-4.027v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-.904.732-1.636 1.636-1.636h.965l9.399 5.773 9.4-5.773h.964c.904 0 1.636.732 1.636 1.636z"/>
  </svg>
);

const FaPhoneAlt = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.707 12.293a.999.999 0 00-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 000-1.414L8.586 3.172a.999.999 0 00-1.414 0L5.636 4.708c-2.33 2.33-2.08 6.482 1.112 9.674 3.192 3.192 7.344 3.442 9.674 1.112l1.536-1.536a.999.999 0 000-1.414l-3.121-3.121z"/>
  </svg>
);

// Mock framer-motion components
const motion = {
  footer: ({ children, className, initial, whileInView, viewport, transition, ...props }) => (
    <footer 
      className={`${className} animate-fade-in-up`} 
      style={{ animationDelay: '0.3s' }}
      {...props}
    >
      {children}
    </footer>
  ),
  a: ({ children, className, whileHover, transition, ...props }) => (
    <a 
      className={`${className} hover:animate-bounce-gentle transition-all duration-300`}
      {...props}
    >
      {children}
    </a>
  ),
  div: ({ children, className, initial, animate, transition, ...props }) => (
    <div 
      className={`${className} animate-glow`}
      {...props}
    >
      {children}
    </div>
  )
};

const socialLinks = [
  { href: '#', icon: FaLinkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
  { href: 'mailto:info@leofit360.com', icon: FaEnvelope, label: 'Email', color: 'hover:text-green-400' },
  { href: 'tel:+1234567890', icon: FaPhoneAlt, label: 'Phone', color: 'hover:text-purple-400' },
];

export default function Footer() {
  return (
    <div className="relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-green-900/20 animate-pulse"></div>
      
      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      <motion.footer
        className="relative w-full backdrop-blur-xl bg-gray-900/40 text-white py-12 mt-16 border-t border-gray-700/50 shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Main content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Brand logo with glow effect */}
            <motion.div 
              className="flex items-center gap-3 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-500 to-green-400 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/25 transition-all duration-300">
                <span className="text-xl font-bold text-white">L</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                LeoFit360
              </div>
            </motion.div>

            {/* Social links with enhanced animations */}
            <div className="flex gap-6">
              {socialLinks.map(({ href, icon: Icon, label, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`relative p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-current/25 hover:-translate-y-1 ${color} group`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, delay: i * 0.1 }}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <Icon />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-700">
                    {label}
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </motion.a>
              ))}
            </div>

            {/* Copyright with enhanced styling */}
            <motion.div 
              className="text-sm text-gray-400 text-center md:text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex flex-col gap-1">
                <span>&copy; {new Date().getFullYear()} LeoFit360</span>
                <span className="text-xs text-gray-500">All rights reserved</span>
              </div>
            </motion.div>
          </div>

          {/* Decorative line */}
          <motion.div 
            className="mt-8 pt-6 border-t border-gray-700/50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="text-center">
              <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
                Transforming lives through fitness and wellness. Join our community and achieve your goals with personalized training programs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-60"></div>
      </motion.footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-gentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-4px);
          }
          60% {
            transform: translateY(-2px);
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

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.2);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-bounce-gentle:hover {
          animation: bounce-gentle 0.6s ease-in-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}