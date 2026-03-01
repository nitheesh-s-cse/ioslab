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
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600">
            Built with
            <span className="relative inline-flex">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-rose" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-rose absolute inset-0 animate-ping opacity-30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
            </span>
            for students
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
