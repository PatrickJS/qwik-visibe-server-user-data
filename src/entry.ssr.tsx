/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
  renderToStream,
  type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import { manifest } from "@qwik-client-manifest";
import Root from "./root";

export default function (opts: RenderToStreamOptions) {
  // console.log("Server data", opts.serverData);
  const serverData = opts.serverData as any;
  serverData.qwikcity.ev.sharedMap.set("MY_data", {
    message: "Hello from the server entry.srr.tsx",
  });
  console.log("serverData", serverData.qwikcity.ev.sharedMap.get("MY_data"));
  debugger;
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: "en-us",
      ...opts.containerAttributes,
    },
  });
}
