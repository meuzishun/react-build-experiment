export default function Header() {
  return (
    <header className='header'>
      {console.log('Header rendering')}
      <h1>Welcome to the site!</h1>
      <nav>
        <span>Link 1</span>
        <span>Link 2</span>
        <span>Link 3</span>
      </nav>
    </header>
  );
}
