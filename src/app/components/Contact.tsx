import { motion } from 'motion/react';
import nightCanada from '../../assets/VANCOUVER.jpg';

export function Contact() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Image/Gradient (Full Height) */}
        <motion.div 
          className="relative min-h-[650px] overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={nightCanada} 
            alt="Night Canada" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#d80621]/20" />
          <div className="relative z-10 h-full flex items-center justify-center p-12">
            <div className="text-white text-center">
              <h3 className="text-[40px] font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Prêt à démarrer ?</h3>
              <p className="text-[20px]" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Contactez-nous dès aujourd'hui pour une évaluation gratuite</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          className="px-12 py-12 min-h-[650px] flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[45px] font-bold leading-tight mb-6">
            <span className="text-[#003d6b]">CONTACTEZ-NOUS</span> <span className="text-[#d80621]">DÈS MAINTENANT</span>
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-[16px] text-gray-600 mb-3">NOM COMPLET *</label>
              <input 
                type="text" 
                className="w-full border-b-2 border-gray-300 pb-3 focus:border-[#d80621] outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="block text-[16px] text-gray-600 mb-3">COURRIEL *</label>
              <input 
                type="email" 
                className="w-full border-b-2 border-gray-300 pb-3 focus:border-[#d80621] outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="block text-[16px] text-gray-600 mb-3">TÉLÉPHONE *</label>
              <input 
                type="tel" 
                className="w-full border-b-2 border-gray-300 pb-3 focus:border-[#d80621] outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="block text-[16px] text-gray-600 mb-3">OBJET *</label>
              <input 
                type="text" 
                className="w-full border-b-2 border-gray-300 pb-3 focus:border-[#d80621] outline-none text-[16px]"
              />
            </div>

            <div>
              <label className="block text-[16px] text-gray-600 mb-3">VOTRE MESSAGE ...</label>
              <textarea 
                rows={4}
                className="w-full border-b-2 border-gray-300 pb-3 focus:border-[#d80621] outline-none text-[16px] resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-[#d80621] text-white py-4 rounded-md text-[16px] font-semibold hover:bg-[#b00518] transition-colors text-center"
            >
              SOUMETTRE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
