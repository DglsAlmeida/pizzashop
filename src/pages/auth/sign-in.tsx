import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const handleSignInSubmit = async (data: SignInForm) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);

      toast.success("We've sent a notification link for your e-mail.", {
        action: {
          label: "retry",
          onClick: () => {},
        },
      });
    } catch {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="p-8">
      <Button asChild className="absolute top-8 right-8" variant="ghost">
        <Link to="/sign-up" className="">
          New store
        </Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Go to panel</h1>
          <p className="text-muted-foreground text-sm">
            Track your sales through the partner panel
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleSignInSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="email">Your e-mail</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Go to panel
          </Button>
        </form>
      </div>
    </div>
  )
}
