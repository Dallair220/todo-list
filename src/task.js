// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';

const todayDate = format(new Date(), 'dd/MM/yyyy');

// Factory Function for new tasks
export default function task(
  title = 'default',
  description = 'default',
  dueDate = todayDate,
  isPriority = false
) {
  const isFinished = false;

  return {
    title,
    description,
    dueDate,
    isPriority,
    isFinished,
  };
}
