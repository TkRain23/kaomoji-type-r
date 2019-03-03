import React from 'react'
import CategoryButton from './CategoryButton'
import { Button } from 'semantic-ui-react'
import Logo from '../assets/images/logo.png'
import './Sidebar.css';
import KaomojiDB from  '../assets/kaomoji.js'

const categories = []

for (let key in KaomojiDB) {
    // console.log(key)
    categories.push(key)
}

const SidebarContainer = ({ setCategory }) => (

    <div class="sidebar">
        
        <div class = "branding">
            <img src={Logo} alt="Logo" class="konata" />
        </div>

        <div class = "categories">
            {
                categories.map((cat) => {
                return <Button color="twitter" onClick={(e)=> setCategory(cat)}>{cat}</Button>
                })
            }
            <Button class="allbtn" color="twitter" onClick={(e)=> setCategory('all')}>all</Button>
        </div>
    </div>
)

export default SidebarContainer
