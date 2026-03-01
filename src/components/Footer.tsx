import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 sm:py-12 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[80px] sm:h-[100px] bg-accent-cyan/[0.02] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-between"
        >
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 text-center">
            <span>IPC Shared Memory Lab Guide</span>
            <span className="text-gray-700">•</span>
            <span>Operating Systems</span>
          </div>
          {/* footer right-side intentionally left blank */}
        </motion.div>
      </div>
    </footer>
  );
}
