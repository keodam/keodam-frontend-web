import styles from "./Fourth.module.less";
import 원두 from "../../../assets/Landing/4페이지 원두.png"
import 커뮤니티 from "../../../assets/Landing/4페이지 폰.png"
import 앱 from "../../../assets/Landing/4페이지 로고.png"
import 로고 from "../../../assets/Landing/헤더 로고.svg"
const Fourth = () => {
  return (
    <div className={styles.fourth}>
      <div className={styles.section}>
        <div className={styles.content}>
          <div className={styles.title}><span className={styles.color}>원두</span>를 통한 <br></br><span className={styles.color}>금전적인</span> 보상</div>
          <div className={styles.titleContent}>원두는 멘토링에 대한 보상으로,<br></br>
               멘토가 기꺼이 진심 어린 조언과 도움에 대한<br></br>
               작은 보상이자 멘토의 적극적인 활둉을 권장합니다.
          </div>
        </div>
        <div className={styles.video}>
          <img src={원두} alt="원두 사진"/>
        </div>
      </div>
      <div className={styles.section2}> 
        <div className={styles.title2}><span className={styles.color}>커뮤니티</span>를 통한<br></br><span className={styles.color}>네트워킹</span> 형성</div>
        <div><img src={커뮤니티} alt="커뮤니티 사진"/></div>
        <div className={styles.titleContent2}>
             커담 커뮤니티를 통해 <span className={styles.color}>최신 테크 트렌드</span>는 물론,<br></br>
             다양한 지식과 경험을 함께 나누고, 같은 관심사를<br></br>
             가진 사람들과의 <span className={styles.color}>소중한 네트워킹 기회</span>를 만들어보세요.
        </div>
      </div>
      <div className={styles.section3}>
        <div><img src={앱} alt="앱 아이콘"/></div>
        <div className={styles.title3}>한잔의 커피 <br></br>
             무한한 가능성의 담소
        </div>
        <div>
          <div>
            <img></img>
            <div>App Store</div>
          </div>
          <div>
            <img></img>
            <div>Go</div>
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <img src={로고} alt="커담 로고"/>
        <div className={styles.title4}>커피와 담소</div>
        <div>서울특별시 구로구 연동로 312, 3층 G4호 구로마을대학 | 사업자등록번호: 750-07-03004</div>
      </div>
    </div>
  );
};

export default Fourth;
