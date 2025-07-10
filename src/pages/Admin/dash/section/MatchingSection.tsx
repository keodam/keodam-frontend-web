import styles from "./MatchingSection.module.less"
import TableNavigation from "../../../../components/Admin/TableNavigation";
import SectionHeader from "../components/SectionHeader";
import DataTable from "../tables/DataTable";

const MatchingSection = () => {
    return(
    <div>
        매칭 현황
        <SectionHeader/>
        <DataTable/>
        <TableNavigation/>
    </div>
)}
export default MatchingSection;