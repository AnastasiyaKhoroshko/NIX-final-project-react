import { addNumberResult } from '../app/numberResultSlice';
import { addDoorResult } from '../app/doorResultSlice';
import { addCoinResult } from '../app/coinResultSlice';
import { addDoorMain } from '../app/gameResultSlice';
import { addNumberMain } from '../app/gameResultSlice';
import { addCoinMain } from '../app/gameResultSlice';


export const startAgaine = (dispatch) => {
    dispatch(addNumberResult({
        type: "start",
    }))
    dispatch(addDoorResult({
        type: "start",
    }))
    dispatch(addCoinResult({
        type: "start",
    }))
    dispatch(addNumberMain({
        type: "start",
    }))
    dispatch(addDoorMain({
        type: "start",
    }))
    dispatch(addCoinMain({
        type: "start",
    }))
}