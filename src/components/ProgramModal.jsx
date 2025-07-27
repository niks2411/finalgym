import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

export default function ProgramModal({ open, onClose, title, icon: Icon, longDescription, features = [], price, duration, capacity }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#23262F] rounded-2xl shadow-2xl p-8 max-w-lg w-full relative text-white border border-[#6EE7B7]/30"
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-[#6EE7B7] hover:text-[#34D399] transition-colors"
              onClick={onClose}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl text-[#6EE7B7]">
                <Icon />
              </div>
              <h2 className="text-2xl font-bold">{title}</h2>
            </div>
            <p className="text-gray-200 mb-4">{longDescription}</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-4">
              {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-2">
              {price && <span><b>Price:</b> {price}</span>}
              {duration && <span><b>Duration:</b> {duration}</span>}
              {capacity && <span><b>Capacity:</b> {capacity}</span>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
