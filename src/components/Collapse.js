// ilk constructor --> state initialization (ilk durum olusur)
// render metodu ilk defa calisti
// onClicck  iventi ile showMore calisti
// setState state nesnesini güncelledi --> triggered render metodunu tekrar calistirdi
// render metodu güncel JSX i sayfada gösteriyor

import React from "react";

class Collapse extends React.Component {
  state = {
      showContent: false
    }

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  /* componenrDidMount() {
    console.log("Component Olusturuldu");
  }

  componentDidUpdate() {
    console.log("Component Güncellendi");
  } */

  render() {
    return (
      <div>
        <button className="btn btn-primary w-100" onClick={this.showMore}>
         {/* this.props.children.props.cardTitle */} 
         {React.Children.map(this.props.children, children => children.props.cardTitle)}

        </button>

        {this.state.showContent ? (
          <div className="collapse show">
            {/* this.props.children */}
           {React.Children.map(this.props.children, children => children.props.cardTitle)}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
