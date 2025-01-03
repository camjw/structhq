import LoadingSpinner from "./loading_spinner";

export default function CenteredLoadingSpinner({ text }: { text?: string }) {
  return (
    <div className="flex flex-1 flex-col w-full h-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <LoadingSpinner />
        {text && <p className="text-gray-7 text-xs">{text}</p>}
      </div>
    </div>
  );
}

export const CenteredLoadingSpinnerScreen = ({ text }: { text?: string }) => (
  <div className="h-screen w-full flex flex-col items-center min-h-[36rem]">
    <main className="flex-1 w-full relative">
      <CenteredLoadingSpinner />
      {text && <p className="text-gray-7 text-xs">{text}</p>}
    </main>
  </div>
);
