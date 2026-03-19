import React from 'react'
import { Link } from 'react-router-dom'


function Deliciousmenu() {
    return (
        <>
            <section className="menu-section">
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>Special selection</span></div>

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Delicious Menu</h2>
                    </div>

                    <div className="tabs-box menu-tabs">
                        <div className="buttons">
                            <ul className="tab-buttons clearfix">
                                <li className="tab-btn active-btn" data-tab="#tab-1"><span>Burmese Street Food</span></li>
                                <li className="tab-btn" data-tab="#tab-2"><span>Salads</span></li>
                                <li className="tab-btn" data-tab="#tab-3"><span>Classic</span></li>
                                <li className="tab-btn" data-tab="#tab-4"><span>Heritage Sets</span></li>
                                <li className="tab-btn" data-tab="#tab-5"><span>Wok Kissed Greens</span></li>
                                <li className="tab-btn" data-tab="#tab-6"><span>Drinks</span></li>
                                <li className="tab-btn" data-tab="#tab-7"><span>Desserts</span></li>
                            </ul>
                        </div>
                        <div className="tabs-content">

                            <div className="tab active-tab" id="tab-1">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab" id="tab-2">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad </Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu<span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin </Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish<span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab" id="tab-3">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab" id="tab-4">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper. Cucumber</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" id="tab-5">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper. Cucumber</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" id="tab-6">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper. Cucumber</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" id="tab-7">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Greek Salad</Link></h5></div><div className="price"><span>$25.50</span></div></div>
                                                    <div className="text desc"><Link to="#">Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Lasagne <span className="s-info">SEASONAL</span></Link></h5></div><div className="price"><span>$40.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Butternut Pumpkin</Link></h5></div><div className="price"><span>$10.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Tokusen Wagyu <span className="s-info">NEW</span></Link></h5></div><div className="price"><span>$39.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Olivas Rellenas</Link></h5></div><div className="price"><span>$25.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Avocados with crab meat, red onion, crab salad stuffed red bell pepper and  green bell pepper. Cucumber</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Opu Fish</Link></h5></div><div className="price"><span>$49.00</span></div></div>
                                                    <div className="text desc"><Link to="#">Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="open-timing">
                        <div className="hours">During winter daily from <span className="theme_color">7:00 pm</span> to <span className="theme_color">9:00 pm</span></div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Deliciousmenu