import React from 'react'
import CategoryButton from './CategoryButton'
import { Button } from 'semantic-ui-react'
import Logo from '../assets/images/logo.png'
import './Sidebar.css';

const categories = ['Positive', 'Negative', 'Neutral', 'Various', 'Animals', 'Other']

const SidebarContainer = () => (
    <div class="sidebar">
        
        <div class = "branding">
            <img src={Logo} alt="Logo" class="konata" />
        </div>

        <div class = "categories">
            {
                categories.map((cat) => {
                return <Button color="twitter">{cat}</Button>
                })
            }
            <Button class="allbtn" color="twitter">All</Button>
        </div>
    </div>
)

export default SidebarContainer