import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';

const initialMessages = [
  {
    id: 1,
    text: "Hi there! I'm Afaque's portfolio assistant. Ask me about his data science goals, projects, skills, education, certifications, training, resume, or contact details.",
    sender: 'bot',
  },
];

const suggestedPrompts = [
  'About Me',
  'Skills',
  'Projects',
  'Education',
  'Certifications',
  'Training',
  'Resume',
  'Contact',
];

const fallbackReply =
  "I can help with common questions about Afaque's data science goals, projects, skills, education, certifications, training, resume, availability, and contact details.";

const responseRules = [
  {
    keywords: ['royalswheels', 'vehicle rental', 'rental platform', 'django'],
    response:
      'RoyalsWheels is a Django vehicle rental platform that manages structured booking data, user workflows, and admin operations through a clean interface backed by SQLite and Django Admin.',
  },
  {
    keywords: ['startup analyser', 'risk', 'deepsurv', 'finbert', 'xgboost'],
    response:
      'Startup Analyser is a data science-focused project that studies startup signals to estimate business risk, compare failure patterns, and surface interpretable insights through predictive modeling.',
  },
  {
    keywords: ['electric vehicle', 'ev', 'data analysis', 'pandas', 'seaborn'],
    response:
      'Electric Vehicle Data Analysis explores EV population trends, post-2020 growth, and market patterns using Python-based data cleaning, analysis, and visualization workflows.',
  },
  {
    keywords: ['data scientist', 'data science', 'career goal', 'goal', 'aspiring'],
    response:
      'Afaque is positioning himself as an aspiring data scientist. He is focusing on Python, SQL with MySQL, exploratory analysis, machine learning foundations, dashboards, and clear business-facing communication.',
  },
  {
    keywords: ['project', 'projects', 'portfolio work', 'work'],
    response:
      'Afaque currently highlights 3 main projects: RoyalsWheels Vehicle Rental Platform, Startup Analyser, and Electric Vehicle Data Analysis. Together they show structured data work, predictive thinking, and exploratory analysis.',
  },
  {
    keywords: ['skill', 'skills', 'stack', 'tech stack', 'technology', 'technologies'],
    response:
      'Afaque is building a data science toolkit around Python, R, SQL with MySQL, Pandas, NumPy, Matplotlib, Power BI, Tableau, Excel, and Jupyter, while also using Flask and Django for project delivery.',
  },
  {
    keywords: ['language', 'languages', 'c++', 'java', 'python', 'r language', 'sql'],
    response:
      'His highlighted languages include Python, R, SQL, C++, and Java.',
  },
  {
    keywords: ['framework', 'frameworks', 'library', 'libraries', 'pandas', 'numpy', 'matplotlib', 'flask', 'django'],
    response:
      'His portfolio highlights Pandas, NumPy, Matplotlib, Flask, and Django, combining analysis work with web-ready project delivery when needed.',
  },
  {
    keywords: ['tool', 'tools', 'mysql', 'power bi', 'excel', 'tableau', 'jupyter', 'visualization'],
    response:
      'His main tools and platforms include MySQL, Power BI, Microsoft Excel, Tableau, and Jupyter for data work, dashboards, and presentation-ready analysis.',
  },
  {
    keywords: ['education', 'college', 'university', 'cgpa', 'school', 'study'],
    response:
      'Afaque is pursuing a Bachelor of Technology in Computer Science at Lovely Professional University, Punjab, India, with a CGPA of 7.02. He completed Class XII with 76% and Class X with 91% at Kendriya Vidyalaya Air Force Station Bagdogra, West Bengal.',
  },
  {
    keywords: ['certification', 'certifications', 'certificate', 'oracle', 'deloitte', 'nptel', 'simplilearn'],
    response:
      'His listed certifications include Oracle Cloud Infrastructure Data Science Professional, Deloitte Data Analytics Job Simulation, Privacy and Security in Online Social Media from NPTEL, and Machine Learning using Python from Simplilearn.',
  },
  {
    keywords: ['training', 'internship', 'data to decisions', 'housing price', 'power bi dashboard'],
    response:
      'Afaque highlights both the From Data to Decisions training at Lovely Professional University and a 1-month Data Science Internship at SkillCraft Technology, where he worked on data cleaning, EDA, visualization, statistical techniques, and basic machine learning concepts.',
  },
  {
    keywords: ['about', 'who is afaque', 'who are you', 'introduce', 'introduction', 'about me'],
    response:
      'Afaque Hayat Khan is a Computer Science student who wants to become a data scientist and is building that path through analytics projects, dashboards, predictive thinking, and practical data work.',
  },
  {
    keywords: ['resume', 'cv'],
    response:
      'You can download Afaque\'s CV from the hero section using the "Download Resume" button.',
  },
  {
    keywords: ['contact', 'email', 'mail', 'phone', 'reach', 'hire', 'message'],
    response:
      'You can contact Afaque at afaquehayat1504@gmail.com or +91 70011 94776 through the contact section.',
  },
  {
    keywords: ['linkedin', 'github', 'social'],
    response:
      'You can connect with Afaque on LinkedIn at linkedin.com/in/afaque-hayat-khan and view his GitHub at github.com/afaquehk.',
  },
  {
    keywords: ['location', 'where', 'based'],
    response:
      'Afaque is currently studying at Lovely Professional University in Punjab, India. His school education was completed in Bagdogra, West Bengal.',
  },
  {
    keywords: ['available', 'availability', 'opportunity', 'opportunities', 'job'],
    response:
      'Yes, Afaque is open to data science and analytics opportunities. The contact section is the best place to reach out.',
  },
  {
    keywords: ['hello', 'hi', 'hey'],
    response:
      'Hi! You can ask me about Afaque\'s data science goals, projects, technical skills, education, certifications, training, resume, or contact details.',
  },
  {
    keywords: ['thanks', 'thank you'],
    response: "You're welcome! If you want, ask me about a project or skill next.",
  },
];

