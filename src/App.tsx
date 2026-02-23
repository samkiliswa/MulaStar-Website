/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Star, 
  ArrowRight, 
  PlayCircle, 
  RotateCcw, 
  Dices, 
  FileText, 
  MousePointerClick, 
  Video, 
  Users, 
  Award, 
  Youtube, 
  Gamepad2, 
  CheckCircle2, 
  LineChart, 
  Download, 
  LogIn, 
  UserPlus, 
  ChevronDown, 
  MessageCircle,
  Home,
  Wallet,
  Smartphone,
  User,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Header = () => (
  <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Star className="text-primary w-8 h-8 fill-primary" />
        <span className="text-xl font-black tracking-tight text-primary">MulaStar</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a className="hover:text-primary transition-colors" href="#">Home</a>
        <a className="hover:text-primary transition-colors" href="#how-it-works">How It Works</a>
        <a className="hover:text-primary transition-colors" href="#features">Features</a>
        <a className="hover:text-primary transition-colors" href="#app">App</a>
        <a className="hover:text-primary transition-colors" href="#faq">FAQ</a>
      </nav>
      <div className="flex items-center gap-3">
        <button className="hidden sm:block text-sm font-bold text-slate-600 dark:text-slate-400 px-4 py-2">Login</button>
        <a 
          className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center" 
          href="https://mulastar.com/register.php?ref=samkiliswa"
        >
          Sign Up
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden pt-12 pb-20 px-4">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
          <Wallet className="w-3 h-3" /> Trusted by 500k+ Users
        </div>
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
          MulaStar – Make <span className="text-primary">Money</span> Online
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
          MulaStar provides TikTok and YouTube videos, ad clicks, blogging, trivia questions, premium Forex tutorials, enlightening e-books, and competitive chess and draughts games to boost your earnings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            className="bg-primary text-white text-lg font-bold h-14 px-8 rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2 hover:scale-105 transition-transform" 
            href="https://mulastar.com/register.php?ref=samkiliswa"
          >
            Sign Up MulaStar <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-square rounded-3xl bg-gradient-to-tr from-primary/20 to-primary/5 p-4">
          <div className="w-full h-full rounded-2xl overflow-hidden bg-white shadow-2xl relative">
            <img 
              alt="Professional financial growth and investment dashboard" 
              className="w-full h-full object-cover" 
              src="https://i.imghippo.com/files/xcL5469.jpg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-20 bg-slate-50 dark:bg-slate-900/50 px-4" id="how-it-works">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-black mb-6">How MulaStar Works</h2>
      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
        MulaStar is an innovative platform designed to help users monetize their time. By performing simple digital tasks like watching videos, spinning wheels, or writing articles, you accumulate earnings that can be withdrawn directly to your preferred payment method.
      </p>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string, key?: React.Key }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-primary transition-colors group"
  >
    <Icon className="text-primary w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
  </motion.div>
);

