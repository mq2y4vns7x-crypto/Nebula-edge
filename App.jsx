import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code, Gamepad2, Send, Zap } from 'lucide-react';

const NebulaEdge = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { 
      role: 'nebula', 
      content: "Systems online. I've finished optimizing your Luau scripts and judging your gaming stats. What's next on the agenda, human?" 
    }
  ]);

  // Sarcastic Personality Engine Logic
  const generateResponse = (text) => {
    if (text.toLowerCase().includes('roblox')) {
      return "Analyzing Roblox API... I've fixed your scripts. Try not to use 'wait()' this time; we aren't in 2015 anymore.";
    }
    if (text.toLowerCase().includes('game') || text.toLowerCase().includes('win')) {
      return "Strategy calculated. If you stop rushing without a plan, your win rate might actually climb out of the basement.";
    }
    return "Processing that with my native engine... Done. It's perfect, unlike your last three lines of code.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages([...messages, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'nebula', content: generateResponse(input) }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#050208] text-white font-sans selection:bg-purple-500/30 overflow-hidden flex flex-col items-center justify-center p-4">
      
      {/* BACKGROUND VOLUMETRIC NEBULA ENGINE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      {/* MAIN CONSOLE */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* HEADER */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping" />
            <h1 className="text-xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              NEBULA EDGE
            </h1>
          </div>
          <Zap className="text-purple-400 w-5 h-5" />
        </div>

        {/* CHAT AREA */}
        <div className="h-[400px] overflow-y-auto p-6 space-y-4">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                  ? 'bg-purple-600/20 border border-purple-500/30 text-purple-100' 
                  : 'bg-white/5 border border-white/10 text-gray-200'
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ACTION HUB (Gaming, Coding, Visuals) */}
        <div className="px-6 py-3 flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-500/20 transition-all">
            <Code size={16} /> <span className="text-xs font-semibold uppercase tracking-widest">Architect</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-500/20 transition-all">
            <Gamepad2 size={16} /> <span className="text-xs font-semibold uppercase tracking-widest">Game-Sense</span>
          </button>
        </div>

        {/* INPUT AREA */}
        <div className="p-6 pt-2">
          <div className="relative group">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask the Engine anything..."
              className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-gray-600"
            />
            <button 
              onClick={handleSend}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-purple-600 hover:bg-purple-500 rounded-xl transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-center mt-4 text-gray-500 tracking-widest uppercase">
            Nebula Engine v1.0 // Powered by Sarcasm
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default NebulaEdge;
