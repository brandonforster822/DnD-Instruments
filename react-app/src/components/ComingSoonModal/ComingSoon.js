import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { closeComingSoon } from "../../store/modal";

import "./ComingSoon.css";

export default function CommingSoon() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="coming__soon__container_modal">
      <img
        className="coming-soon_modal"
        src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1558559745443-KM38DVM6H0AIJWVJNT1H/ke17ZwdGBToddI8pDm48kJe8VwonRcYgr7f_0UVbdhh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbHrcextDeErdIU23wx0_6BTOY9zQNi_nItQjMEsHFYhlvkRmRO1_mFZFNCn67QdSw/ghosts_saltmarsh.jpg?format=2500w"
        alt="Coming Soon"
      />
      <button
        className="close__modal__comingsoon"
        onClick={() => dispatch(closeComingSoon())}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className="cs__title_modal">Coming soon...</div>
    </div>
  );
}
