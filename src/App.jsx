
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {useState} from 'react';
import { EXAMPLES } from './data.js'; 

function App() {

  const [selectedTopic, setSelectedtopic] = useState();
  function handleSelect(selectedButton)
  {
    setSelectedtopic(selectedButton);    
  }

  let tabContent = <p>Please click any tab</p>;
  if(selectedTopic)
  {
    tabContent = (
      <div id="tab-content">
    <h2>{EXAMPLES[selectedTopic].title}</h2>
    <p>
    {EXAMPLES[selectedTopic].description}
    </p>
    <pre>
      <code>
          {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>);
  }
  return (
    <div>
      <header>
        <p>Hello World!</p>
     </header>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} />))
            }
            
          </ul> 
        </section>  
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = {selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected = {selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected = {selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected = {selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
