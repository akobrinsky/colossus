import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";
import AlgoliaSearch from "./Components/AlgoliaSearch";
import "./App.scss";
import { showData } from "./westworld";
import Episodes from "./Containers/Episodes";
function App() {
  const searchClient = algoliasearch(
    "SDFI1C6F8Z",
    "8470db6c6a802b196dcb58da38d35ee3"
  );

  return (
    <div className="App">
      <div className="container">
        <AlgoliaSearch searchClient={searchClient} />
        <Episodes data={showData} />
      </div>
    </div>
  );
}

export default App;
