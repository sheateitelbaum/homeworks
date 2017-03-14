<?php
$files = array_slice(scandir('parts'),2);
echo json_encode($files);
?>