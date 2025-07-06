import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import Filter from "@/libs/components/property/Filter";
import PropertyCard from "@/libs/components/property/PropertyCard";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import { Button, Container, Pagination, Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const PropertyList: NextPage = () => {
  const [properties, setProperties] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className="property-page">
      <div className="container">
        <div className="sort">
          <p>Sort by</p>
          <Button endIcon={<KeyboardArrowDownRounded />}>New</Button>
        </div>
        <div className="main">
          <div className="filter-wrapper">
            <Filter />
          </div>
          <div className="list-wrapper">
            <div className="list">
              {properties.map((ele, index) => {
                return <PropertyCard key={index} />;
              })}
            </div>
            <div className="pagination">
              <Pagination page={1} count={5} shape="circular" color="primary" />
              <div className="total">
                 Total {properties.length} property available
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
