import { BLOG } from "../actionType";

const initialValue = {
    blogData: []
}

export const BlogReducers = ((state = initialValue, action) => {
    switch (action.type) {
        case BLOG:
            return { ...state, blogData: [...state.blogData, action.payload] }

        default:
            return state
    }
})