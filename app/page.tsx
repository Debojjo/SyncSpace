import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";


const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {


  return (
    <main
      className="
        flex h-full flex-col items-center justify-center bg-gradient-to-br 
        from-blue-600 via-teal-500 to-green-500 relative overflow-hidden
        before:absolute before:bottom-0 before:w-[120%] before:h-[50%] 
        before:bg-teal-700 before:rounded-full before:blur-3xl before:opacity-40 
        after:absolute after:top-0 after:w-full after:h-[25%] 
        after:bg-gradient-to-b after:from-black/30 after:to-transparent
      "
    >
      <div className="space-y-5 text-center">
        <h1 className={cn(
          "text-4xl font-semibold text-black drop-shadow-md",
           font.className,
        )}>
          Welcome to SyncSpace
        </h1>
        <p className="text-zinc text-2xl">Your Go-To Event Manager
        </p>
        <div>
       <LoginButton>
         <Button variant="default" size="lg">
          Sign In
          </Button>
       </LoginButton>
       </div>
      </div>
    </main>
  );
}
