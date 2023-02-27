<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
$a = 1;
$b = 3;
include 'connect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":
        $path = $_SERVER['REQUEST_URI'];
        //check for url to perform different requests
        if ($path == '/api/phones') {
            $sql = "SELECT * FROM phones";

            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $docs = $stmt->fetchAll(PDO::FETCH_ASSOC);


            echo json_encode($docs);
        }

        if ($path == '/api/books') {
            $sql = "SELECT * FROM notebooks";

            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $docs = $stmt->fetchAll(PDO::FETCH_ASSOC);


            echo json_encode($docs);
        }

        break;
    
    case "POST":
        $path = $_SERVER['REQUEST_URI'];
        if ($path == '/api/appointmentsave'){

            
        }

        if ($path == '/api/auth') {
            $user = json_decode( file_get_contents('php://input') );
            $sql = "SELECT * FROM `users` WHERE `login` like ? and `pass` like ?";
            $stmt = $conn -> prepare($sql);
            $stmt-> execute(array($user->login,md5($user->pass)));
            $lines = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $count = count($lines);
            if ($count>0){
                $response = ['status' => 1, 'message' => 'Authorized'];
            }
            else{
                break;
            }
            echo json_encode($response);
            break;
        }

        if ($path == '/api/pay') {
           $sql =" INSERT INTO checks (note_id, phone_id) VALUES ($a,$b)";

           $stmt = $conn->prepare($sql);
           $stmt->execute();


        }

       


        // if ($stmt->execute(array("$user->login","md5($user->pass)"))) {
        //     $response = ['status' => 1, 'message' => 'Authorized'];
        // } else {
        //     $response = ['status' => 0, 'message' => 'Failed to Authorize'];
        // }
        // echo json_encode($response);
        // break;
}