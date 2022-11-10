import React from "react";
// import icons
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";
const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="http://wwww.facebook.com" target="_blank" rel="noreferrer">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="http://www.pinterest.com" target="_blank" rel="noreferrer">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="http://www.youtube.com" target="_blank" rel="noreferrer">
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
