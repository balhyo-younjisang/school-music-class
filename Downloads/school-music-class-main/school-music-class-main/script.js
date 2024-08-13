const pitch = new Tone.PitchShift({
  pitch: 0
}).toDestination();

const sampler = new Tone.Sampler({
  "A4": "./sound/hoon.mp3"
}).connect(pitch);

const chordSound = new Tone.PolySynth(Tone.Synth, {
  volume: -5,
  oscillator: {
    type: "triangle",
  },
  envelope: {
    attack: 0.1,
    decay: 0.3,
    sustain: 0.4,
    release: 1.5,
  },
}).toDestination();

const melodySound = new Tone.PolySynth(Tone.Synth, {
  volume: -20,
  oscillator: {
    type: "square",
  },
  envelope: {
    attack: 0.1,
    decay: 0.3,
    sustain: 0.4,
    release: 1.5,
  },
}).toDestination();

const chords = {
  C: ["C4", "E4", "G4"],
  D: ["D4", "Gb4", "A4"],
  G: ["G4", "B4", "D5"],
  Em: ["E4", "G4", "B4"],
};

const kick = document.querySelector(`audio[data-key="kick"]`);
const hihat = document.querySelector(`audio[data-key="hihat"]`);
const snare = document.querySelector(`audio[data-key="snare"]`);

window.addEventListener("keydown", (e) => {
  if (e.key === "q") {
    kick.currentTime = 0;
    kick.play();
  }
  if (e.key === "w") {
    hihat.currentTime = 0;
    hihat.play();
  }
  if (e.key === "e") {
    snare.currentTime = 0;
    snare.play();
  }
});

const activeKeys = {};

document.addEventListener("keydown", async (event) => {
  if (activeKeys[event.key]) return;

  await Tone.start();
  // await sampler.load();
  activeKeys[event.key] = true;
  console.log(event.key);

  switch (event.key) {
    case "a":
      chordSound.triggerAttack(chords.C);
      break;
    case "s":
      chordSound.triggerAttack(chords.D);
      break;
    case "d":
      chordSound.triggerAttack(chords.G);
      break;
    case "f":
      chordSound.triggerAttack(chords.Em);
      break;
    case "z":
      melodySound.triggerAttack(["Db4"]);
      break;
    case "x":
      melodySound.triggerAttack(["C4"]);
      break;
    case "c":
      melodySound.triggerAttack(["Bb3"]);
      break;
    case "v":
      melodySound.triggerAttack(["Ab3"]);
      break;
    case "b":
      melodySound.triggerAttack(["G3"]);
      break;
    case "n":
      melodySound.triggerAttack(["F3"]);
      break;
    case "m":
      melodySound.triggerAttack(["Eb3"]);
      break;
    case 'ArrowRight':
      sampler.triggerAttack("C5");
      break;
    case 'ArrowLeft':
      sampler.triggerAttack("D5");
      break;
    case 'ArrowUp':
      sampler.triggerAttack("Bb4");
      break;
    case 'ArrowDown':
      sampler.triggerAttack("Eb4");
      break;
    default:
      break;
  }
});

document.addEventListener("keyup", (event) => {
  if (!activeKeys[event.key]) return;

  activeKeys[event.key] = false;

  switch (event.key) {
    case "a":
      chordSound.triggerRelease(chords.C);
      break;
    case "s":
      chordSound.triggerRelease(chords.D);
      break;
    case "d":
      chordSound.triggerRelease(chords.G);
      break;
    case "f":
      chordSound.triggerRelease(chords.Em);
      break;
    case "z":
      melodySound.triggerRelease(["Db4"]);
      break;
    case "x":
      melodySound.triggerRelease(["C4"]);
      break;
    case "c":
      melodySound.triggerRelease(["Bb3"]);
      break;
    case "v":
      melodySound.triggerRelease(["Ab3"]);
      break;
    case "b":
      melodySound.triggerRelease(["G3"]);
      break;
    case "n":
      melodySound.triggerRelease(["F3"]);
      break;
    case "m":
      melodySound.triggerRelease(["Eb3"]);
      break;
    case 'ArrowRight':
      sampler.triggerRelease("C5");
      break;
    case 'ArrowLeft':
      sampler.triggerRelease("D5");
      break;
    case 'ArrowUp':
      sampler.triggerRelease("Bb4");
      break;
    case 'ArrowDown':
      sampler.triggerRelease("Eb4");
      break;
    default:
      break;
  }
});
