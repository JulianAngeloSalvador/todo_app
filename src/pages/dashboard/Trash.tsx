import MainContent from "./MainContent";

export default function Trash() {
  const TrashContent = () => (
    <main>
      <h3>Bin</h3>
    </main>
  );

  return <MainContent title="Trashbin" body={TrashContent()} />;
}
