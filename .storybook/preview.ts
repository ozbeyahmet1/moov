import type { Preview } from "@storybook/react";
import "../src/styles/config.tailwind.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "grey",
      values: [
        {
          name: "grey",
          value: "#284352",
        },
      ],
    },
  },
};

export default preview;
