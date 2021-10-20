import React, { Component } from "react";
import { toast } from "react-toastify";

import SearchBar from "./Components/SearchBar/SearchBar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Api from "./Components/Services/apiServices";
import Loader from "./Components/Loader/Loader";
import Modal from "./Components/Modal/Modal";
import Button from "./Components/Button/Button";

// function App() {
//   return <div className="App"></div>;
// }

class App extends Component {
  state = {
    query: "",
    images: [],
    loading: false,
    error: null,
    showModal: false,
    selectedImage: "",
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
    if (this.state.page !== 2 && prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ loading: true });
    Api.getPictures({ query, page })
      .then((hits) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch((_error) => this.setState({ error: true }))
      .finally(() => this.setState({ loading: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSelectImage = (imageUrl) => {
    this.setState({ selectedImage: imageUrl });
    this.toggleModal();
  };

  handlChangeQuery = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
    // console.log(e.currentTarget.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Api.getPictures(this.state.query, 1).then((response) =>
      this.setState({ images: response })
    );
  };
  render() {
    const { selectedImage, showModal, loading, images, error } = this.state;
    return (
      <div>
        {error && toast.error("OOO, something is wrong!")}
        <SearchBar
          query={this.state.query}
          handleChange={this.handlChangeQuery}
          onSubmit={this.handleSubmit}
        />
        <ImageGallery
          images={this.state.images}
          onSelect={this.handleSelectImage}
        />
        {images.length > 0 && <Button fetchImages={this.fetchImages} />}

        {loading && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={selectedImage} />
        )}
      </div>
    );
  }
}
//   handlChengeQuery = (e) => {
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preveventDefault();
//     getPictures(this.state.query, 1).them((response) =>
//       this.setState({ Image: response })
//     );
//   };

export default App;
