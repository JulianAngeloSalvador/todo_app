import MainContent from "./MainContent";

export default function DashboardIndex() {
  const DashboardContent = () => <p>Placeholder</p>;

  return <MainContent title="Dashboard" body={DashboardContent()} />;
}
