/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/holiday-snow/components/BackgroundImage.js":
/*!********************************************************!*\
  !*** ./src/holiday-snow/components/BackgroundImage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackgroundImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utilities */ "./src/holiday-snow/utilities.js");


function BackgroundImage({
  attributes,
  imageRef
}) {
  // Make sure background image is present.
  if (!attributes.backgroundImageUrl) {
    return;
  }

  // Create an object for conditionally applying the ref
  const backgroundImageRef = imageRef ? {
    ref: imageRef
  } : {};
  const backgroundImageStyle = {
    objectPosition: attributes.backgroundImageFocalPoint ? (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.getMediaPosition)(attributes.backgroundImageFocalPoint) : undefined
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    ...backgroundImageRef,
    className: "wallpaper-image-background",
    src: attributes.backgroundImageUrl,
    style: backgroundImageStyle,
    alt: attributes.backgroundImageAlt
  });
}

/***/ }),

/***/ "./src/holiday-snow/components/Overlay.js":
/*!************************************************!*\
  !*** ./src/holiday-snow/components/Overlay.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../utilities */ "./src/holiday-snow/utilities.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

const Overlay = ({
  clientId,
  attributes,
  setAttributes,
  overlayColor,
  setOverlayColor
}) => {
  const {
    dimRatio
  } = attributes;
  const {
    gradientClass,
    gradientValue,
    setGradient
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseGradient)();
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseMultipleOriginColorsAndGradients)();
  const overlayStyles = {
    backgroundColor: overlayColor.color,
    backgroundImage: gradientValue
  };
  if (!colorGradientSettings.hasColorsOrGradients) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !!dimRatio && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wallpaper-overlay', (0,_utilities__WEBPACK_IMPORTED_MODULE_6__.dimRatioToClass)(dimRatio), {
      [overlayColor.class]: overlayColor.class,
      'has-background-dim': dimRatio !== undefined,
      'has-background-gradient': gradientValue,
      [gradientClass]: gradientClass
    }),
    style: overlayStyles
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    group: "color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientSettingsDropdown, {
    __experimentalIsRenderedInSidebar: true,
    settings: [{
      colorValue: overlayColor.color,
      gradientValue,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Overlay'),
      onColorChange: setOverlayColor,
      onGradientChange: setGradient,
      isShownByDefault: true,
      resetAllFilter: () => ({
        overlayColor: undefined,
        customOverlayColor: undefined,
        gradient: undefined,
        customGradient: undefined
      })
    }],
    panelId: clientId,
    ...colorGradientSettings
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToolsPanelItem, {
    hasValue: () => dimRatio !== undefined,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Overlay opacity'),
    onDeselect: () => setAttributes({
      dimRatio: 0
    }),
    resetAllFilter: () => ({
      dimRatio: 0
    }),
    isShownByDefault: true,
    panelId: clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Overlay opacity'),
    value: dimRatio,
    onChange: newDimRatio => setAttributes({
      dimRatio: newDimRatio
    }),
    min: 0,
    max: 100,
    step: 10,
    required: true,
    __next40pxDefaultSize: true
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)([(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)({
  overlayColor: 'background-color'
})])(Overlay));

/***/ }),

