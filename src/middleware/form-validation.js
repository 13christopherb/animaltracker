const formValidationMiddleware = ({ dispatch, getState}) => next => action => {
    return next(action)
};

export default formValidationMiddleware;