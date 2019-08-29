import React from 'react'
import NoteTab from './NoteTab'
// import Note from './Note'
import PropTypes from 'prop-types'


export default class Main extends React.Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children[0].props.label
    }
  };

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab})
  };


  render() {
    const {
      onClickTabItem,
      props: {
        children
      },
      state: {
        activeTab
      }
    } = this;

    return (
      <div className="tabs">
      <h1> Main Container </h1>
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <NoteTab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }

}
