import { User } from './User';
import {CustomMap} from './CustomMap'
import {Company} from './Company'

const user = new User();
const customMap = new CustomMap('map');
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);