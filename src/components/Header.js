import React from 'react'
import Logo from './Logo';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <Logo />
        <div className="content">
            <div className="inner">
                <h1>Tom Cotter</h1>
                <p>Welcome to my website, Below you will find some links to my Blog, Socials and interests</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
