// eslint-disable-next-line import/no-extraneous-dependencies
import { format } from 'date-fns';
import './style.css';
import task from './task';
import project from './project';
import projectSelectionHandler from './projectSelectionHandler';

const todayDate = format(new Date(), 'dd/MM/yyyy');

// Testing setup
const p1 = project('Default');
const t1 = task('Versohl Marias popo', 'Description', todayDate);
const t2 = task('Nochmal!', 'Description', todayDate);
const t3 = task('Task 3', 'Description', todayDate);
const p2 = project('Default2');
const t4 = task('Küss Schatz', 'DESCRIPTION', todayDate);

p1.addTask(t1);
p1.addTask(t2);
p1.addTask(t3);
p1.removeTask(t3);
p2.addTask(t4);

const projectList = [p1, p2];

projectSelectionHandler(projectList);

// export default projectList;
