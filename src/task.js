export default function task(title, description, dueDate, isPriority = false) {
  let isFinished = false;

  const changeIsFinishedStatus = () => {
    isFinished = !isFinished;
  };

  return {
    title,
    description,
    dueDate,
    isPriority,
    isFinished,
    changeIsFinishedStatus,
  };
}
