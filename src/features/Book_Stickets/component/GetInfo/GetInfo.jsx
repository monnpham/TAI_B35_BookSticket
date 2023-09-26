import React, { Component } from 'react'

export default class GetInfo extends Component {
    render() {
        return (
            <div>
                <div className="info">
                    <p>Fill The Required Details Below And Select Your Seats
                    </p>
                    Name  <span className='color_red'>*</span><br />
                    <input type="text" /> <br />
                    Number of Seats <span className='color_red'> *</span> <br />
                    <input type="number" /> <br />
                    <button>Start Selecing</button>
                </div>
                <ul>
                    <li className='smallBox'>Selected Seat</li>
                    <li className='smallBox'>Reserved Seat</li>
                    <li className='smallBox'>Empty Seat</li>
                </ul>
            </div>
        )
    }
}
