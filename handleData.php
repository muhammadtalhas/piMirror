<html>
<body>
<!-- For prototype, everything is requred TODO fix this mess-->
Welcome <?php echo $_POST["first_name"]; ?><br>
Your email address is: <?php echo $_POST["IMEI"]; ?>

<?php print_r($_POST);

$obj = new stdClass();
$obj->first_name = $_POST["first_name"];
$obj->last_name= $_POST["last_name"];

$settings_array = [];

$compliments_obj = new stdClass();

/*
$morning_array = explode("\n", $_POST["morningComp"]);
$afternoon_array = explode("\n", $_POST["afternoonComp"]);
$evening_array = explode("\n", $_POST["eveningComp"]);
*/

$morning_array = preg_split( "/\n|\r\n?/", $_POST["morningComp"] );
$afternoon_array = preg_split( "/\n|\r\n?/", $_POST["afternoonComp"] );
$evening_array = preg_split( "/\n|\r\n?/", $_POST["eveningComp"] );

$compliments_obj->morning = $morning_array;
$compliments_obj->afternoon = $afternoon_array;
$compliments_obj->evening = $evening_array;

$compliments_obj_encode = new stdClass();
$compliments_obj_encode->compliments = $compliments_obj;
$settings_array[] = $compliments_obj_encode;

$destinations_obj = new stdClass();
$destinations_obj_encode = new stdClass();

    for ($i = 0; $i < count($_POST["destinations"]); $i++) {
        $current_data_array = $_POST["destinations"][$i];
        $location_name = $current_data_array["name"];
        $location_address = $current_data_array["address"];
        $destinations_obj->$location_name = $location_address;
    }
$destinations_obj_encode->destinations = $destinations_obj;

$avoid_array=[];
if(isset($_POST["avoid_highways"]) && $_POST["avoid_highways"] == 'highways') 
{
    $avoid_array[] = "highways";
}
if(isset($_POST["avoid_tolls"]) && $_POST["avoid_tolls"] == 'tolls') 
{
    $avoid_array[] = "tolls";
}
$destinations_obj_encode->avoid = $avoid_array;


$destinations_obj_encode->method= $_POST["method"];

$settings_array[] = $destinations_obj_encode;

$ICAL_obj = new stdClass();
$ICAL_obj_encode = new stdClass();
$ICAL_obj->ical= $_POST["ICAL"];

$ICAL_obj_encode->googleCalendar = $ICAL_obj;
$settings_array[] = $ICAL_obj_encode;

$obj->settings = $settings_array;
var_dump($obj);
$json = json_encode( $obj );
echo $json;

$json_extension = '.json';
$file_name = $_POST["IMEI"].$json_extension;

$settings_file = fopen("userSettings/".$file_name, "w") or die("Unable to create file!");
fwrite($settings_file, $json);

?>



</body>
</html>