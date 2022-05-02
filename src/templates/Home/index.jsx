import "./style.css";

import { HomeMain } from "../../components/HomeMain";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function Home() {
  return (
    <div className="app">
      <Header />

      <HomeMain />

      <Footer />
    </div>
  );
}
