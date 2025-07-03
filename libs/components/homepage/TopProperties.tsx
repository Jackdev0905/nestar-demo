import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TopPropertyCard from "./cards/TopPropertyCard";
import { East, West } from "@mui/icons-material";

const TopProperties = () => {
  const [properties, setProperties] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div className="top-properties properties">
      <div className="container">
        <div className="headline">
          <div className="left">
            <h1 className="title">Top Properties</h1>
            <p className="subtitle">Check out our Top Properties</p>
          </div>
          <div className="right">
            <div className="pagination-box">
              <West className="swiper-top-prev" />
              <div className="swiper-top-pagination btn-box">
                <div></div>
                <div className="active"></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <East className="swiper-top-next" />
            </div>
          </div>
        </div>
        <div className="cards">
          {properties.length === 0 ? (
            <div className="empty">List empty</div>
          ) : (
            <Swiper
              className="top-properties-swiper swiper"
              slidesPerView={"auto"}
              spaceBetween={15}
              navigation={{
                nextEl: ".swiper-top-next",
                prevEl: ".swiper-top-prev",
              }}
              pagination={{
                el: ".swiper-top-pagination",
              }}
            >
              {properties.map((property, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="top-properties-slide slide"
                  >
                    <TopPropertyCard />
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

export default TopProperties;
