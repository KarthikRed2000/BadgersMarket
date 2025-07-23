// context/AuthContext.jsx
import { createContext, useEffect, useState, useContext } from 'react';
import { supabase } from '../services/supabaseClient'; // your supabase client
import type { Session } from '@supabase/supabase-js';

const AuthContext = createContext<{ session: any } | undefined>(undefined);

import type { ReactNode } from 'react';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            }
        );
        return () => listener.subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ session }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
