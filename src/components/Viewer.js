import { useState } from "react";
import { useLocation } from "react-router-dom";

const BASE_PATH = '/assets/'

function PDFViewDefault(){
    const [toggled, setToggle] = useState(true);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    // const file = searchParams.get('qr') || 'PC';
    const file = 'MAR292025965189-dup';
    const file2 = 'PL-BL No.AL-00325-B-BUTANE- NEW';

    return <div className="">
        <div className="page-title">Certificate status</div>
        <div className="pdf-view-container">
        <iframe src={BASE_PATH+file+'.pdf'} className="pdf-viewer"/>
        <div className="page-subheading">Package List</div>
        <iframe src={BASE_PATH+file2+'.pdf'} className="pdf-viewer _2"/>
        </div>
    </div>;
}

function PDFViewDefaultArab(){
    const [toggled, setToggle] = useState(true);
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    // const file = searchParams.get('qr') || 'PC';
    const file = 'MAR292025984175';
    const file2 = 'PL-BL No.AL-00325-B-BUTANE- NEW';

    return <div className="direction _ar">
        <div className="page-title text _arab">حالة الشهادة</div>
        <div className="pdf-view-container">
        <iframe src={BASE_PATH+file+'.pdf'} className="pdf-viewer"/>
        <div className="page-subheading text _arab">
قائمة الحزمة</div>
        <iframe src={BASE_PATH+file2+'.pdf'} className="pdf-viewer _2"/>
        </div>
    </div>;
}

export default {PDFViewDefault, PDFViewDefaultArab};