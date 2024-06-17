
import TeachStage from "./teachState"
import Transforming from "./transforming/page";
import OtherSchools from "./otherschools/page";
import Works from "./works/page";

const Dashboard:React.FC = () => {
    return (
        <div className="flex flex-col gap-10 items-center py-10">
            <TeachStage />
            <Transforming />
            <OtherSchools />
            <Works />
        </div>
    )
}

export default Dashboard;