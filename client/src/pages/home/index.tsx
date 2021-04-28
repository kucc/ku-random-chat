import * as React from 'react';
import Settings from '../../components/settings';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { randomMatch, roomMatch } from './';


const HomePage: React.FC = () => {
  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/match-random">randomMatch</Link>
              </li>
              <li>
                <Link to="/match-room">roomMatch</Link>
              </li>
            </ul>
          </nav>

          <Route exact path='/match-random' component={randomMatch}/>
          <Route path='/match-room' component={roomMatch}/>
        </div>
    </Router>
  );  
}

export default HomePage;