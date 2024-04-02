// import { GiCalendar, GiClawSlashes, GiMailbox, GiPhone } from "react-icons/gi";
import { GiCalendar, GiClawSlashes, GiPhone } from "react-icons/gi";
import { GiMailbox } from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/images/myImage.jpg" alt="" width="100" />
        </figure>
        <div className="info-content">
          <h1 className="name">James Abiola Bisiriyu</h1>
          <p className="title">Front End Developer</p>
          <button className="info_more-btn">
            <span> Show Contacts </span>
            <GiClawSlashes />
          </button>
        </div>     
      </div>
       {/* contact info */}
       <div className="sidebar-info_more">
          <hr className="separator2"/>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
              <GiMailbox />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email:</p>
                <a href="mailto:Emperor2g@gmail.com" className="contact-link">Emperor2g@gmail.com</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
              <GiPhone/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone:</p>
                <a href="tel:+2348171575268" className="contact-link">+234 8171575268</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
              <GiCalendar/>
              </div>
              <div className="contact-info">
                <p className="contact-title">Birthday:</p>
                <time dateTime="1983-10-18" className="contact-link">October 18, 1983</time>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
              <GiMailbox />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location:</p>
                <address >Shangisha Magodo Lagos</address>
              </div>
            </li>
          </ul>
       </div>
    </aside>
  );
};

export default Aside;
