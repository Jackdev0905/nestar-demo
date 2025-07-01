import {
  FacebookOutlined,
  Instagram,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Stack className="footer">
      <div className="footer-menu container">
        <div className="left">
          <div className="logo">
            <img src="/img/logo/logoWhite.svg" alt="nestar" />
          </div>
          <div className="phone">
            <span>Total Free Customer Care</span>
            <p>+(0) 123 050 945 02</p>
          </div>
          <div className="email">
            <span>Nee Live</span>
            <p>hi@homez.com</p>
            <span>Support?</span>
          </div>
          <div className="social">
            <p>Follow us on social media</p>
            <div className="media">
              <Link href={""}>
                <FacebookOutlined />
              </Link>
              <Link href={""}>
                {" "}
                <Telegram />
              </Link>
              <Link href={""}>
                <Instagram />
              </Link>
              <Link href={""}>
                <Twitter />
              </Link>
            </div>
          </div>

          <span className="rights">
            © Nestar - All rights reserved. Nestar 2024{" "}
          </span>
        </div>

        <div className="right">
          <p>Keep Yourself Up to Date</p>
          <div className="subscribe">
            <input type="email" placeholder="Your email" />
            <span>Subscribe</span>
          </div>
          <div className="help">
            <div className="search">
              <p>Popular Search</p>
              <Link href={""}>Apartment for Rent</Link>
              <Link href={""}>Apartment Low to hide</Link>
            </div>

            <div className="links">
              <p>Quick Links</p>
              <Link href={""}>Terms of Use</Link>
              <Link href={""}>Privacy Policy</Link>
              <Link href={""}>Pricing Plans</Link>
              <Link href={""}>Our Services</Link>
              <Link href={""}>Contact Support</Link>
              <Link href={""}>FAQs</Link>
            </div>

            <div className="discover">
              <p>Discover</p>
              <Link href={""}>Seuol</Link>
              <Link href={""}>Busan</Link>
              <Link href={""}>Jeju</Link>
            </div>
          </div>

          <p className="term">Privacy · Terms · Sitemap</p>
        </div>
      </div>
    </Stack>
  );
};

export default Footer;
