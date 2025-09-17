import styles from "./Support.module.less"

const Support = () => {
    return(
        <div className={styles.support}>
            <div className={styles.title}>고객센터</div>
            <div className={styles.titleNav}>자주묻는질문 | 문의하기</div>
            <div className={styles.search}>검색어를 입력하세요.</div>
            <div className={styles.content}>이런저런 내용이 들어올 예정입니다.</div>

            <div className={styles.footer}>
                <div className={styles.title4}>커피와 담소</div>
                <div>
                    서울특별시 구로구 연동로 312, 3층 G4호 구로마을대학 | 사업자등록번호: 750-07-03004
                </div>
           </div>
        </div>
    )
}

export default Support