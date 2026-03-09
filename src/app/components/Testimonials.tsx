import { motion } from 'motion/react';
import canadaFlag from '../../assets/canadaskyflagII.mp4';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Résidente permanente',
      rating: 5,
      text: 'Can Access m\'a accompagnée tout au long de mon processus d\'immigration. Leur professionnalisme et leur expertise ont fait toute la différence.'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Permis de travail',
      rating: 5,
      text: 'Service exceptionnel ! L\'équipe a répondu à toutes mes questions et a facilité mon installation au Canada.'
    },
    {
      name: 'Sophie Martin',
      role: 'Citoyenneté canadienne',
      rating: 5,
      text: 'Grâce à Can Access, j\'ai obtenu ma citoyenneté canadienne rapidement. Je recommande vivement leurs services.'
    },
    {
      name: 'Jean-Pierre Lefebvre',
      role: 'Entrepreneur',
      rating: 5,
      text: 'L\'équipe m\'a guidé dans mon projet d\'immigration d\'affaires. Leur connaissance des programmes pour entrepreneurs est impressionnante.'
    },
    {
      name: 'Aisha Mohammed',
      role: 'Réunification familiale',
      rating: 5,
      text: 'Mon rêve de rejoindre ma famille au Canada est devenu réalité grâce à Can Access. Un service personnalisé et humain.'
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Permis d\'études',
      rating: 5,
      text: 'Excellente assistance pour mon permis d\'études. L\'équipe a simplifié toutes les démarches administratives complexes.'
    },
    {
      name: 'Yuki Tanaka',
      role: 'Travailleur qualifié',
      rating: 5,
      text: 'Processus fluide et transparent. Can Access a su me conseiller sur le meilleur programme pour mon profil professionnel.'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={canadaFlag} type="video/mp4" />
        </video>
        {/* White overlay for 90% video opacity */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[50px] font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Ce que nos <span className="text-white">clients</span> disent
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6" style={{ animation: 'scroll 40s linear infinite' }}>
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_400px] min-w-0 bg-white p-8 rounded-lg shadow-md"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#d80621] text-[24px]">★</span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[18px] text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="border-t pt-4">
                    <p className="text-[20px] font-bold text-black">{testimonial.name}</p>
                    <p className="text-[16px] text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
