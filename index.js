var katzDeli = [];
function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome ${name} you are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
