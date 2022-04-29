import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import QuotePage from './views/Quotes/QuotePage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <QuotePage />
        </Route>
      </Switch>
    </Router>
  );
}
