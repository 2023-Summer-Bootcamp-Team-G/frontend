import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useCheckAuth = (): boolean => {
  const location = useLocation();
  const [authState, setAuthState] = useState(false);
  const ls = JSON.parse(localStorage.getItem('user') || 'null');

  useEffect(() => {
    if (ls && ls.state && ls.state.userId) {
      // null 체크 추가
      setAuthState(true);
    } else {
      setAuthState(false);
    }
  }, [ls]);
  return authState;
};

export default useCheckAuth;
