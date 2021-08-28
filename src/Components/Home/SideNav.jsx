import {
  FilterSquare,
  SortAlphaDown,
  SortNumericDown,
} from "react-bootstrap-icons";

const SideNav = () => {
  return (
    <div className="side-nav-cont">
      <div className="title-cont-sidenav">
        <h3>
          <FilterSquare />
          FILTER
        </h3>
      </div>
      <div className="items-cont-sidenav">
        <h5 className="h5-sidenav">Sort by</h5>
        <div className="filter-sidenav">
          Name {}
          <SortAlphaDown />
        </div>
        <div className="filter-sidenav">
          Price <SortNumericDown />
        </div>
        <hr />
        <h5 className="h5-sidenav">Categories</h5>
        <div className="filter-sidenav">Strong</div>
        <div className="filter-sidenav">Medium</div>
        <div className="filter-sidenav">Light</div>
        <hr />
        <h5 className="h5-sidenav">Brands</h5>
        <div className="filter-sidenav">The Tea Spot</div>
        <div className="filter-sidenav">Eco-Cha</div>
        <div className="filter-sidenav">Ippodo</div>
      </div>
    </div>
  );
};

export default SideNav;
