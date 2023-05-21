import { RoleEnum } from '@fit-friends/shared-types';
import { Navigate, RouteProps } from 'react-router-dom';
import { getUserRole } from './utils/local-storage';
import { ClientRoute } from './constants/client-route.enum';
import browserHistory from './browser-history';
import { useGetMeQuery } from './store/auth/auth-api';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
  role: RoleEnum;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, role} = props;
  const userRole = getUserRole();

  if (!userRole) {
    return(<Navigate to={ClientRoute.Login} />);
  }

  if (userRole !== role) {
    browserHistory.back()
    return(<div></div>);
  }

  return(children);
}
