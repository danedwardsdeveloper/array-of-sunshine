export const Heading2 = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className="mb-2 mt-6 text-xl font-medium tracking-tight" {...props}>
    {children}
  </h2>
)

export const Heading3 = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className="mb-2 mt-6 text-lg font-medium tracking-tight" {...props}>
    {children}
  </h3>
)
