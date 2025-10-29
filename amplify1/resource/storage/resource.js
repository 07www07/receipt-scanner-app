import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "receiptImages",
  access: allow => ({
    upload: allow.authenticated(),
    read: allow.authenticated(),
  }),
});
