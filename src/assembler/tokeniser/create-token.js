// createToken :: String -> a -> Int -> Int -> Token
module.exports = (type, value, start, end) => ({
  type,
  value,
  start,
  end
});
