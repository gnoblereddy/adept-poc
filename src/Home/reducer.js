import React from 'react';

const initialState = {
    data: { name: 'noble', age: '20', gender: 'male' }
}

export default function HomeReducer(state = initialState, action) {
    console.log('HomeReducer---------');
    switch (action.type) {
        case 'SUCESS':
            return Object.assign({}, state, action);
        case 'ERROR':
            return Object.assign({}, state, action);
        default:
            return state;
    }
}