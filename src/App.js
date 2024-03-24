import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Navigate 추가
import Signup from './Signup/Signup';
import SignupSignin from './Signinup/SignupSignin';
import Signin from './Signin/Signin';
import Location from './Location/location';
import Main from './Main/Main';
import Post from './Post/Post';
import Mypage from './Mypage/Mypage';
function App() {
  return (
    <Router>
    <Routes> 
      <Route path="/" element={<SignupSignin />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/location' element={<Location/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route path='/mypage' element={<Mypage/>}/>
    </Routes>
  </Router>
  // <Location />
  );
}

export default App;
