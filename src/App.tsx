import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store/store';
import { Dashboard } from './pages';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
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
