import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ArticleList, ArticleListComp } from './ArticleList';
import { articleData } from './data/articles';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <ArticleList articles={articleData}></ArticleList>

      <ArticleListComp articles={articleData}></ArticleListComp>
    </div>
  );
}

export default App;
