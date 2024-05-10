export function TwitterFollowCard({ userName, name, isFollowing = false }) {
    console.log(isFollowing)
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw--followCard-info">
          <strong className="tw-followCard-infoUsername">{name}</strong>
          <span className="tw-followCard-text">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
