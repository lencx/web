export default () => {
  const allCode = document.querySelectorAll('.gatsby-highlight');
  Array.from(allCode).map(item => {
    const lineNumWidth = item.querySelector('.line-numbers-rows').offsetWidth;
    return item.querySelector('code').style.paddingLeft = `${lineNumWidth + 5}px`;
  });
};