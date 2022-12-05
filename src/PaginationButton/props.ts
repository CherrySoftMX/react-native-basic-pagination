import React from 'react';

export interface PaginationButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  isActive?: boolean;
}
