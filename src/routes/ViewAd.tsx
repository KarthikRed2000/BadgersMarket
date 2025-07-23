import React from 'react';

const ViewAd: React.FC = () => {
    // Placeholder ad data
    const ad = {
        title: 'Sample Ad Title',
        description: 'This is a sample description for the ad.',
        price: '$100',
        seller: 'John Doe',
        postedDate: '2024-06-01',
        imageUrl: 'https://via.placeholder.com/400x300?text=Ad+Image',
    };

    return (
        <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }}>
            <img src={ad.imageUrl} alt={ad.title} style={{ width: '100%', borderRadius: 8 }} />
            <h2>{ad.title}</h2>
            <p>{ad.description}</p>
            <p><strong>Price:</strong> {ad.price}</p>
            <p><strong>Seller:</strong> {ad.seller}</p>
            <p><strong>Posted:</strong> {ad.postedDate}</p>
            <button style={{ marginTop: '1rem' }}>Contact Seller</button>
        </div>
    );
};

export default ViewAd;