/***/ "./src/holiday-snow/components/SnowingCanvas.js":
/*!******************************************************!*\
  !*** ./src/holiday-snow/components/SnowingCanvas.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SnowingCanvas)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);



function SnowingCanvas({
  snowColor
}) {
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const mousePositionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  });
  const flakesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);

  // Destructure resizeListener, width, and height from useResizeObserver
  const [resizeListener, sizes] = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useResizeObserver)();
  const createSnowflakes = (W, H) => {
    var mf = 100; // max flakes
    flakesRef.current = [];
    for (var i = 0; i < mf; i++) {
      const size = (Math.random() * 5 + 2) * (H / 500); // Size relative to container height
      flakesRef.current.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: size,
        d: Math.random() + 1,
        // density
        o: Math.min(1, 0.5 + size / 10) // Opacity based on size
      });
    }
  };

  const getFlakesColor = () => {
    const {
      r,
      g,
      b,
      a
    } = snowColor;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };
  const moveFlakes = (flakes, ctx, W, H) => {
    let angle = 0;
    angle += 0.01;
    for (var i = 0; i < flakes.length; i++) {
      var f = flakes[i];

      // Update X and Y coordinates
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) * 2;

      // Wind effect
      const xMid = W / 2;
      let mousePos = mousePositionRef.current;
      let windEffect = (mousePos.x - xMid) / 100;
      windEffect = Math.min(Math.max(windEffect, -1.5), 1.5);
      f.x += windEffect;

      // Recycle flakes when out of view
      if (f.y > H) {
        flakes[i] = {
          x: Math.random() * W,
          y: 0,
          r: f.r,
          d: f.d
        };
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Update canvas size based on the observed sizes from ResizeObserver
    if (sizes.width && sizes.height) {
      canvas.width = sizes.width;
      canvas.height = sizes.height;
      createSnowflakes(canvas.width, canvas.height); // Recreate snowflakes for new size
    }

    let snowInterval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = getFlakesColor(); // Reset fill style to white
      for (var f of flakesRef.current) {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        // ctx.fillStyle = `rgba(255, 255, 255, ${f.o})`;
        ctx.fill();
      }
      moveFlakes(flakesRef.current, ctx, canvas.width, canvas.height);
    }, 25);
    const handleMouseMove = event => {
      const rect = canvas.getBoundingClientRect();
      mousePositionRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(snowInterval);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [snowColor, sizes]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, resizeListener, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("canvas", {
    ref: canvasRef,
    id: "canvas",
    className: "theme"
  }), ";");
}

/***/ }),

/***/ "./src/holiday-snow/edit.js":
/*!**********************************!*\
  !*** ./src/holiday-snow/edit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edit: () => (/* binding */ Edit),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/holiday-snow/editor.scss");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities */ "./src/holiday-snow/utilities.js");
/* harmony import */ var _components_SnowingCanvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SnowingCanvas */ "./src/holiday-snow/components/SnowingCanvas.js");
/* harmony import */ var _components_Overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Overlay */ "./src/holiday-snow/components/Overlay.js");
/* harmony import */ var _components_BackgroundImage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/BackgroundImage */ "./src/holiday-snow/components/BackgroundImage.js");

/**
 * External dependencies
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */




/**
 * WordPress Data API functions for managing application data.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/
 */


/**
 * Default snow color.
 */
const ALLOWED_MEDIA_TYPES = ["image"];

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'core/column'.
 *
 * @constant
 * @type {string[]}
 */
const ALLOWED_BLOCKS = ["core/group"];





/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object} props All props passed to this function.
 * @return {WPElement} Element to render.
 */
