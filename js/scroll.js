export const scrollToTop = () => {
  const scrollBtn = document.querySelector("[scroll-to-top]");

  const topFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  scrollBtn.addEventListener("click", topFunction);
};
