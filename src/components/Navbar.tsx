
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import CommunityModal from '@/components/CommunityModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, TreePine, Users, Calendar, BarChart3, Vote } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navigation = [
    { name: t('home'), href: '/', icon: TreePine },
    { name: t('events'), href: '/events', icon: Calendar },
    { name: t('donate'), href: '/donate', icon: Users },
    { name: t('voting'), href: '/community-voting', icon: Vote },
    { name: t('impact'), href: '/dashboard', icon: BarChart3 },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b relative overflow-hidden">
      {/* Rajasthani Art Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='10' cy='10' r='3'/%3E%3Ccircle cx='50' cy='10' r='3'/%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3Ccircle cx='10' cy='50' r='3'/%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3Cpath d='M30 10 L35 20 L25 20 Z'/%3E%3Cpath d='M10 30 L15 40 L5 40 Z'/%3E%3Cpath d='M50 30 L55 40 L45 40 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-nature rounded-lg flex items-center justify-center relative">
                {/* Rajasthani Decorative Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-yellow-400/30"></div>
                <TreePine className="w-5 h-5 text-white relative z-10" />
              </div>
              <span className="font-bold text-xl text-foreground relative">
                {t('heroTitle')}
                {/* Small decorative element */}
                <div className="absolute -top-1 -right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground/70 hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                {/* Rajasthani-inspired underline */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
            <LanguageToggle />
            <ThemeToggle />
            <CommunityModal>
              <Button className="gradient-nature text-white hover:opacity-90 transition-opacity relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">{t('joinCommunity')}</span>
              </Button>
            </CommunityModal>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/70 hover:text-foreground focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t relative">
              {/* Mobile Rajasthani pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='10' r='2'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='10' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }}>
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 text-foreground/70 hover:text-primary block px-3 py-2 text-base font-medium transition-colors relative z-10"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="relative z-10 mt-2">
                <CommunityModal>
                  <Button className="w-full gradient-nature text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10">{t('joinCommunity')}</span>
                  </Button>
                </CommunityModal>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
