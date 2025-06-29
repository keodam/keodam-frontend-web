import styles from "./Second.module.less";
// import Logo from '../../../assets/Landing/헤더 로고.svg'
import 커피챗 from '../../../assets/Landing/2페이지 커피챗.png'

const Second = () => {
  return(
    <div>
      <div className={styles.third}>
        <div className={styles.box}>
          <div className={styles.title}><span className={styles.color}>커피챗</span>이란?</div>
          <div>"멘토와 멘티가 같이 커피 한 잔 하면서"</div>
          <div>간단한 조건과 다양한 정보를 교류할 수 있는 문화입니다.</div>
        </div>
        <div className={styles.img}>
          <img src={커피챗} alt="커피챗 이미지"/>
        </div>
        <div className={styles.box}>
          <div>학교 선배와의 <span className={styles.color}>대면, 비대면 커피챗</span>을 통해</div>
          <div>본인이 <span className={styles.color}>원하는 정보와 고민</span>을 한번에 해결!</div>
        </div>
      </div>
    </div>)
};

export default Second;
