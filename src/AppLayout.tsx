import type { ReactNode } from "react";

const AppLayout = ({ title, children }: { title: string; children: ReactNode}) => {
  return (
    <div className="my-8">
        <h1 className="text-4xl font-semibold">{title}</h1>
        {children}
    </div>
  )
}

export default AppLayout