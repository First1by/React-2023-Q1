import React from 'react';

interface IRadio {
  Ref: React.RefObject<HTMLFormElement>;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default IRadio;
