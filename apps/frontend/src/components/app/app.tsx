import { Route, Routes } from 'react-router-dom';
import { ClientRoute } from '../../constants/client-route.enum';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import SignUpPage from '../../pages/sign-up-page/sign-up-page';
import IntroPage from '../../pages/intro-page/intro-page';
import PrivateRoute from '../../private-route';
import MainPage from '../../pages/main-page/main-page';
import { RoleEnum } from '@fit-friends/shared-types';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={ClientRoute.Main} element={<IntroPage/>} />
      <Route path={ClientRoute.Registration} element={<SignUpPage/>} />
      <Route path={ClientRoute.Login} element={<SignInPage/>} />     

      <Route path={ClientRoute.Index} element={
        <PrivateRoute children={<MainPage />} role={RoleEnum.Sportsman} />

      }
      />

      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
}

export default App;
