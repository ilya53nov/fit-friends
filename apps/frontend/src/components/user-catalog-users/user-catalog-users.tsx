import { UserRdo } from '@fit-friends/shared-rdo'
import { useGetUsersQuery } from '../../store/users/users-api'
import UserCatalogUser from './user-catalog-user';

export default function UserCatalogUsers(): JSX.Element {
  const {data: users = []} = useGetUsersQuery({});
  
  return(
    <div className="inner-page__content">
      <div className="users-catalog">
        <ul className="users-catalog__list">
          {users.map((user: UserRdo) => <UserCatalogUser user={user} />)}
        </ul>
        <div className="show-more users-catalog__show-more">
          <button className="btn show-more__button show-more__button--more" type="button">Показать еще</button>
          <button className="btn show-more__button show-more__button--to-top" type="button">Вернуться в начало</button>
        </div>
      </div>
    </div>
  )
}