function Edit(props) {
  const {
    attributes,
    setAttributes,
    snowColor,
    setSnowColor,
    clientId
  } = props;
  const blockClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "has-custom-content-position": !(0,_utilities__WEBPACK_IMPORTED_MODULE_8__.isContentPositionCenter)(attributes.contentPosition)
  }, (0,_utilities__WEBPACK_IMPORTED_MODULE_8__.getPositionClassName)(attributes.contentPosition));
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: blockClasses
  });
  const hasChildBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    const {
      getBlock
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const block = getBlock(clientId);

    // Directly return the check for child block existence.
    return block ? block.innerBlocks.length > 0 : false;
  }, [clientId]);
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useInnerBlocksProps)({
    className: "wallpaper-content"
  }, {
    allowedBlocks: ALLOWED_BLOCKS,
    orientation: "vertical",
    renderAppender: hasChildBlock ? () => null : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.ButtonBlockAppender
  });
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalUseMultipleOriginColorsAndGradients)();
  let currentSnowColor = attributes.snowColorValue ? attributes.snowColorValue : snowColor.color;
  const snowColorObject = (0,_utilities__WEBPACK_IMPORTED_MODULE_8__.getRgbaColorObject)(currentSnowColor);
  const onSelectMedia = newImage => {
    setAttributes({
      backgroundImageUrl: newImage.url
    });
  };
  const onClearMedia = () => {
    setAttributes({
      backgroundImageUrl: undefined
    });
  };

  // Reference to the DOM element that to update.
  const backgroundImageRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useRef)();

  /**
   * Imperatively set the focal point of the background image.
   *
   * To ensure changes to the focal point are reflected immediately,
   * providing a live preview of how the image will look with the chosen focal point.
   */
  const imperativeFocalPointPreview = focalPoint => {
    if (backgroundImageRef.current) {
      const style = backgroundImageRef.current.style;
      style.objectPosition = (0,_utilities__WEBPACK_IMPORTED_MODULE_8__.getMediaPosition)(focalPoint);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    group: "color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalColorGradientSettingsDropdown, {
    __experimentalIsRenderedInSidebar: true,
    settings: [{
      colorValue: currentSnowColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Snow"),
      onColorChange: colorValue => {
        setSnowColor(colorValue);
        setAttributes({
          snowColorValue: colorValue
        });
      },
      isShownByDefault: true,
      resetAllFilter: () => {
        setSnowColor(undefined);
        setAttributes({
          snowColorValue: undefined
        });
      },
      enableAlpha: true
    }],
    panelId: clientId,
    ...colorGradientSettings
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, !!attributes.backgroundImageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Media settings")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FocalPointPicker, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Focal point picker"),
    url: attributes.backgroundImageUrl,
    value: attributes.backgroundImageFocalPoint,
    onDragStart: imperativeFocalPointPreview,
    onDrag: imperativeFocalPointPreview,
    onChange: newFocalPoint => setAttributes({
      backgroundImageFocalPoint: newFocalPoint
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Alternative text"),
    value: attributes.backgroundImageAlt,
    onChange: newAlt => setAttributes({
      backgroundImageAlt: newAlt
    }),
    help: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ExternalLink, {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Describe the purpose of the image.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Leave empty if decorative."))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "secondary",
    className: "block-library-cover__reset-button",
    onClick: onClearMedia
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Clear Media"))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
    group: "block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalBlockAlignmentMatrixControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Change content position"),
    value: attributes.contentPosition,
    onChange: nextPosition => setAttributes({
      contentPosition: nextPosition
    }),
    isDisabled: !hasChildBlock
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
    group: "other"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaReplaceFlow, {
    mediaURL: attributes.backgroundImageUrl,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    accept: "image/*",
    onSelect: onSelectMedia,
    name: !attributes.backgroundImageUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Add Background Image") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Replace")
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BackgroundImage__WEBPACK_IMPORTED_MODULE_11__["default"], {
    attributes: attributes,
    imageRef: backgroundImageRef
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Overlay__WEBPACK_IMPORTED_MODULE_10__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    clientId: clientId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wallpaper-canvas"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SnowingCanvas__WEBPACK_IMPORTED_MODULE_9__["default"], {
    snowColor: snowColorObject
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps
  })));
}
const snowColorAttributes = {
  snowColor: "snow-color"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.withColors)(snowColorAttributes)(Edit));

/***/ }),

/***/ "./src/holiday-snow/index.js":
/*!***********************************!*\
  !*** ./src/holiday-snow/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/holiday-snow/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/holiday-snow/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/holiday-snow/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/holiday-snow/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/holiday-snow/save.js":
/*!**********************************!*\
  !*** ./src/holiday-snow/save.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./src/holiday-snow/utilities.js");
/* harmony import */ var _components_BackgroundImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BackgroundImage */ "./src/holiday-snow/components/BackgroundImage.js");

/**
 * External dependencies
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */




/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param {Object} props All props passed to this function.
 * @return {WPElement} Element to render.
 */
