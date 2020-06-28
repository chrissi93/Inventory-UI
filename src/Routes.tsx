import AddMaterial from "./views/addMaterial-ui"
import Inventory from "./views/inventory-ui"

const Routes = [
    {
        path: '/addMaterial',
        component: AddMaterial
      }
    ,
    {
        path: '/inventory',
        component: Inventory
    }
] 

export default Routes;