import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, t, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default function Footer() {
  return (
    <>
      <div id="footer-container">
        <div id="footer-logo-container">
          <Link to="/home">
            <img
              alt="logo"
              src="/assets/images/GT-logo.png"
              className="footer-logo"
            ></img>
          </Link>

          <div className="horizontal-footer">
            <img
              alt="full right arrow"
              src="/assets/icons/icon-phone.svg"
              className="right-arrow-icon"
            ></img>
            <div>922 26 557</div>
          </div>
          <div className="horizontal-footer">
            <img
              alt="full right arrow"
              src="/assets/icons/icon-email.svg"
              className="right-arrow-icon"
            ></img>
            <a href="mailto:Godtrening@online.no">Godtrening@online.no</a>
          </div>
          <div className="horizontal-footer">
            <img
              alt="full right arrow"
              src="/assets/icons/icon-instagram.svg"
              className="right-arrow-icon"
            ></img>
            <a
              href="https://www.instagram.com/guri_brekke_godtrening/"
              target="blank"
            >
              @godtrening
            </a>
          </div>
        </div>

        <div id="footer-link-container">
          <div className="footer-inner-container">
            <h1>Utforsk</h1>
            <div className="h-footer-divider"></div>

            <div className="horizontal-index-footer">
              <CustomLink to="/home" className="footer-page-links">
                <img
                  alt="full right arrow"
                  src="/assets/icons/icon-full-right-arrow.svg"
                  className="right-arrow-icon"
                ></img>
                Hjem
              </CustomLink>
            </div>
            <div className="horizontal-index-footer">
              <CustomLink to="/services" className="footer-page-links">
                <img
                  alt="full right arrow"
                  src="/assets/icons/icon-full-right-arrow.svg"
                  className="right-arrow-icon"
                ></img>
                Tjenester
              </CustomLink>
            </div>
            <div className="horizontal-index-footer">
              <CustomLink to="/media" className="footer-page-links">
                <img
                  alt="full right arrow"
                  src="/assets/icons/icon-full-right-arrow.svg"
                  className="right-arrow-icon"
                ></img>
                Media
              </CustomLink>
            </div>
            <div className="horizontal-index-footer">
              <CustomLink to="/contact" className="footer-page-links">
                <img
                  alt="full right arrow"
                  src="/assets/icons/icon-full-right-arrow.svg"
                  className="right-arrow-icon"
                ></img>
                Kontakt
              </CustomLink>
            </div>
          </div>

          <div className="footer-inner-container">
            <h1>Tjenester</h1>
            <div className="h-footer-divider"></div>

            <div className="horizontal-index-footer">
              <CustomLink to="/course" className="footer-page-links">
                <img
                  alt="full right arrow"
                  src="/assets/icons/icon-full-right-arrow.svg"
                  className="right-arrow-icon"
                ></img>
                Kurs
              </CustomLink>
            </div>
            <div className="horizontal-index-footer">
              <CustomLink to="/presentation" className="footer-page-links">
                <img
                  alt="full right arrow"
                  src="/assets/icons/icon-full-right-arrow.svg"
                  className="right-arrow-icon"
                ></img>
                Foredrag
              </CustomLink>
            </div>
            <div className="horizontal-index-footer">
              <CustomLink to="/consultant" className="footer-page-links">
                <img
                  alt="full right arrow"
                  src="/assets/icons/icon-full-right-arrow.svg"
                  className="right-arrow-icon"
                ></img>
                Konsulenttjenseter
              </CustomLink>
            </div>
            <div className="horizontal-index-footer">
              <CustomLink to="/dieting" className="footer-page-links">
                <img
                  alt="full right arrow"
                  src="/assets/icons/icon-full-right-arrow.svg"
                  className="right-arrow-icon"
                ></img>
                Kostveiledning
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
