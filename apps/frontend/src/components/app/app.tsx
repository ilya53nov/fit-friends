import { Route, Routes } from 'react-router-dom';
import { ClientRoute } from '../../constants/client-route.enum';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import SignUpPage from '../../pages/sign-up-page/sign-up-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={ClientRoute.Registration} element={<SignUpPage/>} />
      <Route path={ClientRoute.Login} element={<SignInPage/>} />     


      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
}

export default App;
