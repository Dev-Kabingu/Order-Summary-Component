import './OrderSummary.css'


const OrderSummary = () =>{
    return(
        <div className='container'>
            <div className="heroImage">
                {/* importing the hero image */}
<img src="./src/assets/images/illustration-hero.svg" alt="music illustration" srcset="" />
            </div>
            <div className="cardContent">
                    <h1>Order Summary</h1>
                    <p>You can now listen to millions of songs, audio books and podcast on any device anywhere you like.</p>
                
                <div className="annualPlan">
                    <img src="./src/assets/images/icon-music.svg" alt="" srcset="" />
                    <div className="annualPlantText">
                        <h2>Annual plan</h2>
                        <p>$59.99/year</p>
                    </div>
                    <a href="#">Change</a>
                </div>
                <button className='paymentBtn'><a href="">Proceed to Payment</a></button>
               <button className="cancelBtn"><a href="">Cancel Order</a></button>
                </div>
        

        </div>
        
    )
}

export default OrderSummary
