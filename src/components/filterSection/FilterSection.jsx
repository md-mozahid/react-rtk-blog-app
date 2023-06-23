import Sort from "./Sort"
import Filter from "./filter"

const FilterSection = () => {
  return (
    <section className="wrapper">
      <aside>
        <div className="sidebar-items">
          <Sort />
          <Filter />
        </div>
      </aside>
    </section>
  )
}

export default FilterSection
