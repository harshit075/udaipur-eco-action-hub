import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { toast } from 'sonner';
import { Menu, X, TreePine, Users, Calendar, BarChart3, Vote, LogOut, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const location = useLocation();
  const onJoinPage = location.pathname === '/join';

  const navigation = [
    { name: t('home'), href: '/', icon: TreePine },
    { name: t('events'), href: '/events', icon: Calendar },
    { name: t('donate'), href: '/donate', icon: Users },
    { name: t('voting'), href: '/community-voting', icon: Vote },
    { name: t('impact'), href: '/dashboard', icon: BarChart3 },
  ];

  const handleLogout = async () => {
    setIsOpen(false);
    await signOut(auth);
    toast.success('You have been logged out.');
    navigate('/');
  };

  const handleJoin = () => {
    setIsOpen(false);
    navigate('/join');
  };
  
  const getUserInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    const nameParts = name.split(' ');
    return nameParts.length > 1 ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase() : name[0].toUpperCase();
  };

  // The UserMenu dropdown component is now gone.

  return (
    <nav className="bg-background/85 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <TreePine className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">
              {t('heroTitle')}
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) => 
                  `font-medium transition-colors text-sm relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100 ${
                    isActive ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          
          {/* === USER BUTTON LOGIC - SIMPLIFIED === */}
          <div className="hidden md:flex items-center space-x-2">
            {!onJoinPage && (
              <>
                <LanguageToggle />
                <ThemeToggle />
              </>
            )}
            {!onJoinPage && (
              currentUser ? (
                // This is now a simple button that calls handleLogout directly
                <Button variant="ghost" className="h-10 w-auto space-x-2 px-3" onClick={handleLogout}>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUser?.photoURL || ''} alt={currentUser?.displayName || 'User'} />
                    <AvatarFallback>{getUserInitials(currentUser?.displayName)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-semibold">Logout</span>
                  <LogOut className="h-4 w-4 text-muted-foreground" />
                </Button>
              ) : (
                <Button onClick={handleJoin}>
                  <UserPlus className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              )
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground/70 hover:text-foreground focus:outline-none p-2 rounded-md" aria-label="Toggle mobile menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION --- */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-2 pt-3 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.href} className={({ isActive }) => `flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${ isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-muted'}`} onClick={() => setIsOpen(false)}>
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-border px-2 space-y-3">
             <div className="flex items-center justify-between">
                <span className="px-3 text-sm font-medium text-muted-foreground">Appearance</span>
                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
             </div>
             {!onJoinPage && (
                currentUser ? (
                    <Button variant="secondary" onClick={handleLogout} className="w-full justify-start text-base">
                       <LogOut className="w-5 h-5 mr-3" /> Logout
                    </Button>
                 ) : (
                   <Button onClick={handleJoin} className="w-full justify-start text-base">
                       <UserPlus className="w-5 h-5 mr-3" /> Join Community
                   </Button>
                 )
             )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;