import { Favorite, RemoveRedEye } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const PropertyCard = () => {
  return <div className="card">
        <div className="card-image">
           
            <div className="price">
                <p>$250.000</p>
            </div>
            <div className="top">
                <img src="/img/icons/electricity.svg" alt="" />
                <p>TOP</p>
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
                    <span>120 m <sup>2</sup> </span>
                </div>
            </div>
            <div className="line"></div>
            <div className="detail">
                <div className="rent-buy">
                    <p className="rent">Rent</p>
                    <p className="buy">Buy</p>
                </div>
                
                <div className="view-like">
                    <IconButton>
                        <RemoveRedEye/>
                    </IconButton>
                        
                    <span>120</span>
                    <IconButton >
                        <Favorite/>
                    </IconButton>
                    <span>100</span>
                </div>
            </div>
        </div>
  </div>;
};

export default PropertyCard;