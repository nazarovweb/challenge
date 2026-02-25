import Header from "./Header"
import Footer from './Footer'
import Navbar from "./Navbar";
import News from "./News";
import Table from "./Table";
import Extra from "./Extra";

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