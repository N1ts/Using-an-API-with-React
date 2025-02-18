function UserCard({firstName, lastName, email, image}){
    return(
        <div className="user-container">
            <img src={image} alt="profile"
            style={{borderRadius:"50px", marginTop: "10px"}}
            />
            <h5>
            My name is {firstName}{lastName}
            </h5>
            <h6 style={{paddingBottom: "15px"}}>
                {email}</h6>
        </div>
    )
}

export default UserCard;