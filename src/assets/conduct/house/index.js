const importAll = (requireContext) => {
    let images = {};
    requireContext.keys().forEach((item) => {
      images[item.replace('./', '')] = requireContext(item);
    });
    return images;
  };
  
  const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
  
  export default images;