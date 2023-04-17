// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';
import './style.css';
import task from './task';
import project from './project';

const todayDate = format(new Date(), 'dd/MM/yyyy');

const p1 = project('Default');
const t1 = task('Task 1', 'Description', todayDate);
const t2 = task('Task 2', 'Description', todayDate);
const t3 = task('Task 3', 'Description', todayDate);

p1.addTask(t1);
p1.addTask(t2);
p1.addTask(t3);

p1.removeTask(t3);

console.log(p1);
