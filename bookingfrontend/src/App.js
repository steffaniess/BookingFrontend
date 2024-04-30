import { BrowserRouter as Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Routing from './components/partials/Routing';
import Footer from './components/navigation/footer/Footer';
import Home from './components/views/home/Home';
import About from './components/views/about/About';


function App() {
  return (<>
<Navigation />
<Routing>
  <Route path="/" exact component={Home} />
  <Route path="/about" component={About} />
</Routing>
<Footer/>
</>
  );
}

export default App;
