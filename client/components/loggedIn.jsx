var Main = require('./main.jsx');
module.exports = React.createClass({
  displayName : 'LoggedIn',

  postApi: function() {
    console.log();
    $.ajax({
      url: 'http://localhost:4568/data/user',
      method: 'POST',
      data: JSON.stringify(this.state.profile),
      contentType: "application/json",
      success: function(){
      },
      error:function(){
      }
    });
  },


  getApi: function() {
    $.ajax({
      url: 'http://localhost:4568/data/user',
      method: 'GET',
      contentType: "application/json",
      success: function(){
      },
      error:function(){
      }
    });
  },

  getInitialState: function() {
    return {
      profile: null
    }
  },

  componentDidMount: function() {
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        alert("Error loading the Profile");
      }
      //POST profile to API /user
      this.setState({profile: profile});
    }.bind(this));
  },

  render: function() {
    if (this.state.profile) {
      this.postApi();
      return ( <Main profile={this.state.profile} /> );
    } else {
      return (
        <div className="logged-in-box auth0-box logged-in">
          <h1 id="logo"><img src="https://cdn.auth0.com/blog/auth0_logo_final_blue_RGB.png" /></h1>
        </div>);
    }
  }
});