export class ActionError extends Error {
    static MESSAGE_NULL_TYPE_ERROR = 'Type should not be null';
}

class Action {
    static Create(type, payload) {
        const action = {};

        if (type) {
            action.type = type;
            if (payload) {
                action.payload = payload;
            }
        } else {
            throw new ActionError(ActionError.MESSAGE_NULL_TYPE_ERROR);
        }

        return action;
    }
}

export { Action };