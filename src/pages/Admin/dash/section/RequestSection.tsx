import TableNavigation from "../../../../components/Admin/TableNavigation";
import SectionHeader from "../components/SectionHeader";
import RequestTable from "../tables/RequestTable";
import styles from "./RequestSection.module.less"

const RequestSection = () => {
    return(
    <div>
        요청 현황
        <SectionHeader/>
        <RequestTable/>
        <TableNavigation/>
    </div>
)}
export default RequestSection;