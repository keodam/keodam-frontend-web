import styles from "./Notice.module.less"
import 로고 from "../../../assets/Landing/4페이지 로고.png"

const Notice = () => {
    return(
        <div className={styles.notice}>
           <div className={styles.title}>공지사항</div>
           <div className={styles.titleNav}>전체  |  업데이트  |  이벤트</div>
           <div className={styles.search}>검색어를 입력해주세요</div>
           <div className={styles.table}>테이블</div>

           <div className={styles.footer}>
            <div className={styles.title4}>커피와 담소</div>
            <div>
                서울특별시 구로구 연동로 312, 3층 G4호 구로마을대학 | 사업자등록번호: 750-07-03004
            </div>
           </div>
        </div>
    )
}
export default Notice;