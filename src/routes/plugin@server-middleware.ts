import { RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({ sharedMap }) => {
  sharedMap.set("MY_data", {
    message: "Hello from the server plugin.tsx",
  });
  console.log("onRequest plugin.ts", sharedMap);
};
