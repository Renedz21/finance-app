import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <section>
      <div>Esta es una pagina protegida</div>
      <UserButton afterSignOutUrl="/" />
    </section>
  );
}
