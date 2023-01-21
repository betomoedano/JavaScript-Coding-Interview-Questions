function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  const shirtColorInFirsRow =
    redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";

  for (let idx = 0; idx < redShirtHeights.length; idx++) {
    const redShirtHeight = redShirtHeights[idx];
    const blueShirtHeight = blueShirtHeights[idx];

    if (shirtColorInFirsRow === "RED") {
      if (redShirtHeight >= blueShirtHeight) return false;
    } else if (blueShirtHeight >= redShirtHeight) return false;
  }
  return true;
}
const red = [5, 8, 1, 3, 4];
const blue = [6, 9, 2, 4, 5];

module.exports = classPhotos;
