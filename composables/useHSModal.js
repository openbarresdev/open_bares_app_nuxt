export const useHSModal = (modalId) => {
  let modalInstance = null;

  const initModal = () => {
    if (process.client && typeof HSOverlay !== "undefined") {
      const modalElement = document.querySelector(modalId);
      if (
        modalElement &&
        !modalElement.classList.contains("--prevent-on-load-init")
      ) {
        modalElement.classList.add("--prevent-on-load-init");
      }

      // modalInstance = new HSOverlay(modalId);
      
        try {
          const existingInstance = HSOverlay.getInstance(modalElement);
          if (!existingInstance) {
            modalInstance = new HSOverlay(modalElement);
          } else {
            modalInstance = existingInstance;
          }
          // Enhanced backdrop management
          modalElement.addEventListener("open.hs.overlay", () => {
            cleanupDuplicateBackdrops();
          });

          modalElement.addEventListener("close.hs.overlay", () => {
            setTimeout(cleanupDuplicateBackdrops, 150);
          });
        } catch (error) {
          console.error("Error initializing HSOverlay:", error);
        }
      
    }
  };

  const cleanupDuplicateBackdrops = () => {
    const backdrops = document.querySelectorAll(
      "[data-overlay-backdrop-template]"
    );
    if (backdrops.length > 1) {
      // Keep only the most recent backdrop
      for (let i = 0; i < backdrops.length - 1; i++) {
        backdrops[i].remove();
      }
    }
  };

  const openModal = () => {
    if (!modalInstance) {
      initModal();
    }
    if (typeof modalInstance.open !== "function") {
      // console.error("HSOverlay instance does not have open method");
      return false;
    }
    cleanupDuplicateBackdrops();
    modalInstance.open();
  };

  const closeModal = () => {
    if (modalInstance) {
      modalInstance.close();
      setTimeout(cleanupDuplicateBackdrops, 150);
    }
  };

  return {
    initModal,
    openModal,
    closeModal,
  };
};
