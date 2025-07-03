import { Favorite, RemoveRedEye } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const TopPropertyCard = () => {
  return <div className="top-properties-card card">
        <div className="card-image">
            <img src="/img/banner/types/apartment.webp" alt="" />
            <div className="price">
                <p>$100.000</p>
            </div>
        </div>
        <div className="card-info">
            <p className="title">
                Kingston Buildings
            </p>
            <p className="subtitle">
                This is super view apartments
            </p>
            <div className="room-info">
                <div className="bed">
                    <img src="/img/icons/bed.svg" alt="bed" />
                    <span>2 bed</span>
                </div>
                <div className="room">
                    <img src="/img/icons/room.svg" alt="room" />
                    <span>5 room</span>
                </div>
                <div className="expand">
                    <img src="/img/icons/expand.svg" alt="expand" />
                    <span>120 m2</span>
                </div>
            </div>
            <div className="line"></div>
            <div className="detail">
                <p className="rent">Rent</p>
                <div className="view-like">
                    <IconButton color={"default"}>
                        <RemoveRedEye/>
                    </IconButton>
                    <span>120</span>
                    <IconButton color={"default"}>
                        <Favorite/>
                    </IconButton>
                    <span>100</span>
                </div>
            </div>
        </div>
  </div>;
};

export default TopPropertyCard;