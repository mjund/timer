var task = "";

const editButton = Widget.Button({
  onClicked: () => {
    entry.grab_focus();
  },
});

const myLabel = Widget.Label({
  css:
    "color: blue; padding: 1em; background-color: rgba(0, 0, 0, 0.9); border-radius: 12px; ",
  label: task,
});

const entry = Widget.Entry({
  placeholder_text: "type here",
  text: task,
  focusOnClick: true,
  visibility: true, // set to false for passwords
  onChange: ({ text }) => {
    task = text;
  },
  onAccept: ({ text }) => print(text),
});

const box = Widget.Box({
  hpack: "center",
  children: [
    myLabel,
    entry,
    editButton,
  ],
  setup: (self) => {
    self.hook(App, (_, __, visible) => {
      if (visible) {
        entry.text = "";
        entry.grab_focus();
      }
    });
  },
});

const myBar = Widget.Window({
  css: "border-radius: 13px; ",
  name: "tog",
  anchor: ["top", "left"],
  layer: "overlay",
  margins: [10, 10],
  child: box,
});

export default myBar;
