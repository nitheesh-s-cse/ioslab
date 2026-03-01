import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer Background Effects */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 hero-glow-2" />
      <div className="absolute inset-0 hero-glow-3" />
      <div className="aurora-bg" />

      {/* Scan Line */}
      <div className="scan-line" />

      {/* Orbiting Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute"
        >
          <div className="w-2 h-2 rounded-full bg-accent-cyan/30 shadow-[0_0_20px_rgba(34,211,238,0.4)] -translate-x-[200px] -translate-y-[200px]" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent-purple/30 shadow-[0_0_15px_rgba(168,85,247,0.4)] translate-x-[150px] translate-y-[150px]" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute"
        >
          <div className="w-1 h-1 rounded-full bg-accent-blue/30 shadow-[0_0_15px_rgba(59,130,246,0.4)] translate-x-[250px]" />
        </motion.div>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15%] left-[10%] w-20 h-20 border border-accent-cyan/10 rounded-2xl rotate-12 hidden md:block"
      />
      <motion.div
        animate={{ y: [10, -15, 10], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] right-[12%] w-16 h-16 border border-accent-purple/10 rounded-full hidden md:block"
      />
      <motion.div
        animate={{ y: [-8, 12, -8], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[25%] left-[15%] w-12 h-12 border border-accent-blue/10 rotate-45 hidden md:block"
      />
      <motion.div
        animate={{ y: [5, -10, 5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[30%] right-[10%] w-24 h-24 border border-accent-green/5 rounded-3xl hidden md:block"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(34,211,238,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-cyan/5 border border-accent-cyan/15 text-accent-cyan text-sm font-medium mb-8 animated-border"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
          </span>
          <span>Operating Systems Lab</span>
        </motion.div>

        {/* Title with Neon Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.92] mb-7"
        >
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white block"
          >
            IPC Using
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="gradient-text block mt-1"
          >
            Shared Memory
          </motion.span>
        </motion.h1>

        {/* Subtitle with typing feel */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          A complete step-by-step lab guide for implementing
          <span className="text-accent-cyan font-medium"> Inter-Process Communication </span>
          using shared memory segments in Linux with C programming.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#steps"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-900 font-bold text-base transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] hover:scale-[1.03] overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span className="relative z-10">Start Lab Guide</span>
          </a>
          <a
            href="#source-code"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-dark-600/50 border border-white/10 text-gray-300 font-semibold text-base transition-all duration-500 hover:border-accent-purple/30 hover:text-white hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:bg-dark-600/80"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            View Source Code
          </a>
        </motion.div>

        {/* Animated Stats / Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-16 flex items-center justify-center gap-8 md:gap-12"
        >
          {[
            { value: '10', label: 'Steps' },
            { value: '2', label: 'Programs' },
            { value: '2', label: 'Terminals' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1, type: 'spring', stiffness: 200 }}
              className="text-center"
            >
              <div className="font-display text-2xl md:text-3xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-gray-700 flex justify-center pt-1.5">
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-accent-cyan rounded-full shadow-[0_0_6px_rgba(34,211,238,0.6)]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
