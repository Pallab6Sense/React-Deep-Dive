import './App.css';
import TextForm from './TextForm_USeState';
import PropsDrilling from './components/PropsDrilling';

function App() {
  return (
    <div className="App">
      <TextForm heading='Enter the text to analyze'></TextForm>
      <div className="">
      <PropsDrilling/>
      </div>
    </div>
  );
}

export default App;
