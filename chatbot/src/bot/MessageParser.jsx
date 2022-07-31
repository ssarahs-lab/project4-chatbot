import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message) {
      actions.handleHello();
    }
    if (message.includes('hey')) {
      actions.sampleHi();
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;