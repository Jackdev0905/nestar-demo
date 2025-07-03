import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TrendPropertyCard from "./cards/TrendPropertyCard";
import { East, West } from "@mui/icons-material";

const TrendProperties = () => {
  const [properties, setProperties] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div className="trend-properties properties">
      <div className="container">
        <div className="headline">
          <div className="left">
            <h1 className="title">Trend Properties</h1>
            <p className="subtitle">Get some Inspirations from 1800+ skills</p>
          </div>
          <div className="right">
            <div className="pagination-box">
              <West className="swiper-trend-prev" />
              <div className="swiper-trend-pagination btn-box">
                <div></div>
                <div className="active"></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <East className="swiper-trend-next" />
            </div>
          </div>
        </div>
        <div className="cards">
          {properties.length === 0 ? (
            <div className="empty">List empty</div>
          ) : (
            <Swiper
              className="trend-properties-swiper swiper"
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-trend-next",
                prevEl: ".swiper-trend-prev",
              }}
              pagination={{
                el: ".swiper-trend-pagination",
              }}
            >
              {properties.map((property, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="trend-properties-slide slide"
                  >
                    <TrendPropertyCard />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendProperties;
