import Header from "../components/Header";

export default function Layout({ children, nightMode, nightModeButton }) {
  return (
    <>
      <Header nightMode={nightMode} nightModeButton={nightModeButton} />
      <main>{children}</main>
    </>
  );
}
