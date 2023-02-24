import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Katex } from "../../packages/components/Katex";

export default {
  title: "Katex/Katex",
  component: Katex,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Katex>;

const Template: ComponentStory<typeof Katex> = (args) => <Katex {...args} />;

export const Inline = Template.bind({});
Inline.args = {
  equation: String.raw`\displaystyle\int_a^b \dfrac{z}{z - i} dz`,
  display: false,
};

export const Display = Template.bind({});
Display.args = {
  equation: String.raw`\displaystyle\int_a^b \dfrac{z}{z - i} dz`,
  display: true,
};
