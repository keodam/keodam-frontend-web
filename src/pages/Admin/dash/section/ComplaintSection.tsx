import styles from "./ComplainSection.module.less"
import TableNavigation from "../../../../components/Admin/TableNavigation";
import SectionHeader from "../components/SectionHeader";
import DataTable from "../tables/DataTable";

const ComplainSection = () => {
    return(
    <div>
        신고 현황
        <SectionHeader/>
        <DataTable/>
        <TableNavigation/>
    </div>
)}
export default ComplainSection;