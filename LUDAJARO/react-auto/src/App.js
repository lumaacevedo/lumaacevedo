import './App.css';
import {useAuth0} from '@auth0/auth0-react';

function App() {
  return (
    <div className="App">
      <h1>Application</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>      
    </div>
  );
}

export default App;
