import Header from "./Header/Header"
import Footer from './Footer/Footer'
import Navbar from "./Navbar/Navbar";
import News from "./News/News";
import Table from "./Table/Table";
import Extra from "./Testiomnals/Extra";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Table />
      <Extra />
      <News />
      <Footer />
    </>
  );
}