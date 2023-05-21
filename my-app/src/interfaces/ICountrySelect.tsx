import React from 'react';

interface ICountrySelect {
  Ref: React.RefObject<HTMLSelectElement>;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default ICountrySelect;
