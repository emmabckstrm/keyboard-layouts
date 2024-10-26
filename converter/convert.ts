function chunks(arr: string[], size: number) {
  const returnArray = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    returnArray.push(chunk);
  }
  return returnArray;
}

const removeThreeEmpty = (side: Array<Array<string>>) => {
  const last = side.slice(3)[0].slice(3);
  return [...side.slice(0, 3), last];
};

export const convert = (layers: Array<Array<string>>) => {
  const newLayers: Array<Array<string>> = [];
  layers.forEach((layer) => {
    const layerChunks = chunks(layer, 6);
    const left = layerChunks.slice(0, 4);
    const filteredLeft = removeThreeEmpty(left);
    const right = layerChunks.slice(4, layerChunks.length);
    const filteredRight = removeThreeEmpty(right);

    const reversedRight: Array<Array<string>> = [];
    filteredRight.forEach((row) => {
      reversedRight.push(row.reverse());
    });

    const newLayer: Array<Array<string>> = [];
    for (let i = 0; i < left.length; i++) {
      newLayer.push(filteredLeft[i]);
      newLayer.push(reversedRight[i]);
    }
    const flatLayer = newLayer.flat(1);
    newLayers.push(flatLayer);
  });

  return newLayers;
};
