import { ClerkProvider } from "@clerk/nextjs";
import type { PropsWithChildren } from "react";

const ClerkLayout = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider>
      <div className="h-full flex items-center justify-center flex-col gap-y-5 bg-slate-100">
        {children}
      </div>
    </ClerkProvider>
  );
};

export default ClerkLayout;
