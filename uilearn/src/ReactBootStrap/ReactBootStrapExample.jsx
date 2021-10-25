import React from 'react';
import AlertDismissible from './AlertExample';
import ButtonSizeExample from './ButtonSizeExample';
import CarouselExample from './CarouselExample';
import GridExample from './GridExample';
import MydModalWithGrid from './MyMpdalWithGrid';

export default function ReactBootStrapExample() {
  return (
    <div>
      <MydModalWithGrid />
      <CarouselExample />
      <ButtonSizeExample />
      <GridExample />
      <AlertDismissible />
    </div>
  );
}
