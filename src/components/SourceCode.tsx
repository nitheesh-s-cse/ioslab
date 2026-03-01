import { useState } from 'react';
import { motion } from 'framer-motion';
import CodeBlock from './CodeBlock';

const serverCode = `/* Shared Memory Server Program */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/shm.h>

#define SHMSIZE 27

int main()
{
    int shmid;
    key_t key = 2013;
    char *shm, *s;
    char c;

    shmid = shmget(key, SHMSIZE, IPC_CREAT | 0666);
    if (shmid < 0) {
        perror("shmget");
        exit(1);
    }

    printf("Shared memory id : %d\\n", shmid);

    shm = shmat(shmid, NULL, 0);
    if (shm == (char *) -1) {
        perror("shmat");
        exit(1);
    }

    memset(shm, 0, SHMSIZE);
    s = shm;

    printf("Writing (a-z) onto shared memory\\n");
    for (c = 'a'; c <= 'z'; c++)
        *s++ = c;

    *s = '\\0';

    while (*shm != '*');

    printf("Client finished reading\\n");

    shmdt(shm);
    shmctl(shmid, IPC_RMID, NULL);

    return 0;
}`;

const clientCode = `/* Shared Memory Client Program */
#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/ipc.h>
#include <sys/shm.h>

#define SHMSIZE 27

int main()
{
    int shmid;
    key_t key = 2013;
    char *shm, *s;

    shmid = shmget(key, SHMSIZE, 0666);
    if (shmid < 0) {
        printf("Server not started\\n");
        exit(1);
    }

    printf("Accessing shared memory id : %d\\n", shmid);

    shm = shmat(shmid, NULL, 0);
    if (shm == (char *) -1) {
        perror("shmat");
        exit(1);
    }

    printf("Shared memory contents:\\n");
    for (s = shm; *s != '\\0'; s++)
        putchar(*s);

    putchar('\\n');

    *shm = '*';

    return 0;
}`;

export default function SourceCode() {
  const [activeTab, setActiveTab] = useState<'server' | 'client'>('server');

  return (
    <section id="source-code" className="py-20 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-purple/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Section divider */}
        <div className="section-glow-divider mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-purple/8 border border-accent-purple/15 text-accent-purple text-sm font-medium mb-6"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            <span>Source Code</span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Complete C Programs
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Copy these programs into your respective files. The server writes data to shared memory,
            and the client reads it.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex gap-2 mb-6 p-1.5 rounded-2xl bg-dark-700/50 border border-white/5 max-w-xs mx-auto">
          <button
            onClick={() => setActiveTab('server')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === 'server'
                ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>
            shms.c
          </button>
          <button
            onClick={() => setActiveTab('client')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === 'client'
                ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            shmc.c
          </button>
        </div>

        {/* Code Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CodeBlock
            code={activeTab === 'server' ? serverCode : clientCode}
            language="c"
            filename={activeTab === 'server' ? 'shms.c' : 'shmc.c'}
            showLineNumbers
          />
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 glass-card glass-card-glow rounded-2xl p-8 md:p-10"
        >
          <h3 className="font-display text-xl font-bold text-white mb-8 text-center">How It Works</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
            {/* Server */}
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl bg-accent-cyan/5 border border-accent-cyan/15 min-w-[160px] cursor-default hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" /></svg>
              </div>
              <span className="font-mono text-sm font-semibold text-accent-cyan">Server (shms)</span>
              <span className="text-xs text-gray-500 text-center">Writes a–z to<br/>shared memory</span>
            </motion.div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-1">
              <div className="hidden md:block w-16 h-px bg-gradient-to-r from-accent-cyan/50 to-accent-purple/50" />
              <div className="md:hidden h-10 w-px bg-gradient-to-b from-accent-cyan/50 to-accent-purple/50" />
              <span className="text-[10px] text-gray-600 font-mono">shmget / shmat</span>
            </div>

            {/* Shared Memory */}
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl bg-accent-purple/5 border border-accent-purple/15 min-w-[160px] cursor-default hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 flex items-center justify-center">
                <span className="font-mono text-accent-purple text-lg font-black">[M]</span>
              </div>
              <span className="font-mono text-sm font-semibold text-accent-purple">Shared Memory</span>
              <span className="text-xs text-gray-500 text-center">Kernel-managed<br/>memory segment</span>
            </motion.div>

            {/* Arrow */}
            <div className="flex flex-col items-center gap-1">
              <div className="hidden md:block w-16 h-px bg-gradient-to-r from-accent-purple/50 to-accent-green/50" />
              <div className="md:hidden h-10 w-px bg-gradient-to-b from-accent-purple/50 to-accent-green/50" />
              <span className="text-[10px] text-gray-600 font-mono">shmat / read</span>
            </div>

            {/* Client */}
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex flex-col items-center gap-3 px-6 py-5 rounded-2xl bg-accent-green/5 border border-accent-green/15 min-w-[160px] cursor-default hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-green/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <span className="font-mono text-sm font-semibold text-accent-green">Client (shmc)</span>
              <span className="text-xs text-gray-500 text-center">Reads data from<br/>shared memory</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
