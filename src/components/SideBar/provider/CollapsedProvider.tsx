import React, { useMemo, useState } from 'react';
import { CollapsedContext } from '../context/Collapsed.context';

interface CollapsedProviderProps {
    children: React.ReactNode
}

export const CollapsedProvider = ({ children }: CollapsedProviderProps) => {

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const updateCollapsed = (status: boolean) => {
    setCollapsed(status);
  };

  const contextValue = useMemo(() => ({
    collapsed,
    updateCollapsed
  }), [collapsed]);

  return (
    <CollapsedContext.Provider value={contextValue}>
      {children}
    </CollapsedContext.Provider>
  );
};
