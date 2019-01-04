export const loadingReducer = (state = {}, action) => {
    const {type, animal} = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

    if (!matches) return state;

    const [, requestName, requestState] = matches;
    return {
        ...state,
        [requestName]: requestState === 'REQUEST',
        ['animal']: animal ? animal : {},
    };
};

export const errorReducer = (state = {}, action) => {
    const {type, error} = action;
    const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

    if (!matches) return state;

    const [, requestName, requestState] = matches;
    return {
        ...state,
        [requestName]: requestState === 'FAILURE' ? error : '',
    };
};