import UserState from './context/UserState';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Home from './components/Homepage/Home';
import Navbar from './components/Navbar';
import Login from './components/UserSign/Login';

function App() {
    return (
        <div>
            <UserState>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </Router>
            </UserState>
        </div>
    );
}

export default App;
