'use client'
import { SessionProvider } from "next-auth/react";


const SessionWrapper = ({ children }) => {
  // const {} = use
  
  return <SessionProvider>
    {children}
    </SessionProvider>;
};

export default SessionWrapper;
