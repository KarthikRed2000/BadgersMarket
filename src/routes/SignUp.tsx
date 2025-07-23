import { useState } from 'react'
import { supabase } from '../services/supabaseClient'

interface SignUpProps {
  toggle: () => void,
  toggleAlert: () => void
}

export default function SignUp({ toggle, toggleAlert }: SignUpProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [name, setName] = useState('')

  const handleSignUp = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        console.error(error);
        return;
      }
      if (data.user) {
        const { error: insertError } = await supabase.from('users').insert([
          {
            id: data.user.id,
            email,
            username: name,
            contact_number: contactNumber,
          },
        ]);
        if (insertError) {
          console.error(insertError);
        } else {
          toggle();
          toggleAlert();
        }
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  }
  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '100%' }}
            placeholder="Email"
          />
          {email && !email.endsWith('@wisc.edu') && (
            <div style={{ color: 'red', fontSize: '0.9rem' }}>
              Please use only your wisc.edu email address.
            </div>
          )}
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
            placeholder="Password"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{ width: '100%' }}
            placeholder="Name"
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={e => setContactNumber(e.target.value)}
            required
            style={{ width: '100%' }}
            placeholder="Contact Number"
          />
        </div>
        <button type="submit" style={{ width: '100%' }}>
          Sign Up
        </button>
      </form>
    </div>
  )
}
