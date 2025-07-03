import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TopAgentCard from "./cards/TopAgentCard";
import { ArrowBackIosNew } from "@mui/icons-material";
import Link from "next/link";

const TopAgents = () => {
  const [agents, setAgents] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <div className="top-agents">
      <div className="container">
        <div className="headline">
          <div className="left">
            <h1 className="title">Top agents</h1>
            <p className="subtitle">These are our best Top Agents</p>
          </div>
          <div className="right">
            <div className="more-box">
              <Link href={"/agent"}>
                <span>See All Agents</span>
                <img src="/img/icons/rightup.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="switch-btn swiper-agent-prev">
            <ArrowBackIosNew />
          </div>
          <div className="cards">
            {agents.length === 0 ? (
              <div className="empty">List empty</div>
            ) : (
              <Swiper
                className="top-agents-swiper"
                slidesPerView={"auto"}
                spaceBetween={15}
                navigation={{
                  nextEl: ".swiper-agent-next",
                  prevEl: ".swiper-agent-prev",
                }}
                pagination={{
                  el: ".swiper-agent-pagination",
                }}
              >
                {agents.map((property, index) => {
                  return (
                    <SwiperSlide key={index} className="top-agents-slide slide">
                      <TopAgentCard />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>
          <div className="switch-btn swiper-agent-next">
            <ArrowBackIosNew />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAgents;
