import GridCard from "./components/GridCard"
import './News.css'
const News = () => {
  return (
    <div>
      <h1 style={{textAlign: "center", marginTop: "40px", marginBottom: "10px"}}>Latest Articles</h1>
    <div className="gridNews">
      <GridCard/>
      <GridCard/>
      <GridCard/>
    </div>
     </div>
  )
}

export default News