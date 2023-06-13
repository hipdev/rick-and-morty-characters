import { Footer, Header } from "@/design-system/index";

export default function SiteLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main className="bg-zinc-900">
      <div className="main-wrapper">
        <Header />
      </div>
      {props.children}
      {props.modal}
      <Footer />
    </main>
  );
}
