import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';

const modal = document.querySelector("#modal")

const Search = function(props, ref) {

    let[open, setOpen] = useState(false);

    useImperativeHandle(ref, () =>{
        return {
            open: function() {
                setOpen(true)
            },
            close: close
        }
    })

    function close() {
        setOpen(false);
    }

    return ReactDOM.createPortal(
        <div className="search-model" style={{display: open ? 'block': 'none'}}>
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="search-close-switch" onClick={close}>+</div>
                <form className="search-model-form">
                    <input type="text" id="search-input" placeholder="Search here....." />
                </form>
            </div>
        </div>,
        modal
    )
}

export default forwardRef(Search)