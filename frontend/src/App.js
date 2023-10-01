/**
 * This is the main component of React.js framework which consists of all the components
 * This App.js file is rendered on the browser when the framework starts
 * 
 * The following endponits are:
 * Root - Te default endpoint
 * Users - Consists of all user-related tasks
 * Crypto - All crypto-currency related content
 */
import UserState from './context/UserState';
import CryptoState from './context/CryptoState';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

// Other Components
import Home from './components/Homepage/Home';
import Users from './components/UserSign/Users';
import Navbar from './components/Navbar';
import Crypto from './components/CryptoStocks/Crypto';


function App() {
    return (
        <div>
            <UserState>
                <CryptoState>
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/users/*' element={<Users />} />
                            <Route path='/crypto/*' element={<Crypto />} />
                        </Routes>
                    </Router>
                </CryptoState>
            </UserState>
        </div>
    );
}

export default App;
