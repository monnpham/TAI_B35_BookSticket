import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dataChair } from '../data/danhSachGhe'

class ItemChair extends Component {
    renderThead = () => {
        return (
            <thead>
                {dataChair.map((item) => (
                    <tr key={item.hang}>
                        <tr></tr>
                        {item.hang === '' &&
                            item.danhSachGhe.map((ghe) => (
                                <td key={ghe.soGhe} className={ghe.soGhe}>
                                    {ghe.soGhe}
                                </td>
                            ))}
                    </tr>
                ))}
            </thead>
        );
    };
    renderTbody = () => {
        return (
            <tbody>
                {dataChair.map((item) => (
                    <tr key={item.hang}>
                        <td>{item.hang}</td>
                        {item.hang !== '' &&
                            item.danhSachGhe.map((ghe) => (
                                <td key={ghe.soGhe} className={ghe.soGhe.substring(1, 2)}>
                                    <button className="seat-button"></button>
                                </td>
                            ))}
                    </tr>
                ))}
            </tbody>
        )
    }
    render() {
        return (
            <table>
                {this.renderThead()}
                {this.renderTbody()}
            </table>

        )
    }
}

let mapStateToProps = (state) => {
    //state : đến từ Store của redux
    return {
        dataChair: state,
    }
}
// đẩy data từ component len reducer của store (update data state của redux)
let mapDispathchToProps = (dispathch) => {
    return {
        // handelStateData: () => {
        //     let action = {
        //         type: "GETDATA",
        //     }
        //     dispathch(action)
        // },
        // handelDescrease: () => {
        //     let action = {
        //         type: "GIAM",
        //         payload: 10
        //     }
        //     dispathch(action)
        // }
    }
}
export default connect(mapStateToProps, mapDispathchToProps)(ItemChair)