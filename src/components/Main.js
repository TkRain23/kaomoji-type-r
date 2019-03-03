import React from 'react'
import EmojiList from './EmojiList'
import KaomojiDB from  '../assets/kaomoji.js'
import './Main.css'

const MainContainer = (props) => (
    <div class="main">
        <EmojiList selectedCategory={props.cat} emojiCategory={Object.keys(KaomojiDB[props.cat])} />
    </div>
)

export default MainContainer  