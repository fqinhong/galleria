import WalletInput from "./components/WalletInput";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <main className="flex h-screen items-center justify-center bg-radial-gradient p-4 md:p-10">
      <div className="flex w-full flex-col items-center justify-center rounded-lg text-center">
        <Hero />
        <WalletInput source="landingPage" />
      </div>
    </main>
  );
};

export default Home;
