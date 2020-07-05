import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import BBClogo from '../media/bbc logo.png'
import TIMElogo from '../media/Time_magazine_logo1.jpg'
import CNNlogo from '../media/cnn logo.png'
import FOXlogo from '../media/Fox-news-logo.png'
import BBlogo from '../media/bloomberg-logo.jpg'
import Gnewslogo from '../media/Google-news-logo.webp'
import Hindulogo from '../media/the-hindu-newspaper-logo.jpg'
import TOIlogo from '../media/TOI logo.png'
import Fortunelogo from '../media/fortune-logo.png'
import ESPNlogo from '../media/ESPN logo.jpg'
import NGlogo from '../media/national-geographic-logo.jpg'
import MTVlogo from '../media/mtv logo.webp'
import Redditlogo from '../media/redditLogo.png'

const sourceComponent = () => {
    return (
        <div>
            <div className="center d-none d-md-block text-center">
                <h4>Top Healines from your favourite source</h4>
                <Link to='/source/bbc-news'><img id="left-most-logo" className="logo-img" src={BBClogo} alt="bbc" /></Link>
                <Link to='/source/google-news-in'><img className="logo-img" src={Gnewslogo} alt="google" /></Link>
                <Link to='/source/the-hindu'><img className="logo-img" src={Hindulogo} alt="hindu" /></Link>
                <Link to='/source/the-times-of-india'><img className="logo-img" src={TOIlogo} alt="TOI" /></Link>
                <Link to='/source/fox-news'><img className="logo-img" src={FOXlogo} alt="FOX" /></Link>
                <Link to='/source/time'><img className="logo-img" src={TIMElogo} alt="TIME" /></Link>
                <Link to='/source/fortune'><img className="logo-img" src={Fortunelogo} alt="fortune" /></Link>
                <Link to='/source/cnn'><img className="logo-img" src={CNNlogo} alt="CNN" /></Link>
                <Link to='/source/espn'><img className="logo-img" src={ESPNlogo} alt="espn" /></Link>
                <Link to='/source/reddit-r-all'><img className="logo-img" src={Redditlogo} alt="reddit" /></Link>
                <Link to='/source/bloomberg'><img className="logo-img" src={BBlogo} alt="bloomberg" /></Link>
                <Link to='/source/national-geographic'><img className="logo-img" src={NGlogo} alt="natGeo" /></Link>
                <Link to='/source/mtv-news'><img id="right-most-logo" className="logo-img" src={MTVlogo} alt="MTV" /></Link>
            </div>
            <div className="container float-left dropdown d-md-none d-block mt-5">
                <button class="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Sources</button>

                <div class="dropdown-menu hidden-md-up">
                    <Link to='/source/bbc-news' className="dropdown-item">BBC News</Link>
                    <Link to='/source/google-news-in' className="dropdown-item">Google News In</Link>
                    <Link to='/source/the-hindu' className="dropdown-item">The Hindu</Link>
                    <Link to='/source/the-times-of-india' className="dropdown-item">The Times Of India</Link>
                    <Link to='/source/fox-news' className="dropdown-item">Fox News</Link>
                    <Link to='/source/time' className="dropdown-item">Time News</Link>
                    <Link to='/source/fortune' className="dropdown-item">Fortune</Link>
                    <Link to='/source/cnn' className="dropdown-item">CNN News</Link>
                    <Link to='/source/espn' className="dropdown-item">ESPN</Link>
                    <Link to='/source/reddit-r-all' className="dropdown-item">Reddit</Link>
                    <Link to='/source/bloomberg' className="dropdown-item">Bloomberg</Link>
                    <Link to='/source/national-geographic' className="dropdown-item">National Geography</Link>
                    <Link to='/source/mtv-news' className="dropdown-item">MTV News</Link>
                    <div class="dropdown-divider"></div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(sourceComponent);

