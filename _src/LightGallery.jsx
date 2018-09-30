import React, {Component} from 'react';
import HelloDom from './Hello';
import $ from 'jquery';
import 'lightgallery';

export default class Home extends Component {
    onLightGallery = node => {
        this.lightGallery = node;
        $(node).lightGallery();
    }

    componentWillUnmount() {
        $(this.lightGallery).data('lightGallery').destroy(true);
    }

    render() {
        return (
            <div className="home-main-wrapper">
                <div className="catalog-body">
                    <div id="lightgallery" ref={this.onLightGallery}>
                        <a href="src">
                            <img alt="thumbnail" />
                        </a>
                        <a href="src">
                            <img alt="thumbnail" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
