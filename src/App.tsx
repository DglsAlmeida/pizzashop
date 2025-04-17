import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { ThemeProvider } from "./providers/theme-provider";
import { router } from "./routes";

export const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </>
  );
};
