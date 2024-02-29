const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
};

module.exports = calculateNumber;
