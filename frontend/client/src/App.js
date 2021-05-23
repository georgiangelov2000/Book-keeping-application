import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateBook from './components/Books/CreateBook/CreateBook';
import GetBooks from './components/Books/GetBooks/GetBooks';
import Header from './components/Header/Header';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={GetBooks} />
        <Route path="/create-book" component={CreateBook} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
