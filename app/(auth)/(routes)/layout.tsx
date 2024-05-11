type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <section className="h-full w-full flex items-center justify-center">
      {children}
    </section>
  );
}
