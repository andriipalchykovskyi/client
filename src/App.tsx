import HeaderFeature from './features/header/HeaderFeature';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HeaderFeature />
      <AppRoutes />
    </BrowserRouter>
  );
}
export default App;
