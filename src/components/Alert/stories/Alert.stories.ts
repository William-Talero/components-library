import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/components/Alert/Alert";
import { AlertProps } from "@/components/Alert/IAlert";

const meta: Meta<AlertProps> = {
  title: "Components/Atoms/Alerts/Alert",
  component: Alert,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "alert"],
    },
    message: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<AlertProps>;

export const Success: Story = {
  args: {
    type: "success",
    message:
      "Tus datos fueron enviados de manera exitosa. Te contactaremos muy pronto",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "Ha ocurrido un error. Por favor, intenta nuevamente.",
  },
};

export const AlertWarnning: Story = {
  args: {
    type: "alert",
    message: "Atención: Hay cambios pendientes en tu perfil.",
  },
};