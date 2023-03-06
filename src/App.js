import './App.css';
import TextForm from './TextForm_USeState';
import PropsDrilling from './components/PropsDrilling';
import useFetch from './components/hooks/useFetch';

function App() {
  const data = useFetch('https://jsonplaceholder.typicode.com/users');
  console.log('🚀 ~ file: App.js:8 ~ App ~ data:', data);

  return (
    <div className="App">
      <TextForm heading="Enter the text to analyze"></TextForm>
      <div className="propsdrilling-div">
        <PropsDrilling />
      </div>

      <div className="user">
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.name}</p>;
          })}
      </div>
    </div>
  );
}

export default App;
