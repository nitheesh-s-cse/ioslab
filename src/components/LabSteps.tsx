import { motion } from 'framer-motion';
import StepCard from './StepCard';
import CodeBlock from './CodeBlock';

export default function LabSteps() {
  return (
    <section id="steps" className="py-20 md:py-32 relative">
      {/* Background blobs */}
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-accent-cyan/[0.015] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[60%] right-0 w-[400px] h-[400px] bg-accent-purple/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section divider */}
        <div className="section-glow-divider mb-20" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-green/8 border border-accent-green/15 text-accent-green text-sm font-medium mb-6"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span>Step-by-Step Execution</span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Lab Procedure
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Follow each step in order. Do not skip any step. This flow is verified and complete.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* STEP 0 */}
          <StepCard
            stepNumber={0}
            title="Open Terminal"
            confirmText="Terminal ready"
            icon={
              <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            }
          >
            <p className="mb-3">Launch the terminal emulator on your Linux system.</p>
            <p className="mb-4">Press the keyboard shortcut:</p>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-500/80 border border-white/10">
              <kbd className="font-mono text-sm text-white font-semibold px-2 py-1 rounded-lg bg-dark-700 border border-white/10">Ctrl</kbd>
              <span className="text-gray-600">+</span>
              <kbd className="font-mono text-sm text-white font-semibold px-2 py-1 rounded-lg bg-dark-700 border border-white/10">Alt</kbd>
              <span className="text-gray-600">+</span>
              <kbd className="font-mono text-sm text-white font-semibold px-2 py-1 rounded-lg bg-dark-700 border border-white/10">T</kbd>
            </div>
          </StepCard>

          {/* STEP 1 */}
          <StepCard
            stepNumber={1}
            title="Install GCC Compiler"
            confirmText="Installs the C compiler (only needed once)"
            icon={
              <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            }
          >
            <p className="mb-3">Install the GNU C Compiler if not already installed:</p>
            <CodeBlock code="sudo apt install gcc" />
          </StepCard>

          {/* STEP 2 */}
          <StepCard
            stepNumber={2}
            title="Create Server File"
            confirmText="File saved successfully"
            icon={
              <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            }
          >
            <p className="mb-3">Open the nano text editor and create the server program file:</p>
            <CodeBlock code="nano shms.c" />
            <p className="mt-4 mb-2">Paste the <a href="#source-code" className="text-accent-cyan hover:underline font-medium hover:text-accent-cyan/80 transition-colors">server source code</a> into the editor, then save:</p>
            <div className="flex flex-col gap-2 ml-1">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-600">1.</span>
                <kbd className="font-mono text-xs text-white font-semibold px-2 py-1 rounded-md bg-dark-700 border border-white/10">Ctrl + O</kbd>
                <span className="text-gray-500">→ then press</span>
                <kbd className="font-mono text-xs text-white font-semibold px-2 py-1 rounded-md bg-dark-700 border border-white/10">Enter</kbd>
                <span className="text-gray-500 text-xs">(save)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-600">2.</span>
                <kbd className="font-mono text-xs text-white font-semibold px-2 py-1 rounded-md bg-dark-700 border border-white/10">Ctrl + X</kbd>
                <span className="text-gray-500 text-xs">(exit nano)</span>
              </div>
            </div>
          </StepCard>

          {/* STEP 3 */}
          <StepCard
            stepNumber={3}
            title="Create Client File"
            confirmText="File saved successfully"
            icon={
              <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
            }
          >
            <p className="mb-3">Open nano again and create the client program file:</p>
            <CodeBlock code="nano shmc.c" />
            <p className="mt-4 mb-2">Paste the <a href="#source-code" className="text-accent-cyan hover:underline font-medium hover:text-accent-cyan/80 transition-colors">client source code</a> into the editor, then save:</p>
            <div className="flex flex-col gap-2 ml-1">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-600">1.</span>
                <kbd className="font-mono text-xs text-white font-semibold px-2 py-1 rounded-md bg-dark-700 border border-white/10">Ctrl + O</kbd>
                <span className="text-gray-500">→ then press</span>
                <kbd className="font-mono text-xs text-white font-semibold px-2 py-1 rounded-md bg-dark-700 border border-white/10">Enter</kbd>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-600">2.</span>
                <kbd className="font-mono text-xs text-white font-semibold px-2 py-1 rounded-md bg-dark-700 border border-white/10">Ctrl + X</kbd>
              </div>
            </div>
          </StepCard>

          {/* STEP 4 */}
          <StepCard
            stepNumber={4}
            title="Compile Server Program"
            confirmText="Creates the 'shms' executable"
            icon={
              <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            }
          >
            <p className="mb-3">Compile the server source code using GCC:</p>
            <CodeBlock code="gcc shms.c -o shms" />
            <p className="mt-3 text-sm text-gray-500">
              The <code className="font-mono text-accent-cyan/70 text-xs px-1.5 py-0.5 bg-accent-cyan/5 rounded">-o shms</code> flag names the output executable.
            </p>
          </StepCard>

          {/* STEP 5 */}
          <StepCard
            stepNumber={5}
            title="Compile Client Program"
            confirmText="Ready to execute"
            icon={
              <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            }
          >
            <p className="mb-3">Compile the client source code:</p>
            <CodeBlock code="gcc shmc.c -o shmc" />
          </StepCard>

          {/* STEP 6 */}
          <StepCard
            stepNumber={6}
            title="Run the Server (First!)"
            confirmText="Server is running and waiting for client"
            icon={
              <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            }
            warnings={[
              "DO NOT close this terminal — the server must stay running",
              "The server is waiting for the client to connect"
            ]}
          >
            <p className="mb-3">Execute the server program:</p>
            <CodeBlock code="./shms" />
            <p className="mt-3 mb-3 text-sm text-gray-300 font-medium">Expected output:</p>
            <CodeBlock
              code={`Shared memory id : ####\nWriting (a-z) onto shared memory`}
              isOutput
              filename="server output"
            />
          </StepCard>

          {/* STEP 7 */}
          <StepCard
            stepNumber={7}
            title="Open a New Terminal"
            confirmText="New terminal window opened"
            icon={
              <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
            }
          >
            <p className="mb-3">Open a <strong className="text-white">second terminal window</strong> because the server must keep running in the first one.</p>
            <p className="mb-4">Press the keyboard shortcut again:</p>
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-500/80 border border-white/10">
              <kbd className="font-mono text-sm text-white font-semibold px-2 py-1 rounded-lg bg-dark-700 border border-white/10">Ctrl</kbd>
              <span className="text-gray-600">+</span>
              <kbd className="font-mono text-sm text-white font-semibold px-2 py-1 rounded-lg bg-dark-700 border border-white/10">Alt</kbd>
              <span className="text-gray-600">+</span>
              <kbd className="font-mono text-sm text-white font-semibold px-2 py-1 rounded-lg bg-dark-700 border border-white/10">T</kbd>
            </div>
          </StepCard>

          {/* STEP 8 */}
          <StepCard
            stepNumber={8}
            title="Run the Client"
            confirmText="Client reads from shared memory successfully"
            icon={
              <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            }
          >
            <p className="mb-3">In the <strong className="text-white">new terminal</strong>, execute the client program:</p>
            <CodeBlock code="./shmc" />
            <p className="mt-3 mb-3 text-sm text-gray-300 font-medium">Expected output:</p>
            <CodeBlock
              code={`Accessing shared memory id : ####\nShared memory contents:\nabcdefghijklmnopqrstuvwxyz`}
              isOutput
              filename="client output"
            />
          </StepCard>

          {/* STEP 9 */}
          <StepCard
            stepNumber={9}
            title="Verify Server Terminal"
            confirmText="Program executed successfully 🎉"
            icon={
              <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            }
            isLast
          >
            <p className="mb-3">Switch back to the <strong className="text-white">first terminal</strong> (server). It will now display:</p>
            <CodeBlock
              code="Client finished reading"
              isOutput
              filename="server output"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-accent-green/5 to-accent-cyan/5 border border-accent-green/15 hover:border-accent-green/25 transition-all duration-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-xl bg-accent-green/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-display font-bold text-white text-lg">Lab Complete!</h4>
              </div>
              <p className="text-gray-400 text-sm ml-11">
                The server successfully wrote data (a–z) to shared memory, and the client process read it.
                This demonstrates Inter-Process Communication using System V shared memory in Linux.
              </p>
            </motion.div>
          </StepCard>
        </div>
      </div>
    </section>
  );
}
