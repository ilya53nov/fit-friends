import { RoleEnum } from '@fit-friends/shared-types';
import { Navigate, RouteProps } from 'react-router-dom';
import { authApi, useGetMeQuery } from './store/auth/auth-api';
import { ClientRoute } from './constants/client-route.enum';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRole } from './store/auth/auth-slice';
import { RootState, store } from './store/store';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
  role: RoleEnum;
}


export default function PrivateRoute(props: PrivateRouteProps) {

  //const getMe = authApi.endpoints.getMe.select();
  //const userRole = useSelector(selectRole);
  //const queries = useSelector((state: RootState) => state.api.)

  const {children, role} = props;

  // useEffect(() => {
  //   if (isSuccess) {
  //     console.log(myProfile, role, isSuccess);

  //     return(<div>1</div>)
  //   }
  // })

  // if (isSuccess) {
  //   console.log(myProfile, role, isSuccess);

  //   return(<div>1</div>);
  // }

  //console.log(myProfile);

  // if (myProfile && myProfile.role === role) {
  //   console.log(myProfile.role, role);

  //   return(children);
  //   // return (
  //   //   myProfile?.role === role
  //   //     ? children
  //   //     : <Navigate to={ClientRoute.Login} />
  //   // );
  // }

  //return(<Navigate to={ClientRoute.Login} />)
  return(<div>2</div>)
}
