import { RoleEnum } from '@fit-friends/shared-types';
import { Navigate, RouteProps } from 'react-router-dom';
import { getUserRole } from './utils/local-storage';
import { ClientRoute } from './constants/client-route.enum';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
  role: RoleEnum;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, role} = props;
  const userRole = getUserRole();

  if (userRole && userRole === role) {
    return(children) ;
  } 

  return(<Navigate to={ClientRoute.Login} />)
}
