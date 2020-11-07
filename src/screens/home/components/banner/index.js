import React, { useEffect, useRef } from 'react';
import LoadImage from '../../../../components/LoadImage';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

function product_thumbs(num) {
    var thumbs = document.querySelectorAll('.product__thumb a');
    thumbs.forEach(function (e) {
        e.classList.remove("active");
        if (e.hash.split("-")[1] == num) {
            e.classList.add("active");
        }
    })
}

function Index() {
    useEffect(LoadImage, [])

    let carousel = useRef(null)

    useEffect(() => {
        window.$(carousel.current).owlCarousel({
            loop: false,
            margin: 0,
            items: 1,
            dots: true,
            nav: false,
            navText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"],
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
            mouseDrag: false,
            startPosition: 'URLHash'
        }).on('changed.owl.carousel', function (event) {
            var indexNum = event.item.index + 1;
            product_thumbs(indexNum);
        });


    }, [])

    return (
        <section className="banner set-bg" data-setbg="img/banner/banner-1.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-8 m-auto">
                        <div ref={carousel} className="banner__slider owl-carousel">
                            <div className="banner__item">
                                <div className="banner__text">
                                    <span>The Chloe Collection</span>
                                    <h1>The Project Jacket</h1>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                            <div className="banner__item">
                                <div className="banner__text">
                                    <span>The Chloe Collection</span>
                                    <h1>The Project Jacket</h1>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                            <div className="banner__item">
                                <div className="banner__text">
                                    <span>The Chloe Collection</span>
                                    <h1>The Project Jacket</h1>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Index;