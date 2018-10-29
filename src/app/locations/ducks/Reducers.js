import { types} from "./Types";

const initialState = {
    locations: []
};

export default function locationsReducer(state=initialState, action) {
    switch (action.type) {
        case types.GET_LOCATIONS_SUCCESS:
            return {
                ...state,
                locations: action.locations
            };
        default:
            return state
    }
}