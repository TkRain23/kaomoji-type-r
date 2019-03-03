import React from 'react'
import EmojiCell from './EmojiCell'
import './EmojiList.css'
import KaomojiSubcategory from './KaomojiSubcategory'
import KaomojiDB from  '../assets/kaomoji.js'


class EmojiList extends React.Component {  // turn into a class based components
    constructor(props) {
        super(props)

        this.state = {subcategory:this.props.emojiCategory[0]}
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({subcategory:nextProps.emojiCategory[0]})
    }

    render() {
        const { emojiCategory } = this.props // same as props.emojiCateogry
        return(
            // return jsx
            <div emjicat>
                {/* <KaomojiSubcategory title= {this.state.subcategory} /> */}
                <div className="emoji-grid">
                    {
                        emojiCategory.map((emoji, i) =>
                        <div className="kaomojiSection">
                            <div className="subcategory">
                                <h1>{emoji}</h1>
                            </div>
                            <div className="kaomojis">
                                {KaomojiDB[this.props.selectedCategory][emoji].map((emoji, i)=> <EmojiCell key={i} emojiText={emoji} />)}
                            </div>
                        </div>)}
                </div>
            </div>
            
        )
    }
}

export default EmojiList

// focus on section heading (keys) and then display the array of faces

{/* <EmojiCell key={i} emojiText={emoji} /> */}