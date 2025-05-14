import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const BASE_PATH = 'https://generate.gov-om.co/saved-certificates/'

function PDFViewDefault(){
    const params = useParams();

    const id = params.id;
    const file = id+'_2';
    const file2 = id+'_3';

    return <div className="">
        <div className="page-title">Certificate status</div>
        <div className="pdf-view-container">
        <iframe src={BASE_PATH+file+'.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0'} className="pdf-viewer"/>
        <div className="page-subheading">Package List</div>
        <iframe src={BASE_PATH+file2+'.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0'} className="pdf-viewer _2"/>
        </div>
    </div>;
}

function PDFViewDefaultArab(){
    const params = useParams();

    const id = params.id;
    const file = id+'-dup';
    const file2 = id;

    return <div className="direction _ar">
        <div className="page-title text _arab">حالة الشهادة</div>
        <div className="pdf-view-container">
        <iframe src={BASE_PATH+file+'.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0'} className="pdf-viewer"/>
        <div className="page-subheading text _arab">
قائمة الحزمة</div>
        <iframe src={BASE_PATH+file2+'.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0'} className="pdf-viewer _2"/>
        </div>
    </div>;
}

export default {PDFViewDefault, PDFViewDefaultArab};