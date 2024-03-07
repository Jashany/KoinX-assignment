import styles from './Team.module.css'

const Team = ({teamdata}) => {
    return ( 
        <div className={styles.teamdata_main}>
            <h1 >Team</h1>
            <p>{teamdata.teamdesc}</p>
            <div className={styles.teamcards}>
                {teamdata.members.map((member, index) => {
                    return(
                        <Teamcard key={index} member={member} />
                    )
                })}
            </div>
        </div>
     );
}
 
export default Team;

const Teamcard = ({member}) => {
    return ( 
        <div className={styles.team_card} >
            <div>
            <img src={member.image} alt="" />
            <h4>{member.name}</h4>
            <h6>{member.role}</h6>
            </div>
            <p>{member.description}</p>
        </div>
     );
}
 