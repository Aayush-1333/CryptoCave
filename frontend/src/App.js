import UserState from './context/UserState';
import CryptoState from './context/CryptoState';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Home from './components/Homepage/Home';
import Navbar from './components/Navbar';
import Login from './components/UserSign/Login';
import SignUp from './components/UserSign/SignUp';
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
                            <Route path='/login' element={<Login />} />
                            <Route path='/signup' element={<SignUp />} />
                            <Route path='/crypto-stock-prices' element={<Prices />} />
                        </Routes>
                    </Router>
                </CryptoState>
            </UserState>
        </div>
    );
}

export default App;
