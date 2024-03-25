import MainContent from "./MainContent";

export default function Calendar() {
  const CalendarContent = () => (
    <main>
      <h3>Calendar page</h3>
    </main>
  );

  return <MainContent title="Calendar" body={CalendarContent()} />;
}
