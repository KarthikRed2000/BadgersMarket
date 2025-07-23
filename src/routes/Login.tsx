import React, { useRef, useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { hCaptchaSiteKey } from '../constants/EnvKeys';
import HCaptcha from '@hcaptcha/react-hcaptcha';

interface LoginProps {
    toggle: () => void;
}

const Login: React.FC<LoginProps> = ({ toggle }) => {
    const siteKey = hCaptchaSiteKey
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<Error | null>(null);
    const [captchaToken, setCaptchaToken] = useState<string | undefined>();
    const captcha = useRef<HCaptcha>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
            options: { captchaToken }
        });
        if (data.user) {
            toggle();
        }
        if (error) {
            setError(error);
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
                <HCaptcha 
                ref={captcha}
                sitekey={siteKey} 
                onVerify={token => setCaptchaToken(token)} />
                <button type="submit" style={{ width: '100%' }}>Login</button>
            </form>
        </div>
    );
};

export default Login;