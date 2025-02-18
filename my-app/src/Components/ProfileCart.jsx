function ProfileCard({title, body}){
    return(
        <div className="profile-container">
            <h3>{title}</h3>
            <h3>{body}</h3>
        </div>
    )
}

export default ProfileCard;