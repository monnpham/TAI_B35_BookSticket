import { dataChair } from "../../component/data/danhSachGhe"

let initialState = {
    dataChair: dataChair,
}


export let bookStickets = (state = initialState, action) => {
    switch (action.type) {
        // case "GETDATA": {

        //     return { ...state }
        // }

        default: {
            return state
        }
    }
}