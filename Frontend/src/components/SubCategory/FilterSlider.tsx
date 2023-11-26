import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { useState } from "react";

interface Props {
  min: number;
  max: number;
  step: number;
  initialValue: [number, number];
  onChange: (value: [number, number]) => void;
}

const FilterSlider = ({ min, max, step, initialValue, onChange }: Props) => {
  const [changedValues, setChangedValues] = useState(initialValue);
  const handleSliderChange = (values) => {
    onChange(values);
    setChangedValues(values);
  };

  return (
    <Slider
      value={changedValues}
      range
      allowCross={false}
      step={step}
      min={min}
      max={max}
      onChange={handleSliderChange}
      draggableTrack
    />
  );
};

export default FilterSlider;
