import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Porjects from "@/components/projects/Porjects";
import Poster from "@/components/posters/Poster";
import Category from "@/components/category/Category";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />
      <Porjects />
      <Poster />
      <Category />
      <Footer />
    </div>
  );
}
