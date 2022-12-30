import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Html5QrcodeScanner} from "html5-qrcode"

Qrscanner.propTypes = {
  setModalFunc : PropTypes.func.isRequired,
  setStudentname: PropTypes.func.isRequired
}

function Qrscanner(props) {
  useEffect(() => {
    function onScanSuccess(decodedText) {
      props.setModalFunc(true);
      props.setStudentname(decodedText);
      html5QrcodeScanner.clear();
    }
    
    function onScanFailure(error) {
      console.log('onScanFailure', error)
    }
    
    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: {width: 250, height: 250} },
      /* verbose= */ false);
     html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  })
    
  return(
    <div>
      <div id="reader"></div>
    </div>
  )
}

export default Qrscanner;