import Cards from "@/Components/courseCards/cards";
import Carousel from "@/Components/carousel/carousel";
import CategoryMain from "@/Components/discover-categories/categoryMain";
import CardSection from "@/Components/Cards/CardSection";
import Edges from "@/Components/Edges/Edges";
import TopAIT from "@/Components/WeAreTop/TopAIT";
import Clients from "@/Components/AITClients/Clients";
import Locations from "@/Components/Locations/Location";
import AITFooter from "@/Components/AITFooter/AITFooter";
import Footer from "@/Components/Footer/Footer";
import AchieversITBusiness from "@/Components/AchieversITBusiness/AchieversITBusiness";
import ContactUsBanner from "@/Components/ContactUsBanner/ContactUsBanner";
import JobOpenings from "@/Components/JobOpenings/JobOpenings";
import Trainers from "@/Components/Trainers/Trainers";

// import Reviews from "@/Components/reviews/Reviews";

export default function Home() {
  return (
    <main>
      <Carousel />
      <CardSection />
      <Cards />
      <CategoryMain />
      {/* <Reviews /> */}
      <ContactUsBanner />
      <Edges />
      <TopAIT />
      <Trainers />
      <JobOpenings />
      <AchieversITBusiness />
      <Clients />
      <Locations />
      <AITFooter />
      <Footer />
    </main>
  );
}
