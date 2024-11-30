import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store/store';
import { Dashboard, FourZeroFour } from './pages';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/404" element={<FourZeroFour />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover
        />
      </Router>
    </Provider>
  );
};

export default App;
