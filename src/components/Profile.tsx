import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
            <div className={styles.profileContainer}>
                <img src="https://github.com/bruno-langer.png" alt="Profile Picture"/>
                <div>
                    <strong>Bruno Langer</strong>
                    <p>
                        <img src="icons/level.svg" alt="levelUp"/>
                        Level 0
                        </p>
                </div>
            </div>
    );
}