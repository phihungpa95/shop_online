import { data } from 'jquery';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadImage from '../../../../components/LoadImage';


function Index() {
    const [data,setData] = useState({
        day : "",
        hours : "",
        minutes : "",
        second : "" 
    })
    useEffect(() =>{
        setInterval(()=>{
            let dayNow = new Date()
            let daySale = new Date(2020, 11, 2)
            let time = daySale - dayNow;
            let day = Math.floor(time / 1000 / 60 / 60 / 24);
            let hours = Math.floor(time / 1000 / 60 / 60 - day * 24);
            let minutes = Math.floor(time / 1000 / 60 - day * 24 * 60 - hours * 60);
            let second = Math.floor(time / 1000 - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);
            setData({
                day,
                hours,
                minutes,
                second
            })
        },1000)
    },[])
    useEffect(LoadImage, [])
    return (
        <section className="discount">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 p-0">
                        <div className="discount__pic">
                            <img src="img/discount.jpg" alt />
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="discount__text">
                            <div className="discount__text__title">
                                <span>Discount</span>
                                <h2>Summer 2019</h2>
                                <h5><span>Sale</span> 50%</h5>
                            </div>
                            <div className="discount__countdown" id="countdown-time">
                                <div className="countdown__item">
                                    <span>{data.day}</span>
                                    <p>Days</p>
                                </div>
                                <div className="countdown__item">
                                    <span>{data.hours}</span>
                                    <p>Hour</p>
                                </div>
                                <div className="countdown__item">
                                    <span>{data.minutes}</span>
                                    <p>Min</p>
                                </div>
                                <div className="countdown__item">
                                    <span>{data.second}</span>
                                    <p>Sec</p>
                                </div>
                            </div>
                            <Link to="/shop">Shop now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Index;