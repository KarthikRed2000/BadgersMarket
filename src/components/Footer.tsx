import React from 'react';

const Footer: React.FC = () => (
    <footer className='footer' style={{
        background: '#222',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem 0',
        position: 'relative',
        width: '100%',
    }}>
        <span>&copy; {new Date().getFullYear()} Buy &amp; Sell. All rights reserved.</span>
    </footer>
);

export default Footer;