import type { Meta, StoryObj } from "@storybook/react";
// Adjust the import path as needed
import { Mail, ChevronRight } from "lucide-react"; // Ensure you have lucide-react installed
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: {
      control: "boolean",
    },
    asChild: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Email <Mail className="ml-2 h-4 w-4" />
      </>
    ),
  },
};

export const IconButton: Story = {
  args: {
    size: "icon",
    children: <Mail className="h-4 w-4" />,
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <a href="#test">Link as a Button</a>,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const AllVariantsAndSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <h3>Variants</h3>
      <div className="flex items-center gap-4">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <h3>Sizes</h3>
      <div className="flex items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <Mail />
        </Button>
      </div>

      <h3>States</h3>
      <div className="flex items-center gap-4">
        <Button disabled>Disabled</Button>
        <Button>
          With Icon <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  ),
};
