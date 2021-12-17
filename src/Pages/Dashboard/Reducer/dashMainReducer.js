import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../Action/dashMainAction'


const reducer = (state = {}, payload) => {

    const { type = "", data = null } = payload
    switch (type) {

        case FETCH_DATA:
            return {
                ...state,
                testCompo: {
                    isLoading: true,
                    data: null,
                    error: null
                }
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                testCompo: {
                    isLoading: false,
                    data,
                    error: null
                }
            }

        case FETCH_DATA_FAIL:
            return {
                ...state,
                testCompo: {
                    isLoading: false,
                    data: null,
                    error: data
                }
            }

        default:
            return state;
    }

};

export default reducer;