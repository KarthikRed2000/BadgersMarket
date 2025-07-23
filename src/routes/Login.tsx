import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';

interface LoginProps {
    toggle: () => void;
}

const Login: React.FC<LoginProps> = ({ toggle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<Error | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (data.user) {
            console.log('Login successful:', data);
            toggle();
        }
        if (error) {
            setError(error);
            console.error('Login error:', error);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
            {error && (
                <div style={{ color: 'red', marginBottom: '1rem' }}>
                    Login failed: {error.message}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        style={{ width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={{ width: '100%' }}
                    />
                </div>
                <button type="submit" style={{ width: '100%' }}>Login</button>
            </form>
        </div>
    );
};

export default Login;