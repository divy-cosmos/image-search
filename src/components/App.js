import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
// const App = () => {
//   return (
//     <>
//       <div className="ui container" style={{ marginTop: "10px" }}>
//         <SearchBar />
//       </div>
//     </>
//   );
// };

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.onSearchSubmit = this.onSearchSubmit.bind(this);
  //   }
  state = { images: [] };

  onSearchSubmit = async (term) => {
    // console.log(term);

    //axios network request is an asynchronous request ...it will take some amount of time for axios to reach provided url.

    // console.log(unsplash);
    const response = await unsplash.get("/search/photos", {
      params: {query: term}
    });

    this.setState({ images: response.data.results });

    //can make use of promise concept too.
    // .then(response=>
    //     console.log(response.data.results));
  };
  // `${console.log(this.onSearchSubmit)}` it refers to the function onSearchSubmit if we use without ()

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar searchText={this.onSearchSubmit} />
        {/* here we are providing function definition of onSearchSubmit() to the props object in SearchBar component so that it can access it and trigger the callback. */}
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
