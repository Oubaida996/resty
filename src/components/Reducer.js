'use strict';

const initalState = {
    historyApi: []
};

function trackHistoryReducer(state = initalState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_HISTORY':
            console.log('payload', payload);
            const historyApi2 = [...state.historyApi, payload];
            console.log('...state.historyApi', historyApi2);
            return { historyApi: historyApi2 };

        default:
            return state;
    }

}


function addApiToHistory(dataForm) {
    // console.log('methode request :', dataForm);
    return {
        type: 'ADD_HISTORY',
        payload: dataForm
    }
}

export { trackHistoryReducer, addApiToHistory }