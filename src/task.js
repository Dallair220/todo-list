export default function task(title, description, dueDate, isPriority = false) {
  const isFinished = false;
  return {
    title,
    description,
    dueDate,
    isPriority,
    isFinished,
  };
}
