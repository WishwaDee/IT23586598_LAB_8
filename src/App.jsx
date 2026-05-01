import Greeting from './components/Greeting';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-content">
        <Greeting />
      </div>
    </div>
  );
}

export default App;
