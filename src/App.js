import './App.css';
import Approvals from './components/Approvals';
import Lubricants from './components/Lubricants';
import 'bootstrap/dist/css/bootstrap.min.css';
import Number from './components/Number';
import Blogs from './components/Blogs';

function App() {
  return (
   <>
   <Lubricants/>
   <Approvals/>
   <Number/>
   <Blogs/>
   </>
  );
}

export default App;
