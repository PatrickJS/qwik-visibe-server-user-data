import {
  $,
  component$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { server$, type DocumentHead } from "@builder.io/qwik-city";

export const getData = server$(function () {
  // console.log("this", this);
  const data = this.sharedMap.get("MY_data");
  console.log("getData", data);
  return { message: "Hello from the server$", data };
});

export default component$(() => {
  const data = useSignal<{
    message: string;
    data: any;
  }>();

  const updateData = $(async () => {
    data.value = await getData();
  });

  useTask$(() => updateData());

  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
      <button onClick$={() => updateData()}>refresh data</button>
      <pre>{JSON.stringify(data.value, null, 2)}</pre>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
