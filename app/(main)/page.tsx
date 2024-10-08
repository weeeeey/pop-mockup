import { MainBillboard, MainContentByTag, MainPopular } from "./_component";
import MainReviews from "./_component/main-reviews";

const MainPage = () => {
  return (
    <section className="relative flex h-full flex-col space-y-4">
      <MainBillboard />
      <MainPopular content="popup" />
      <MainPopular content="exhibition" />
      <MainContentByTag />
      <MainReviews />
    </section>
  );
};

export default MainPage;
