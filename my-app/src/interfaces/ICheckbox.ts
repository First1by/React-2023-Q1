import React from 'react';

interface ICheckbox {
  Ref: React.RefObject<HTMLInputElement>;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default ICheckbox;
