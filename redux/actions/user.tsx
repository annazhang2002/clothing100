import { UPDATE_NAME } from "../constants/user";

const updateName = (name: String) => {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}
export { updateName };