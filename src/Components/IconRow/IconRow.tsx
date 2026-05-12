import React from 'react';
import './IconRow.css';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { IoRestaurantOutline, IoCalendarClearOutline } from 'react-icons/io5';

export const IconRow: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="icon-row-container">
      <div className="icon-row">

        <div className="icon-item">
          <button className="icon-circle" onClick={() => scrollTo('timetable')} aria-label="Menetrend">
            <IoCalendarClearOutline size={34} className="icon-svg" />
          </button>
          <div className="icon-label">Menetrend</div>
        </div>

        <div className="icon-item">
          <button className="icon-circle" onClick={() => scrollTo('menu')} aria-label="Esküvői menü">
            <IoRestaurantOutline size={34} className="icon-svg" />
          </button>
          <div className="icon-label">Esküvői menü</div>
        </div>

        <div className="icon-item">
          <button className="icon-circle" onClick={() => scrollTo('invitation')} aria-label="Meghívó">
            <MdOutlineMail size={34} className="icon-svg" />
          </button>
          <div className="icon-label">Meghívó</div>
        </div>

        <div className="icon-item">
          <button className="icon-circle" onClick={() => scrollTo('lovestory')} aria-label="Szerelmünk története">
            <FaRegHeart size={34} className="icon-svg" />
          </button>
          <div className="icon-label">Szerelmünk története</div>
        </div>
      </div>
    </div>
  );
};

export default IconRow;
