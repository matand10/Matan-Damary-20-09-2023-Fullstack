import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

// Pages
import Homepage from './pages/Homepage';
import Favorite from './pages/Favorite';
import { ConstRoutes } from './constants/routes';
import Layout from './component/Layout';
import PopupMessageLayout from './component/PopupMessageLayout';

const App = () => {
  return (
    <UserProvider>
      <PopupMessageLayout />
      <Layout>
        <Routes>
          <Route path={ConstRoutes.HOMEPAGE} element={<Homepage />} />
          <Route path={ConstRoutes.FAVORITES} element={<Favorite />} />
        </Routes>
      </Layout>
    </UserProvider>
  );
}
export default App;