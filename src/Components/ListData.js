import React, { useState, useEffect } from 'react'

import axios from 'axios';

const ListData = () => {

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
                        <tr>
                            <th>Rank</th>
                            <th>Image</th>
                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Current Price</th>
                            <th>Total Volume</th>
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
                                    <tr>
                                        <th scope="row">{lists?.market_cap_rank}</th>
                                        <img className='images' 
                                        src={lists?.image} alt="" />
                                        <td>{lists?.symbol}</td>
                                        <td>{lists?.name}</td>
                                        <td>${lists?.current_price}</td>
                                        <td>${lists?.market_cap}</td>
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
