// ilk constructor --> state initialization (ilk durum olusur)
// render metodu ilk defa calisti
// onClicck  iventi ile showMore calisti
// setState state nesnesini güncelledi --> triggered render metodunu tekrar calistirdi
// render metodu güncel JSX i sayfada gösteriyor





import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();

    this.state = {
      showContent: false
    }

 /* this.showMore = () => {
   console.log(this)
 } 

 this.showMore = this.showMore.bind(this) */
  }

 

  /* showMore() {
    this.setState({showContent: true});
  // console.log(this)
  } */


showMore = () => {
  this.setState({showContent: !this.state.showContent})
}



  render() {
   
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>Link with href</button>

        {this.state.showContent ? (
          <div className="collapse show">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
