import { createSelector } from "reselect";

const SelectUser = state => state.user;

export const SelecCurrenttUser = createSelector(
    [SelectUser],
    (user) => user.currentUser
)