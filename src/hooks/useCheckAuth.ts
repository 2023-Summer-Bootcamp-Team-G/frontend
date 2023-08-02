import { useEffect, useState } from 'react';

const useCheckAuth = (): boolean => {
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

export const useCheckAuth2 = (): boolean => {
  const ls = JSON.parse(localStorage.getItem('user') || 'null');
  return ls && ls.state && ls.state.userId;
};
