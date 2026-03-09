import imgLogo from "../../assets/257a1909ff83c6e222cdfb626a1454a3b6d6beb2.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import linkedinIcon from "../../assets/linkedin.png";

export function Footer() {
  const navigationLinks = [
    'Accueil', 'À propos', 'Nouvelles', 'Contact'
  ];

  const serviceLinks = [
    'Évaluation gratuite', 
    'Immigration permanente', 
    'Permis de travail', 
    'Parrainage familial', 
    'Permis d\'études', 
    'Citoyenneté canadienne'
  ];

  const companyLinks = [
    'À propos de nous',
    'Politique de confidentialité', 
    'Conditions d\'utilisation', 
    'FAQ'
  ];

  return (
    <footer className="bg-white text-[#d80621] border-t border-gray-200">
      <div className="max-w-[1920px] mx-auto px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Social Media */}
          <div>
            <img src={imgLogo} alt="Can Access" className="h-[70px] w-auto mb-6" />
            <p className="text-[15px] mb-6 text-gray-600">
              Votre passerelle vers le Canada
            </p>
            
            <h3 className="text-[16px] font-bold mb-4">SUIVEZ-NOUS</h3>
            <div className="flex gap-3 mb-8">
              <a href="#" className="w-10 h-10 bg-[#d80621] rounded-full flex items-center justify-center hover:bg-[#b00518] transition-colors">
                <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#d80621] rounded-full flex items-center justify-center hover:bg-[#b00518] transition-colors">
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 object-contain" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#d80621] rounded-full flex items-center justify-center hover:bg-[#b00518] transition-colors">
                <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
            </div>

            <div className="flex flex-col gap-2">
              {companyLinks.map((link, index) => (
                <a key={index} href="#" className="text-[13px] text-gray-600 hover:text-[#d80621] transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[16px] font-bold mb-4">NAVIGATION</h3>
            <div className="flex flex-col gap-3">
              {navigationLinks.map((link, index) => (
                <a key={index} href="#" className="text-[15px] text-gray-700 hover:text-[#d80621] transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[16px] font-bold mb-4">NOS SERVICES</h3>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link, index) => (
                <a key={index} href="#" className="text-[15px] text-gray-700 hover:text-[#d80621] transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-[16px] font-bold mb-4">CONTACTEZ-NOUS</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-[15px] font-semibold mb-1">Ottawa</p>
                <p className="text-[14px] text-gray-700">343 Preston St, 11th Floor</p>
                <p className="text-[14px] text-gray-700 mb-2">Ottawa, ON K1S 1N4</p>
                <p className="text-[14px] text-gray-700">1-800-555-5555</p>
              </div>

              <div>
                <p className="text-[15px] font-semibold mb-1">Montréal</p>
                <p className="text-[14px] text-gray-700">1200 McGill College Ave</p>
                <p className="text-[14px] text-gray-700 mb-2">Montréal, QC H3B 4G7</p>
                <p className="text-[14px] text-gray-700">1-800-555-5555</p>
              </div>

              <p className="text-[14px] text-gray-700">info@canacces.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-[13px] text-center text-gray-600">
            © 2026 Can Access Immigration Inc. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}