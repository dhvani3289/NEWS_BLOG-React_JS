import { BLOG } from "../actionType"

export const blog = (data) => {
    return {
        type: BLOG,
        payload: data
    }
}