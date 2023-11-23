<?php
/**
 * Plugin Name:       Wallpaper Block (Alpha Release)
 * Description:       The block provides interactive falling snow effect.
 * Requires at least: 6.4
 * Requires PHP:      7.4
 * Version:           0.1.0-alpha
 * Author:            Taras Dashkevych
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wallpaper-block
 *
 * @package           wallpaper-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function wallpaper_block_wallpaper_block_block_init() {
	// Register Wallpaper (container) block.
	register_block_type(
		__DIR__ . '/build/container',
		array(
			'render_callback' => 'wallpaper_block_render_container',
		)
	);

	// Register Holiday Snow (wallpaper) block.
	register_block_type(
		__DIR__ . '/build/holiday-snow',
		array(
			'render_callback' => 'wallpaper_block_render_holiday_snow',
		)
	);
}
add_action( 'init', 'wallpaper_block_wallpaper_block_block_init' );

/**
 * Renders the `wallpaper/container` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Return the post comment's date.
 */
function wallpaper_block_render_container( $attributes, $content, $block ) {
	$style_attributes = array();

	// Check if minHeight is set and add it to the style attributes.
	if ( isset( $attributes['minHeight'] ) && $attributes['minHeight'] ) {
		$min_height_unit           = isset( $attributes['minHeightUnit'] ) ? $attributes['minHeightUnit'] : 'px';
		$style_attributes['style'] = 'min-height:' . esc_attr( $attributes['minHeight'] ) . $min_height_unit . ';';
	}

	// Prepare wrapper attributes with additional style attributes.
	$wrapper_attributes = get_block_wrapper_attributes( $style_attributes );

	// Return block content with wrapper attributes.
	return sprintf(
		'<div %1$s>%2$s</div>',
		$wrapper_attributes,
		$content
	);
}

/**
 * Renders the `wallpaper/holiday-snow` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Return the post comment's date.
 */
function wallpaper_block_render_holiday_snow( $attributes, $content, $block ) {
	$escaped_data_attributes = array();

	// List of attribute keys to add to the wallpaper-canvas div.
	$allowed_attributes = array( 'snowColorValue' );

	// Prepare additional data attributes based on the block's attributes.
	foreach ( $attributes as $key => $value ) {
		if ( in_array( $key, $allowed_attributes, true ) ) {
			if ( is_bool( $value ) ) {
				$value = $value ? 'true' : 'false';
			}
			if ( ! is_scalar( $value ) ) {
				$value = wp_json_encode( $value );
			}
			$escaped_data_attributes[] = 'data-' . esc_attr( strtolower( preg_replace( '/(?<!\ )[A-Z]/', '-$0', $key ) ) ) . '="' . esc_attr( $value ) . '"';
		}
	}

	// Insert the data attributes into the wallpaper-canvas div.
	if ( ! empty( $escaped_data_attributes ) ) {
		$content = preg_replace( '/<div class="wallpaper-canvas"/', '<div class="wallpaper-canvas" ' . implode( ' ', $escaped_data_attributes ), $content );
	}

	return $content;
}
