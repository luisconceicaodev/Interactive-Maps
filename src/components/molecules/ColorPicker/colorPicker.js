import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateColor } from "../../../redux/mapSlice";
import { CirclePicker, SketchPicker } from "react-color";
import "./styles/colorPicker.scss";

const ColorPicker = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("#039606");
  const [displayPicker, setDisplayPicker] = useState(false);

  const colorSetter = (color) => {
    color.hex ? dispatch(updateColor(color.hex)) : dispatch(updateColor(color));
  };

  const sketchPickerToggle = () => {
    if (!displayPicker) {
      setDisplayPicker(true);
    } else {
      setDisplayPicker(false);
    }
  };

  useEffect(() => {
    if (displayPicker === true) {
      document.addEventListener("click", (e) => {
        if (e.target.contains(document.querySelector(".sketch-picker"))) {
          setDisplayPicker(false);
        }
      });
    }
  }, [displayPicker]);

  return (
    <>
      <CirclePicker
        color={color.hex}
        onChange={setColor}
        colors={[
          "#C8E6C9",
          "#81c784",
          "#4c9f50",
          "#388E3C",
          "#007a31",
          "#006d2c",
          "#005924",

          "#BBD3FB",
          "#64B5F6",
          "#2196F3",
          "#1976D2",
          "#0D4FA1",
          "#0a3d7d",
          "#072b58",

          "#FFCDD2",
          "#E57373",
          "#F44336",
          "#D32F2F",
          "#B71C1C",
          "#951717",
          "#731212",

          "#E1BEE7",
          "#BA68C8",
          "#9C27B0",
          "#7B1FA2",
          "#621981",
          "#491260",
          "#300c3f",

          "#FFF9C4",
          "#FFF176",
          "#FFEB3B",
          "#FBC02D",
          "#ff9800",
          "#F57F17",
          "#db6c09",
        ]}
        onClick={colorSetter(color)}
      />
      <div className="text-center">
        <button
          className="button"
          onClick={() => {
            sketchPickerToggle();
          }}
        >
          {displayPicker === false ? "More Colors" : "Close Picker"}
        </button>
      </div>

      {displayPicker === true && (
        <SketchPicker
          color={color.hex}
          onChange={setColor}
          onClick={colorSetter(color)}
        />
      )}
    </>
  );
};

export default ColorPicker;
