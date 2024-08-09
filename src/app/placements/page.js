import Banner from "@/Components/Banner/Banner";
import JobSupport from "@/Components/Placement-Comp/JobSupport/JobSupport";
import PlacementBoard from "@/Components/Placement-Comp/PlacementBoard/PlacementBoard";


export default function Placements(){
    return(
        <>
        <Banner 
        title="PLACEMENT"
        subtitle="Home"
        backgroundImage="/images/banner-new.jpg"
        />
        <JobSupport />
        <PlacementBoard />
        </>
    )
}