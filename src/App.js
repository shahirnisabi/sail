import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import PDFViewDefault from './components/Viewer';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');

  useEffect(() =>{
    if(lang === 'en'){
      document.title = 'Certificate status | OCCI E-services';
    } else{
      document.title = 'حالة الشهادة | الخدمة الالكترونية غرفة تجارة وصناعة عمان';
    }
  },[lang])

  return (
    <div className="App">
      {lang === 'en'? <Header.Header onChange={setLang}/>: <Header.HeaderArab onChange={setLang}/> }
      <div className='header-bottom'></div>
      <div className='page-container container'>
        {lang === 'en'? <PDFViewDefault.PDFViewDefault/>: <PDFViewDefault.PDFViewDefaultArab/>}
      </div>
      {lang === 'en'? <Footer.Footer/>: <Footer.FooterArab/> }
    </div>
  );
}

export default App;
