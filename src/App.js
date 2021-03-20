import './App.css';
import Seperator from '../src/components/Seperator'
import Square from '../src/components/Square'
function App() {
  return (
    <div className="App">
      <Seperator />
      <nav class="top_nav"><p class="logo_cocktail">COCKTAIL</p></nav>
      <Seperator />
      <Square />
    </div>
  );
}

export default App;
