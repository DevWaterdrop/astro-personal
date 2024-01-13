export const getScrollPercent = () => {
  const { documentElement, body } = document;

  const {
    scrollTop: scrollTopDocument,
    scrollHeight: scrollHeightDocument,
    clientHeight: clientHeightDocument,
  } = documentElement;

  const { scrollTop: scrollTopBody, scrollHeight: scrollHeightBody } = body;

  const scrollTop = scrollTopDocument || scrollTopBody;
  const scrollHeight = scrollHeightDocument || scrollHeightBody;

  return (scrollTop / (scrollHeight - clientHeightDocument)) * 100;
};
