import {UPDATE_STATE} from "../types/employeeTypes";


export function updateState(data){
    console.log(data);
    return {
        type: UPDATE_STATE,
        payload: data
    }
}