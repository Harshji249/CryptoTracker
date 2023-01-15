import React, { useState, useEffect } from 'react'

import axios from 'axios';

const ListData = () => {
    function Convert(x){
    
        if(typeof(x)==='string'){
            x=Number(x);
        }
        if(Number(x)>1000000000){
            return "$"+ Number(x/1000000000).toFixed(2) + "B";
        }
        if(Number(x)>1000000){
                return "$"+Number(x/1000000).toFixed(2) + "M";
            }  
            
            
        if(Number(x)>1000){
            return "$"+Number(x/1000).toFixed(2) + "K";
        }
        else{
            return "$"+Number(x).toFixed(2)
        }   
    }

    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setList(res.data)
            })
            .catch(error => console.log(error))
    })
    return (
        <>
            <div className="list">
                <table className="table">
                    <thead>
                        <tr className='box'>
                            <th className='bx'>Rank</th>
                            <th className='bx'>Symbol</th>
                            <th className='bx name'>Name</th>
                            <th className='bx'>Current Price</th>
                            <th className='bx'>Total Volume</th>
                        </tr>
                    </thead>
                </table>
            </div>

            {
                list.map(lists => {
                    return (
                        <div className='list'>
                            <table className="table">
                                <tbody>
                                    <tr className='box'>
                                        <th className='bx' scope="row">{lists?.market_cap_rank}</th>
                                        <img className='images'
                                            src={lists?.image} alt="" />
                                        <td className='bx'>{lists?.symbol}</td>
                                        <td className='bx'>{lists?.name}</td>
                                        <td className='bx'>{Convert(lists?.current_price)}</td>
                                        <td className='bx'>{Convert(lists?.market_cap)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }

        </>
    )
}

export default ListData
