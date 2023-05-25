import React, { useState } from 'react';

export default function RegistrationForm() {
  const [form, setForm] = useState({
    firstName: 'Luke',
    lastName: 'Jones',
    email: 'LukeJones@sculpture.com',
  });

  return (
    <>
      <label>
        First Name:{' '}
        <input type="text" name="firstName" id="firstName" value={form.firstName} onChange={e => { setForm({...form, firstName: e.target.value}); }} />
      </label><br />
      <label>
        Last Name: {' '}
        <input type="text" name="lastName" id="lastName" value={form.lastName} onChange={e => { setForm({...form, lastName: e.target.value}); }} />
      </label><br />
      <label>
        Email: {' '}
        <input type="email" name="email" id="email" value={form.email} onChange={e => { setForm({...form, email: e.target.value}); }} />
      </label><br /><br />
      <p>
        {form.firstName}{' '}
        {form.lastName}<br />
        {form.email}
      </p>
    </>
  )
}
