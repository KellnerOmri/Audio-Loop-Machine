import React from 'react';
import {ChromePicker} from 'react-color';
import reactCSS from 'reactcss';

class ColorPickerComponent extends React.Component {
    state = {
      viewPicker: false,
      color: {
        rgb: {
          r: 33,
          b: 143,
          g: 34,
          a: 1,
        },
        hex: '#21228f',
        hsl: {
          a: 1,
          h: 239,
          l: 0,
          s: 5,
        }
      },
    };

    handleOnClick = () => {
      this.setState({
        viewPicker: !this.state.viewPicker,
      });
    };

    handleOnClose = () => {
      this.setState({
        viewPicker: false,
      });
    };

    handleOnChange = (color) => {
      this.setState({
        color: {
          rgb: color.rgb,
          hex: color.hex,
          hsl: color.hsl
        },
      });
      // Passing the selected color to parent component
      setTimeout(() => {
        // SetTimeout added to update color correctly
        this.props.onColorSelect(this.state.color);
      });

    };

    render(props) {
      const styles = reactCSS({
        default: {
          color: {
            width: '30px',
            height: '30px',
            borderRadius: '50px',
            background: `rgba(${this.state.color.rgb.r}, ${this.state.color.rgb.g}, ${this.state.color.rgb.b}, ${this.state.color.rgb.a})`,
          },
          swatch: {
            padding: '1px',
            background: 'white',
            borderRadius: '2px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.2)',
            cursor: 'pointer',
            display: 'inline-block',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
          popover: {
            position: 'absolute',
            zIndex: '4',
          },
        },
      });

      return (
        <div>
          <div style={styles.swatch} onClick={this.handleOnClick}>
            <div style={styles.color}/>
          </div>
          {this.state.viewPicker ? (
            <div style={styles.popover}>
              <div style={styles.cover} onClick={this.handleOnClose}/>
              <ChromePicker
                color={this.state.color.rgb}
                onChange={this.handleOnChange}
              />
            </div>
          ) : null}
        </div>
      );
    }
}

export default ColorPickerComponent;