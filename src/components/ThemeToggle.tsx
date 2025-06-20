
import React from 'react';
import { Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="w-9 h-9 p-0 cursor-default"
      disabled
    >
      <Moon className="h-4 w-4" />
      <span className="sr-only">Dark mode enabled</span>
    </Button>
  );
}
