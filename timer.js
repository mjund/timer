import GLib from "gi://GLib";
// import { fontsize } from "./vars.js";

var task = "port realm to postgress";
var remainingTime = 60 * 10; // 1 hour in seconds

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, "0")}:${
    minutes.toString().padStart(2, "0")
  }:${secs.toString().padStart(2, "0")}`;
}

const taskLabel = Widget.Label({
  label: task,
});

const timerLabel = Widget.Label({
  label: formatTime(remainingTime),
});

const box = Widget.Box({
  vertical: true,
  css:
    "padding: 1em; font-size: 1.5em; color: rgba(255,255,255,1); background-color: rgba(0,0,0,0.5);",
  child: timerLabel,
});

function updateTimer() {
  if (remainingTime > 0) {
    remainingTime--;
    timerLabel.label = formatTime(remainingTime);
    return true; // Keep the timer running
  }
  return false; // Stop the timer
}

// Start the timer
GLib.timeout_add(GLib.PRIORITY_DEFAULT, 1000, updateTimer);
export const timer = Widget.Window({
  css: "border-radius: 13px; background-color: transparent; ",
  name: "timer",
  anchor: ["bottom", "right"],
  layer: "overlay",
  margins: [10, 10],
  child: box,
});

export default timer;
