import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPropertyCard from "./cards/PopularPropertyCard";
import Link from "next/link";

const PopularProperties = () => {
  const [properties, setProperties] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div className="popular-properties properties">
      <div className="boxx"></div>
      <div className="container">
        <div className="headline">
          <div className="left">
            <h1 className="title">Popular Properties</h1>
            <p className="subtitle">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          <div className="right">
            <div className="more-box">
              <Link href={"/property"}>
                <span>See All Properties</span>
                <img src="/img/icons/rightup.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="cards">
          {properties.length === 0 ? (
            <div className="empty">List empty</div>
          ) : (
            <Swiper
              className="popular-properties-swiper swiper"
              slidesPerView={"auto"}
              spaceBetween={25}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
              }}
            >
              {properties.map((property, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="popular-properties-slide slide"
                  >
                    <PopularPropertyCard />
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

export default PopularProperties;
