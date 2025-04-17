import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  const handleSignUpSubmit = async (data: SignUpForm) => {
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
        <Link to="/sign-in" className="">
          Go to login
        </Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create free account
          </h1>
          <p className="text-muted-foreground text-sm">
            Become a partner and starting selling!
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleSignUpSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Establishment name</Label>
            <Input
              id="restaurantName"
              type="text"
              {...register("restaurantName")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="managerName">Your name</Label>
            <Input
              id="managerName"
              type="managerName"
              {...register("managerName")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Your e-mail</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Your e-mail</Label>
            <Input id="phone" type="tel" {...register("phone")} />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            Finish register
          </Button>

          <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
            By continuing, you agree to the <a href="" className="underline underline-offset-2">terms of service</a> and{" "}
            <a href="" className="underline underline-offset-2">privacy policies</a>.
          </p>
        </form>
      </div>
    </div>
  );
};
