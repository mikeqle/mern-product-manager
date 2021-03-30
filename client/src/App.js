
import './App.css';
import Main from './views/Main';
import ProductPage from './components/ProductPage';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <ProductPage path="/products/:id" />
      </Router>
    </div>
  );
}

export default App;
