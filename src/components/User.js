import { useState, useEffect } from 'react';

export default function User() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const randUser = data[Math.floor(Math.random() * 10)];
    setUser(randUser);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className='user'>
      {console.log('User rendering')}
      <button onClick={getUser}>Get User</button>
      <div className='user-details'>
        <p className='name'>
          <span>Name: </span>
          {user.name}
        </p>
        <p className='username'>
          <span>Username: </span>
          {user.username}
        </p>
        <p className='email'>
          <span>Email: </span>
          {user.email}
        </p>
        <p className='website'>
          <span>Website: </span>
          {user.website}
        </p>
      </div>
    </div>
  );
}
