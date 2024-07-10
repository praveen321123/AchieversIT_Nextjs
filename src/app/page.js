import Cards from "@/Components/courseCards/cards";
import Carousel from "@/Components/carousel/carousel";
import CategoryMain from "@/Components/discover-categories/categoryMain";
import CardSection from "@/Components/Cards/cards";
import ContactBanner from "@/Components/ContactUsBanner/ContactBanner";
import Edges from "@/Components/Edges/Edges";
import TopAIT from "@/Components/WeAreTop/TopAIT";
import TrainersComp from "@/Components/Trainers/TrainersComp";
import Openings from "@/Components/JobOpenings/Openings";
import Business from "@/Components/AchieversITBusiness/Business";
import Clients from "@/Components/AITClients/Clients";
import Locations from "@/Components/Locations/Location";
import AITFooter from "@/Components/AITFooter/AITFooter";
import Footer from "@/Components/Footer/Footer";

// import Reviews from "@/Components/reviews/Reviews";

export default function Home() {
  return (
    <main>
      <Carousel />
      <CardSection />
      <Cards />
      <CategoryMain />
      {/* <Reviews /> */}
      <ContactBanner />
      <Edges />
      <TopAIT />
      <TrainersComp />
      <Openings />
      <Business />
      <Clients />
      <Locations />
      <AITFooter />
      <Footer />
    </main>
  );
}
