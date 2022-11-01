import React, {Component} from 'react';

class DogProfile extends Component {
  render () {
    {console.log(this.props.src, "this.props.src")}
    return (
      <div className={'DogProfile'}>
        <img src={this.props.src} />
      </div>
    )
  }
}

export default DogProfile;
