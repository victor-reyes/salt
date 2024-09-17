import { api } from './api';

const main = document.querySelector('main')!;

api.getAllDevs().then(devs => console.log(`Devs: ${devs}`));
api.getDevById(1).then(dev => console.log(`Devs: ${dev}`));
