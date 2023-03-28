import React from 'react';

interface TextInput {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
