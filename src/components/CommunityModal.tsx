
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import CommunityForm from './CommunityForm';
import { useLanguage } from '@/contexts/LanguageContext';

interface CommunityModalProps {
  children: React.ReactNode;
}

const CommunityModal = ({ children }: CommunityModalProps) => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-green-800">
            {t('joinCommunity')}
          </DialogTitle>
        </DialogHeader>
        <CommunityForm />
      </DialogContent>
    </Dialog>
  );
};

export default CommunityModal;
