import { FormEventHandler, ReactNode } from "react";

interface Props {
  onSubmit: FormEventHandler<HTMLFormElement>
  children: ReactNode;
  header: string;
}

export default function AuthFrom({ children, header, onSubmit }: Props) {
  return (
    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 grid gap-y-4 md:gap-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          { header }
        </h1>
        <form className="grid gap-3" onSubmit={onSubmit}>
          { children }
        </form>
      </div>
    </div>
  );
}
