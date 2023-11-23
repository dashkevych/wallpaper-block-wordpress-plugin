/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/container/components/WallpaperHeightInput.js":
/*!**********************************************************!*\
  !*** ./src/container/components/WallpaperHeightInput.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WallpaperHeightInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * The `useInstanceId` hook from `@wordpress/compose` is used for generating unique IDs for
 * components. This is particularly useful for associating labels with form controls for
 * accessibility purposes.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-compose/
 */


/**
 * The `useMemo` hook from `@wordpress/element` is used to memoize values. This means that
 * complex calculations or processes are only recomputed when their dependencies change. This
 * can improve performance, especially for expensive operations.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */


/**
 * Importing specific utilities and components from `@wordpress/components` for unit management.
 * - `useCustomUnits` for working with different units in component controls.
 * - `UnitControl` provides a UI for selecting values with units.
 * - `parseQuantityAndUnitFromRawValue` for parsing values and units from a raw input string.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */

const MIN_HEIGHT = 50;

/**
 * React component used for setting the height of a wallpaper.
 * It provides a unit-controlled input for users to define the height value in various units.
 *
 * @param {Function} onChange - Callback function to handle changes in height value.
 * @param {Function} onUnitChange - Callback function to handle changes in the selected unit.
 * @param {string} unit - The current unit for the height value (default is 'px').
 * @param {string} value - The current value of the height input.
 */
function WallpaperHeightInput({
  onChange,
  onUnitChange,
  unit = 'px',
  value = ''
}) {
  // Generates a unique ID for the UnitControl component instance, ensuring accessibility
  // and unique identification in the DOM.
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useInstanceId)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl);
  const inputId = `block-wallpaper-height-input-${instanceId}`;

  // Determines if the current unit is pixels (px) to set minimum values appropriately.
  const isPx = unit === 'px';

  // Uses `useCustomUnits` to define the available units and their default values.
  // This setup allows the input to handle various unit types like 'em', 'rem', etc.
  const units = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUseCustomUnits)({
    availableUnits: ['px', '%', 'em', 'rem', 'vw', 'vh'],
    defaultValues: {
      px: 400,
      '%': 20,
      em: 20,
      rem: 20,
      vw: 20,
      vh: 50
    }
  });

  // Handler function for the onChange event. It parses the input value and updates it,
  // ensuring that non-numeric values are handled correctly.
  const handleOnChange = unprocessedValue => {
    const inputValue = unprocessedValue !== '' ? parseFloat(unprocessedValue) : undefined;
    if (isNaN(inputValue) && inputValue !== undefined) {
      return;
    }
    onChange(inputValue);
  };

  // Computes the value to be displayed in the input field.
  // It combines the parsed quantity from the value with the current unit.
  const computedValue = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const [parsedQuantity] = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalParseQuantityAndUnitFromRawValue)(value);
    return [parsedQuantity, unit].join('');
  }, [unit, value]);

  // Sets a minimum value for the input. If the unit is pixels, a predefined minimum height is used.
  const min = isPx ? MIN_HEIGHT : 0;

  // Renders the UnitControl component with the necessary props.
  // It includes the label, minimum value, handlers for change events, and the computed value.
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Minimum height of wallpaper') // Localized label for the input.
    ,
    id: inputId // Unique ID for the input field.
    ,
    isResetValueOnUnitChange: true // Resets the value when the unit changes.
    ,
    min: min // Minimum value based on the unit.
    ,
    onChange: handleOnChange // Handler for when the value changes.
    ,
    onUnitChange: onUnitChange // Handler for when the unit changes.
    ,
    __unstableInputWidth: '80px' // Sets a specific width for the input.
    ,
    units: units // The units available for selection.
    ,
    value: computedValue // The computed value displayed in the input.
  });
}

/***/ }),

/***/ "./src/container/edit.js":
/*!*******************************!*\
  !*** ./src/container/edit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/container/editor.scss");
/* harmony import */ var _components_WallpaperHeightInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/WallpaperHeightInput */ "./src/container/components/WallpaperHeightInput.js");

/**
 * Retrieves the translation of text.
 * This import is from the i18n package of WordPress and is used for internationalization.
 * It allows text strings in the code to be translated into different languages.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * Importing various hooks and components from the block editor package.
 * - `useBlockProps` to add necessary props to the block's wrapper element.
 * - `useInnerBlocksProps` to manage inner blocks.
 * - `InnerBlocks` to enable nesting of blocks within the block.
 * - `InspectorControls` to add controls to the block's inspector panel.
 * - `BlockControls` for adding controls to the block toolbar.
 * - `store` for accessing the block editor's store.
 * - `FullHeightAlignmentControl` for a control to toggle full height alignment.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/
 */


/**
 * Importing `useSelect` from the WordPress data package.
 * This hook is used to select data from the Redux-like store provided by WordPress.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/
 */


/**
 * Importing `useState` from the WordPress element package.
 * This is a React hook that allows for state management in functional components.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */


