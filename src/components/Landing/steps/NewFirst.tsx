import LandingHeader from "../LandingHeader"
import styles from "./NewFirst.module.less"
import smartphone from "../../../assets/Landing/smartphone.png"
import smartphoneinlogo from "../../../assets/Landing/smartphoneinlogo.png"

const NewFirst = () => {
    return(
        <div className={styles.newFirst}>
            {/* <LandingHeader/> */}

                <div className={styles.mainText}>
                    <div className={styles.mainTextFirst}>한잔의 커피</div>
                    <div className={styles.mainTextSecond}>무한한 가능성의 담소</div>
                </div>
                <div className={styles.mockup}>
                    <img className={styles.smartphone} src={smartphone} alt="스마트폰"/>
                    <img className={styles.smartphoneinlogo} src={smartphoneinlogo} alt="스마트폰 안에 들어가 있는 로고"/>
                </div>

        </div>
    )
}

export default NewFirst