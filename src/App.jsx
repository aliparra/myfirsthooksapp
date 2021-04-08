import './App.css';
import NavMenu from './components/NavMenu/NavMenu';


function App() {
  return (
    <div className="App">
      <NavMenu/>
      <h1 className='mt-5'>My first app with react hooks</h1>
      <button type="button" className="btn btn-primary">Primary</button>
    </div>
  );
}

export default App;
