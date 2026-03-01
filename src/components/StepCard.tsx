import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StepCardProps {
  stepNumber: number;
  title: string;
  children: ReactNode;
  confirmText?: string;
  warnings?: string[];
  isLast?: boolean;
  icon?: ReactNode;
}

export default function StepCard({ stepNumber, title, children, confirmText, warnings, isLast = false, icon }: StepCardProps) {
  return (
    <div className="relative flex gap-3 sm:gap-5 md:gap-8">
      {/* Timeline */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
          whileHover={{ scale: 1.15 }}
          className="step-number relative z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-dark-600 to-dark-700 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan font-mono font-bold text-xs sm:text-sm shadow-lg shadow-accent-cyan/5 cursor-default transition-all duration-300 hover:border-accent-cyan/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
        >
          {stepNumber}
        </motion.div>
        {!isLast && (
          <div className="w-px flex-1 step-connector mt-2 relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute inset-0 origin-top"
              style={{ background: 'linear-gradient(180deg, rgba(34,211,238,0.3), rgba(34,211,238,0.02))' }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="flex-1 min-w-0 pb-8 sm:pb-10 md:pb-12"
      >
        <div className="glass-card glass-card-glow rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(34,211,238,0.04)] group">
          {/* Step Header */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
            {icon && (
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="text-accent-cyan/70 group-hover:text-accent-cyan transition-colors duration-300 flex-shrink-0"
              >
                <div className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] [&>svg]:w-full [&>svg]:h-full">
                  {icon}
                </div>
              </motion.div>
            )}
            <h3 className="font-display text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-accent-cyan/90 transition-colors duration-300">
              {title}
            </h3>
          </div>

          {/* Step Content */}
          <div className="text-gray-400 leading-relaxed text-sm sm:text-[15px]">
            {children}
          </div>

          {/* Warnings */}
          {warnings && warnings.length > 0 && (
            <div className="mt-4 sm:mt-5 space-y-2">
              {warnings.map((warning, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-accent-amber/5 border border-accent-amber/15 text-accent-amber text-xs sm:text-sm"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                  <span>{warning}</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Confirm Badge */}
          {confirmText && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-4 sm:mt-5 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-accent-green/5 border border-accent-green/15 text-accent-green text-xs sm:text-sm font-medium group/badge hover:shadow-[0_0_15px_rgba(16,185,129,0.08)] transition-shadow duration-300"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{confirmText}</span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
