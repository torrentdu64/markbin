import React, {Component} from 'react';


class BinsShare extends Component {


    onShareClick(){
      const email = this.refs.email.value;
      Meteor.call('bins.share', this.props.bin, email);
    }

    renderShareList() {
      return this.props.bin.sharedWith.map( email => {
          return <button
          key={email}
          className="btn btn-default">{email}</button>
      });
    }

  render() {



    return (
      <footer className="bin-share" >
          <div className="input-group">
            <input className="form-control" />
            <div className="input-group-btn">
              <button
              onClick={this.onShareClick.bind(this)}
               className="btn btn-default">

              Share
              </button>
            </div>
          </div>
          <div>
           Shared With:
          </div>
          <div className="btn-group">

            {this.renderShareList()}
          </div>
      </footer >
      );
  }
}




export default BinsShare;
