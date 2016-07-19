
export default function (state = null, action) {

    switch (action.type) {
        case 'SEARCH_RESULT_RECEIVED':
            state = action;
            break;
        case 'LOADING_RESULT':
            state = action;
            break;
        case 'ERROR_STATE':

            state = action;
            break;
        case 'SERVICE_ERROR':
             state = action;
             break;
    }
    return state;
}
