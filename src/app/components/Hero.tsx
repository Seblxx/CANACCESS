import { motion } from 'motion/react';
import canadaVideo from '../../assets/canada (1).mp4';

export function Hero() {
  return (
    <section className="relative h-[666px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={canadaVideo} type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-12 max-w-[1920px] mx-auto">
        <div className="max-w-2xl">
          <motion.h1 
            className="text-[60px] leading-tight text-white mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-semibold">Votre aventure au</span>
            <br />
            <span className="font-bold text-[#d80621]">Canada</span>
            <span className="font-semibold"> commence ici</span>
          </motion.h1>
          
          <motion.p 
            className="text-[30px] text-white mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Évaluation gratuite pour immigrer, travailler, étudier ou vivre au Canada
          </motion.p>

          <motion.button 
            className="bg-[#d80621] text-white px-8 py-3 rounded-md text-[18px] hover:bg-[#b00518] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ÉVALUATION GRATUITE
          </motion.button>
        </div>
      </div>
    </section>
  );
}
