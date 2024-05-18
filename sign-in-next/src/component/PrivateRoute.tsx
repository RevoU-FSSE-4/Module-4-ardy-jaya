import { useRouter } from 'next/router';
import { useEffect, ReactNode } from 'react';
import { useProfile, Profile } from '../context/ProfileContext';

interface PrivateRouteProps {
  children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { email } = useProfile() as Profile; // Provide the Profile type to the useProfile hook
  const router = useRouter();

  useEffect(() => {
    if (email === "Anonymous User") {
      router.push('/signin');
    }
  }, [email]);

  if (email === "Anonymous User") {
    return null; // or a loading spinner
  }

  return <>{children}</>;
}

export default PrivateRoute;
