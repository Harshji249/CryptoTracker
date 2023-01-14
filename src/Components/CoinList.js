import React from 'react'
// import CoinData from './CoinData';


const CoinList = ({ market_cap_rank, name, image, symbol, price, volume }) => {
        return (
        <>
            <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                    <img className=" images" src={image} alt="" />
                    <h5 class="card-title">{name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Symbol : {symbol}</h6>
                    <p class="card-text"></p>
                    <p class="card-link">Price : ${price}</p>
                    <p class="card-link">Market Cap : ${volume}</p>
                </div>
            </div>
        </>
    )
}
export default CoinList
