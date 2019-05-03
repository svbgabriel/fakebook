import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './styles.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        author: 'Diego Schell Fernandes',
        avatar: 'images/avatar1.png',
        date: '2019-05-02T19:21:00',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique erat feugiat, lacinia turpis condimentum, dignissim orci. Pellentesque leo arcu, volutpat eu dapibus et, pulvinar vel felis. Etiam eget elit non orci ornare tincidunt sed sit amet nisl. Sed convallis arcu vitae ligula tempus, ut ullamcorper tortor consectetur. Cras sagittis velit eu volutpat ullamcorper. Integer at metus at magna interdum convallis vestibulum sit amet urna. Nullam vitae urna id ipsum congue rhoncus ut quis arcu. Integer eget ipsum eleifend, efficitur diam a, facilisis nulla. Nam id neque pulvinar leo aliquet congue. Pellentesque leo metus, consequat vel congue sit amet, aliquet ut diam. Pellentesque porttitor, velit in consectetur cursus, turpis nulla pulvinar nisl, nec congue elit ex et ligula.',
      },
      {
        id: 1,
        author: 'Rubia Savoski',
        avatar: 'images/avatar2.png',
        date: '2019-05-02T19:53:00',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum, quam eget fringilla mollis, quam est vehicula mi, non ullamcorper mauris tortor aliquet nulla. Vivamus lacinia tincidunt risus id luctus. Suspendisse sapien mauris, rutrum a ex eu, tempus feugiat velit. Donec porta tincidunt nisi, at vulputate ipsum ullamcorper a. Aliquam auctor risus lobortis, consequat massa non, posuere arcu. Praesent rhoncus vestibulum enim, eget condimentum lacus auctor et.',
      },
      {
        id: 2,
        author: 'Mr. Mustache',
        avatar: 'images/avatar3.png',
        date: '2019-05-02T20:25:00',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum, quam eget fringilla mollis, quam est vehicula mi, non ullamcorper mauris tortor aliquet nulla. Vivamus lacinia tincidunt risus id luctus. Suspendisse sapien mauris, rutrum a ex eu, tempus feugiat velit. Donec porta tincidunt nisi, at vulputate ipsum ullamcorper a. Aliquam auctor risus lobortis, consequat massa non, posuere arcu. Praesent rhoncus vestibulum enim, eget condimentum lacus auctor et.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <Post posts={posts} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
