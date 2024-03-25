import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Navigate 추가
import Signup from './Signup/Signup';
import SignupSignin from './Signinup/SignupSignin';
import Signin from './Signin/Signin';
import Location from './Location/location';
import Main from './Main/Main';
import Post from './Post/Post';
<<<<<<< HEAD
import Search from './Search/Search';
function App() {
  return (
    <Router>
    <Routes> 
      <Route path="/" element={<SignupSignin />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/location/:userId' element={<Location/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
  </Router>
  // <Location />
=======

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupSignin />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/location/:userId' element={<Location/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/post' element={<Post/>}/>
      </Routes>
    </Router>
>>>>>>> cc6aeb691acde10c602d7afa667db7ac7bb84047
  );
}

export default App;
