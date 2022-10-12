import { ReactComponent as CompanyIcon } from './../assets/icon-company.svg'
import { ReactComponent as LocationIcon } from './../assets/icon-location.svg'
import { ReactComponent as TwitterIcon } from './../assets/icon-twitter.svg'
import { ReactComponent as WebsiteIcon } from './../assets/icon-website.svg'

const ProfileCard = ({ user }) => {
  if (user === null) {
    return null
  }

  const getCreatedAt = (dateStr) => {
    const date = new Date(dateStr)
    const month = date.toLocaleString('en', { month: 'short' })
    const day = date.getDate()
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
  }

  return (
    <section className='profile-info'>
      <img
        src={user.avatar_url}
        alt={`${user.name}'s avatar`}
        className='user-avatar'
        loading='eager'
        width='70'
        height='70'
      />
      <div className='info'>
        <h2 className='user-name'>
          {user.name ? user.name : user.login.replace('@', '')}
        </h2>
        <a
          href={`https://github.com/${user.login}`}
          className='user-login'
          target='_blank'
          rel='noreferrer noopener'
        >
          <p className='user-login'>@{user.login}</p>
        </a>
        <p className='joined'>Joined {getCreatedAt(user.created_at)}</p>
      </div>
      <div className='bio'>
        {user.bio ? (
          <p className='user-bio' title={user.bio}>
            {user.bio}
          </p>
        ) : (
          <p className='no-info'>This profile has no bio</p>
        )}
      </div>
      <div className='stats'>
        <div>
          <h3>Repos</h3>
          <p>{user.public_repos}</p>
        </div>
        <div>
          <h3>Followers</h3>
          <p>{user.followers}</p>
        </div>
        <div>
          <h3>Following</h3>
          <p>{user.following}</p>
        </div>
      </div>
      <div className='location-blog'>
        <p className='user-location'>
          <LocationIcon />
          <span>
            {user.location ? (
              user.location
            ) : (
              <span className='no-info'>Not Available</span>
            )}
          </span>
        </p>
        <p>
          <WebsiteIcon />
          <a
            href={user.blog}
            className='user-link'
            target='_blank'
            rel='noreferrer noopener'
            title={user.blog}
          >
            {user.blog}
          </a>
        </p>
      </div>
      <div className='twitter-company'>
        <p className='user-twitter'>
          <TwitterIcon />
          {user.twitter_username ? (
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              target='_blank'
              rel='noreferrer noopener'
            >
              @{user.twitter_username}
            </a>
          ) : (
            <span className='no-info'>Not Available</span>
          )}
        </p>
        <p>
          <CompanyIcon />
          {user.company ? (
            <a
              href={`https://github.com/${user.company.replace('@', '')}`}
              className='user-link'
              target='_blank'
              rel='noreferrer noopener'
            >
              {user.company}
            </a>
          ) : (
            <span className='no-info'>Not Available</span>
          )}
        </p>
      </div>
    </section>
  )
}

export default ProfileCard
