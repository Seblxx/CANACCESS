import { Users, Briefcase, Heart, CheckCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import canadaSkyFlag from '../../assets/canadaskyflag.mp4';

export function Services() {
  const services = [
    {
      icon: Users,
      title: 'Immigrate to Canada',
      titleFr: 'Immigration permanente',
      description: 'Make your goal of moving to Canada a reality by exploring over 100 available ways to immigrate.',
      descriptionFr: 'Programmes fédéraux et provinciaux pour votre résidence permanente',
      buttonText: 'MES OPTIONS',
      buttonColor: 'bg-[#d80621]'
    },
    {
      icon: Briefcase,
      title: 'Canadian Work Permits',
      titleFr: 'Permis de travail',
      description: 'Find out if you need a Canadian temporary work permit to work in Canada and how to obtain one.',
      descriptionFr: 'Accompagnement complet pour vos projets professionnels',
      buttonText: 'PERMIS DE TRAVAIL',
      buttonColor: 'bg-[#002147]'
    },
    {
      icon: Heart,
      title: 'Family Sponsorship',
      titleFr: 'Parrainage familial',
      description: 'Find ways to bring your family members from abroad to live in Canada as permanent residents.',
      descriptionFr: 'Réunification familiale et accompagnement personnalisé',
      buttonText: 'PARRAINAGE',
      buttonColor: 'bg-[#002147]'
    },
    {
      icon: CheckCircle,
      title: 'Citoyenneté et démarches légales',
      titleFr: 'Citoyenneté',
      description: 'Make your own goal of moving to Canada a reality by exploring over 100 available ways to immigrate.',
      descriptionFr: 'Support juridique pour vos démarches administratives',
      buttonText: 'DÉMARCHES LÉGALES',
      buttonColor: 'bg-[#d80621]'
    },
    {
      icon: TrendingUp,
      title: 'Immigration entrepreneuriale et investissement',
      titleFr: 'Immigration entrepreneuriale',
      description: 'Make your own goal of moving to Canada a reality by exploring over 100 available ways to immigrate.',
      descriptionFr: 'Solutions pour entrepreneurs et investisseurs',
      buttonText: 'IMMIGRATION',
      buttonColor: 'bg-[#002147]'
    },
    {
      icon: 'calendar',
      title: 'Consultation gratuite',
      titleFr: 'Consultation gratuite',
      description: 'Réservez un rendez-vous avec nos experts',
      descriptionFr: 'Réservez un rendez-vous avec nos experts',
      buttonText: 'PRENDRE UN RENDEZ-VOUS',
      buttonColor: 'bg-[#d80621]'
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
          <source src={canadaSkyFlag} type="video/mp4" />
        </video>
        {/* White overlay to maintain readability */}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[26px] text-white mb-0 max-w-4xl leading-relaxed mx-auto" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-white font-bold">Can Accès</span> vous accompagne à chaque étape de votre projet d'immigration. Nos experts vous guident pour :
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 flex items-center justify-center">
                    {typeof Icon === 'string' && Icon === 'calendar' ? (
                      <svg className="w-16 h-16 text-[#d80621]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    ) : (
                      <Icon className="w-16 h-16 text-[#d80621]" strokeWidth={1.5} />
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[20px] font-bold text-black mb-4">{service.titleFr}</h3>
                
                {/* Description */}
                <p className="text-[15px] text-gray-600 mb-6 leading-relaxed">{service.descriptionFr}</p>

                {/* Button */}
                <button className={`${service.buttonColor} text-white px-6 py-3 rounded-full text-[14px] font-semibold hover:opacity-90 transition-opacity`}>
                  {service.buttonText}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}