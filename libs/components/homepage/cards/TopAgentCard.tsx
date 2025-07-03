import { Favorite, RemoveRedEye } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const TopAgentCard = () => {
  return (
    <div className="top-agents-card card">
      <div className="card-image">
        <img src="/img/profile/girl.svg" alt="" />
      </div>
      <div className="card-info">
        <p className="title">Martin</p>
        <p className="subtitle">Agent</p>
      </div>
    </div>
  );
};

export default TopAgentCard;
