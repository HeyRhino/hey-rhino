'use strict';
/* global TweenMax, Power1 */

import React from 'react';

require('styles/svg/SvgLogo.sass');

// colors to be used for svg - darker colors at lower index
let colorArray = [
  '#3B6064',
  '#55828B',
  '#87BBA2',
  '#E9C46A'
];

class SvgLogo extends React.Component {
  componentDidMount() {
    var logoLeft = this.refs.logoLeft;
    var logoRight = this.refs.logoRight;
    var svgs = [logoLeft, logoRight];
    this.animateSvg(svgs);
  }

  render() {
    return (
      <div className="logo">

        <div ref="logoLeft" className="logo-half logo-half-left">
          <svg viewBox="0 0 342 339.8">
            <g id="ear_x5F_back">
              <g>
                <path className="st0" d="M231.5 154.2c-3-5.8-6.9-11.2-11.4-15.9-1.5-1.6-1.7-4-.4-5.7.2-.2.3-.4.5-.6 4.6-4.1 7.8-11.2 7.7-13.3"/>
              </g>
            </g>
            <g id="ear_x5F_outer">
              <g>
                <path className="st0" d="M231.6 154.3c32.1 1.6 38.9-21.5 40.9-35.6 2-14-2.3-39-19.8-42.1-.8-.1-1.6.2-1.9 1.1l-.1.2c-1.1 2.7-2.7 5.2-4.7 7.3-1.4 1.4-3.2 2.4-5 3-2.4.8-4.6 2-6.5 3.5-3.7 2.8-6.6 7.1-8.1 11.7-.6 2-.9 4.3-.9 6.5 0 4.5 2.4 8.5 4.2 13.2 2.2 5.7 3 17 1.9 31.2"/>
              </g>
            </g>
            <g id="ear_x5F_inner">
              <g>
                <path className="st0" d="M231.6 154.3c9.7-4.5 18.3-13.7 21.2-24.8 2.9-10.9.6-22-5.4-30.6-1.3-1.8-3.9-2.5-5.9-1.4-3.6 1.9-6.9 4.4-9.7 7.5-1.8 1.9-2 4.8-.4 6.9 6.3 8.7 8.7 20 5.8 31.1-1.1 3.9-3.5 8.1-5.6 11.3"/>
              </g>
            </g>
            <g id="eye_x5F_lower">
              <g>
                <path className="st0" d="M229.5 232.4c-.7.4-1.4.7-2.2.9-.5.1-1.1.2-1.7.2"/>
              </g>
            </g>
            <g id="eye_x5F_inner">
              <g>
                <g>
                  <path className="st0" d="M227.4 233.3c-1.1-3-4-5.2-7.5-5.2"/>
                  <path className="st0" d="M227.4 233.3c-1.1-3-4-5.2-7.5-5.2"/>
                </g>
              </g>
            </g>
            <g id="eye_x5F_upper">
              <g>
                <g>
                  <path className="st0" d="M228.1 220.2c2.2 0 4 .8 5.3 2.2.7.7 1.3 1.6 1.7 2.6"/>
                  <path className="st0" d="M228.1 220.2c2.2 0 4 .8 5.3 2.2.7.7 1.3 1.6 1.7 2.6"/>
                </g>
              </g>
            </g>
            <g id="nose_x5F_inner_x5F_mouth">
              <g>
                <g>
                  <path className="st0" d="M211.7 280.2c0 3.5-2.9 6.4-6.4 6.4-3.5 0-6.4-2.9-6.4-6.4 0-3.5 2.9-6.4 6.4-6.4 3.5 0 6.4 2.9 6.4 6.4v13.5c0 .3 0 .6-.1 1-.4 3.7-2.7 6.9-6.2 8.3L175 315.1c-1.4.5-2.8.8-4.2.8"/>
                  <path className="st0" d="M211.7 280.2c0 3.5-2.9 6.4-6.4 6.4-3.5 0-6.4-2.9-6.4-6.4 0-3.5 2.9-6.4 6.4-6.4 3.5 0 6.4 2.9 6.4 6.4v13.5c0 .3 0 .6-.1 1-.4 3.7-2.7 6.9-6.2 8.3L175 315.1c-1.4.5-2.8.8-4.2.8"/>
                </g>
              </g>
            </g>
            <g id="nose_x5F_outer">
              <g>
                <g>
                  <path className="st0" d="M211.6 294.7c8-3.5 11.6-12.8 8.2-20.8-3.5-8-12.8-11.7-20.8-8.2s-11.7 12.8-8.2 20.8"/>
                  <path className="st0" d="M211.6 294.7c8-3.5 11.6-12.8 8.2-20.8-3.5-8-12.8-11.7-20.8-8.2s-11.7 12.8-8.2 20.8"/>
                </g>
              </g>
            </g>
            <g id="horn_x5F_rear">
              <g>
                <path className="st0" d="M190.5 192.4c3.9 1.2 6.3 2.8 6.3 4.5 0 1.5-1.9 3-5.2 4.1"/>
              </g>
            </g>
            <g id="lower_x5F_horn">
              <g>
                <path className="st0" d="M219.9 228.1h-11.4c-3.7.1-6.8 2.7-7.6 6.3-2.9 14-15.3 24.6-30.1 24.7"/>
              </g>
            </g>
            <g id="horn">
              <g>
                <path className="st0" d="M170.8 49.5c.9 0 2 .6 2.2 1.8l8.4 67.3 9.1 73.7 4.3 34.6c.5 3.7.2 7.5-1.1 11.1-3.4 9.3-12.4 15.8-22.9 15.8"/>
              </g>
            </g>
            <g id="head_x5F_outer_x5F_jaw">
              <g>
                <path className="st0" d="M233.5 222.4c-2.6 1.3-4.4 4-4.4 7.2 0 2 .8 3.9 2 5.3.5.6.5 1.1.6 2 .3 5.6 1 11.1 2 16.4.4 1.8.9 3.6 1.5 5.4.6 1.8 1 3.7 1.2 5.6.1.7.1 1.4.1 2.1 0 6.7-2.8 12.7-7.3 16.9-.5.5-.9 1.1-1 1.8-1.7 12.3-6.6 23.6-13.8 32.9-.4.6-1 1-1.7 1.3-13 5.5-27.1 8.5-42 8.6"/>
              </g>
            </g>
            <g id="head_x5F_outer_x5F_brow">
              <g>
                <path className="st0" d="M220.4 228.1c4.3-.4 8.4-5.4 7.5-10.4-.2-1.3 0-2.4.4-3.3.6-.9 1.5-1.4 2.7-1.4 2.7 0 3.6-1.9 4.3-3.8 1.5-4.1 2.6-8.5 3.2-13 .5-3.3.8-6.7.8-10.1 0-11.5-2.8-22.2-7.8-31.7"/>
              </g>
            </g>
            <g id="head_x5F_outer_x5F_top">
              <g>
                <path className="st0" d="M181.3 118.6c13.8 1.8 27.2 6.7 38.3 14"/>
              </g>
            </g>
            <g id="brow_x5F_4" className="st1">
              <g className="st2">
                <path className="st0" d="M345.7 203.2H225.1c-1.7 0-3.2.8-4.3 2-.3.3-.4.7-.4 1.1V247c0 2.4 1 4.7 2.7 6.4 1.7 1.7 4 2.7 6.4 2.7h116.2"/>
              </g>
            </g>
            <g id="brow_x5F_3">
              <g>
                <path className="st0" d="M226.5 205.7c-1.8 0-3.3.9-4.2 2.3"/>
              </g>
            </g>
            <g id="brow_x5F_2">
              <g>
                <path className="st0" d="M228 208.1c-1.5 0-2.9.8-3.7 2"/>
              </g>
            </g>
            <g id="brow_x5F_1">
              <g>
                <path className="st0" d="M229.5 210.5c-1.3 0-2.5.7-3.2 1.7"/>
              </g>
            </g>
            <g id="head_x5F_inner_x5F_brow">
              <g>
                <path className="st0" d="M208.5 228.1c-2-.2-3.9-1.1-5.4-2.6-1.7-1.7-2.5-4-2.7-6.4-2-31.9 8.3-68.4 31.1-64.8"/>
              </g>
            </g>
          </svg>
        </div>

        <div ref="logoRight" className="logo-half logo-half-right">
          <svg viewBox="0 0 342 339.8">
            <g id="ear_x5F_back">
              <g>
                <path className="st0" d="M231.5 154.2c-3-5.8-6.9-11.2-11.4-15.9-1.5-1.6-1.7-4-.4-5.7.2-.2.3-.4.5-.6 4.6-4.1 7.8-11.2 7.7-13.3"/>
              </g>
            </g>
            <g id="ear_x5F_outer">
              <g>
                <path className="st0" d="M231.6 154.3c32.1 1.6 38.9-21.5 40.9-35.6 2-14-2.3-39-19.8-42.1-.8-.1-1.6.2-1.9 1.1l-.1.2c-1.1 2.7-2.7 5.2-4.7 7.3-1.4 1.4-3.2 2.4-5 3-2.4.8-4.6 2-6.5 3.5-3.7 2.8-6.6 7.1-8.1 11.7-.6 2-.9 4.3-.9 6.5 0 4.5 2.4 8.5 4.2 13.2 2.2 5.7 3 17 1.9 31.2"/>
              </g>
            </g>
            <g id="ear_x5F_inner">
              <g>
                <path className="st0" d="M231.6 154.3c9.7-4.5 18.3-13.7 21.2-24.8 2.9-10.9.6-22-5.4-30.6-1.3-1.8-3.9-2.5-5.9-1.4-3.6 1.9-6.9 4.4-9.7 7.5-1.8 1.9-2 4.8-.4 6.9 6.3 8.7 8.7 20 5.8 31.1-1.1 3.9-3.5 8.1-5.6 11.3"/>
              </g>
            </g>
            <g id="eye_x5F_lower">
              <g>
                <path className="st0" d="M229.5 232.4c-.7.4-1.4.7-2.2.9-.5.1-1.1.2-1.7.2"/>
              </g>
            </g>
            <g id="eye_x5F_inner">
              <g>
                <g>
                  <path className="st0" d="M227.4 233.3c-1.1-3-4-5.2-7.5-5.2"/>
                  <path className="st0" d="M227.4 233.3c-1.1-3-4-5.2-7.5-5.2"/>
                </g>
              </g>
            </g>
            <g id="eye_x5F_upper">
              <g>
                <g>
                  <path className="st0" d="M228.1 220.2c2.2 0 4 .8 5.3 2.2.7.7 1.3 1.6 1.7 2.6"/>
                  <path className="st0" d="M228.1 220.2c2.2 0 4 .8 5.3 2.2.7.7 1.3 1.6 1.7 2.6"/>
                </g>
              </g>
            </g>
            <g id="nose_x5F_inner_x5F_mouth">
              <g>
                <g>
                  <path className="st0" d="M211.7 280.2c0 3.5-2.9 6.4-6.4 6.4-3.5 0-6.4-2.9-6.4-6.4 0-3.5 2.9-6.4 6.4-6.4 3.5 0 6.4 2.9 6.4 6.4v13.5c0 .3 0 .6-.1 1-.4 3.7-2.7 6.9-6.2 8.3L175 315.1c-1.4.5-2.8.8-4.2.8"/>
                  <path className="st0" d="M211.7 280.2c0 3.5-2.9 6.4-6.4 6.4-3.5 0-6.4-2.9-6.4-6.4 0-3.5 2.9-6.4 6.4-6.4 3.5 0 6.4 2.9 6.4 6.4v13.5c0 .3 0 .6-.1 1-.4 3.7-2.7 6.9-6.2 8.3L175 315.1c-1.4.5-2.8.8-4.2.8"/>
                </g>
              </g>
            </g>
            <g id="nose_x5F_outer">
              <g>
                <g>
                  <path className="st0" d="M211.6 294.7c8-3.5 11.6-12.8 8.2-20.8-3.5-8-12.8-11.7-20.8-8.2s-11.7 12.8-8.2 20.8"/>
                  <path className="st0" d="M211.6 294.7c8-3.5 11.6-12.8 8.2-20.8-3.5-8-12.8-11.7-20.8-8.2s-11.7 12.8-8.2 20.8"/>
                </g>
              </g>
            </g>
            <g id="horn_x5F_rear">
              <g>
                <path className="st0" d="M190.5 192.4c3.9 1.2 6.3 2.8 6.3 4.5 0 1.5-1.9 3-5.2 4.1"/>
              </g>
            </g>
            <g id="lower_x5F_horn">
              <g>
                <path className="st0" d="M219.9 228.1h-11.4c-3.7.1-6.8 2.7-7.6 6.3-2.9 14-15.3 24.6-30.1 24.7"/>
              </g>
            </g>
            <g id="horn">
              <g>
                <path className="st0" d="M170.8 49.5c.9 0 2 .6 2.2 1.8l8.4 67.3 9.1 73.7 4.3 34.6c.5 3.7.2 7.5-1.1 11.1-3.4 9.3-12.4 15.8-22.9 15.8"/>
              </g>
            </g>
            <g id="head_x5F_outer_x5F_jaw">
              <g>
                <path className="st0" d="M233.5 222.4c-2.6 1.3-4.4 4-4.4 7.2 0 2 .8 3.9 2 5.3.5.6.5 1.1.6 2 .3 5.6 1 11.1 2 16.4.4 1.8.9 3.6 1.5 5.4.6 1.8 1 3.7 1.2 5.6.1.7.1 1.4.1 2.1 0 6.7-2.8 12.7-7.3 16.9-.5.5-.9 1.1-1 1.8-1.7 12.3-6.6 23.6-13.8 32.9-.4.6-1 1-1.7 1.3-13 5.5-27.1 8.5-42 8.6"/>
              </g>
            </g>
            <g id="head_x5F_outer_x5F_brow">
              <g>
                <path className="st0" d="M220.4 228.1c4.3-.4 8.4-5.4 7.5-10.4-.2-1.3 0-2.4.4-3.3.6-.9 1.5-1.4 2.7-1.4 2.7 0 3.6-1.9 4.3-3.8 1.5-4.1 2.6-8.5 3.2-13 .5-3.3.8-6.7.8-10.1 0-11.5-2.8-22.2-7.8-31.7"/>
              </g>
            </g>
            <g id="head_x5F_outer_x5F_top">
              <g>
                <path className="st0" d="M181.3 118.6c13.8 1.8 27.2 6.7 38.3 14"/>
              </g>
            </g>
            <g id="brow_x5F_4" className="st1">
              <g className="st2">
                <path className="st0" d="M345.7 203.2H225.1c-1.7 0-3.2.8-4.3 2-.3.3-.4.7-.4 1.1V247c0 2.4 1 4.7 2.7 6.4 1.7 1.7 4 2.7 6.4 2.7h116.2"/>
              </g>
            </g>
            <g id="brow_x5F_3">
              <g>
                <path className="st0" d="M226.5 205.7c-1.8 0-3.3.9-4.2 2.3"/>
              </g>
            </g>
            <g id="brow_x5F_2">
              <g>
                <path className="st0" d="M228 208.1c-1.5 0-2.9.8-3.7 2"/>
              </g>
            </g>
            <g id="brow_x5F_1">
              <g>
                <path className="st0" d="M229.5 210.5c-1.3 0-2.5.7-3.2 1.7"/>
              </g>
            </g>
            <g id="head_x5F_inner_x5F_brow">
              <g>
                <path className="st0" d="M208.5 228.1c-2-.2-3.9-1.1-5.4-2.6-1.7-1.7-2.5-4-2.7-6.4-2-31.9 8.3-68.4 31.1-64.8"/>
              </g>
            </g>
          </svg>
        </div>

      </div>
    );
  }

