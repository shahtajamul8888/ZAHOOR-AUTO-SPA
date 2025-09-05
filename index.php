<?php
header("Content-Type: application/json");
$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST' && strpos($_SERVER['REQUEST_URI'], '/book') !== false) {
    echo json_encode(["status" => "success", "message" => "Booking confirmed!"]);
} elseif ($method === 'POST' && strpos($_SERVER['REQUEST_URI'], '/pay') !== false) {
    echo json_encode(["status" => "success", "message" => "Payment updated!"]);
} elseif ($method === 'GET' && strpos($_SERVER['REQUEST_URI'], '/bookings') !== false) {
    echo json_encode([]);
} else {
    echo json_encode(["message" => "Zahoor Auto Spa API (PHP)"]);
}
?>