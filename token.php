<?php
	class Token {
		public static function generate($session_id){
			$token = md5($session_id);
			return $token;
		}

		public static function check($token){
            if(isset($_COOKIE['token']) && $token === $_COOKIE['token']) {
                return true;
            }
			else{
				return false;
			}
		}
	}
?>