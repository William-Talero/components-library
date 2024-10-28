import { createContext } from 'react';


interface CollapsedContextType {
    collapsed: boolean;
    updateCollapsed: (status: boolean) => void;
}


export const CollapsedContext = createContext<CollapsedContextType>({
  collapsed: false,
  updateCollapsed: () => { }
});

