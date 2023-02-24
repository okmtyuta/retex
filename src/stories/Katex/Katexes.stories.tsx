import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Katexes } from "../../packages/components/Katexes";

export default {
  title: "Katex/Katexes",
  component: Katexes,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Katexes>;

const Template: ComponentStory<typeof Katexes> = (args) => (
  <Katexes {...args} />
);

export const Inline = Template.bind({});
Inline.args = {
  mathString: String.raw`集合$G$が`,
};
