/* eslint-disable jsx-a11y/anchor-is-valid */
export function Footer() {
  return (
    <footer className="w-full mt-8 bg-slate-50 p-3">
      <h2 className="text-3xl mx-10">KIYOMI</h2>
      <nav className="flex flex-col items-center justify-center mt-4 tablet:flex-row tablet:justify-between ">
        <ul className="flex space-x-3 mx-10 tablet:mb-3 tablet:text-sm mobile:text-sm mobile:mb-4">
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              회사 정보
            </a>
          </li>
          <li className="ml-1">
            <span className="text-gray-500">|</span>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              이용 약관
            </a>
          </li>
          <li className="ml-1">
            <span className="text-gray-500">|</span>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              개인정보 처리방침
            </a>
          </li>
          <li className="ml-1">
            <span className="text-gray-500">|</span>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              이용안내
            </a>
          </li>
        </ul>

        <div className="flex space-x-5 mx-10 mobile:mb-4">
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
