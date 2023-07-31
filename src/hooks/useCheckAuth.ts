import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useCheckAuth = (): boolean => {
  const location = useLocation();
  const [authState, setAuthState] = useState(false);
  const ls = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (ls && ls.state && ls.state.userId) {
      setAuthState(true);
    } else {
      setAuthState(false);
    }
  }, [location.pathname]);
  return authState;
};

export default useCheckAuth;
