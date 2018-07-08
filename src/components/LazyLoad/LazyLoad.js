import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './LazyLoad.css';

class LazyLoad extends Component {
  imgContainerElement = React.createRef();

  state = {
    active: false
  };

  static propTypes = {
    children: PropTypes.node.isRequired
  };

  componentDidMount() {
    this.lazyLoadHandler();

    document.addEventListener('scroll', this.lazyLoadHandler);
    window.addEventListener('resize', this.lazyLoadHandler);
    window.addEventListener('orientationchange', this.lazyLoadHandler);
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  lazyLoadHandler = () => {
    const { active } = this.state;
    let imgs = Array
      .from(this.imgContainerElement.current.children)
      .filter(v => v.nodeName === 'IMG');

    if (!active) {
      this.setState({
        active: true
      });

      setTimeout(() => {
        imgs.forEach(img => {
          if (
            (img.getBoundingClientRect().top <= window.innerHeight &&
            img.getBoundingClientRect().bottom >= 0) &&
            getComputedStyle(img).display !== 'none'
          ) {
            this.setAttrs(img);
            imgs = imgs.filter(v => v !== img);

            if (!imgs.length) {
              this.removeEventListeners();
            }
          }
        });

        this.setState({
          active: false
        });
      }, 200);
    }
  }

  setAttrs(img) {
    img.src = img.dataset.src;
    img.classList.add('fade-in');
    return img;
  }

  removeEventListeners() {
    document.removeEventListener('scroll', this.lazyLoadHandler);
    window.removeEventListener('resize', this.lazyLoadHandler);
    window.removeEventListener('orientationchange', this.lazyLoadHandler);
  }

  render() {
    const { children } = this.props;

    const images = React.Children.map(children, (child) => {
      // first remove src from images, assign them to data attr, and assign placeholder to src
      return React.cloneElement(child, {
        'data-src': child.props.src,
        'src': 'images/lazyload-placeholder.jpg'
      });
    });
    
    return (
      <div ref={this.imgContainerElement} className={style['img-container']}>
        { images }
      </div>
    );
  }
}

export default LazyLoad;
