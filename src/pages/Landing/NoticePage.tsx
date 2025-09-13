import LandingHeader from "../../components/Landing/LandingHeader";
import Notice from "../../components/Landing/notice/Notice";
import styles from "./NoticePage.module.less"

const NoticePage = () =>{
    return(
        <div>
            <LandingHeader/>
            <Notice/>
        </div>
    )
}

export default NoticePage;