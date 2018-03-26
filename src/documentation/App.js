import React from 'react';
import Docs from '../components/Docs/Docs';
import Fetcher from '../components/Fetcher/Fetcher';

const App = () => {
  return (
    <Docs>
      <aside>
        <nav>
          <li>Component 1</li>
          <li>Component 2</li>
          <li>Component 3</li>
          <li>Component 4</li>
          <li>Component 5</li>
        </nav>
      </aside>

      <main>
        <section className="examples">
          <Fetcher
            url="https://api.github.com/users/davidrayoussef"
            render={({ name, avatar_url, location, html_url }) => (
              <div>
                <div>{name}</div>
                <div><img src={avatar_url} alt={name} style={{height: 100}}/></div>
                <div>{location}</div>
                <div><a href={html_url}>{html_url}</a></div>
              </div>
            )}
          />
        </section>
        <section className="editor">

        </section>
      </main>
    </Docs>
  );
};

export default App;
