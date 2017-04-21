import React,{ PropTypes} from 'react';
import {fountainTextG,fountainTextG_1,fountainTextG_2,fountainTextG_3,fountainTextG_4,fountainTextG_5,fountainTextG_6,fountainTextG_7} from 'style/loading.css'

const  Loading = ({ isLoading, onClose }) => {
    let loading = <span onClick={()=> onClose(true) }>加载完毕</span>;
    if(isLoading){
        loading = <div id="fountainTextG" onClick={()=> onClose(false) }><div id=" fountainTextG" className={fountainTextG + ' ' +fountainTextG_1}>L</div><div id="fountainTextG_2" className={fountainTextG + ' ' +fountainTextG_2}>o</div><div id="fountainTextG_3" className={fountainTextG+ ' ' + fountainTextG_3}>a</div><div id="fountainTextG_4" className={fountainTextG+ ' ' + fountainTextG_4}>d</div><div id="fountainTextG_5" className={fountainTextG+ ' ' + fountainTextG_5}>i</div><div id="fountainTextG_6" className={fountainTextG+ ' ' + fountainTextG_6}>n</div><div id="fountainTextG_7" className={fountainTextG+ ' ' + fountainTextG_7}>g</div></div>
    }
        return loading;
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Loading;