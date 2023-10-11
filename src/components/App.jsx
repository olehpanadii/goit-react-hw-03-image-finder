import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'helpers/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    loading: false,
  };
  handleOnSubmit = e => {
    e.preventDefault();
    this.setState({
      query: e.target.elements.query.value,
      images: [],
      page: 1,
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      try {
        this.setState({ loading: true });
        const fetchData = await fetchImages(this.state.query, this.state.page);
        this.setState({ images: fetchData.hits });
      } catch (error) {
        toast.error(`Oops! Something went wrong!`);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <div>
        <Searchbar onSubmitQuery={this.handleOnSubmit} />
        <Loader loading={loading} />
        <ImageGallery images={images} />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    );
  }
}
