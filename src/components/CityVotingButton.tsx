
import React from 'react';
import { Button } from '@/components/ui/button';
import { Vote, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const CityVotingButton = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleVoteClick = () => {
    navigate('/community-voting');
  };

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
      <div className="relative backdrop-blur-xl bg-white/15 border-2 border-white/25 rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-500 hover:scale-105 shadow-2xl">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-green-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
            <Vote className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{t('voteForProject')}</h3>
        <p className="text-gray-200 mb-6 text-lg leading-relaxed">
          {t('voteForProjectDesc')}
        </p>
        <Button 
          onClick={handleVoteClick}
          className="bg-white/20 hover:bg-blue-500 text-white border-2 border-white/30 hover:border-blue-500 rounded-full backdrop-blur-sm w-full group-hover:scale-105 transition-all duration-300 py-3 text-lg font-semibold"
        >
          {t('projectVoting')}
          <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default CityVotingButton;
