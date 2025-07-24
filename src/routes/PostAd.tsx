import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const PostAd: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        // e.g., send data to API
        console.log({ title, description, price, image });
    };

    return (
        <div className="container screen p-5">
            <h2 className='text-center'>Post an Ad</h2>
            <div className='row' style={{ minHeight: 'max-content' }}>
                <div className='col-md-5 offset-md-1' style={{ padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                    <Form>
                        <FormGroup>
                            <Label for='title'><b>Title</b></Label>
                            <Input
                                type='text'
                                id='title'
                                value={title}
                                placeholder='Enter listing title'
                                onChange={e => setTitle(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='description'><b>Description</b></Label>
                            <Input
                                type='textarea'
                                id='description'
                                value={description}
                                placeholder='Enter listing description'
                                onChange={e => setDescription(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='price'><b>Price</b></Label>
                            <Input
                                type='number'
                                id='price'
                                value={price}
                                placeholder='Enter listing price'
                                onChange={e => setPrice(e.target.value)}
                                required
                                min='0'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='image'><b>Image</b></Label>
                            <Input
                                type='file'
                                id='image'
                                accept='image/*'
                                onChange={e => setImage(e.target.files?.[0] || null)}
                            />
                        </FormGroup>
                        <Button onClick={handleSubmit} type='submit'>Post Ad</Button>
                    </Form>
                </div>
                <div className='col-md-5 offset-md-1' style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <h5>Preview:</h5>
                    <h4>{title || 'Ad Title'}</h4>
                    <img
                        src={image ? URL.createObjectURL(image) : '/images/placeholder.png'}
                        alt='Ad Preview'
                        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginTop: '1rem', border: '1px solid #ddd' }}
                    />
                    <p>{description || 'Ad Description'}</p>
                    <p><strong>Price:</strong> {price ? `$${price}` : 'N/A'}</p>
                    <p><strong>Seller:</strong> Your Name</p>
                    <p><strong>Posted:</strong> {new Date().toLocaleDateString()}</p>
                    <Button color='primary' style={{ marginTop: '1rem' }}>Contact Seller</Button>
                </div>
            </div>
        </div>
    );
};

export default PostAd;