function getBotReply(input) {
  const normalizedInput = input.toLowerCase().trim();
  const matchedRule = responseRules.find((rule) =>
    rule.keywords.some((keyword) => normalizedInput.includes(keyword))
  );

  return matchedRule?.response ?? fallbackReply;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const messageIdRef = useRef(initialMessages.length + 1);
  const messagesEndRef = useRef(null);
  const timeoutIdsRef = useRef([]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  useEffect(() => {
    return () => {
      timeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  const queueBotReply = (userMessage) => {
    const reply = getBotReply(userMessage);

    const timeoutId = window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        { id: messageIdRef.current++, text: reply, sender: 'bot' },
      ]);
      timeoutIdsRef.current = timeoutIdsRef.current.filter((id) => id !== timeoutId);
    }, 700);

    timeoutIdsRef.current.push(timeoutId);
  };

  const sendMessage = (text) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: messageIdRef.current++, text: trimmedMessage, sender: 'user' },
    ]);
    setInputValue('');
    setIsOpen(true);
    queueBotReply(trimmedMessage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[70]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="pointer-events-auto absolute bottom-24 right-6 w-80 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#13131d] dark:shadow-2xl sm:w-96"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-teal-500 px-5 py-4 text-white dark:from-cyan-600 dark:to-purple-600">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 overflow-hidden">
                    <img 
                      src="/profile/profile.png" 
                      alt="Afaque"
                      className="w-full h-full object-cover scale-125"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Afaque's Assistant</h3>
                    <div className="mt-1 flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-white/80">
                      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      ONLINE
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  aria-label="Close chatbot"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="h-80 overflow-y-auto p-4">
              <div className="flex flex-col gap-4">
                {messages.map((message, index) => {
                  const isBot = message.sender === 'bot';
                  const showPrompts = isBot && index === 0;

                  return (
                    <div
                      key={message.id}
                      className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-[85%] ${isBot ? '' : 'items-end'} flex flex-col gap-3`}>
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                            isBot
                              ? 'bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white'
                              : 'bg-indigo-600 text-white dark:bg-cyan-600'
                          } whitespace-pre-line`}
                        >
                          {message.text}
                        </motion.div>

                        {showPrompts && (
                          <div className="flex flex-wrap gap-2">
                            {suggestedPrompts.map((prompt) => (
                              <button
                                key={prompt}
                                type="button"
                                onClick={() => sendMessage(prompt)}
                                className="rounded-full border border-indigo-600 px-3 py-1.5 text-xs font-medium text-indigo-600 transition-all hover:bg-indigo-600 hover:text-white dark:border-white/20 dark:text-gray-300 dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300"
                              >
                                {prompt}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="border-t border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-[#13131d]">
              <form onSubmit={handleSubmit} className="flex items-center gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder="Ask me about Afaque..."
                  className="min-w-0 flex-1 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-[#0a0a0f] dark:text-white dark:focus:border-cyan-500 dark:focus:ring-cyan-500/20"
                />
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  type="submit"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-colors hover:bg-indigo-500 dark:bg-purple-600 dark:hover:bg-purple-500"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-auto absolute bottom-6 right-6">
        <motion.button
          type="button"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-[0_16px_40px_rgba(79,70,229,0.32)] transition-all hover:bg-indigo-500 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-purple-500 dark:shadow-[0_18px_45px_rgba(139,92,246,0.35)]"
          aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
