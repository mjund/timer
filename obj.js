import { fontsize, task } from "./vars.js";

const taskLabel = Widget.Label({
  // css: "color: blue; padding: 1em; opacity: 0.9; border-radius: 12px; ",
  label: task,
});

const box = Widget.Box({
  css:
    `padding: 1em; font-size: ${fontsize}; color: rgba(255,255,255,1); background-color: rgba(0,0,0,0.5);`,
  child: taskLabel,
});

// const entry = Widget.Entry({
//   placeholder_text: "type here",
//   text: "initial text",
//   visibility: true, // set to false for passwords
//   onAccept: ({ text }) => print(text),
// });

// const editWind = Widget.Window({
//   css: "border-radius: 13px; ",
//   name: "task",
//   layer: "overlay",
//   margins: [10, 10],
//   child: entry,
// });

export const objWind = Widget.Window({
  css: "border-radius: 13px; background-color: transparent; ",
  name: "obj",
  anchor: ["top", "left"],
  layer: "overlay",
  margins: [10, 10],
  child: box,
});

export default objWind;
