<?php


/**
 * Remove all default WP template redirects/lookups.
 */
remove_action ("template_redirect", "redirect_canonical");

/**
 * Redirect all requests to `./index.php` so the Vue app
 * is loaded and 404s aren't thrown.
 */
add_action ("init", function () {
  add_rewrite_rule("^/(.+)/?", "index.php", "top");
});

/**
 * Create wpapi options in header.
 */
add_action ("wp_head", function () {
  $homeUrl = get_home_url();
  $wue = [
    "baseUrl" => $homeUrl,
    "basePath" => parse_url($homeUrl)["path"],
    "wpapi" => [
      "endpoint" => get_rest_url()
    ]
  ];

  if (is_user_logged_in()) {
    $user = wp_get_current_user();
    $wue["wpapi"]["username"] = $user->user_login;
    $wue["wpapi"]["password"] = $user->user_pass;
  }

  $wue = json_encode($wue);
  echo "<script>window.wue = $wue</script>";
});

/**
 * Load wue bundle scripts.
 */
add_action ("wp_enqueue_scripts", function () {
  $scriptPath = get_stylesheet_directory() . "/dist/app.bundle.js";
  $scriptUrl = get_stylesheet_directory_uri() . "/dist/app.bundle.js";
  if (file_exists($scriptPath)) {
    wp_enqueue_script(
      "wue-app",
      $scriptUrl,
      [],
      filemtime($scriptPath),
      true
    );
  }
});