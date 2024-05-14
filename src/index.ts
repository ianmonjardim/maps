import { Company } from './Company';
import { CustomMaps } from './CostumMap';
import { User } from './User';

const user = new User();
const company = new Company();
const customMap = new CustomMaps('map');

customMap.addMarker(user);
customMap.addMarker(company);
