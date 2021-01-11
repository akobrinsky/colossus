import algoliasearch from 'algoliasearch';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import { showData } from './westworld';
import Episodes from './Containers/Episodes';
function App() {
  const searchClient = algoliasearch(
    'SDFI1C6F8Z',
    '8470db6c6a802b196dcb58da38d35ee3'
  );

  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          component={() => (
            <Episodes data={showData} searchClient={searchClient} />
          )}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
