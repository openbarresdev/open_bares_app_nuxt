import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export default defineNuxtPlugin(() => {
  const notyf = new Notyf({
    duration: 4000,
    position: {
      x: "right",
      y: "bottom",
    },
    types: [
      {
        type: "success",
        background: "#10B981",
        icon: {
          className: "notyf__icon--success",
          tagName: "i",
        },
      },
      {
        type: "error",
        background: "#EF4444",
        icon: {
          className: "notyf__icon--error",
          tagName: "i",
        },
      },
      {
        type: "warning",
        background: "#F59E0B",
        icon: {
          className: "notyf__icon--warning",
          tagName: "i",
        },
      },
      {
        type: "info",
        background: "#3B82F6",
        icon: {
          className: "notyf__icon--info",
          tagName: "i",
        },
      },
    ],
  });

  return {
    provide: {
      notyf,
    },
  };
});
