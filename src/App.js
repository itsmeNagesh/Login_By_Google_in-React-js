
import './App.css';
import OAuth2Login from 'react-simple-oauth2-login';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

function App() {
  return (
    <div className="App">
      <OAuth2Login
    authorizationUrl="https://accounts.spotify.com/authorize"
    responseType="token"
    clientId="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"
    redirectUri="http://localhost:3000"
    onSuccess={onSuccess}
    onFailure={onFailure}/>
    </div>
  );
}

export default App;
