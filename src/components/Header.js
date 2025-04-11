function Header({onChange}){
    return <div className="header-container container">
      <div className="header ">
        <div className="logo "><a href="https://eservices.chamberoman.om/"><img src="/assets/logo-en.png"/></a></div>
        <div className="nav-bar">
          <div> 
            <a href="https://omanchamber.om/">omanchamber.om</a>
          </div>
          <div className="split"></div>
          <div><a href="https://eservices.chamberoman.om/contact">Contact Us</a></div>
          <div className="split"></div>
          <div className="cursor" onClick={() => onChange('ar')}>العربية</div>
          <div className="split"></div>
          <div><a href="https://eservices.chamberoman.om/login">Login</a></div>
      </div>
      </div>
    </div>
}

function HeaderArab({onChange}){
  return <div className="header-container container _ar">
  <div className="header">
    <div className="logo "><a href="https://eservices.chamberoman.om/"><img src="/assets/logo-en.png"/></a></div>
    <div className="nav-bar">
      <div><a href="https://eservices.chamberoman.om/login">دخول</a></div>
      <div className="split"></div>
      <div className="cursor" onClick={() => onChange('en')}>English</div>
      <div className="split"></div>
      <div><a href="https://eservices.chamberoman.om/contact">اتصل بنا</a></div>
      <div className="split"></div>
      <div> 
        <a href="https://omanchamber.om/">omanchamber.om</a>
      </div>
  </div>
  </div>
</div>
}

export default {Header, HeaderArab};