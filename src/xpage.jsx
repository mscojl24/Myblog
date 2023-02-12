import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function Xpage () {

return(


        <div className='xpage_contents'>
            <span><FontAwesomeIcon icon={faTriangleExclamation}/> 아직 구현되지 않은 페이지 입니다!</span>
        </div>

    );
}

export default Xpage;