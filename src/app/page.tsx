import About from "@/components/Home/About";
import CustomerReview from "@/components/Home/CustomerReview";
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";
import SpecialMenu from "@/components/Home/SpecialMenu";
import VisitOurCafe from "@/components/Home/VisitCafe";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Featured />
    <CustomerReview />
    <SpecialMenu />
    <VisitOurCafe />
    </>
  );
}