function save(props) {
  const {
    attributes
  } = props;
  const overlayColorClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorClassName)("background-color", attributes.overlayColor);
  const gradientClass = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalGetGradientClass)(attributes.gradient);
  const gradientValue = attributes.gradient || attributes.customGradient;
  const overlayStyles = {
    backgroundColor: !overlayColorClass ? attributes.customOverlayColor : undefined,
    background: attributes.customGradient ? attributes.customGradient : undefined
  };
  const blockClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "has-custom-content-position": !(0,_utilities__WEBPACK_IMPORTED_MODULE_3__.isContentPositionCenter)(attributes.contentPosition)
  }, (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.getPositionClassName)(attributes.contentPosition));
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: blockClasses
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BackgroundImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes
  }), !!attributes.dimRatio && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "aria-hidden": "true",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("wallpaper-overlay", overlayColorClass, (0,_utilities__WEBPACK_IMPORTED_MODULE_3__.dimRatioToClass)(attributes.dimRatio), {
      "has-background-dim": attributes.dimRatio !== undefined,
      "has-background-gradient": gradientValue,
      [gradientClass]: gradientClass
    }),
    style: overlayStyles
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wallpaper-canvas"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps.save({
      className: "wallpaper-content"
    })
  }));
}

/***/ }),

/***/ "./src/holiday-snow/utilities.js":
/*!***************************************!*\
  !*** ./src/holiday-snow/utilities.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dimRatioToClass: () => (/* binding */ dimRatioToClass),
/* harmony export */   getMediaPosition: () => (/* binding */ getMediaPosition),
/* harmony export */   getPositionClassName: () => (/* binding */ getPositionClassName),
/* harmony export */   getRgbaColorObject: () => (/* binding */ getRgbaColorObject),
/* harmony export */   isContentPositionCenter: () => (/* binding */ isContentPositionCenter)
/* harmony export */ });
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! colord */ "./node_modules/colord/index.mjs");
/**
 * External dependencies
 */

const POSITION_CLASSNAMES = {
  'top left': 'is-position-top-left',
  'top center': 'is-position-top-center',
  'top right': 'is-position-top-right',
  'center left': 'is-position-center-left',
  'center center': 'is-position-center-center',
  'center right': 'is-position-center-right',
  'bottom left': 'is-position-bottom-left',
  'bottom center': 'is-position-bottom-center',
  'bottom right': 'is-position-bottom-right'
};
const DEFAULT_FOCAL_POINT = {
  x: 0.5,
  y: 0.5
};

/**
 * Checks of the contentPosition is the center (default) position.
 *
 * @param {string} contentPosition The current content position.
 * @return {boolean} Whether the contentPosition is center.
 */
function isContentPositionCenter(contentPosition) {
  return !contentPosition || contentPosition === 'center center';
}

/**
 * Retrieves the className for the current contentPosition.
 * The default position (center) will not have a className.
 *
 * @param {string} contentPosition The current content position.
 * @return {string} The className assigned to the contentPosition.
 */
function getPositionClassName(contentPosition) {
  /*
   * Only render a className if the contentPosition is not center (the default).
   */
  if (isContentPositionCenter(contentPosition)) {
    return '';
  }
  return POSITION_CLASSNAMES[contentPosition];
}

/**
 * Generates the opacity/dim class based on given number.
 *
 * @param {number} ratio Dim/opacity number.
 *
 * @return {string} Generated class.
 */
function dimRatioToClass(ratio) {
  return ratio === undefined ? null : 'has-background-dim-' + 10 * Math.round(ratio / 10);
}
function getMediaPosition({
  x,
  y
} = DEFAULT_FOCAL_POINT) {
  return `${Math.round(x * 100)}% ${Math.round(y * 100)}%`;
}
function getRgbaColorObject(color) {
  return (0,colord__WEBPACK_IMPORTED_MODULE_0__.colord)(color).toRgb();
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/holiday-snow/editor.scss":
/*!**************************************!*\
  !*** ./src/holiday-snow/editor.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/holiday-snow/style.scss":
/*!*************************************!*\
  !*** ./src/holiday-snow/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/colord/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/colord/index.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Colord: () => (/* binding */ j),
