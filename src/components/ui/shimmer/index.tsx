import { cn } from "../../../utils/tailwind";

const Shimmer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-2xl bg-slate-500/10", className)}
      {...props}
    />
  )
}

export default Shimmer;
