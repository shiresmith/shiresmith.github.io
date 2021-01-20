<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
 

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'nancyblog');

/** MySQL database username */
define('DB_USER', 'nancysmithwp');

/** MySQL database password */
define('DB_PASSWORD', 'Apakka1234');

/** MySQL hostname */
define('DB_HOST', 'mysql15.hostek.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'pE5-n[DLk:?QqQSjE,8s?Gp0-F@S6UjNMKZqur2H$pz@ixVP`-@<hpDPB_iHe0):');
define('SECURE_AUTH_KEY',  'rPaRF9Y5*Udc.L-Ge~T=g3Wy A8,%;}qurS~xvcI[10otQMB`Qu%ymW(^Q5#^b_g');
define('LOGGED_IN_KEY',    'Dv2P]j$=(qWKqvbxj(M,yYUM.N6h[9$`hE*|TNcj`oHmdGPuBJh$RN8qnU|5z-g(');
define('NONCE_KEY',        'q)&C]w_U}wLe5#x}4mtA{&3|W0?iJh0dIm dL@l%6iXy+-=NXY3JjKU4#1a]*H5f');
define('AUTH_SALT',        'Dy`f>aD7-F51(VN86Dg9>z4;iP -3xL$ir?mo`et-*-D/|U!QM/&=)Kk|{1I!_2v');
define('SECURE_AUTH_SALT', 'aDa*(PY%I[R/`4{+#;oprR23p|jgD+<8[j(zG]+@)Bmo_9gRWHR##A/j_W+JkZD+');
define('LOGGED_IN_SALT',   '%b+]MT;KM)`+0o&y!+OY,mG+At-|Y#e4UYtVcF:J*&..`c/I99}Qa*B{Zb8.|*Qp');
define('NONCE_SALT',       'bO1p(G*WiSk%hRRIYlZ3Wd,~:yiq$A&lF@N`||*+)}l+VL}BxiGm,O/&:^,/Pk*i');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
 
$table_prefix  = 'nts_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
