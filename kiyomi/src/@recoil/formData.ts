// client.js

import { atom } from "recoil";

export const formDataAtom = atom({
  key: "formData",
  default: {
    username: "",
    password: "",
    phone: "",
  },
});
