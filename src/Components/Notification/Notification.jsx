import React from 'react';
import './Notification.css';
import notification_icon from '../../assets/notification.png';

const Notification = () => {
  return (
    <div>
        <div className="notification">
        <img src={notification_icon} alt="notification icon" />
        <span>Announcement -  We now accept payment using paypal</span>
        <button className='btn_link'><span>Shop Now </span>&rarr;</button>
        </div>
    </div>
  )
}

export default Notification