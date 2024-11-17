const { speaker } = await Service.import("audio");

const slider = Widget.Slider({
  value: speaker.bind("volume"),
  onChange: ({ value }) => speaker.volume = value,
});

const audSlide = Widget.Window({
  name: "audio",
  child: slider,
});

export default audSlide;
