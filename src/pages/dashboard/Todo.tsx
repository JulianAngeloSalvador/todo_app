import { useEffect, useState } from "react";
import MainContent from "./MainContent";
import { format, isSameDay, parse } from "date-fns";

export default function Todo() {
  const date = format(new Date(), "dd MMMM");
  const [today, setToday] = useState(false);

  useEffect(() => {
    const isToday = parse(date, "dd MMMM", new Date());
    const sameDay = isSameDay(new Date(), isToday);
    setToday(sameDay);
  }, []);

  const TodoContent = () => (
    <main className="p-4">
      <header className="flex justify-between items-center font-bold">
        <h3 className="text-subtitle">{today ? `Today, ${date}` : date}</h3>
        <button className="cta-btn cta-base-pad rounded-md">New Task</button>
      </header>
    </main>
  );

  return <MainContent title="Todo" body={TodoContent()} />;
}
