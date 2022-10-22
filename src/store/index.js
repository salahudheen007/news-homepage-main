import { createStore } from "vuex"
import Retro from '../assets/images/image-retro-pcs.jpg'
import Laptops from '../assets/images/image-top-laptops.jpg'
import Gaming from '../assets/images/image-gaming-growth.jpg'
 const state = {
    itemList: [
        {id:1,title:'Reviving Retro PCs',text:'What happens when old PCs are given modern upgrades?',image:Retro},
        {id:2,title:'Top 10 Laptops of 2022',text:'Our best picks for various needs and budgets.',image:Laptops},
        {id:3,title:'The Growth of Gaming',text:'How the pandemic has sparked fresh opportunities.',image:Gaming}]
    }

    export default createStore({
        state
    })