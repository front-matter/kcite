<?php
/**
 * Admin interface for Kcite Plugin
 * 
 * Compatible with WordPress 6.8+ and PHP 8.4+
 * 
 * @package Kcite
 * @version 1.7.80
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/*
 * The contents of this file are subject to the GPL License, Version 3.0.
 *
 * Copyright (C) 2013, Phillip Lord, Newcastle University
 * Copyright (C) 2025, Front Matter
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Admin class for Kcite plugin settings
 */
class Kcite_Admin {
    
    /**
     * Constructor - Initialize admin hooks
     */
    public function __construct() {
        add_action('admin_menu', array($this, 'admin_page_init'));
    }

    /**
     * Initialize admin page
     */
    public function admin_page_init(): void {
        add_options_page(
            'Kcite',
            'Kcite',
            'manage_options', 
            'kcite',
            array($this, 'plugin_options_menu')
        );
    }

    /**
     * Render the plugin options menu
     */
    public function plugin_options_menu(): void {
        if (!current_user_can('manage_options')) {
            wp_die(__('You do not have sufficient permissions to access this page.'));
        }

        $nonce = wp_nonce_field(
            'kcite_citation_admin_save_action',
            'kcite_citation_admin_save_field',
            true, 
            false
        );
        
        $this->table_head($nonce);

        // Safe POST data handling
        $is_post = ($_SERVER['REQUEST_METHOD'] ?? '') === 'POST';
        $nonce_valid = false;
        
        if ($is_post && isset($_POST['kcite_citation_admin_save_field'])) {
            $nonce_field = sanitize_text_field(wp_unslash($_POST['kcite_citation_admin_save_field']));
            $nonce_valid = wp_verify_nonce($nonce_field, 'kcite_citation_admin_save_action');
        }
        
        if ($nonce_valid) {
            echo '<div class="notice notice-success"><p>' . esc_html__('Options Updated', 'kcite') . '</p></div>';
            $this->admin_save();
        }

        $client_docs = esc_html__(
            'Rendering on the browser allows the references to be loaded asynchronously. ' .
            'However, the browser must be Javascript enabled. Kcite also contains an internal ' .
            'server-side renderer which it can use. This renderer is automatically used ' .
            'where the client in newfeeds such as RSS automatically.',
            'kcite'
        );

        $client_render_selected = get_option('kcite_citation_render_client') ? 'checked="checked"' : '';

        $this->admin_table_row(
            __('Render on client', 'kcite'),
            $client_docs,
            sprintf(
                '<input type="checkbox" name="kcite_citation_render_client" value="1" %s />',
                $client_render_selected
            )
        );

        $wait_docs = esc_html__(
            'For how long should kcite attempt to gather bibliographic information before ' .
            'timing out. If you are using client side rendering, this will not slow page ' .
            'delivery time. If you are using server side rendering it may.',
            'kcite'
        );

        $timeout = (int) get_option('kcite_citation_timeout', 60);
        $this->admin_table_row(
            __('Reference Timeout', 'kcite'),
            $wait_docs,
            sprintf(
                '<input type="number" name="kcite_citation_timeout" value="%d" min="1" max="300" />',
                $timeout
            )
        );

        $fallback_identifier = get_option('kcite_fallback_identifier', 'doi');
        $options = array(
            'doi' => __('DOI', 'kcite'),
            'pubmed' => __('PubMed', 'kcite')
        );
        
        $select_html = '<select name="kcite_fallback_identifier">';
        foreach ($options as $value => $label) {
            $selected = selected($fallback_identifier, $value, false);
            $select_html .= sprintf(
                '<option value="%s" %s>%s</option>',
                esc_attr($value),
                $selected,
                esc_html($label)
            );
        }
        $select_html .= '</select>';

        $this->admin_table_row(
            __('Fallback Identifier Type', 'kcite'),
            esc_html__(
                'If it is not possible to determine in any other way, how should ' .
                'an identifier be interpreted. This should be considered a legacy ' .
                'option, and it is better not to depend on it.',
                'kcite'
            ),
            $select_html
        );

        echo '<tr><td><strong>' . esc_html__('Debug Options', 'kcite') . '</strong></td></tr>';
        
        $this->admin_table_row(
            __('Invalidate Cache', 'kcite'),
            esc_html__('This is not normally necessary, as Kcite reloads references periodically.', 'kcite'),
            '<input type="checkbox" name="kcite_invalidate" value="1" />'
        );

        $cache_references = get_option('kcite_cache_references') ? 'checked="checked"' : '';
                $this->admin_table_row(
            __('Cache References', 'kcite'),
            esc_html__(
                'Cache references to improve performance. ' .
                'Deselect for debugging purposes. This will have a significant impact on ' .
                'performance where you have many references',
                'kcite'
            ),
            sprintf(
                '<input type="checkbox" name="kcite_cache_references" value="1" %s />',
                $cache_references
            )
        );

        $this->table_foot();
    }

    /**
     * Render table header
     */
    public function table_head(string $nonce): void {
        $title = esc_html__('Kcite by Kblog', 'kcite');
        $description = esc_html__(
            'The defaults for these options should in most cases work perfectly well, and not need alteration.',
            'kcite'
        );
        
        echo <<<EOT
<div class="wrap">
<h1>{$title}</h1>
<p>{$description}</p>
<form id="kcite_citation_admin" name="kcite_citation_admin" action="" method="post">
{$nonce}
<table class="form-table">
EOT;
    }

    /**
     * Render table footer
     */
    public function table_foot(): void {
        $submit_text = esc_attr__('Save Changes', 'kcite');
        echo <<<EOT
</table>
<p class="submit">
<input type="submit" name="submit" id="submit" class="button button-primary" value="{$submit_text}" />
</p>
</form>
</div>
EOT;
    }

    /**
     * Render admin table row
     */
    public function admin_table_row(string $head, string $comment, string $input): void {
        $head_escaped = esc_html($head);
        $comment_escaped = esc_html($comment);
        
        echo <<<EOT
<tr>
<th scope="row">{$head_escaped}</th>
<td>
{$input}
<p class="description">{$comment_escaped}</p>
</td>
</tr>
EOT;
    }


    /**
     * Save admin options
     */
    public function admin_save(): void {
        // Safe boolean storage with explicit type casting
        update_option('kcite_citation_render_client', isset($_POST['kcite_citation_render_client']));

        if (isset($_POST['kcite_citation_timeout'])) {
            $timeout = (int) sanitize_text_field(wp_unslash($_POST['kcite_citation_timeout']));
            if ($timeout > 0 && $timeout <= 300) {
                update_option('kcite_citation_timeout', $timeout);
            }
        }

        if (isset($_POST['kcite_fallback_identifier'])) {
            $identifier = sanitize_text_field(wp_unslash($_POST['kcite_fallback_identifier']));
            $allowed_identifiers = array('doi', 'pubmed');
            if (in_array($identifier, $allowed_identifiers, true)) {
                update_option('kcite_fallback_identifier', $identifier);
            }
        }

        if (isset($_POST['kcite_invalidate'])) {
            echo '<div class="notice notice-info"><p>' . esc_html__('Cache Invalidated', 'kcite') . '</p></div>';
            update_option('kcite_user_cache_version', time());
        }

        update_option('kcite_cache_references', isset($_POST['kcite_cache_references']));

        // Save CSL settings
        $this->save_csl_settings();
    }
}


/**
 * Initialize admin functionality
 */
function kcite_admin_init(): void {
    global $kcite_admin;
    $kcite_admin = new Kcite_Admin();
}

// Initialize admin only in admin area
if (is_admin()) {
    kcite_admin_init();
}



?>
