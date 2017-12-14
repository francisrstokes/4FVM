const clamp = (value, min, max) => (value < min)
? min
: (value > max)
  ? max
  : value;

const clamp16 = (value) => clamp(value, 0, 0xFFFF);

module.exports = {
  clamp,
  clamp16
};
