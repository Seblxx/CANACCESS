import imgLogo from "../../assets/257a1909ff83c6e222cdfb626a1454a3b6d6beb2.png";
import { motion } from 'motion/react';

export function Stats() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-8">
        <motion.div 
          className="flex items-center justify-center gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Stat 1 */}
          <div className="text-left">
            <p className="text-[48px] font-bold text-[#d80621] leading-none mb-1">+10 ANS</p>
            <p className="text-[18px] text-black">D'EXPÉRIENCE</p>
          </div>

          {/* Divider */}
          <div className="text-[#d80621] text-[80px] font-light leading-none">/</div>

          {/* Stat 2 */}
          <div className="text-left">
            <p className="text-[48px] font-bold text-[#d80621] leading-none mb-1">1000</p>
            <p className="text-[18px] text-black">clients accompagnés</p>
          </div>

          {/* Divider */}
          <div className="text-[#d80621] text-[80px] font-light leading-none">/</div>

          {/* Logo */}
          <div>
            <img src={imgLogo} alt="Can Access" className="h-[80px] w-auto" />
          </div>

          {/* Divider */}
          <div className="text-[#d80621] text-[80px] font-light leading-none">/</div>

          {/* Message */}
          <div className="text-left">
            <p className="text-[18px] text-[#d80621] font-bold leading-tight">Ici pour vous aider</p>
            <p className="text-[18px] text-black font-bold leading-tight">quand vous en avez besoin</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}