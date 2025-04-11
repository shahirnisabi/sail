function Footer() {
  return <div className="footer-container ">
    <div className="footer container">
      <div className="footer-links">
        <span>© Chamber of Commerce & Industry, Sultanate of Oman
        </span>
        <span>&nbsp;|&nbsp;</span>
        <a href="https://eservices.chamberoman.om/page/privacy-policy">
          Privacy Policy
        </a><span>&nbsp;|&nbsp;</span>
        <a href="https://eservices.chamberoman.om/page/terms-of-use">
          Terms of use
        </a>
      </div>
      <div className="brand">
        <div>
          Powered by
        </div>
        <a href="https://www.omandatapark.com">
          <img src="/assets/ODP-Logo.png" />
        </a>
      </div>
    </div>
  </div>
}

function FooterArab() {
  return <div className="footer-container ">
    <div className="footer container  _ar">
      <div className="footer-links">
      <span>©&nbsp;</span>
          <span>
            لغرفة تجارة وصناعة عمان ، سلطنة عمان 
        </span>
          <span>&nbsp;2017</span>
        <span>&nbsp;|&nbsp;</span>
        <a href="https://eservices.chamberoman.om/page/privacy-policy">
          سياسة خصوصية
        </a><span>&nbsp;|&nbsp;</span>
        <a href="https://eservices.chamberoman.om/page/terms-of-use">
          شروط الاستخدام
        </a>
      </div>
      <div className="brand _ar">
        <a href="https://www.omandatapark.com">
          <img src="/assets/ODP-Logo.png" />
        </a>
        <div>
          Powered by
        </div>
      </div>
    </div>
  </div>
}

export default { Footer, FooterArab };
