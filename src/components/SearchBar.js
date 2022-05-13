import React from "react";

class SearchBar extends React.Component {
  //we can create object literals just like state object

  state = { term: "" };

  // to solve context issue or the error : can't read property 'state' of undefined
     constructor(props){
         super(props);
      this.onFormSubmit=this.onFormSubmit.bind(this);
   }

  //alternative approach to handle the onChange event occured in input tag
  onInputChange(event) {
    console.log(event.target.value);
  }

  onFormSubmit  (e){
    e.preventDefault();
    this.props.searchText(this.state.term);
    // this.props.searchText(this.state.term); //here it takes the function definiton of onSeacrchSubmit() using props object and triggers call back !
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          {/* <input type="text" onChange={this.onInputChange}/> */}
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          </form>
      </div>
    );
  }
}

export default SearchBar;
