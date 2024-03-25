import MainContent from "./MainContent";

export default function Settings() {
  const SettingsContent = () => (
    <main>
      <h3>Settings page</h3>
    </main>
  );

  return <MainContent title="Settings" body={SettingsContent()} />;
}
