import { motion } from 'motion/react';
import { ClipboardList, Search, Users, MessageSquare, CheckCircle } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'ÉVALUATION GRATUITE',
      description: 'Remplissez notre formulaire rapide'
    },
    {
      icon: Search,
      title: 'ANALYSE PERSONNALISÉE',
      description: 'Nos experts étudient votre dossier'
    },
    {
      icon: Users,
      title: 'ACCOMPAGNEMENT COMPLET',
      description: 'Nous vous guidons jusqu\'au succès'
    },
    {
      icon: MessageSquare,
      title: 'SUIVI PERSONNALISÉ',
      description: 'Assistance tout au long du processus'
    },
    {
      icon: CheckCircle,
      title: 'RÉSULTAT FINAL',
      description: 'Immigration réussie et installation au Canada'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="text-[42px] font-normal text-black mb-4 tracking-wide">
            CINQ ÉTAPES SIMPLES POUR DÉMARRER
          </h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                className="text-center"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* Icon */}
                <motion.div 
                  className="mb-6 flex justify-center"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-24 h-24 flex items-center justify-center">
                    <Icon className="w-20 h-20 text-[#d80621]" strokeWidth={1.5} />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-[16px] font-bold text-black mb-3 uppercase tracking-wide">{step.title}</h3>
                
                {/* Description */}
                <p className="text-[14px] text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}