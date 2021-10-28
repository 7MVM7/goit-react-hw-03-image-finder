import React, { Component } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Api from "./Components/Services/apiServices";
import Loader from "./Components/Loader/Loader";
import Modal from "./Components/Modal/Modal";
import Button from "./Components/Button/Button";

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

  // componentDidUpdate(_prevProps, prevState) {
  //   const prevSearchQuery = prevState.query;
  //   const nextSearchQuery = this.state.query;
  //   if (prevSearchQuery !== nextSearchQuery) {
  //     this.fetchImages();
  //   }

  //   if (prevState.page !== this.state.page && this.state.page !== 2) {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  componentDidUpdate(_prevProps, prevState) {
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

  // componentDidUpdate(_, prevState) {
  //   if (prevState.query !== this.state.query) {
  //     this.fetchImages();
  //   }
  //   if (this.state.page !== 2 && prevState.page !== this.state.page) {
  //     window.scrollTo({
  //       top: document.documentElement.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSelectImage = (imageUrl) => {
    this.setState({ selectedImage: imageUrl });
    this.toggleModal();
  };

  handleSubmit = (Squery) => {
    this.setState({ images: [], query: Squery, page: 1 });
  };

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
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((_error) => this.setState({ error: true }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { selectedImage, showModal, loading, images, error } = this.state;
    return (
      <div>
        {error && toast.error("OOO, something is wrong!")}
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery
          images={this.state.images}
          onSelect={this.handleSelectImage}
        />
        {images.length > 0 && <Button fetchImages={this.fetchImages} />}

        {loading && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={selectedImage} />
        )}
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    );
  }
}

export default App;
