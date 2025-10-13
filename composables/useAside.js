export const useAside = (isAsideOpen) => {
  const isOpen = isAsideOpen;

  function activateAside() {
    isOpen.value = true;
    // console.log("isOpen", isOpen.value);
  }

  function closeAside() {
    isOpen.value = false;
  }

  return {
    isOpen,
    activateAside,
    closeAside,
  };
};
