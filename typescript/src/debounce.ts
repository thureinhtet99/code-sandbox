// js version

// const debounce = (fn, delay: number = 3000) => {
//   let timer: () => void;
//   return function (...para) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(this, para), delay);
//   };
// };

// ts version

const debounce = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number = 2500,
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(args), delay);
  };
};

debounce((query = "loading") => {
  console.log(query);
}, 2500)();
