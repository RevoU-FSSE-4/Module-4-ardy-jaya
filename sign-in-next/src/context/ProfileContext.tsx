import { createContext, useState, useContext, ReactNode } from 'react';

export interface Profile {
  email: string;
  setEmail: (email: string) => void;
}

const ProfileContext = createContext<Profile | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState("Anonymous User");

  const changeUserProfile = (email: string) => {
    setEmail(email);
  };

  return (
    <ProfileContext.Provider value={{ email, setEmail: changeUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
