import LandingPageVideo from "../Component/LandingPageVideo";
import LandingPageContent from "../Component/LandingPageContent";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden">

      <Navbar/>
      
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <LandingPageVideo />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-[5] bg-black/25" />

      {/* Content */}
      <LandingPageContent />

    </main>
  );
};

export default LandingPage;