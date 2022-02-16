import './ThemeSelector.css';
//import { useTheme } from '../hooks/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import { updateTheme, updateMode } from '../store/actions/themes';
import { getTheme } from '../store/selectors/themes';
import modeIcon from '../assets/brightness_6_black_24dp.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

export default function ThemeSelector() {
  const dispatch = useDispatch();
  const { modeDark } = useSelector(getTheme);

  return (
    <div className="theme-selector">
      <div
        className="mode-toggle"
        onClick={() => {
          dispatch(updateMode(!modeDark));
        }}
      >
        <img
          src={modeIcon}
          alt="moon"
          style={{ filter: modeDark === true ? 'invert(100%)' : 'invert(20%)' }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => {
              dispatch(updateTheme(color));
            }}
            style={{ background: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}
