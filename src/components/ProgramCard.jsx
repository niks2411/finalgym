import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

export default function ProgramCard({ icon: Icon, title, description, onBook, onMoreDetails }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: '0 4px 32px #6EE7B733' }}
      className="bg-[#23262F] rounded-xl p-6 flex flex-col items-start shadow-lg transition-all duration-200 min-h-[260px]"
    >
      <div className="mb-4 text-4xl text-[#6EE7B7]">
        <Icon />
      </div>
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4 flex-1">{description}</p>
      <div className="flex gap-2 mt-auto">
        <button
          className="bg-[#6EE7B7] text-[#181A20] font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#34D399] transition-colors flex items-center gap-2"
          onClick={onBook}
        >
          Book This Program <FaChevronRight />
        </button>
        {onMoreDetails && (
          <button
            className="text-[#6EE7B7] underline hover:text-[#34D399] transition-colors px-2"
            onClick={onMoreDetails}
          >
            More Details
          </button>
        )}
      </div>
    </motion.div>
  );
}
