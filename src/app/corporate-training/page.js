import AITFooter from "@/Components/AITFooter/AITFooter";
import Banner from "@/Components/Banner/Banner";
import CorporateTraining from "@/Components/Corporate-Trainings-Comp/Corporate-trainings/CorporateTraining";
import FeedbackCarousel from "@/Components/Corporate-Trainings-Comp/FeedbackCarousel/FeedbackCarousel";
import TrainingCourses from "@/Components/Corporate-Trainings-Comp/TrainingCourses/TrainingCourses";
import TrainingsBanner from "@/Components/Corporate-Trainings-Comp/Trainings-banner/TrainingsBanner";
import Locations from "@/Components/Locations/Location";

export default function CorporateTrainings(){
  return(
    <>
      <Banner 
        title="IT ON - JOB SUPPORT"
        subtitle="Home"
        backgroundImage="/images/banner-new.jpg"
      />
      <CorporateTraining />
      <TrainingsBanner />
      <TrainingCourses />
      <FeedbackCarousel />
    </>
  )
}