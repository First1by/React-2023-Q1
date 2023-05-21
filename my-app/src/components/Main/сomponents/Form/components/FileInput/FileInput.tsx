import React from 'react';
import './FileInput.css';

interface Ifile {
  value: string;
}

class FileInput extends React.Component<Ifile> {
  fileInput: React.RefObject<HTMLFormElement>;
  constructor(props: Ifile) {
    super(props);
    this.fileInput = React.createRef();
  }

  render() {
    return (
      <div className="file-load">
        <label>
          <span>Upload file:</span>
        </label>
        <input type="file" ref={this.props.value} />
      </div>
    );
  }
}

export default FileInput;
