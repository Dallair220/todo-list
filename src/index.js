// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';
import task from './task';
import project from './project';

const todayDate = format(new Date(), 'dd/MM/yyyy');

const p1 = project('Default');
const t1 = task('Title', 'Description Lorem Ipsum', todayDate);
p1.addTask(t1);

console.log(p1);
