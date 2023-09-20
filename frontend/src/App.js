import UserState from './context/UserState';
import CryptoState from './context/CryptoState';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Home from './components/Homepage/Home';
import Users from './components/UserSign/Users';
import Navbar from './components/Navbar';
import Prices from './components/CryptoStocks/Prices';

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
                            <Route path='/crypto-stock-prices' element={<Prices />} />
                        </Routes>
                    </Router>
                </CryptoState>
            </UserState>
        </div>
    );
}

export default App;
