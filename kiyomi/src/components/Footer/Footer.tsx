/* eslint-disable jsx-a11y/anchor-is-valid */

import classes from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <h2 className="text-3xl mx-10">KIYOMI</h2>
      <nav className={classes.navigation}>
        <ul className={classes.infoList}>
          <li>
            <a href="#" className={classes.infoLink}>
              회사 정보
            </a>
          </li>
          <li className="ml-1">
            <span className="text-gray-500">|</span>
          </li>
          <li>
            <a href="#" className={classes.infoLink}>
              이용 약관
            </a>
          </li>
          <li className="ml-1">
            <span className="text-gray-500">|</span>
          </li>
          <li>
            <a href="#" className={classes.infoLink}>
              개인정보 처리방침
            </a>
          </li>
          <li className="ml-1">
            <span className="text-gray-500">|</span>
          </li>
          <li>
            <a href="#" className={classes.infoLink}>
              이용안내
            </a>
          </li>
        </ul>

        <div className="flex space-x-5 m-3 ">
          <a href="#" aria-label="페이스북">
            <img src="/assets/img/footer/facebook.svg" alt="페이스북 로고" />
          </a>
          <a href="#" aria-label="인스타그램">
            <img src="/assets/img/footer/instagram.svg" alt="인스타그램 로고" />
          </a>
          <a href="#" aria-label="유튜브">
            <img src="/assets/img/footer/youtube.svg" alt="유튜브 로고" />
          </a>
          <a href="#" aria-label="링크드인">
            <img src="/assets/img/footer/linkedin.svg" alt="링크드인 로고" />
          </a>
        </div>
      </nav>
      <small className="text-gray-400 mx-10">
        &copy; 2023 KIYOMI ALL RIGHTS RESERVED.
      </small>
    </footer>
  );
}