  animateSvg(svgs) {
    var animationId = this.props.animationId;

    for(var i = 0; i < svgs.length; i++) {
      pathLength(svgs[i]);
    }

    function pathLength(obj) {
      var paths = obj.getElementsByTagName('path');

      for(var i = 0; i < paths.length; i++) {
        doAnimate(paths[i]);
      }

      function doAnimate(path) {
        var pathLength = path.getTotalLength(),
          defaultEase = Power1.easeInOut,
          defaultDelay = i / (dur2 * 5),
          dur1 = 2,
          dur2 = 2.5;

        switch (animationId) {
          case '0':
            path.style.strokeDasharray = pathLength;
            path.style.strokeDashoffset = 0;
            path.style.opacity = 1;
            TweenMax.to( path, dur1, {
              css:{ strokeDashoffset:pathLength, stroke:colorArray[animationId], opacity:0 },
              yoyo:true, repeat:-1, ease:defaultEase, delay:defaultDelay
            } );
          break;

          case '1':
            path.style.strokeDasharray = pathLength;
            path.style.strokeDashoffset = pathLength;
            path.style.opacity = 0;
            TweenMax.to( path, dur1, {
              css:{ strokeDashoffset:0, stroke:colorArray[animationId], opacity:1 },
              yoyo:true, repeat:-1, ease:defaultEase, delay:defaultDelay
            } );
          break;

          case '2':
            path.style.strokeDasharray = pathLength;
            path.style.strokeDashoffset = 0;
            path.style.opacity = 1;
            TweenMax.to( path, dur2, {
              css:{ strokeDashoffset:pathLength, stroke:colorArray[animationId], opacity:0 },
              yoyo:true, repeat:-1, ease:defaultEase, delay:defaultDelay
            } );
          break;

          case '3':
            // animating strokeDasharray bricks the app
            // if(i === 14) {
            //   path.style.strokeDasharray = pathLength;
            //   path.style.strokeDashoffset = 0;
            //   TweenMax.to( path, dur1, {
            //     css:{ strokeDashoffset: pathLength, strokeDasharray:0, stroke:colorArray[animationId], opacity:0 },
            //     yoyo:true, repeat:-1, ease:defaultEase, delay:defaultDelay
            //   } );
            path.style.strokeDasharray = pathLength;
            path.style.strokeDashoffset = pathLength;
            TweenMax.to( path, dur2, {
              css:{ strokeDashoffset:0, stroke:colorArray[animationId], opacity:1 },
              yoyo:true, repeat:-1, ease:defaultEase, delay:defaultDelay
            } );
          break;

          default:
            break;
        }
      }
    }
  }
}

SvgLogo.displayName = 'SvgLogo';

// Uncomment properties you need
// SvgLogo.propTypes = {};
// SvgLogo.defaultProps = {};

export default SvgLogo;
