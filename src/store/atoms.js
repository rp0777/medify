import { atom } from "recoil";

export const hospitalListState = atom({
  key: "hospitalListState",
  default: [],
});

export const bookingDetailsState = atom({
  key: "bookingDetailsState",
  default: [],
});
