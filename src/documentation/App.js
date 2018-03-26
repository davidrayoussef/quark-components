import React from 'react';
import Docs from '../components/Docs/Docs';
import Fetcher from '../components/Fetcher/Fetcher';
import List from '../components/List/List';
import componentList from './data.js';

const App = () => {
  return (
    <Docs>
      <aside>
        <nav>
          <List title="Components" data={componentList} />
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
