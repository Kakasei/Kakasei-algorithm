function pickGifts(gifts: number[], k: number): number {
  heapify(gifts);
  for (let i = 0; i < k; i++) {
    gifts[0] = Math.floor(Math.sqrt(gifts[0]));
    heapify(gifts);
  }

  let anwser = 0;
  for (let i = 0; i < gifts.length; i++) {
    anwser += gifts[i];
  }

  return anwser;
}

const heapify = (arr: Array<number>) => {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    sink(arr, i);
  }
};

const sink = (arr: Array<number>, i: number) => {
  const length = arr.length;
  while (true) {
    const l = 2 * i + 1;
    const r = 2 * i + 2;
    let largest = i;

    if (l < length && arr[l] > arr[largest]) {
      largest = l;
    }
    if (r < length && arr[r] > arr[largest]) {
      largest = r;
    }

    if (largest === i) {
      break;
    }

    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    i = largest;
  }
};
