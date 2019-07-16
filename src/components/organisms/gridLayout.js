import React from 'react'

class GridLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth
        }
        window.addEventListener('resize', () => {this.setState({width: window.innerWidth})})
    }


    render () {
        return (
            <div style={{display: "grid", gridTemplateColumns: (this.state.width < 680 ? "1fr" : "1fr 1fr")}}>
                {this.props.children}
            </div>
        )
    }
}

export default GridLayout