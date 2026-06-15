import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@/components/ui/input-otp";
import { getEntry } from "@/components/docs/registry";

type Args = { maxLength: number; withSeparator: boolean; disabled: boolean };

const meta: Meta<Args> = {
  title: "Form & Input/Input OTP",
  tags: ["autodocs"],
  parameters: { docs: { description: { component: getEntry("input-otp")?.description } } },
  args: { maxLength: 6, withSeparator: true, disabled: false },
  argTypes: {
    maxLength: { control: { type: "number", min: 2, max: 8 } },
    withSeparator: { control: "boolean", description: "Split into two groups with a separator" },
    disabled: { control: "boolean" },
  },
  render: ({ maxLength, withSeparator, disabled }) => {
    const half = Math.ceil(maxLength / 2);
    const slot = (i: number) => <InputOTPSlot key={i} index={i} />;
    return (
      <InputOTP maxLength={maxLength} disabled={disabled}>
        {withSeparator ? (
          <>
            <InputOTPGroup>{Array.from({ length: half }, (_, i) => slot(i))}</InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>{Array.from({ length: maxLength - half }, (_, i) => slot(half + i))}</InputOTPGroup>
          </>
        ) : (
          <InputOTPGroup>{Array.from({ length: maxLength }, (_, i) => slot(i))}</InputOTPGroup>
        )}
      </InputOTP>
    );
  },
};
export default meta;
type Story = StoryObj<Args>;

export const Playground: Story = {};
export const Demo: Story = { name: "Demo", render: () => <>{getEntry("input-otp")!.demo}</> };
