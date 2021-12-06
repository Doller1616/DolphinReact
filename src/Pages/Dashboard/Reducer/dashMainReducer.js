import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../Action/dashMainAction'

const initialState = {
    data: {
        isLoading: true,
        data: null,
        error: null
    }
};

const reducer = (state = initialState, payload ) => {
    
    switch (payload?.type) {
        case FETCH_DATA:
            return state

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload,
                error: null
            }

        case FETCH_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                data: payload,
                error: null
            }

        default:
            return state;
    }

};

export default reducer;