import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=61558005699964">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </li>
              
                <li>
                    <a href="https://emea01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.instagram.com%2Ffellowbt_simulator%3Figsh%3DNzZ2aDc0OWF2b3Bq%26utm_source%3Dqr&data=05%7C02%7C%7C20db49e820294bb9a76408dc686af45a%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638500055767727140%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=MX1ClNi4khJlfVQHgjd%2FZAgwA0sZHLT9YnmmKFeaKwk%3D&reserved=0">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@fellowbot_simulator">
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
