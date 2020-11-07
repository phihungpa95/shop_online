import React from 'react';

function CanvasMenu() {
    return (
        <div>
            {/* Offcanvas Menu Begin */}
            <div className="offcanvas-menu-overlay" />
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__close">+</div>
                <ul className="offcanvas__widget">
                    <li><span className="icon_search search-switch" /></li>
                    <li><a href="#"><span className="icon_heart_alt" />
                        <div className="tip">2</div>
                    </a></li>
                    <li><a href="#"><span className="icon_bag_alt" />
                        <div className="tip">2</div>
                    </a></li>
                </ul>
                <div className="offcanvas__logo">
                    <a href="./index.html"><img src="img/logo.png" alt /></a>
                </div>
                <div id="mobile-menu-wrap" />
                <div className="offcanvas__auth">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </div>
            {/* Offcanvas Menu End */}
        </div>

    );
}

export default CanvasMenu;