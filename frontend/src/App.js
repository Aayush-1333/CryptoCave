import UserState from './context/UserState';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Home from './components/Homepage/Home';
import Navbar from './components/Navbar';
import Login from './components/UserSign/Login';
import SignUp from './components/UserSign/SignUp';

function App() {
    return (
        <div>
            <UserState>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<SignUp />} />
                    </Routes>
                </Router>
            </UserState>
        </div>
    );
}

export default App;
