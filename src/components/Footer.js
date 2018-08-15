import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/builtbyproxy" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/toctom" className="icon fa-github"><span className="label">Github</span></a></li>
                <li><a href="https://www.linkedin.com/in/builtbyproxy" className="icon fa-linkedin"><span className="label">Dribbble</span></a></li>
                <li><a href="mailto:hello@example.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
            </ul>
        </div>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer