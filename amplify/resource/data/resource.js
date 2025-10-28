import { a, defineData } from "@aws-amplify/backend";

export const data = defineData({
  schema: a.schema({
    Receipt: a.model({
      date: a.string(),           // date of receipt
      vendor: a.string(),         // shopping store or title
      totalAmount: a.float(),     // total amount of the receipt
      items: a.json(),            // array of items with name, price, quantity
    }).authorization(allow => [allow.authenticated()]),
  }),
});
