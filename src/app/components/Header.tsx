import imgLogo from "../../assets/257a1909ff83c6e222cdfb626a1454a3b6d6beb2.png";
import { useState, useEffect } from "react";

export function Header() {
  const [hideRedBar, setHideRedBar] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [language, setLanguage] = useState<'FR' | 'EN'>('FR');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide red bar when scrolled past 500px
      setHideRedBar(currentScrollY > 500);
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Accueil', href: '#', active: true },
    { label: 'À propos', href: '#' },
    { label: 'Nouvelles', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Advertise', href: '#' }
  ];

  const menuItems = [
    { label: 'ÉVALUATION GRATUITE', color: '#d80621' },
    { label: 'IMMIGRATION', color: '#ff6666' },
    { label: 'TRAVAIL', color: '#66679a' },
    { label: 'PARRAINAGE', color: '#339898' },
    { label: 'ÉTUDES', color: '#659933' },
    { label: 'CITOYENNETÉ', color: '#ff6666' },
    { label: 'INADMISSIBILITÉ', color: '#cb9833' },
    { label: 'AIDE LÉGALE', color: '#cc6600' },
    { label: 'ENTREPRISE', color: '#040e5c' },
    { label: 'VIE AU CANADA', color: '#396477' }
  ];

  return (
    <header 
      className={`bg-white sticky top-0 z-50 shadow-sm transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Red top bar - hidden when scrolled past hero section */}
      <div 
        className={`h-[4px] bg-[#d80621] transition-opacity duration-300 ${hideRedBar ? 'opacity-0' : 'opacity-100'}`}
      ></div>
      
      {/* Top Navigation */}
      <div className="bg-white">
        <div className="max-w-[1920px] mx-auto px-8 py-2 pb-0">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="block transition-transform duration-300 hover:scale-105">
                <img src={imgLogo} alt="Can Access Immigration Firm" className="h-[100px] w-auto" />
              </a>
            </div>

            {/* Right Navigation */}
            <nav className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-[14px] hover:text-[#d80621] transition-colors ${
                    item.active ? 'text-[#d80621] font-semibold' : 'text-black'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button className="text-gray-400 hover:text-[#d80621] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="10" cy="10" r="7" />
                  <path d="m21 21-6-6" />
                </svg>
              </button>
              <div className="flex bg-gray-200 rounded-lg p-0.5 gap-0.5">
                <button 
                  onClick={() => setLanguage('FR')}
                  className={`px-3 py-1 rounded-md text-[13px] font-semibold transition-all duration-200 ${
                    language === 'FR' 
                      ? 'bg-[#d80621] text-white shadow-sm' 
                      : 'bg-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  FR
                </button>
                <button 
                  onClick={() => setLanguage('EN')}
                  className={`px-3 py-1 rounded-md text-[13px] font-semibold transition-all duration-200 ${
                    language === 'EN' 
                      ? 'bg-[#d80621] text-white shadow-sm' 
                      : 'bg-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  EN
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Menu - White background with colored underlines */}
      <div className="bg-white shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="flex items-center justify-center">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="px-4 py-3 text-[12px] font-semibold text-black whitespace-nowrap border-b-3 transition-all duration-200 hover:text-white"
                style={{ 
                  borderBottomWidth: '3px', 
                  borderBottomColor: item.color,
                  ['--hover-bg' as any]: item.color
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = item.color}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}