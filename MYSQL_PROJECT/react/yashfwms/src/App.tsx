
import Routers from './pages/RouterConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div>
      <Routers />
      <ToastContainer />

    </div>
  )
}

export default App