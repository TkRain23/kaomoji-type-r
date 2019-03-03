import React from 'react'
import './EmojiCell.css'

const EmojiCell = ({emojiText}) => {
    return (
        <div className="emoji-cell">
            <pre>
                <code>
                    <button id="button" className="kaomoji" data-clipboard-text={emojiText}>{emojiText}</button>
                </code>
            </pre>
        </div>
    )
}

export default EmojiCell