/* harmony export */   colord: () => (/* binding */ w),
/* harmony export */   extend: () => (/* binding */ k),
/* harmony export */   getFormat: () => (/* binding */ I),
/* harmony export */   random: () => (/* binding */ E)
/* harmony export */ });
var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(r){return"string"==typeof r?r.length>0:"number"==typeof r},n=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=Math.pow(10,t)),Math.round(n*r)/n+0},e=function(r,t,n){return void 0===t&&(t=0),void 0===n&&(n=1),r>n?n:r>t?r:t},u=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},a=function(r){return{r:e(r.r,0,255),g:e(r.g,0,255),b:e(r.b,0,255),a:e(r.a)}},o=function(r){return{r:n(r.r),g:n(r.g),b:n(r.b),a:n(r.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(r){var t=r.toString(16);return t.length<2?"0"+t:t},h=function(r){var t=r.r,n=r.g,e=r.b,u=r.a,a=Math.max(t,n,e),o=a-Math.min(t,n,e),i=o?a===t?(n-e)/o:a===n?2+(e-t)/o:4+(t-n)/o:0;return{h:60*(i<0?i+6:i),s:a?o/a*100:0,v:a/255*100,a:u}},b=function(r){var t=r.h,n=r.s,e=r.v,u=r.a;t=t/360*6,n/=100,e/=100;var a=Math.floor(t),o=e*(1-n),i=e*(1-(t-a)*n),s=e*(1-(1-t+a)*n),h=a%6;return{r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h],a:u}},g=function(r){return{h:u(r.h),s:e(r.s,0,100),l:e(r.l,0,100),a:e(r.a)}},d=function(r){return{h:n(r.h),s:n(r.s),l:n(r.l),a:n(r.a,3)}},f=function(r){return b((n=(t=r).s,{h:t.h,s:(n*=((e=t.l)<50?e:100-e)/100)>0?2*n/(e+n)*100:0,v:e+n,a:t.a}));var t,n,e},c=function(r){return{h:(t=h(r)).h,s:(u=(200-(n=t.s))*(e=t.v)/100)>0&&u<200?n*e/100/(u<=100?u:200-u)*100:0,l:u/2,a:t.a};var t,n,e,u},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(r){var t=i.exec(r);return t?(r=t[1]).length<=4?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:4===r.length?n(parseInt(r[3]+r[3],16)/255,2):1}:6===r.length||8===r.length?{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:8===r.length?n(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var t=v.exec(r)||m.exec(r);return t?t[2]!==t[4]||t[4]!==t[6]?null:a({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(t){var n=l.exec(t)||p.exec(t);if(!n)return null;var e,u,a=g({h:(e=n[1],u=n[2],void 0===u&&(u="deg"),Number(e)*(r[u]||1)),s:Number(n[3]),l:Number(n[4]),a:void 0===n[5]?1:Number(n[5])/(n[6]?100:1)});return f(a)},"hsl"]],object:[[function(r){var n=r.r,e=r.g,u=r.b,o=r.a,i=void 0===o?1:o;return t(n)&&t(e)&&t(u)?a({r:Number(n),g:Number(e),b:Number(u),a:Number(i)}):null},"rgb"],[function(r){var n=r.h,e=r.s,u=r.l,a=r.a,o=void 0===a?1:a;if(!t(n)||!t(e)||!t(u))return null;var i=g({h:Number(n),s:Number(e),l:Number(u),a:Number(o)});return f(i)},"hsl"],[function(r){var n=r.h,a=r.s,o=r.v,i=r.a,s=void 0===i?1:i;if(!t(n)||!t(a)||!t(o))return null;var h=function(r){return{h:u(r.h),s:e(r.s,0,100),v:e(r.v,0,100),a:e(r.a)}}({h:Number(n),s:Number(a),v:Number(o),a:Number(s)});return b(h)},"hsv"]]},N=function(r,t){for(var n=0;n<t.length;n++){var e=t[n][0](r);if(e)return[e,t[n][1]]}return[null,void 0]},x=function(r){return"string"==typeof r?N(r.trim(),y.string):"object"==typeof r&&null!==r?N(r,y.object):[null,void 0]},I=function(r){return x(r)[1]},M=function(r,t){var n=c(r);return{h:n.h,s:e(n.s+100*t,0,100),l:n.l,a:n.a}},H=function(r){return(299*r.r+587*r.g+114*r.b)/1e3/255},$=function(r,t){var n=c(r);return{h:n.h,s:n.s,l:e(n.l+100*t,0,100),a:n.a}},j=function(){function r(r){this.parsed=x(r)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return null!==this.parsed},r.prototype.brightness=function(){return n(H(this.rgba),2)},r.prototype.isDark=function(){return H(this.rgba)<.5},r.prototype.isLight=function(){return H(this.rgba)>=.5},r.prototype.toHex=function(){return r=o(this.rgba),t=r.r,e=r.g,u=r.b,i=(a=r.a)<1?s(n(255*a)):"","#"+s(t)+s(e)+s(u)+i;var r,t,e,u,a,i},r.prototype.toRgb=function(){return o(this.rgba)},r.prototype.toRgbString=function(){return r=o(this.rgba),t=r.r,n=r.g,e=r.b,(u=r.a)<1?"rgba("+t+", "+n+", "+e+", "+u+")":"rgb("+t+", "+n+", "+e+")";var r,t,n,e,u},r.prototype.toHsl=function(){return d(c(this.rgba))},r.prototype.toHslString=function(){return r=d(c(this.rgba)),t=r.h,n=r.s,e=r.l,(u=r.a)<1?"hsla("+t+", "+n+"%, "+e+"%, "+u+")":"hsl("+t+", "+n+"%, "+e+"%)";var r,t,n,e,u},r.prototype.toHsv=function(){return r=h(this.rgba),{h:n(r.h),s:n(r.s),v:n(r.v),a:n(r.a,3)};var r},r.prototype.invert=function(){return w({r:255-(r=this.rgba).r,g:255-r.g,b:255-r.b,a:r.a});var r},r.prototype.saturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,r))},r.prototype.desaturate=function(r){return void 0===r&&(r=.1),w(M(this.rgba,-r))},r.prototype.grayscale=function(){return w(M(this.rgba,-1))},r.prototype.lighten=function(r){return void 0===r&&(r=.1),w($(this.rgba,r))},r.prototype.darken=function(r){return void 0===r&&(r=.1),w($(this.rgba,-r))},r.prototype.rotate=function(r){return void 0===r&&(r=15),this.hue(this.hue()+r)},r.prototype.alpha=function(r){return"number"==typeof r?w({r:(t=this.rgba).r,g:t.g,b:t.b,a:r}):n(this.rgba.a,3);var t},r.prototype.hue=function(r){var t=c(this.rgba);return"number"==typeof r?w({h:r,s:t.s,l:t.l,a:t.a}):n(t.h)},r.prototype.isEqual=function(r){return this.toHex()===w(r).toHex()},r}(),w=function(r){return r instanceof j?r:new j(r)},S=[],k=function(r){r.forEach(function(r){S.indexOf(r)<0&&(r(j,y),S.push(r))})},E=function(){return new j({r:255*Math.random(),g:255*Math.random(),b:255*Math.random()})};


