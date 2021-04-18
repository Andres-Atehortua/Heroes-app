// Configuración

//Importación para las ayudas de los tests
import '@testing-library/jest-dom';

//Importaciones para enzyme y su respectiva configuración
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//Configuración para los Snapshots
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
