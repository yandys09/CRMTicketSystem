import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { fetchUser } from "../../api/userApi";

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());

    //call tech api
    const user = await fetchUser();
    console.log(user);
  } catch (error) {
    dispatch(getUserFail(error));
  }
};
