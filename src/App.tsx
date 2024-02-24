import Providers from './Providers/Providers';
import Autocomplete from './components/Autocomplete/Autocomplete';
import ItsJustDuck from './components/ItsJustDuck/ItsJustDuck';

function App() {
  return (
    <Providers>
      <ItsJustDuck />
      {/* Change debounce to 0ms and test error handling*/}
      <Autocomplete
        options={{ length: 50, debounceDelayMS: 2000, minChars: 3 }}
      />
    </Providers>
  );
}

export default App;
