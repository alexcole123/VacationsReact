import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Layout } from './Components/LayoutArea/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
    {/* Send the store object to any useSelector hook */}
    <Provider store={store}>

            <Layout />
        
    </Provider>
    </BrowserRouter>
);

reportWebVitals();