/**
 * Importing `ToolsPanelItem` from the components package.
 * This component is used to add items to the ToolsPanel in the block inspector.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-components/
 */


/**
 * Importing editor styles.
 * This allows the use of SASS/SCSS for styling the editor view of the block.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Importing a custom component for wallpaper height input.
 * This component is likely to provide a specialized input for setting the height of a wallpaper.
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
const ALLOWED_BLOCKS = ["wallpaper/holiday-snow"];

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
    clientId
  } = props;
  // useState hooks for keeping track of the previous minimum height value and unit.
  // This is useful for restoring these values if the user decides to revert changes.
  const [prevMinHeightValue, setPrevMinHeightValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(attributes.minHeight);
  const [prevMinHeightUnit, setPrevMinHeightUnit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(attributes.minHeightUnit);

  // Boolean to determine if the minimum height is set to full viewport height (100vh).
  const isMinFullHeight = attributes.minHeightUnit === "vh" && attributes.minHeight === 100;

  // Function to toggle minimum full height.
  // This function either sets the height to full viewport height or reverts to the previous height.
  const toggleMinFullHeight = () => {
    if (isMinFullHeight) {
      // Revert to the previous values if the current setting is full viewport height.
      if (prevMinHeightUnit === "vh" && prevMinHeightValue === 100) {
        return setAttributes({
          minHeight: undefined,
          minHeightUnit: undefined
        });
      }

      // Set the previous height values.
      return setAttributes({
        minHeight: prevMinHeightValue,
        minHeightUnit: prevMinHeightUnit
      });
    }

    // Store the current minHeight and minHeightUnit values before changing them.
    setPrevMinHeightValue(attributes.minHeight);
    setPrevMinHeightUnit(attributes.minHeightUnit);

    // Set the minHeight to 100vh.
    return setAttributes({
      minHeight: 100,
      minHeightUnit: "vh"
    });
  };

  // Combining minHeight and minHeightUnit to form a CSS value.
  // If either value is missing, it defaults to just minHeight or undefined.
  const minHeightWithUnit = attributes.minHeight && attributes.minHeightUnit ? `${attributes.minHeight}${attributes.minHeightUnit}` : attributes.minHeight;

  // useBlockProps hook to define block-level properties.
  // Here, it is used to set the style of the block, particularly the minimum height.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    style: {
      minHeight: minHeightWithUnit || undefined
    }
  });

  // Using useSelect from the WordPress data package to check if the block has child blocks.
  // This can affect the rendering of the block's appender.
  const hasChildBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getBlock
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const block = getBlock(clientId);

    // Directly return a boolean indicating the presence of inner blocks.
    return block ? block.innerBlocks.length > 0 : false;
  }, [clientId]);

  // useInnerBlocksProps hook to define properties for inner blocks.
  // It specifies the allowed blocks, orientation, and the rendering of the block appender based on the presence of child blocks.
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
    allowedBlocks: ALLOWED_BLOCKS,
    orientation: "vertical",
    renderAppender: hasChildBlock ? () => null : _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.ButtonBlockAppender
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    group: "dimensions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalToolsPanelItem, {
    hasValue: () => !!attributes.minHeight,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Minimum height"),
    onDeselect: () => setAttributes({
      minHeight: undefined,
      minHeightUnit: undefined
    }),
    resetAllFilter: () => ({
      minHeight: undefined,
      minHeightUnit: undefined
    }),
    isShownByDefault: true,
    panelId: clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_WallpaperHeightInput__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: attributes.minHeight,
    unit: attributes.minHeightUnit,
    onChange: newMinHeight => setAttributes({
      minHeight: newMinHeight
    }),
    onUnitChange: nextUnit => setAttributes({
      minHeightUnit: nextUnit
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, {
    group: "block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalBlockFullHeightAligmentControl, {
    isActive: isMinFullHeight,
    onToggle: toggleMinFullHeight,
    isDisabled: !hasChildBlock
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps
  }));
}

/***/ }),

/***/ "./src/container/index.js":
/*!********************************!*\
  !*** ./src/container/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/container/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/container/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/container/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/container/block.json");
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

/***/ "./src/container/save.js":
/*!*******************************!*\
  !*** ./src/container/save.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

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
 * @return {WPElement} Element to render.
 */
function save() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
}

/***/ }),

/***/ "./src/container/editor.scss":
/*!***********************************!*\
  !*** ./src/container/editor.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/container/style.scss":
/*!**********************************!*\
  !*** ./src/container/style.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/container/block.json":
/*!**********************************!*\
  !*** ./src/container/block.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"wallpaper/container","version":"0.1.0","title":"Wallpaper","category":"widgets","icon":"cover-image","description":"Block that allows to create interactive and animated backgrounds.","example":{},"supports":{"html":false,"anchor":true,"align":true,"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}}},"attributes":{"minHeight":{"type":"number"},"minHeightUnit":{"type":"string"}},"textdomain":"wallpaper-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"container/index": 0,
/******/ 			"container/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["container/style-index"], () => (__webpack_require__("./src/container/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map