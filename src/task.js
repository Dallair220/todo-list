export default function task(
  title,
  description,
  priority,
  dueDate,
  isFinished
) {
  return {
    title,
    description,
    priority,
    dueDate,
    isFinished,
  };
}
