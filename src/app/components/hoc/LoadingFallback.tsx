interface LoadingFallbackProps {
  id?: string;
}

export default function LoadingFallback({ id }: LoadingFallbackProps) {
  return (
    <div
      id={id}
      className="flex animate-pulse flex-col items-center justify-center space-y-4 rounded-lg bg-secondary/20 p-8 shadow-lg"
    >
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      <p className="text-lg font-medium text-muted-foreground">Chargement...</p>
      <div className="h-4 w-2/3 rounded bg-muted"></div>
      <div className="h-4 w-1/2 rounded bg-muted"></div>
    </div>
  );
}