/***/ }),

/***/ "./src/holiday-snow/block.json":
/*!*************************************!*\
  !*** ./src/holiday-snow/block.json ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wallpaper/holiday-snow","version":"0.1.0","title":"Holiday Snow","category":"widgets","icon":"star-filled","description":"Block that provides falling snow effect. Perfect for holidays.","parent":["wallpaper-block/wallpaper"],"example":{},"supports":{"html":false,"spacing":{"padding":true,"__experimentalDefaultControls":{"padding":true}}},"attributes":{"contentPosition":{"type":"string","default":"center center"},"overlayColor":{"type":"string","default":"vivid-cyan-blue"},"customOverlayColor":{"type":"string"},"dimRatio":{"type":"number","default":80},"gradient":{"type":"string"},"customGradient":{"type":"string"},"snowColor":{"type":"string","default":"white"},"customSnowColor":{"type":"string"},"snowColorValue":{"type":"string","default":"#ffffff"},"backgroundImageUrl":{"type":"string"},"backgroundImageAlt":{"type":"string","default":""},"backgroundImageFocalPoint":{"type":"object"}},"textdomain":"wallpaper-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":["file:./frontend.js"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"holiday-snow/index": 0,
/******/ 			"holiday-snow/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwallpaper_block"] = globalThis["webpackChunkwallpaper_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["holiday-snow/style-index"], () => (__webpack_require__("./src/holiday-snow/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map