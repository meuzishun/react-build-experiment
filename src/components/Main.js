import User from './User';

export default function Main() {
  return (
    <main className='main'>
      {console.log('Main rendering')}
      <h2>This is the main content</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        maxime similique vel magnam eaque tenetur necessitatibus excepturi aut
        repellendus consequuntur!
      </p>
      <User />
    </main>
  );
}
