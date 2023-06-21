import FilterSection from '../components/filterSection/FilterSection'
import Posts from '../components/grid/PostGrid'

const Home = () => {
  return (
    <>
      <section className="wrapper">
        <FilterSection />
        <Posts />
      </section>
    </>
  )
}

export default Home
