import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface InspectionPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const InspectionPopupContext = createContext<InspectionPopupContextType | null>(null);

export function InspectionPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  return (
    <InspectionPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </InspectionPopupContext.Provider>
  );
}

export function useInspectionPopup() {
  const ctx = useContext(InspectionPopupContext);
  if (!ctx) throw new Error('useInspectionPopup must be used within InspectionPopupProvider');
  return ctx;
}
