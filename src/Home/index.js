import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (e) => {
        console.log('handleSubmit-------', e);
        console.log('handleSubmit-------');
    }

    render() {
        console.log('this.state-----', this.props.data);
        return (
            <div onClick={this.handleSubmit}>
                <button onClick={() => handleSubmit()}>OnSubmit</button>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    data: state.home
})

// const mapDispatchToProps = (dispatch) => {
//     console.log('mapDispatchToProps-----', dispatch);
// }

export default connect(mapStateToProps)(Home);