import nookies, { setCookie } from "nookies";

import { useEffect, useState } from "react";

export function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    const cookie = nookies.get();
    if (cookie.hasOwnProperty(key)) {
      return JSON.parse(cookie[key]);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    setCookie(null, key, JSON.stringify(state), {
      maxAge: 86400 * 7,
      path: "/",
    });
  }, [state, setState]);

  return [state, setState];
}
