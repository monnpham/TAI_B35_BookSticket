import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import GetInfo from '../component/GetInfo/GetInfo'
import ListChair from '../component/ListChair/ListChair'

class Book_Stickets extends Component {
    render() {
        return (
            <div>
                <div className="bg"></div>
                <div className="container ">
                    <h1>MOVIE SEAT SELECTION</h1>
                    <GetInfo />
                    <ListChair />
                </div>
            </div>
        )
    }
}


//lấy data từ redux chuyển thành props của component
let mapStateToProps = (state) => {
    //state : đến từ Store của redux
    return {
        dataChair: state,
    }
}
// đẩy data từ component len reducer của store (update data state của redux)
let mapDispathchToProps = (dispathch) => {
    return {
        handelStateData: () => {
            let action = {
                type: "GETDATA",
            }
            dispathch(action)
        },
        // handelDescrease: () => {
        //     let action = {
        //         type: "GIAM",
        //         payload: 10
        //     }
        //     dispathch(action)
        // }
    }
}
export default connect(mapStateToProps, mapDispathchToProps)(Book_Stickets)