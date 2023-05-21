import { Route, Routes } from 'react-router-dom';
import { ClientRoute } from '../../constants/client-route.enum';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import SignUpPage from '../../pages/sign-up-page/sign-up-page';
import IntroPage from '../../pages/intro-page/intro-page';
import PrivateRoute from '../../private-route';
import MainPage from '../../pages/main-page/main-page';
import { RoleEnum } from '@fit-friends/shared-types';
import QuestionnaireUserPage from '../../pages/questionnaire-user-page/questionnaire-user-page';
import QuestionnaireCoachPage from '../../pages/questionnaire-coach-page/questionnaire-coach-page';
import PersonalAccountCoachPage from '../../pages/personal-account-coach-page/personal-account-coach-page';
import MyExercisesPage from '../../pages/my-exercises-page/my-exercises-page';
import CreateExercisePage from '../../pages/create-exercise-page/create-exercise-page';
import CoachFriendsPage from '../../pages/my-friends-page/my-friends-page';
import MyOrdersPage from '../../pages/my-orders-page/my-orders-page';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={ClientRoute.Main} element={<IntroPage/>}/>
      <Route path={ClientRoute.Registration} element={<SignUpPage/>}/>
      <Route path={ClientRoute.Login} element={<SignInPage/>}/>     

      <Route path={ClientRoute.Index} element={<PrivateRoute children={<MainPage/>} role={RoleEnum.Sportsman}/>}/>
      <Route path={ClientRoute.QuestionnaireUser} element={<PrivateRoute children={<QuestionnaireUserPage/>} role={RoleEnum.Sportsman}/>}/>
      <Route path={ClientRoute.QuestionnaireCoach} element={<PrivateRoute children={<QuestionnaireCoachPage/>} role={RoleEnum.Coach}/>}/>
      <Route path={ClientRoute.PersonalAccountCoach} element={<PrivateRoute children={<PersonalAccountCoachPage/>} role={RoleEnum.Coach}/>}/>
      <Route path={ClientRoute.MyExercises} element={<PrivateRoute children={<MyExercisesPage/>} role={RoleEnum.Coach}/>}/>
      <Route path={ClientRoute.CreateExercise} element={<PrivateRoute children={<CreateExercisePage/>} role={RoleEnum.Coach}/>}/>
      <Route path={ClientRoute.CoachFriends} element={<PrivateRoute children={<CoachFriendsPage/>} role={RoleEnum.Coach}/>}/>
      <Route path={ClientRoute.MyOrders} element={<PrivateRoute children={<MyOrdersPage/>} role={RoleEnum.Coach}/>}/>

      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
}

export default App;
