<?php


/**
 * To have better experience in development mode, when template activate
 * or deactivate, this file stores some necessary server side data into
 * a file for webpack.
 * 
 * So it's only required in development mode.
 */
if (!WUE_DEV) {
  return null;
}

/**
 * Triggered on the request immediately following
 * a theme activation.
 */
add_action ("after_switch_theme", function () {
  $data = [
    "activatedAt" => time(),
    "baseUrl" => get_home_url(),
    "publicPath" => get_template_directory_uri() . "/dist"
  ];

  file_put_contents(
    WUE_PATH . "/wue.meta.json",
    json_encode($data, JSON_PRETTY_PRINT)
  );
});

/**
 * Triggered on the request immediately following
 * a theme deactivation.
 */
add_action ("switch_theme", function () {
  $data = [
    "deactivatedAt" => time()
  ];

  file_put_contents(
    WUE_PATH . "/wue.meta.json",
    json_encode($data, JSON_PRETTY_PRINT)
  );
});