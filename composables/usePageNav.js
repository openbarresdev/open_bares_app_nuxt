export const usePageNav = () => {
  const route = useRoute();
  
  const url = route.fullPath;
  const parentPath = url.replace(/\/[^/]*$/, "");
  const secondParentPath = parentPath.replace(/\/[^/]*$/, "");
  
  const goToNextPage = (customPath) => {
    navigateTo(`${secondParentPath}/${customPath}`);
  };

  return {
    url,
    parentPath,
    secondParentPath,
    goToNextPage
  };
};

