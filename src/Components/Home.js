import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../App.css";
import CoinList from './CoinList';


const Home = () => {

    const [coins, setCoins] = useState([]);
    const [market, setMarket] = useState([]);


    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/global')
            .then(res => {
                setMarket(res.data)
            })
            .catch(error => console.log(error))
    })

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data)
            })
            .catch(error => console.log(error))
    })
    return (
        <>
            <div className='head-main'>
                <h1 >CryptoCurrency Tracker</h1>
            </div>

            <div className='main2'>

                <div className='first'>
                    <div>
                    <h4>Active CryptoCurrencies</h4>
                    <p>{market.data?.active_cryptocurrencies}</p>
                    </div>
                <div>
                    <h4>Total Markets</h4>
                    <p>{market.data?.markets}</p>
                </div>
                </div>

                <div className='second'>
                    <div>
                        <h4>HELLO</h4>
                        <p>87567</p>
                    </div>

                    <div>
                        <h4>World</h4>
                        <p>958523</p>
                    </div>
                </div>
            </div>
            <div className='top5'>
                <h1>Top 5 CryptoCurrencies</h1>
            </div>
            <div className='cards'>
                {coins.map(coin => {
                    return (
                        <CoinList market_cap_rank={coin.market_cap_rank}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            volume={coin.market_cap}
                            price={coin.current_price}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Home
