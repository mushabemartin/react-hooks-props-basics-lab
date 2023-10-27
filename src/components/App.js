import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

function App() {
  const user = {
    name: 'Your Name',
    city: 'Your City',
    bio: 'Your bio goes here',
    github: 'https://github.com/yourgithub',
    linkedin: 'https://www.linkedin.com/in/yourlinkedin',
  };

  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
