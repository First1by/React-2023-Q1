import React from 'react';

interface TextInput {
  Ref: React.RefObject<HTMLInputElement>;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default TextInput;
