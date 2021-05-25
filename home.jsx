import React from 'react';
import { Component } from 'react';
import Header from '../components/header';
import Carousel from 'react-bootstrap/Carousel';
import { MDBIcon } from "mdbreact";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Footer from '../components/footer';
import IMG1 from '../assets/img1.PNG';
import IMG2 from '../assets/img2.PNG';
import IMG3 from '../assets/img3.PNG';
import { Link } from "react-router-dom";
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import IMG4 from '../assets/store.gif';
import IMG5 from '../assets/dollar.gif';
import IMG6 from '../assets/shop.gif';
import IMG7 from '../assets/logo.png';
import IMG8 from '../assets/iphone.jpg';
import IMG9 from '../assets/walmart.jpg';
import IMG10 from '../assets/wallpaper.jpg';
import IMG11 from '../assets/aliexpress.jpg'
import AOS from 'aos';
import {connect} from 'react-redux';
import {set_data} from '../store/action';

const style = {

    countup: {

    },
};

class Home extends Component {

    constructor(props) {
        super(props);
        this.stats = React.createRef();
        this.state = {
            didViewCountUp: false
        };
    }



    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    }

    open = (e) => {

        this.stats.current.style = 'display:block';
    }

    off = () => {
        this.stats.current.style = 'display:none';
    }

    

    render() {
let user= {name: "Mary", email: "danium@gmail.com"}


console.log("users", this.props.users)
        AOS.init({duration:2000});
        return (
            <div>
                <Header />
               

                <Carousel>
                    <Carousel.Item interval={500}>
                        <img 
                            className="d-block w-100"
                            src={IMG9}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Save Money. Live Better.</h1>
                            <h4>Low prices you can trust everyday</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={IMG11}
                            alt="Second slide"
                        />
                        <Carousel.Caption style={{color:"black"}}>
                            <h1>Smarter Shopping, Better Living!</h1>
                            <h4>Who is winning the ecommerce battle?</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={IMG10}
                            alt="Third slide"
                            
                        />
                        <Carousel.Caption style={{color:"black"}}>
                            <h1>Grab The Best!</h1>
                            <h4>Seize the best offer now!</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
               
                <div>
                    <input type="text" placeholder="Search" className="searchBar" />
                    <Link to="/Products"> <MDBIcon icon="search" className="searchIcon" /> </Link>
                    <h2 className="subTitle">You are just one click away from grabbing your favorite products at the best price!</h2>
                    <button onClick={() => this.props.set_data(user)}>SETDATA</button>
                    
                </div>


                <div className="cont">
                <img src={IMG7} onClick={this.open} className="logo" />
                </div>
                <div id="overlay" ref={this.stats} onClick={this.off}>
                    <div id="text"> 
                  
                    <img src="https://hitwebcounter.com/counter/counter.php?page=7758384&style=0010&nbdigits=4&type=ip&initCount=0" title="Free Counter" Alt="web counter"   border="0" width="100"/><br />
                    <h1>Total Visitors</h1>
                    <img src="https://hitwebcounter.com/counter/counter.php?page=7758382&style=0010&nbdigits=4&type=page&initCount=0" title="Free Counter" Alt="web counter" border="0" width="100"/>
                    
                    <h1>Total Views</h1>
                    
                    </div>
                
                </div>

               
                <div className="trending" >
                    <h2 data-aos="fade-right" >Top Trending Products</h2>
                    <hr /> <br />
                    <CardDeck data-aos="flip-up">
                        <Card>
                        <a href="/ProductDetails">
                            <Card.Img variant="top" src={IMG8} />
                            <Card.Body>
                                <Card.Title>IPHONE 12 PRO MAX</Card.Title>
                                <Card.Text>
                                <del>$1400.00</del> $1000.00
                                        <h4>Amazon</h4>
      </Card.Text>
    
                            </Card.Body>
                            </a>
                        </Card>
                        <Card>
                        <a href="/ProductDetails">
                            <Card.Img variant="top" src={IMG8} />
                            <Card.Body>
                                <Card.Title>IPHONE 12 PRO MAX</Card.Title>
                                <Card.Text>
                                <del>$1400.00</del> $1000.00
                                        <h4>Amazon</h4>
      </Card.Text>
                            </Card.Body>
                            </a>
                        </Card>
                        <Card>
                        <a href="/ProductDetails">
                            <Card.Img variant="top" src={IMG8} />
                            <Card.Body>
                                <Card.Title>IPHONE 12 PRO MAX</Card.Title>
                                <Card.Text>
                                <del>$1400.00</del> $1000.00
                                        <h4>Amazon</h4>
      </Card.Text>
                            </Card.Body>
                            </a>
                        </Card>
                    </CardDeck>
                </div>



                <div className="trending req">
                    <h2 data-aos="fade-right">How to Find the Best Product?</h2>
                    <hr /> <br />
                    <CardDeck data-aos="flip-up">
                        <Card className="animate">
                            <Card.Img variant="top" src={IMG1} className="cardImg" />
                            <Card.Body>
                                <Card.Title>Search The Database</Card.Title>
                                <Card.Text>
                                    Step One: The results contain the products that match your criteria.
      </Card.Text>
                            </Card.Body>
                        </Card>


                        <Card>
                            <Card.Img variant="top" src={IMG2} className="cardImg" />
                            <Card.Body>
                                <Card.Title>Set Your Requirements</Card.Title>
                                <Card.Text>
                                    Step Two: Redefine your requirements by choose the price range, platform or the best-rated products.
      </Card.Text>
                            </Card.Body>
                        </Card>


                        <Card>
                            <Card.Img variant="top" src={IMG3} className="cardImg" />
                            <Card.Body>
                                <Card.Title>Pick Your Products</Card.Title>
                                <Card.Text>
                                    Step Three: Check the products that fit your store. There are links to the supplier, similar products page, reviews and price info.
      </Card.Text>
                            </Card.Body>
                        </Card>


                    </CardDeck>
                </div>



                <div className="trending">

                    <CardDeck data-aos="zoom-in-up">
                        <Card>
                            <Card.Img variant="top" src={IMG4} className="cardImg" />
                            <Card.Body>
                                <Card.Title className="facts"><VisibilitySensor onChange={this.onVisibilityChange} offset={{
                                    top:
                                        10
                                }} delayedCall>
                                    <CountUp className={style.countup} start={0} end={this.state.didViewCountUp ? 3 : 0}
                                        duration={5} />
                                </VisibilitySensor> </Card.Title>
                                <Card.Text  className="fact">
                                    Stores
      </Card.Text>
                            </Card.Body>
                        </Card>


                        <Card>
                            <Card.Img variant="top" src={IMG5} className="cardImg" />
                            <Card.Body>
                                <Card.Title  className="facts">  <VisibilitySensor onChange={this.onVisibilityChange} offset={{
                                    top:
                                        10
                                }} delayedCall>
                                    <CountUp className={style.countup} start={0} end={this.state.didViewCountUp ? 961 : 0}
                                        duration={3} />
                                </VisibilitySensor> Billion+ </Card.Title>
                                <Card.Text  className="fact">
                                    Annual Sales
      </Card.Text>
                            </Card.Body>
                        </Card>


                        <Card>
                            <Card.Img variant="top" src={IMG6} className="cardImg" />
                            <Card.Body>
                                <Card.Title  className="facts">
                                    <VisibilitySensor onChange={this.onVisibilityChange} offset={{
                                        top:
                                            10
                                    }} delayedCall>
                                        <CountUp className={style.countup} start={0} end={this.state.didViewCountUp ? 147 : 0}
                                            duration={3} />
                                    </VisibilitySensor> Million+

                                    </Card.Title>
                                <Card.Text  className="fact">
                                    Products
      </Card.Text>
                            </Card.Body>
                        </Card>


                    </CardDeck>
                </div>

                <Footer />
            </div>


        )
    }
}

const mapStateToProps = (state) =>
({
    users: state.users
})

const mapDispatchToProp = (dispatch)=>
({ 
    set_data: (data) => dispatch(set_data(data))
})

export default connect(mapStateToProps, mapDispatchToProp)(Home);