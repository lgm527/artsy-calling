import React from 'react';

export default class Artsy extends React.Component {

    state = {
        data: {}
    }

    componentDidMount() {
        fetch('https://api.artsy.net/api/artists/andy-warhol', {
            headers: {
                'X-Xapp-Token': process.env.REACT_APP_ARTSY_KEY,
                'Accept': 'application/vnd.artsy-v2+json' 
            }
        })
        .then(res => res.json())
        .then(data => this.setState({data}))
    }

    render() {
        
        let { data } = this.state;

        return(
            <div className="Artsy">
                <h1>{data.name}</h1>
                <p>{data.biography}</p>
                
            </div>
        )
    }
};