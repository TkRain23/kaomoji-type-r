import React from 'react'
import EmojiCell from './EmojiCell'
import './EmojiList.css'

const EmojiList = (props) => {
    const { emojiCategory } = props
    return(
        // return jsx
        <div className="emoji-grid">
            {emojiCategory.map((emoji, i) => <EmojiCell key={i} emojiText={emoji} />)}
        </div>
    )
}

export default EmojiList