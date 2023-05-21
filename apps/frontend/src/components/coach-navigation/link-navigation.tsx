import { Link } from 'react-router-dom'

type LinkNavigationProps = {
  link: string,
  icon: string,
  description: string,
}

export default function LinkNavigation({description, icon, link}: LinkNavigationProps): JSX.Element {
  return(
    <Link className="thumbnail-link thumbnail-link--theme-light" to={link}>
      <div className="thumbnail-link__icon thumbnail-link__icon--theme-light">
        <svg width="30" height="26" aria-hidden="true">
          <use xlinkHref={icon}></use>
        </svg>
      </div>
      <span className="thumbnail-link__text">{description}</span>
    </Link>
  )
}
