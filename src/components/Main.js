import React from 'react'
import EmojiList from './EmojiList'
import kaomoji from 'node-kaomoji'
import './Main.css'

const SidebarContainer = () => (
    <div class="main">
        <h2>-insert title-</h2>
        <EmojiList emojiCategory={kaomoji.angry} />
    </div>
)

export default SidebarContainer 