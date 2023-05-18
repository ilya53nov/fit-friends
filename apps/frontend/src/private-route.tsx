import { RoleEnum } from '@fit-friends/shared-types';
import { Navigate, RouteProps, useNavigate } from 'react-router-dom';
import { getUserRole } from './utils/local-storage';
import { ClientRoute } from './constants/client-route.enum';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
  role: RoleEnum;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, role} = props;
  const userRole = getUserRole();
  const navigate = useNavigate();

  if (!userRole) {
    return(<Navigate to={ClientRoute.Login} />)
  }

  if (userRole !== role) {
    navigate(-1)
  }


  //if (userRole === role) {
    return(children)
  //} 
  
}
