import { ClientRoute } from '../../constants/client-route.enum'
import LinkNavigation from './link-navigation'

const myExercisesLink = {
  link: ClientRoute.MyExercises,
  icon: '#icon-flash',
  description: 'Мои тренировки',  
}

const createExerciseLink = {
  link: ClientRoute.CreateExercise,
  icon: '#icon-add',
  description: 'Создать тренировку',  
}

const myFriendsLink = {
  link: ClientRoute.CoachFriends,
  icon: '#icon-friends',
  description: 'Мои друзья',  
}

const myOrdersLink = {
  link: ClientRoute.MyOrders,
  icon: '#icon-bag',
  description: 'Мои заказы',  
}


const links = [
  myExercisesLink,
  createExerciseLink,
  myFriendsLink,
  myOrdersLink,
]

export default function CoachNavigation(): JSX.Element {
  return(
    <div className="personal-account-coach__navigation">
      {links.map((link) => (
        <LinkNavigation
          description={link.description}
          icon={link.icon}
          link={link.link}
          key={link.description}
        />
      ))}
      <div className="personal-account-coach__calendar"></div>
    </div>
  )
}