const Features = () => {
  const features = [
    { icon: RotateCcw, title: "Free Spin", description: "Daily free chance to spin the wheel and win instant cash rewards or bonuses without any investment." },
    { icon: Dices, title: "Bet Spin", description: "Multiply your earnings by placing small bets on high-reward spinning wheels for larger payouts." },
    { icon: FileText, title: "Article Writing", description: "Share your thoughts and knowledge. Get paid for every high-quality article you contribute to the community." },
    { icon: MousePointerClick, title: "Paid Ad Clicks", description: "Easily earn by simply viewing and interacting with ads from our premium advertising partners." },
    { icon: Video, title: "Paid Tiktok Videos", description: "Watch and engage with curated TikTok content to earn rewards for every minute of viewing." },
    { icon: PlayCircle, title: "Social Reels", description: "Watch Instagram and Facebook reels through MulaStar and turn your scrolling time into money." },
    { icon: Users, title: "Affiliate Marketing", description: "Invite friends and family to join MulaStar and earn generous commissions on their activities." },
    { icon: Award, title: "Agent Bonus", description: "Become a certified agent and unlock special management bonuses for leading a successful team." },
    { icon: Youtube, title: "Youtube Videos", description: "Watch promotional YouTube videos and educational content to stack up your balance daily." },
    { icon: Gamepad2, title: "Online Games", description: "Play exciting casual games directly on our platform and get paid for your high scores." },
  ];

  return (
    <section className="py-20 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4">How MulaStar works</h2>
          <p className="text-slate-500 max-w-3xl mx-auto">MulaStar is an online earning platform that allows users to make money through multiple activities on its dashboard. After registering and activating an account, users can access features such as free spins and bet spins for reward opportunities, get paid to click short ads, watch videos from platforms like TikTok and YouTube, play online games, and write blog articles on trending topics. Members can also earn commissions by referring others, receive a welcome bonus based on their registration fee, and compete for top winner rewards. In addition to earning features, MulaStar offers beginner-friendly forex classes and allows users to watch social media reels for additional income opportunities, all within one integrated platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard 
              key={i} 
              icon={f.icon} 
              title={f.title} 
              description={f.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BonusForex = () => (
  <section className="py-20 bg-primary/5 px-4">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-primary/20 shadow-xl shadow-primary/5">
        <h3 className="text-2xl font-black mb-4">Welcome Bonus</h3>
        <p className="text-slate-500 mb-6">New members are greeted with exclusive perks to kickstart their journey:</p>
        <ul className="space-y-4">
          {[
            "55% Bonus on your first earning milestone",
            "5 Free Spins immediately upon activation",
            "Free Instagram followers package"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500 w-5 h-5" />
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-primary text-white p-8 rounded-3xl shadow-xl shadow-primary/30 flex flex-col justify-center">
        <LineChart className="w-12 h-12 mb-4" />
        <h3 className="text-2xl font-black mb-4">Free Forex Classes</h3>
        <p className="text-primary-100 leading-relaxed">
          Gain financial literacy with our professional Forex classes. Designed for beginners, we teach you how to analyze markets, manage risks, and trade currencies effectively to build a sustainable secondary income stream.
        </p>
        <a 
          className="mt-8 bg-white text-primary font-bold py-3 px-6 rounded-xl self-start inline-block hover:bg-slate-100 transition-colors" 
          href="https://mulastar.com/register.php?ref=samkiliswa"
        >
          Enroll Now
        </a>
      </div>
    </div>
  </section>
);

const AppSection = () => (
  <section className="py-20 px-4" id="app">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black mb-4">MulaStar App – Turn Your Time Into Money</h2>
        <p className="text-slate-500">Download our mobile application for a smoother and faster earning experience.</p>
        <div className="mt-8 flex justify-center">
          <a 
            className="bg-primary text-white text-lg font-bold h-14 px-10 rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-3 hover:scale-105 transition-transform" 
            href="https://www.appcreator24.com/app3856918-i5xhm6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="w-6 h-6" />
            Download MulaStar App
          </a>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-xl font-bold mb-6">How to Install the MulaStar App</h3>
          <div className="space-y-6">
            {[
              "Visit the official MulaStar website on your mobile browser.",
              "Click on the \"Download App\" button located in the menu or footer.",
              "Allow installation from \"Unknown Sources\" in your phone settings if prompted.",
              "Open the downloaded APK file and click \"Install\".",
              "Launch the app and log in with your credentials.",
              "Enable notifications to never miss high-paying tasks."
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                <p className="text-slate-600 dark:text-slate-400">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-64 h-[500px] border-[8px] border-slate-900 rounded-[3rem] bg-slate-900 overflow-hidden shadow-2xl">
            <div className="absolute top-0 w-1/2 h-6 bg-slate-900 left-1/4 rounded-b-2xl z-10"></div>
            <img 
              alt="Professional mobile banking and earnings interface" 
              className="w-full h-full object-cover" 
              src="https://i.imghippo.com/files/cFDn6698GQ.jpg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Download className="text-white w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AuthInstructions = () => (
  <section className="py-20 bg-slate-50 dark:bg-slate-900/50 px-4">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-black mb-8">Login MulaStar | How to Login</h2>
        <div className="space-y-4">
          {[
            "Open the MulaStar app or website.",
            "Enter your registered username or email.",
            "Provide your secure password.",
            "Click \"Login\" to access your dashboard."
          ].map((step, i) => (
            <div key={i} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-primary mr-2">Step {i + 1}:</span> {step}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-xl shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all duration-200 active:scale-95" href="https://mulastar.com/register.php?ref=samkiliswa">
            Login MulaStar
            <LogIn className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-black mb-8">Register MulaStar Account | Sign up</h2>
        <div className="space-y-4">
          {[
            "Click the \"Sign Up\" button on the home page.",
            "Fill in your full name and valid email address.",
            "Select your country and enter your phone number.",
            "Create a strong password for your account.",
            "Agree to the Terms and Conditions.",
            "Click \"Register\" and verify your email."
          ].map((step, i) => (
            <div key={i} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-primary mr-2">{i + 1}.</span> {step}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-xl shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all duration-200 active:scale-95" href="https://mulastar.com/register.php?ref=samkiliswa" target="_blank">
            Register MulaStar
            <UserPlus className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Legitimacy = () => (
  <section className="py-20 px-4">
    <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl font-black mb-6">Is MulaStar Legit?</h2>
        <p className="text-lg leading-relaxed opacity-90">
          Yes, MulaStar is a legitimate platform that has paid out thousands of users globally. We maintain transparency through verified payment proofs, 24/7 customer support, and a secure infrastructure. Our revenue is generated through advertising partnerships and premium sponsorships, which we share with our active users. While earnings vary based on effort, we guarantee timely withdrawals and a fair reward system for all members.
        </p>
      </div>
      <div className="absolute -right-20 -bottom-20 size-80 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { name: "John Doe", role: "Freelancer", text: "MulaStar has been a game-changer for me. I earn enough during my commute to cover my monthly bills!" },
    { name: "Sarah Ahmed", role: "Student", text: "The registration was super easy. I got my welcome bonus immediately and started spinning!" },
    { name: "Michael Kwesi", role: "Digital Marketer", text: "The affiliate program is insane. My team is growing and the commissions are very generous." },
    { name: "Lisa Mutua", role: "Content Creator", text: "I love the TikTok video task. It's like being paid to entertain myself. Truly innovative." },
    { name: "David Bekele", role: "Entrepreneur", text: "Payments are always on time. I use M-Pesa to withdraw and it's almost instant." },
    { name: "Anita N.", role: "Retailer", text: "The Forex classes are very detailed. I knew nothing about trading and now I'm making profits." },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4">MulaStar Reviews | Hear From Our Happy Clients</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Join thousands of satisfied users who have changed their lives with MulaStar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700"
            >
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="italic text-slate-600 dark:text-slate-400 mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{r.name}</h4>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-xl shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all duration-200 active:scale-95" href="https://mulastar.com/register.php?ref=samkiliswa" target="_blank">
            Register MulaStar
            <UserPlus className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 cursor-pointer font-bold text-left"
      >
        {question}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 text-slate-600 dark:text-slate-400"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "How much can I earn daily?", answer: "Daily earnings depend on the amount of time you spend on the platform and the tasks you complete. Most active users earn between $5 to $50 daily." },
    { question: "Is there a registration fee?", answer: "Registration is absolutely free. However, some premium earning tiers may require a minimal activation fee to unlock higher-paying tasks." },
    { question: "How do I withdraw my money?", answer: "You can withdraw your earnings via Mobile Money (M-Pesa, etc.), Bank Transfer, or PayPal once you reach the minimum threshold." },
    { question: "Can I have multiple accounts?", answer: "No, to ensure platform integrity, we only allow one account per user. Multiple accounts will lead to permanent suspension." },
    { question: "What if I forget my password?", answer: "You can use the \"Forgot Password\" link on the login page to reset your password via your registered email." },
    { question: "Is MulaStar available worldwide?", answer: "Yes, MulaStar is accessible globally. However, specific tasks may vary based on your geographic location." },
    { question: "Do I need special skills?", answer: "No skills are required for basic tasks like watching videos or spinning wheels. For article writing, basic writing skills are needed." },
  ];

  return (
    <section className="py-20 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArticleItem = ({ title, content }: { title: string, content: string, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 cursor-pointer font-bold text-left"
      >
        {title}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6 text-slate-600 dark:text-slate-400"
          >
            <p className="mb-6">{content}</p>
            <a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-primary rounded-lg shadow-md shadow-primary/20 hover:opacity-90 transition-all" href="https://mulastar.com/register.php?ref=samkiliswa">
              Sign Up MulaStar
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Articles = () => {
  const articles = [
    { title: "MulaStar", content: "MulaStar is an online earning platform that allows users to make money by completing simple digital tasks and engaging in interactive activities. Members can earn through watching TikTok and YouTube videos, clicking ads, spinning reward wheels, writing blog articles, playing online games, and referring new users to the platform." },
    { title: "MulaStar App", content: "MulaStar App is a mobile earning application that allows users to turn their free time into income by completing simple digital tasks directly from their Android devices. Through the app, users can watch TikTok and YouTube videos, click ads, spin reward wheels, play online games, write blog articles, and earn referral commissions." },
    { title: "Mula Star", content: "Mula Star is an online earning platform designed to help users generate extra income by completing simple digital tasks and participating in engaging activities. The platform offers multiple earning opportunities, including watching short videos, clicking ads, spinning reward wheels, and more." },
    { title: "MulaStar Agency", content: "MulaStar Agency is the promotional and growth arm of the MulaStar platform, focused on expanding the community through referrals, partnerships, and digital marketing opportunities. It empowers active members to earn higher commissions by inviting new users." },
    { title: "Is MulaStar Legit", content: "MulaStar is a legitimate online earning platform that allows users to earn money by completing tasks such as watching videos, clicking ads, spinning reward wheels, playing games, writing blogs, and referring others. The platform operates transparently with clear features." },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 px-4" id="articles">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-12 text-center">MulaStar Articles</h2>
        <div className="space-y-4">
          {articles.map((art, i) => (
            <ArticleItem 
              key={i} 
              title={art.title} 
              content={art.content} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ActivationFees = () => {
  const fees = [
    { country: "Kenya", flag: "🇰🇪", fee: "KSH 500" },
    { country: "Tanzania", flag: "🇹🇿", fee: "TZS 11,000" },
    { country: "Uganda", flag: "🇺🇬", fee: "UGX 19,000" },
    { country: "Rwanda", flag: "🇷🇼", fee: "RWF 6,500" },
    { country: "Nigeria", flag: "🇳🇬", fee: "NGN 8,000" },
    { country: "Burundi", flag: "🇧🇮", fee: "BIF 26,000" },
    { country: "Zambia", flag: "🇿🇲", fee: "ZK 130" },
    { country: "Malawi", flag: "🇲🇼", fee: "MK 26,000" },
    { country: "Ivory Coast", flag: "🇮🇪", fee: "XOF 4,100" },
    { country: "Senegal", flag: "🇸🇳", fee: "XOF 4,100" },
    { country: "Botswana", flag: "🇧🇼", fee: "BWP 100" },
    { country: "South Africa", flag: "🇿🇦", fee: "ZAR 70" },
    { country: "Ghana", flag: "🇬🇭", fee: "GHC 90" },
    { country: "Cameroon", flag: "🇨🇲", fee: "XAF 4,100" },
    { country: "West Africa", flag: "🌍", fee: "XOF 4,100" },
    { country: "South Sudan", flag: "🇸🇸", fee: "SSP 20,000" },
    { country: "Others", flag: "🎌", fee: "USD 8" },
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-background-dark" id="activation-fees">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3 h-3" /> Global Availability
          </div>
          <h2 className="text-3xl font-black mb-4">💥 MULASTAR AGENCIES ACTIVATION FEES 💥</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            MulaStar is available in multiple countries across Africa and beyond. Check the activation fee for your region below.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {fees.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 flex flex-col items-center text-center gap-2 shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-4xl mb-1">{item.flag}</span>
              <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200">{item.country}</h3>
              <p className="text-primary font-black text-xs bg-primary/5 px-2 py-1 rounded-full">{item.fee}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Star className="text-primary w-6 h-6 fill-primary" />
          <span className="text-xl font-black text-primary tracking-tight">MulaStar</span>
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-500">
          <a className="hover:text-primary" href="#">Privacy Policy</a>
          <a className="hover:text-primary" href="#">Terms of Service</a>
          <a className="hover:text-primary" href="#">Contact Us</a>
        </div>
        <p className="text-slate-400 text-sm font-medium">© 2026 MulaStar. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const MobileNav = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50">
    <a className="flex flex-col items-center gap-1 text-primary" href="#">
      <Home className="w-6 h-6" />
      <span className="text-[10px] font-bold">Home</span>
    </a>
    <a className="flex flex-col items-center gap-1 text-slate-400" href="#features">
      <Wallet className="w-6 h-6" />
      <span className="text-[10px] font-bold">Earn</span>
    </a>
    <a className="flex flex-col items-center gap-1 text-slate-400" href="#app">
      <Smartphone className="w-6 h-6" />
      <span className="text-[10px] font-bold">App</span>
    </a>
    <a className="flex flex-col items-center gap-1 text-slate-400" href="#">
      <User className="w-6 h-6" />
      <span className="text-[10px] font-bold">Profile</span>
    </a>
  </div>
);

const WhatsAppButton = () => (
  <a 
    className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 md:bottom-10" 
    href="https://wa.me/254794634552?text=Hello,%20Am%20Interested" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <MessageCircle className="w-8 h-8" />
  </a>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Features />
        <BonusForex />
        <ActivationFees />
        <AppSection />
        <AuthInstructions />
        <Legitimacy />
        <Testimonials />
        <FAQ />
        <Articles />
      </main>
      <Footer />
      <MobileNav />
      <WhatsAppButton />
    </div>
  );
}
