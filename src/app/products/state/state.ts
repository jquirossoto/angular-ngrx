import * as AppState from '../../state/state'
import { ProductState } from './product.state';

export interface State extends AppState.State {
  products: ProductState;
}


