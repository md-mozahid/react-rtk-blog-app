import FilterSection from '../components/filterSection/FilterSection'
import BlogsGrid from '../components/grid/BlogsGrid'

const Home = () => {
  return (
    <>
      <section className="wrapper">
        <FilterSection />
        <BlogsGrid />
      </section>
    </>
  )
}

export default Home
