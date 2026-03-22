const testButton = document.getElementById("text-btn") as HTMLElement;

// - marks T as variable of throttle function
// - extends function's params
// - return function's params with typeof Parameters
// - return callback fn

const throttle = <T extends (...params: any[]) => unknown>(
  fn: T,
  interval: number = 1000,
): ((...params: Parameters<T>) => void) => {
  let lastTime: number = 0;

  return function (this: any, ...params: Parameters<T>) {
    const current = Date.now();

    if (current - lastTime >= interval) {
      lastTime = current;
      fn.apply(this, params);
    }
  };
};

testButton.addEventListener(
  "click",
  throttle(() => console.log("scrolled", 2000)),
);
