import React from 'react';

import './App.scss';

function App() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6399666c87mshd5fca0615f5dad7p15e8c6jsn554f4e03b481',
      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    }
  };

  fetch('https://youtube-search-results.p.rapidapi.com/youtube-search/?q=justin%2Btimberlake', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  async function searchYouTube(q: any) {
    q = encodeURIComponent(q);
    const response = await fetch('https://youtube-search-results.p.rapidapi.com/youtube-search/?q=' + q, {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com',
        'x-rapidapi-key': '6399666c87mshd5fca0615f5dad7p15e8c6jsn554f4e03b481'
      }
    });
    const body = await response.json();
    console.log(body);
    return body.items.filter((item: any) => item.type === 'video');
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
